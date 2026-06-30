"use client";

import React from "react";
import Link from "next/link";
import { Shield, Database, Cpu, Terminal, GitBranch, ArrowUpRight } from "lucide-react";
import ScrollReveal, { RevealItem } from "./ui/ScrollReveal";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-epic-bg relative border-t border-epic-elevated">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-16">
          <span className="font-mono text-[10px] tracking-widest uppercase text-epic-accent mb-3 inline-block">
            Product Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-epic-text-primary tracking-tight">
            Designed for Protocol Security
          </h2>
          <p className="text-sm text-epic-text-secondary mt-3 leading-relaxed">
            Technical readiness checks targeting the specific structures that trigger Solana program deployment failures.
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <ScrollReveal staggerChildren={true} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Upgrade Intelligence (Hero Col-span 2) */}
          <RevealItem className="h-full lg:col-span-2">
            <div className="p-6 sm:p-8 rounded-xl border border-epic-border bg-epic-surface hover:border-epic-brand/20 transition-all duration-300 flex flex-col h-full group">
              <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-6 w-full mb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded border border-epic-border bg-epic-bg flex items-center justify-center text-epic-brand transition-colors">
                      <Cpu className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-epic-text-primary group-hover:text-epic-brand transition-colors">
                      Upgrade Intelligence
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-epic-text-secondary leading-relaxed max-w-md">
                    Simulated against mainnet state, before release.
                  </p>
                </div>
                
                {/* Visual Stat Block */}
                <div className="flex flex-col items-start gap-1 justify-center bg-epic-bg border border-epic-border rounded p-4 font-mono select-none shrink-0 w-full md:w-36 h-20">
                  <span className="text-[8px] uppercase tracking-wider text-epic-text-secondary">Accuracy</span>
                  <span className="text-xl font-bold text-epic-brand">100%</span>
                  <span className="text-[8px] text-epic-text-secondary/50">Pre-flight sandbox</span>
                </div>
              </div>

              <div className="font-mono text-[9px] text-epic-text-secondary/30 mt-auto border-t border-epic-elevated pt-3 flex justify-between items-center select-none w-full">
                <span>CHECK_ID: EPIC_CAP_01</span>
                <Link href="/docs/upgrade-intelligence" className="text-epic-accent hover:underline flex items-center gap-0.5">
                  Technical docs <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </RevealItem>

          {/* Card 2: Account Layout Analysis */}
          <RevealItem className="h-full lg:col-span-1">
            <div className="p-6 sm:p-8 rounded-xl border border-epic-border bg-epic-surface hover:border-epic-brand/20 transition-all duration-300 flex flex-col h-full group">
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-9 h-9 rounded border border-epic-border bg-epic-bg flex items-center justify-center text-epic-brand transition-colors">
                    <Database className="w-4.5 h-4.5" />
                  </div>
                  <Link href="/docs/upgrade-intelligence" className="text-epic-text-secondary hover:text-epic-accent p-1.5 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                <h3 className="text-lg font-sans font-bold text-epic-text-primary mb-2 group-hover:text-epic-brand transition-colors">
                  Account Layout Analysis
                </h3>
                <p className="text-xs text-epic-text-secondary leading-relaxed">
                  Catches struct drift before clients break.
                </p>
              </div>
              <div className="font-mono text-[9px] text-epic-text-secondary/30 mt-auto border-t border-epic-elevated pt-3 select-none w-full">
                <span>CHECK_ID: EPIC_CAP_02</span>
              </div>
            </div>
          </RevealItem>

          {/* Card 3: Security Audits */}
          <RevealItem className="h-full lg:col-span-1">
            <div className="p-6 sm:p-8 rounded-xl border border-epic-border bg-epic-surface hover:border-epic-brand/20 transition-all duration-300 flex flex-col h-full group">
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-9 h-9 rounded border border-epic-border bg-epic-bg flex items-center justify-center text-epic-brand transition-colors">
                    <Shield className="w-4.5 h-4.5" />
                  </div>
                  <Link href="/rules" className="text-epic-text-secondary hover:text-epic-accent p-1.5 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                <h3 className="text-lg font-sans font-bold text-epic-text-primary mb-2 group-hover:text-epic-brand transition-colors">
                  Security Audits
                </h3>
                <p className="text-xs text-epic-text-secondary leading-relaxed">
                  Binary scan against the rule set.
                </p>
              </div>
              <div className="font-mono text-[9px] text-epic-text-secondary/30 mt-auto border-t border-epic-elevated pt-3 select-none w-full">
                <span>CHECK_ID: EPIC_CAP_03</span>
              </div>
            </div>
          </RevealItem>

          {/* Card 4: GitHub Actions Integration (Hero Col-span 2) */}
          <RevealItem className="h-full lg:col-span-2">
            <div className="p-6 sm:p-8 rounded-xl border border-epic-border bg-epic-surface hover:border-epic-brand/20 transition-all duration-300 flex flex-col h-full group">
              <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-6 w-full mb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded border border-epic-border bg-epic-bg flex items-center justify-center text-epic-brand transition-colors">
                      <GitBranch className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-epic-text-primary group-hover:text-epic-brand transition-colors">
                      GitHub Actions PR Gate
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-epic-text-secondary leading-relaxed max-w-md">
                    Layout shift, caught at the PR.
                  </p>
                </div>
                
                {/* Visual GitHub Comment Block */}
                <div className="bg-[#080B0F] border border-epic-brand/8 rounded p-3 text-[10px] font-mono select-none shrink-0 w-full md:w-48 h-20 leading-normal space-y-0.5">
                  <div className="flex items-center gap-1.5 border-b border-epic-brand/8 pb-1 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[#F5EFE6] font-bold">epic-bot</span>
                  </div>
                  <div className="text-emerald-400 font-bold text-[9px]">All 5 rules passed</div>
                </div>
              </div>

              <div className="font-mono text-[9px] text-epic-text-secondary/30 mt-auto border-t border-epic-elevated pt-3 flex justify-between items-center select-none w-full">
                <span>CHECK_ID: EPIC_CAP_04</span>
                <Link href="/docs/github-action" className="text-epic-accent hover:underline flex items-center gap-0.5">
                  Technical docs <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </RevealItem>

          {/* Card 5: Native CLI (Wide Hero Col-span 3) */}
          <RevealItem className="h-full lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-xl border border-epic-border bg-epic-surface hover:border-epic-brand/20 transition-all duration-300 flex flex-col h-full group">
              <div className="flex-grow flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 w-full mb-6">
                <div className="space-y-3 max-w-md">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded border border-epic-border bg-epic-bg flex items-center justify-center text-epic-brand transition-colors">
                      <Terminal className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-lg font-sans font-bold text-epic-text-primary group-hover:text-epic-brand transition-colors">
                      Native CLI
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-epic-text-secondary leading-relaxed">
                    Runs inside your local build.
                  </p>
                </div>
                
                {/* Mini Terminal Visual */}
                <div className="bg-[#080B0F] border border-epic-brand/8 rounded-lg overflow-hidden text-[10px] font-mono select-none w-full lg:max-w-xs shadow-lg shrink-0 h-20">
                  <div className="bg-[#171C23] border-b border-epic-brand/8 px-3 py-1 flex items-center justify-between text-[#A9B1BC]">
                    <span>epic check</span>
                    <span className="text-[8px] text-epic-brand">v0.2.0-beta.0</span>
                  </div>
                  <div className="p-2 space-y-0.5 text-[#F5EFE6] leading-relaxed text-[9px]">
                    <div><span className="text-epic-accent">$</span> epic check v1.so v2.so</div>
                    <div className="text-emerald-400 font-bold">[EPIC] Success: Layout aligned.</div>
                  </div>
                </div>
              </div>

              <div className="font-mono text-[9px] text-epic-text-secondary/30 mt-auto border-t border-epic-elevated pt-3 flex justify-between items-center select-none w-full">
                <span>CHECK_ID: EPIC_CAP_05</span>
                <Link href="/docs/cli-reference" className="text-epic-accent hover:underline flex items-center gap-0.5">
                  Technical docs <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </RevealItem>

        </ScrollReveal>

      </div>
    </section>
  );
}
