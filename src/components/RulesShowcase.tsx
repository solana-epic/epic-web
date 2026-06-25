"use client";

import React from "react";
import Link from "next/link";
import { rules } from "@/data/rules";
import { Shield, ArrowRight } from "lucide-react";
import ScrollReveal, { RevealItem } from "./ui/ScrollReveal";

export default function RulesShowcase() {
  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case "CRITICAL":
        return "text-red-400 border-red-500/25 bg-red-950/20";
      case "HIGH":
        return "text-epic-brand border-epic-brand/25 bg-epic-brand/5";
      default:
        return "text-amber-400 border-amber-500/25 bg-amber-950/5";
    }
  };

  return (
    <section id="rules" className="py-24 bg-epic-bg relative border-t border-epic-elevated">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-16">
          <p className="font-mono text-[10px] tracking-widest uppercase text-epic-accent mb-3">
            Security Rules Library
          </p>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-epic-text-primary tracking-tight">
            EPIC Verification Rules
          </h2>
          <p className="text-sm text-epic-text-secondary mt-3 leading-relaxed">
            Active rules verifying upgrade readiness.
          </p>
        </ScrollReveal>

        {/* Rules Grid */}
        <ScrollReveal staggerChildren={true} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {rules.map((rule) => (
            <RevealItem key={rule.id} className="h-full">
              <div
                className="p-6 rounded-xl border border-epic-border bg-epic-surface hover:border-epic-brand/20 transition-all duration-350 flex flex-col h-full group min-h-[200px]"
              >
                <div className="flex-grow">
                  {/* ID & Severity badges */}
                  <div className="flex items-center justify-between mb-4 select-none">
                    <span className="font-mono text-xs font-bold text-epic-brand uppercase tracking-wide">
                      {rule.id.toUpperCase()}
                    </span>
                    <span className={`font-mono text-[8px] tracking-widest uppercase px-2 py-0.5 rounded border ${getSeverityStyles(rule.severity)}`}>
                      {rule.severity}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-sans font-bold text-epic-text-primary mb-2 group-hover:text-epic-brand transition-colors duration-200">
                    {rule.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-epic-text-secondary leading-relaxed mb-6">
                    {rule.description}
                  </p>
                </div>

                {/* Action link */}
                <Link
                  href={`/rules/${rule.id}`}
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-epic-accent hover:text-epic-brand transition-colors mt-auto pt-4"
                >
                  View Rule Specs
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </RevealItem>
          ))}

          {/* Scale placeholder card to show it can grow */}
          <RevealItem className="h-full">
            <div className="p-6 rounded-xl border border-epic-border border-dashed bg-epic-surface/40 flex flex-col justify-center items-center text-center opacity-60 h-full min-h-[200px]">
              <Shield className="w-6 h-6 text-epic-text-secondary/30 mb-3" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-epic-text-secondary/50">
                EPIC-SEC-006 & More
              </span>
              <p className="text-[11px] text-epic-text-secondary/40 mt-1 max-w-[200px]">
                Rules database scales automatically as new threats are verified.
              </p>
            </div>
          </RevealItem>
        </ScrollReveal>

      </div>
    </section>
  );
}
