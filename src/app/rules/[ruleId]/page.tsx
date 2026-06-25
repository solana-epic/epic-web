import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { rules } from "@/data/rules";
import { notFound } from "next/navigation";
import { Shield, CheckCircle, XCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ ruleId: string }>;
}

export async function generateStaticParams() {
  return rules.map((rule) => ({
    ruleId: rule.id,
  }));
}

export default async function RulePage({ params }: PageProps) {
  const { ruleId } = await params;
  const rule = rules.find((r) => r.id === ruleId.toLowerCase());

  if (!rule) {
    notFound();
  }

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
    <div className="bg-epic-bg text-epic-text-primary min-h-screen font-sans flex flex-col justify-between">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-6 py-32 md:py-40 w-full">
        
        {/* Back Link */}
        <Link
          href="/rules"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-epic-text-secondary hover:text-epic-text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Rules Library
        </Link>

        {/* Rule Header */}
        <div className="border-b border-epic-elevated pb-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-epic-accent uppercase tracking-wide">
              {rule.id.toUpperCase()}
            </span>
            <span className={`font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 rounded border ${getSeverityStyles(rule.severity)}`}>
              {rule.severity}
            </span>
            <span className="font-mono text-[10px] text-epic-text-secondary bg-epic-surface border border-epic-pill-border px-2.5 py-0.5 rounded">
              Target: {rule.target}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-heading font-bold text-epic-text-primary tracking-tight">
            {rule.title}
          </h1>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          
          {/* Description */}
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-epic-brand mb-3">
              Description
            </h2>
            <p className="text-sm sm:text-base text-epic-text-secondary leading-relaxed">
              {rule.description}
            </p>
          </div>

          {/* Rationale */}
          <div className="p-6 rounded-lg border border-epic-border bg-epic-surface">
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-epic-brand mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-epic-accent" />
              Technical Rationale
            </h2>
            <p className="text-sm text-epic-text-secondary leading-relaxed">
              {rule.rationale}
            </p>
          </div>

          {/* Code Example (Only render if present - code elements remain dark) */}
          {rule.exampleBad && (
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-widest text-epic-brand mb-4">
                Code Assessment Examples
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Vulnerable Example */}
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-1.5 text-red-400 font-mono text-[9px] uppercase tracking-wider bg-red-950/20 border border-red-500/10 px-2 py-1 rounded w-fit">
                    <XCircle className="w-3.5 h-3.5 animate-pulse" /> Insecure Practice
                  </span>
                  <pre className="p-4 rounded border border-red-500/5 bg-[#11151B] font-mono text-[11px] text-[#A9B1BC] leading-relaxed overflow-x-auto min-h-[140px]">
                    <code>{rule.exampleBad}</code>
                  </pre>
                </div>

                {/* Secure Example */}
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[9px] uppercase tracking-wider bg-emerald-950/20 border border-emerald-500/10 px-2 py-1 rounded w-fit">
                    <CheckCircle className="w-3.5 h-3.5" /> Secure Resolution
                  </span>
                  <pre className="p-4 rounded border border-emerald-500/5 bg-[#11151B] font-mono text-[11px] text-[#F5EFE6] leading-relaxed overflow-x-auto min-h-[140px]">
                    <code>{rule.exampleGood}</code>
                  </pre>
                </div>

              </div>
            </div>
          )}

          {/* Related Docs */}
          {rule.relatedDocs && rule.relatedDocs.length > 0 && (
            <div className="border-t border-epic-elevated pt-8">
              <h2 className="font-mono text-[11px] uppercase tracking-widest text-epic-brand mb-3">
                Related Documentation
              </h2>
              <div className="flex flex-wrap gap-4">
                {rule.relatedDocs.map((doc) => (
                  <Link
                    key={doc.name}
                    href={doc.href}
                    className="font-sans text-xs text-epic-accent hover:underline flex items-center gap-1"
                  >
                    {doc.name} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

      </main>
      <Footer />
    </div>
  );
}
