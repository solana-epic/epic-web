"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { CodeBlock } from "./ui/CodeBlock";
import ScrollReveal, { RevealItem } from "./ui/ScrollReveal";

export default function GitHubAction() {
  const yamlCode = `name: EPIC Verification
on:
  pull_request:
    branches: [ main ]

jobs:
  epic-check:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Run EPIC CLI Gate
        uses: solana-epic/action@v1
        with:
          binary: target/deploy/vault.so
          expected-authority: \${{ secrets.MULTISIG_PDA }}`;

  return (
    <section id="github-action" className="py-24 bg-epic-bg relative border-t border-epic-elevated">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <ScrollReveal staggerChildren={true} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Info (Left) */}
          <RevealItem className="lg:col-span-6 space-y-6">
            <span className="font-mono text-[10px] tracking-widest uppercase text-epic-accent block">
              Continuous Integration
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-epic-text-primary tracking-tight leading-tight">
              GitHub Actions PR Gate
            </h2>
            
            <p className="text-sm sm:text-base text-epic-text-secondary leading-relaxed">
              Automate upgrade checks in pull request pipelines to intercept backwards-incompatible binaries.
            </p>

            <ul className="space-y-4 font-mono text-[11px] text-epic-text-secondary">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-epic-brand shrink-0 mt-0.5" />
                <div>
                  <strong className="text-epic-text-primary block">Layout Shift Interceptions</strong>
                  Verify structural alignment against live mainnet states.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-epic-brand shrink-0 mt-0.5" />
                <div>
                  <strong className="text-epic-text-primary block">Access Checks</strong>
                  Enforce deployment authority rules targeting governance multisigs.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-epic-brand shrink-0 mt-0.5" />
                <div>
                  <strong className="text-epic-text-primary block">Automated Feedback</strong>
                  Post layout schema reports directly to pull request comments.
                </div>
              </li>
            </ul>
          </RevealItem>

          {/* Code block (Right) */}
          <RevealItem className="lg:col-span-6">
            <span className="font-mono text-[9px] uppercase text-epic-text-secondary/50 block mb-2 px-1">
              Workflow Configuration: .github/workflows/epic-gate.yml
            </span>
            <CodeBlock 
              code={yamlCode} 
              language="yaml" 
              filename="epic-gate.yml" 
            />
          </RevealItem>

        </ScrollReveal>

      </div>
    </section>
  );
}
