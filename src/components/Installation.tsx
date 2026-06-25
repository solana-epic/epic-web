"use client";

import React, { useState } from "react";
import { Terminal as TermIcon, Copy, Check } from "lucide-react";
import ScrollReveal, { RevealItem } from "./ui/ScrollReveal";

export default function Installation() {
  const [copied, setCopied] = useState(false);
  const installCmd = "npm install -g @solana-epic/cli";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="installation" className="py-24 bg-epic-bg relative border-t border-epic-elevated">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
        
        <ScrollReveal staggerChildren={true}>
          {/* Section Header */}
          <RevealItem>
            <span className="font-mono text-[10px] tracking-widest uppercase text-epic-accent mb-4 inline-block">
              Getting Started CLI
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-epic-text-primary tracking-tight max-w-2xl mx-auto mb-6">
              Install EPIC Gateway
            </h2>
            <p className="text-sm text-epic-text-secondary max-w-xl mx-auto mb-10 leading-relaxed">
              Install the CLI globally to verify Rust build targets and anchor structures.
            </p>
          </RevealItem>

          {/* Global Installer Box */}
          <RevealItem>
            <div className="max-w-md mx-auto mb-12 p-2 rounded-lg border border-epic-border bg-epic-surface flex items-center justify-between gap-3 shadow-[0_4px_25px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-2.5 px-3 overflow-x-auto">
                <TermIcon className="w-4 h-4 text-epic-brand shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-epic-text-primary font-semibold tracking-wide whitespace-nowrap">
                  {installCmd}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center justify-center w-10 h-10 rounded border border-epic-border bg-epic-bg hover:bg-epic-surface hover:text-epic-text-primary text-epic-text-secondary transition-all duration-200 shrink-0 cursor-pointer"
                aria-label="Copy installation command"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </RevealItem>

          {/* First Run steps */}
          <RevealItem className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left items-stretch">
            <div className="p-6 rounded-lg border border-epic-border bg-epic-surface flex flex-col h-full">
              <div className="flex-grow">
                <span className="font-mono text-[9px] text-epic-brand uppercase tracking-wider block mb-2">
                  Step 01. Verify Installation
                </span>
                <h3 className="text-sm font-sans font-bold text-epic-text-primary mb-2">
                  Assert CLI version
                </h3>
                <p className="text-xs text-epic-text-secondary leading-relaxed mb-4">
                  Confirm that the shell resolves the binary gateway correctly.
                </p>
              </div>
              <pre className="p-3 rounded bg-[#080B0F] font-mono text-[10px] text-[#F5EFE6] border border-[#D6B98C]/8 mt-auto">
                <code>$ epic --version</code>
              </pre>
            </div>

            <div className="p-6 rounded-lg border border-epic-border bg-epic-surface flex flex-col h-full">
              <div className="flex-grow">
                <span className="font-mono text-[9px] text-epic-brand uppercase tracking-wider block mb-2">
                  Step 02. Audit Target Binary
                </span>
                <h3 className="text-sm font-sans font-bold text-epic-text-primary mb-2">
                  Run local safety scans
                </h3>
                <p className="text-xs text-epic-text-secondary leading-relaxed mb-4">
                  Audit compiled program binaries against target security rules.
                </p>
              </div>
              <pre className="p-3 rounded bg-[#080B0F] font-mono text-[10px] text-[#F5EFE6] border border-[#D6B98C]/8 mt-auto">
                <code>$ epic audit --binary target/deploy/my_program.so</code>
              </pre>
            </div>
          </RevealItem>
        </ScrollReveal>

      </div>
    </section>
  );
}
