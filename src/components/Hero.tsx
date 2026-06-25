"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal as TermIcon, Check, Copy } from "lucide-react";
import ScrollReveal, { RevealItem } from "./ui/ScrollReveal";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const installCmd = "npm install -g @solana-epic/cli";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-epic-bg">
      
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--epic-border)_1.5px,transparent_1.5px),linear-gradient(to_bottom,var(--epic-border)_1.5px,transparent_1.5px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-85 pointer-events-none" />

      {/* Masking overlay to block gridlines behind the text */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: "radial-gradient(circle at 50% 35%, var(--epic-bg) 0%, var(--epic-bg) 45%, transparent 75%)"
        }} 
      />

      {/* Subtle brand color glow element */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-epic-accent rounded-full blur-[180px] opacity-[0.04] pointer-events-none" />

      <ScrollReveal staggerChildren={true} className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center text-center relative z-10">
        
        {/* Shield badge */}
        <RevealItem>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-epic-pill-border bg-epic-surface text-epic-brand text-[10px] font-mono tracking-widest uppercase mb-8 select-none">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Security-First Gateway
          </div>
        </RevealItem>

        {/* Title */}
        <RevealItem>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-epic-text-primary max-w-4xl leading-[1.1] mb-6">
            Security-first upgrade intelligence <br className="hidden sm:inline" />
            for Solana programs.
          </h1>
        </RevealItem>

        {/* Subtitle */}
        <RevealItem>
          <p className="text-sm sm:text-base md:text-lg text-epic-text-secondary font-sans max-w-2xl leading-relaxed mb-10">
            Catch upgrade risk, security gaps, and layout drift before you deploy.
          </p>
        </RevealItem>

        {/* CTA Buttons */}
        <RevealItem>
          <div className="flex flex-col sm:flex-row gap-4 items-center mb-16 w-full sm:w-auto">
            <Link
              href="/#installation"
              className="w-full sm:w-auto text-center font-mono text-xs uppercase tracking-wider bg-epic-brand hover:bg-[#C8AA7A] text-[#080B0F] px-6 py-3.5 rounded transition-all duration-200"
            >
              Install EPIC
            </Link>
            <a
              href="https://github.com/solana-epic/epic"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider border border-epic-brand/15 bg-transparent text-epic-text-primary hover:bg-epic-surface hover:border-epic-brand/30 px-6 py-3.5 rounded transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-epic-text-secondary" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              View GitHub
            </a>
          </div>
        </RevealItem>

        {/* Technical Terminal Snippet (remains dark in light/dark mode) */}
        <RevealItem className="w-full max-w-3xl">
          <div className="w-full rounded-lg border border-[#D6B98C]/8 bg-[#11151B] overflow-hidden text-left shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#080B0F]/60 border-b border-[#D6B98C]/8">
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#A9B1BC]">
                <TermIcon className="w-3.5 h-3.5 text-[#D6B98C]" />
                epic@solana-upgrade: ~
              </div>
              <button
                onClick={handleCopy}
                className="p-1 rounded hover:bg-[#080B0F]/80 text-[#A9B1BC] hover:text-[#F5EFE6] transition-colors"
                title="Copy installation command"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <div className="p-5 font-mono text-[11px] sm:text-[12px] leading-relaxed text-[#F5EFE6] overflow-x-auto space-y-3 bg-[#080B0F]/95">
              <div>
                <span className="text-[#6F63FF]">$</span> {installCmd}
              </div>
              <div className="text-[#A9B1BC] opacity-50 font-sans text-[11px]">• Fetching package information... Installed.</div>
              <div>
                <span className="text-[#6F63FF]">$</span> epic audit --binary target/deploy/vault.so
              </div>
              <div className="text-[#A9B1BC]">
                [EPIC] Initializing Upgrade Readiness rules engine...<br />
                [EPIC] Running 5 active verification rules...<br />
                &nbsp;&nbsp;[EPIC-SEC-001] Size Boundary Check ............. <span className="text-emerald-400 font-bold">OK</span><br />
                &nbsp;&nbsp;[EPIC-SEC-002] Account Owner Constraint ........ <span className="text-emerald-400 font-bold">OK</span><br />
                &nbsp;&nbsp;[EPIC-SEC-003] Upgrade Authority Validation .... <span className="text-emerald-400 font-bold">OK</span><br />
                &nbsp;&nbsp;[EPIC-SEC-004] Struct Offset Alignment ......... <span className="text-emerald-400 font-bold">OK</span><br />
                &nbsp;&nbsp;[EPIC-SEC-005] Slot Constraints Validation ...... <span className="text-emerald-400 font-bold">OK</span><br />
                [EPIC] <span className="text-emerald-400 font-bold">SUCCESS</span>: All security and layout checks passed.
              </div>
            </div>
          </div>
        </RevealItem>

      </ScrollReveal>
    </section>
  );
}
