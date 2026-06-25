"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Copy, Check, Terminal as TermIcon } from "lucide-react";
import ScrollReveal, { RevealItem } from "./ui/ScrollReveal";
import { useReducedMotion } from "framer-motion";

type TerminalTab = "layout" | "realloc" | "audit";

export default function TerminalDemo() {
  const [activeTab, setActiveTab] = useState<TerminalTab>("layout");
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const getCommandLine = (tab: TerminalTab) => {
    switch (tab) {
      case "layout":
        return "epic check --compare target/deploy/vault_v1.so target/deploy/vault_v2.so";
      case "realloc":
        return "epic check --space target/deploy/vault_v2.so";
      case "audit":
        return "epic audit --binary target/deploy/vault_v2.so";
    }
  };

  const getCommandOutputs = (tab: TerminalTab): string[] => {
    switch (tab) {
      case "layout":
        return [
          "[EPIC] Loading local and mainnet program binaries...",
          "[EPIC] Parsing Anchor IDL and Rust structure offsets...",
          "[EPIC] \x1b[31mCRITICAL\x1b[39m: Struct `UserState` layout mismatch detected!",
          "       - Field `bump` shifted from offset 40 to 48",
          "       - Field `authority` shifted from offset 8 to 16",
          "       - New field `is_restricted` inserted at offset 8 (size 1)",
          "  \x1b[33mReason\x1b[39m: Inserting a field in the middle shifts all subsequent offsets.",
          "          This will cause deserialization failures on all active mainnet state.",
          "[EPIC] \x1b[31mERROR\x1b[39m: State layout is backwards-incompatible.",
          "[EPIC] \x1b[33mRecommendation\x1b[39m: Append new fields to the end of the struct, or use a layout gap padding.",
          "[EPIC] Status: \x1b[31mFAILED (Upgrade readiness blocked)\x1b[39m"
        ];
      case "realloc":
        return [
          "[EPIC] Analyzing account reallocation capacity...",
          "[EPIC] Found 2 instructions invoking Program Account reallocations.",
          "[EPIC] Checking: `realloc` size safety constraints...",
          "       - Instruction \x1b[32minitialize\x1b[39m: \x1b[32mOK\x1b[39m (Space: 120 bytes)",
          "       - Instruction \x1b[33mupdate_tiers\x1b[39m: \x1b[33mWARNING\x1b[39m (Size reallocated to 512 bytes)",
          "         \x1b[33mAlert\x1b[39m: Missing transaction-level constraints check for max size bounds.",
          "[EPIC] Status: \x1b[33mWARNING (Upgrade contains unconstrained realloc)\x1b[39m"
        ];
      case "audit":
        return [
          "[EPIC] Initializing Upgrade Readiness rules engine...",
          "[EPIC] Running 5 active verification rules...",
          "  [EPIC-SEC-001] State Size Boundary Check ............. \x1b[32mOK\x1b[39m",
          "  [EPIC-SEC-002] Account Owner Constraint .............. \x1b[32mOK\x1b[39m",
          "  [EPIC-SEC-003] Upgrade Authority Validation .......... \x1b[32mOK\x1b[39m",
          "  [EPIC-SEC-004] Struct Padding Offset Alignment ....... \x1b[32mOK\x1b[39m",
          "  [EPIC-SEC-005] Slot Constraints Validation ........... \x1b[32mOK\x1b[39m",
          "[EPIC] \x1b[32mSUCCESS\x1b[39m: All security and layout checks passed.",
          "[EPIC] Generated verification cryptographic proof: `target/epic/proof.json`",
          "[EPIC] Status: \x1b[32mAPPROVED (Deployment ready)\x1b[39m"
        ];
    }
  };

  // Scroll into view detection
  useEffect(() => {
    const currentRef = containerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenInView(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasBeenInView) return;

    if (prefersReducedMotion) {
      setTerminalLines(getCommandOutputs(activeTab));
      setIsTyping(false);
      return;
    }

    setIsTyping(true);
    setTerminalLines([]);
    
    const outputLines = getCommandOutputs(activeTab);
    let index = 0;
    
    const interval = setInterval(() => {
      if (index < outputLines.length) {
        const lineToAdd = outputLines[index];
        if (lineToAdd !== undefined) {
          setTerminalLines(prev => [...prev, lineToAdd]);
        }
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [activeTab, hasBeenInView, prefersReducedMotion]);

  const handleCommandClick = (tab: TerminalTab) => {
    setActiveTab(tab);
    setHasBeenInView(true);
  };

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(getCommandLine(activeTab));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatTerminalText = (text: string) => {
    if (!text) return "";
    if (text.includes("\x1b[31m")) {
      return text
        .replace(/\x1b\[31m/g, '<span class="text-red-400 font-bold">')
        .replace(/\x1b\[39m/g, '</span>');
    }
    if (text.includes("\x1b[32m")) {
      return text
        .replace(/\x1b\[32m/g, '<span class="text-emerald-400 font-bold">')
        .replace(/\x1b\[39m/g, '</span>');
    }
    if (text.includes("\x1b[33m")) {
      return text
        .replace(/\x1b\[33m/g, '<span class="text-[#D6B98C] font-bold">')
        .replace(/\x1b\[39m/g, '</span>');
    }
    return text;
  };

  return (
    <section id="cli-demo" className="py-24 bg-epic-bg relative border-t border-epic-elevated">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-16">
          <p className="font-mono text-[10px] tracking-widest uppercase text-epic-accent mb-3">
            CLI Reference Demo
          </p>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-epic-text-primary tracking-tight">
            Run Verification Locally
          </h2>
          <p className="text-sm text-epic-text-secondary mt-3 leading-relaxed">
            Run it before CI does.
          </p>
        </ScrollReveal>

        <ScrollReveal staggerChildren={true} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls (Left) */}
          <RevealItem className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-mono text-[9px] uppercase text-epic-text-secondary/50 tracking-wider px-1">
              Select CLI Command to Execute
            </span>
            
            <div className="p-1 rounded-lg bg-epic-surface border border-epic-border flex flex-col gap-1 w-full">
              <button
                onClick={() => handleCommandClick("layout")}
                className={`text-left px-5 py-4 rounded-md font-sans transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                  activeTab === "layout"
                    ? "bg-epic-brand/5 border-epic-brand/40 text-epic-text-primary"
                    : "border-transparent text-epic-text-secondary hover:text-epic-text-primary hover:bg-epic-brand/5 hover:border-epic-brand/10"
                }`}
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-epic-brand">
                    Struct Alignment
                  </span>
                  <span className="text-xs font-semibold">epic check --compare</span>
                </div>
                <Play className="w-3.5 h-3.5 text-epic-brand shrink-0" />
              </button>

              <button
                onClick={() => handleCommandClick("realloc")}
                className={`text-left px-5 py-4 rounded-md font-sans transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                  activeTab === "realloc"
                    ? "bg-epic-brand/5 border-epic-brand/40 text-epic-text-primary"
                    : "border-transparent text-epic-text-secondary hover:text-epic-text-primary hover:bg-epic-brand/5 hover:border-epic-brand/10"
                }`}
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-epic-brand">
                    Account Memory Bounds
                  </span>
                  <span className="text-xs font-semibold">epic check --space</span>
                </div>
                <Play className="w-3.5 h-3.5 text-epic-brand shrink-0" />
              </button>

              <button
                onClick={() => handleCommandClick("audit")}
                className={`text-left px-5 py-4 rounded-md font-sans transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                  activeTab === "audit"
                    ? "bg-epic-brand/5 border-epic-brand/40 text-epic-text-primary"
                    : "border-transparent text-epic-text-secondary hover:text-epic-text-primary hover:bg-epic-brand/5 hover:border-epic-brand/10"
                }`}
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-epic-brand">
                    Vulnerability Engine
                  </span>
                  <span className="text-xs font-semibold">epic audit --binary</span>
                </div>
                <Play className="w-3.5 h-3.5 text-epic-brand shrink-0" />
              </button>
            </div>
          </RevealItem>

          {/* Terminal (Right - stays dark) */}
          <RevealItem className="lg:col-span-8">
            <div ref={containerRef} className="rounded-lg border border-[#D6B98C]/8 bg-[#11151B] overflow-hidden shadow-2xl relative">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080B0F]/60 border-b border-[#D6B98C]/8">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/30" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#A9B1BC]">
                  <TermIcon className="w-3.5 h-3.5 text-[#D6B98C]" />
                  epic@solana-upgrade: ~
                </div>
                <button
                  onClick={handleCopyCommand}
                  className="p-1 rounded hover:bg-[#171C23] text-[#A9B1BC] hover:text-[#F5EFE6] transition-colors"
                  title="Copy command"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-[11px] sm:text-[12px] min-h-[340px] flex flex-col justify-between leading-relaxed text-[#F5EFE6] overflow-x-auto bg-[#080B0F]/95">
                <div>
                  {/* Command Row */}
                  <div className="flex items-center gap-2 text-[#A9B1BC] mb-5 border-b border-[#D6B98C]/8 pb-2">
                    <span className="text-[#D6B98C] font-bold select-none">$</span>
                    <span className="text-[#F5EFE6] font-semibold">{getCommandLine(activeTab)}</span>
                  </div>

                  {/* Output list */}
                  <div className="space-y-2 select-text">
                    {terminalLines.map((line, idx) => (
                      <div
                        key={idx}
                        className="whitespace-pre animate-in fade-in slide-in-from-top-1 duration-150"
                        dangerouslySetInnerHTML={{ __html: formatTerminalText(line) }}
                      />
                    ))}
                    {isTyping && (
                      <span className="inline-block w-1.5 h-3.5 bg-[#D6B98C] animate-pulse ml-0.5" />
                    )}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D6B98C]/8 text-[#A9B1BC]/45 text-[9px] flex items-center justify-between select-none">
                  <span>EPIC Upgrade Intelligence CLI v0.1.0</span>
                  <span>Solana Security Gateway</span>
                </div>
              </div>

            </div>
          </RevealItem>

        </ScrollReveal>

      </div>
    </section>
  );
}
