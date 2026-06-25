"use client";

import React from "react";
import { CheckCircle2, Circle, Clock } from "lucide-react";
import ScrollReveal, { RevealItem } from "./ui/ScrollReveal";

export default function Roadmap() {
  const milestones = [
    {
      phase: "Shipped",
      status: "released",
      icon: CheckCircle2,
      color: "text-emerald-400",
      items: [
        "Core compilation auditor package (@solana-epic/cli).",
        "Validation rules for EPIC-SEC-001 through 005.",
        "Reallocation memory bounds analyzer (epic check --space)."
      ]
    },
    {
      phase: "Active Staging",
      status: "beta",
      icon: Clock,
      color: "text-epic-accent",
      items: [
        "Pre-flight upgrade simulations on local mainnet forks.",
        "GitHub Actions pipeline validation and comment outputs.",
        "Deterministic upgrade readiness certificate generation."
      ]
    },
    {
      phase: "Planned Roadmap",
      status: "planned",
      icon: Circle,
      color: "text-epic-text-secondary/50",
      items: [
        "Squads multisig upgrade verification dashboard.",
        "Upgrade authority PDA lock constraints checks.",
        "Security rules extension covering rent-exemption logic."
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-epic-bg relative border-t border-epic-elevated">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-16">
          <p className="font-mono text-[10px] tracking-widest uppercase text-epic-accent mb-3">
            Milestones & Goals
          </p>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-epic-text-primary tracking-tight">
            Development Roadmap
          </h2>
          <p className="text-sm text-epic-text-secondary mt-3 leading-relaxed">
            Product release pipeline focused on building stable verification primitives.
          </p>
        </ScrollReveal>

        {/* Milestone Cards */}
        <ScrollReveal staggerChildren={true} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {milestones.map((milestone) => {
            const Icon = milestone.icon;
            return (
              <RevealItem key={milestone.phase} className="h-full">
                <div
                  className="p-6 sm:p-8 rounded-xl border border-epic-border bg-epic-surface flex flex-col hover:border-epic-brand/20 transition-all duration-300 h-full min-h-[300px]"
                >
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-6 border-b border-epic-elevated pb-4 select-none">
                      <span className="font-sans font-bold text-sm text-epic-text-primary">
                        {milestone.phase}
                      </span>
                      <Icon className={`w-4.5 h-4.5 ${milestone.color}`} />
                    </div>

                    <ul className="space-y-4">
                      {milestone.items.map((item, idx) => (
                        <li key={idx} className="text-xs text-epic-text-secondary leading-relaxed flex items-start gap-2">
                          <span className="text-epic-brand font-bold mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="font-mono text-[8px] tracking-widest uppercase text-epic-text-secondary/30 mt-auto pt-8">
                    STATUS: {milestone.status.toUpperCase()}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </ScrollReveal>

      </div>
    </section>
  );
}
