import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { changelogData } from "@/data/changelog";
import { Calendar, GitCommit } from "lucide-react";

export default function ChangelogPage() {
  return (
    <div className="bg-epic-bg text-epic-text-primary min-h-screen font-sans flex flex-col justify-between">
      <Header />
      
      <main className="flex-grow max-w-4xl mx-auto px-6 py-32 md:py-40 w-full">
        
        {/* Page Header */}
        <div className="border-b border-epic-elevated pb-8 mb-16">
          <span className="font-mono text-[10px] tracking-widest uppercase text-epic-accent mb-3 inline-block">
            Product Updates
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-epic-text-primary tracking-tight">
            Changelog
          </h1>
          <p className="text-sm text-epic-text-secondary mt-3 max-w-2xl leading-relaxed">
            Follow the latest releases, optimizations, and security rules added to the EPIC CLI and upgrade verification runtime engines.
          </p>
        </div>

        {/* Timeline Entries */}
        <div className="space-y-20 relative">
          
          {/* Central timeline line (desktop) */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-[1px] bg-epic-elevated" />

          {changelogData.map((entry) => (
            <div key={entry.version} className="relative flex flex-col md:flex-row gap-8 items-start">
              
              {/* Timeline marker node (desktop) */}
              <div className="hidden md:flex absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full border border-epic-accent bg-epic-bg items-center justify-center z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-epic-brand" />
              </div>

              {/* Version & Date Column */}
              <div className="md:w-1/4 pl-0 md:pl-16 flex flex-col gap-1.5 shrink-0 select-none">
                <span className="font-mono text-lg font-bold text-epic-brand flex items-center gap-2">
                  <GitCommit className="w-4 h-4 text-epic-accent md:hidden" />
                  {entry.version}
                </span>
                <span className="font-mono text-[10px] text-epic-text-secondary flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-epic-accent" />
                  {entry.date}
                </span>
              </div>

              {/* Changes Content Column */}
              <div className="flex-grow p-6 sm:p-8 rounded-lg border border-epic-border bg-epic-surface hover:border-epic-brand/20 transition-all duration-300">
                <p className="text-sm text-epic-text-primary leading-relaxed mb-6 font-medium">
                  {entry.description}
                </p>

                <div className="space-y-6">
                  {entry.changes.map((group) => (
                    <div key={group.category} className="space-y-2.5">
                      <span className={`font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 rounded border inline-block ${
                        group.category === "Added"
                          ? "text-emerald-400 border-emerald-500/15 bg-emerald-950/10"
                          : group.category === "Security"
                          ? "text-red-400 border-red-500/15 bg-red-950/10"
                          : group.category === "Improved"
                          ? "text-blue-400 border-blue-500/15 bg-blue-950/10"
                          : "text-amber-400 border-amber-500/15 bg-amber-950/10"
                      }`}>
                        {group.category}
                      </span>
                      
                      <ul className="space-y-2">
                        {group.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-xs text-epic-text-secondary flex items-start gap-2 leading-relaxed">
                            <span className="text-epic-accent font-bold select-none mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>

      </main>
      
      <Footer />
    </div>
  );
}
