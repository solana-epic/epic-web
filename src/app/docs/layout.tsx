"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DOCS_SIDEBAR_NAV as sidebarItems } from "@/data/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="bg-epic-bg text-epic-text-primary min-h-screen font-sans flex flex-col justify-between">
      <Header />
      
      <div className="flex-grow max-w-7xl mx-auto px-6 pt-32 pb-20 w-full flex flex-col lg:flex-row gap-12">
        {/* Sidebar Nav */}
        <aside className="lg:w-64 shrink-0 border-b lg:border-b-0 lg:border-r border-epic-elevated pb-8 lg:pb-0 lg:pr-8">
          <nav className="space-y-6">
            {sidebarItems.map((category) => (
              <div key={category.category} className="space-y-2.5">
                <span className="font-mono text-[9px] uppercase tracking-wider text-epic-brand font-bold">
                  {category.category}
                </span>
                <ul className="space-y-1 border-l border-epic-elevated ml-1">
                  {category.items.map((item) => {
                    const isActive = pathname === `/docs/${item.slug}` || (item.slug === "getting-started" && pathname === "/docs");
                    return (
                      <li key={item.slug}>
                        <Link
                          href={`/docs/${item.slug}`}
                          className={`font-sans text-xs block py-1.5 pl-3 -ml-px border-l transition-all duration-200 ${
                            isActive
                              ? "text-epic-accent border-epic-accent font-medium"
                              : "text-epic-text-secondary hover:text-epic-text-primary border-transparent hover:border-epic-text-secondary/20"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Docs Main Content Panel */}
        <div className="flex-grow min-w-0">
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
}
