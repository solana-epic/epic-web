"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { GLOBAL_NAV, SITE_LINKS } from "@/data/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const navItems = GLOBAL_NAV.map(item => ({
    ...item,
    activeMatch: pathname.startsWith(item.prefix)
  }));

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] left-1/2 -translate-x-1/2 ${
        scrolled
          ? "top-4 w-[calc(100%-2rem)] lg:w-fit bg-epic-elevated/60 backdrop-blur-xl border border-epic-pill-border rounded-full py-2.5 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          : "top-0 w-full max-w-7xl bg-transparent border-b border-transparent py-5 px-6 lg:px-8"
      }`}
    >
      <div className={`flex items-center w-full transition-all duration-500 ${scrolled ? 'justify-between lg:justify-center' : 'justify-between'} gap-4 lg:gap-8`}>
        
        <div className="flex justify-start shrink-0">
          <Link href="/" className="flex items-center gap-1.5 group transition-opacity duration-300 hover:opacity-80">
            <div className="flex items-center justify-center w-8 h-8 shrink-0">
              <Image 
                src="/Epic-logo.png" 
                alt="EPIC" 
                width={24}
                height={24}
                className="w-6 h-6 object-contain shrink-0" 
              />
            </div>
            <span className="font-brand font-bold text-sm tracking-widest text-epic-text-primary whitespace-nowrap">
              EPIC
            </span>
          </Link>
        </div>

        {/* Column 2: Navigation Tabs */}
        <nav className="hidden lg:flex items-center justify-center gap-8 shrink-0">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center h-8 font-mono text-[11px] uppercase tracking-wider whitespace-nowrap transition-colors duration-300 shrink-0 px-2 ${
                item.activeMatch
                  ? "text-epic-accent font-bold"
                  : "text-epic-text-secondary hover:text-epic-text-primary"
              }`}
            >
              <span className="inline-block transition-all duration-300 ease-out group-hover:tracking-[0.15em]">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Column 3: Desktop CTAs */}
        <div className="hidden lg:flex items-center justify-end gap-3 shrink-0">
          <div
            className="flex items-center justify-center h-8 font-mono text-[10px] text-epic-text-secondary bg-epic-surface border border-epic-pill-border px-3 rounded whitespace-nowrap shrink-0 min-w-max select-none"
          >
            v0.2.0-beta.0
          </div>
          <a
            href={SITE_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-8 w-8 text-epic-text-secondary hover:text-epic-text-primary transition-colors shrink-0"
            aria-label="GitHub"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center h-8 w-8 text-epic-text-secondary hover:text-epic-text-primary transition-colors cursor-pointer shrink-0"
            aria-label="Toggle Theme"
          >
            {mounted && resolvedTheme === "light" ? (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          <Link
            href={SITE_LINKS.install}
            className="flex items-center justify-center h-8 font-mono text-[11px] uppercase tracking-wider bg-epic-brand hover:bg-[#C8AA7A] text-[#080B0F] px-4 rounded transition-all duration-200 whitespace-nowrap shrink-0"
          >
            Install
          </Link>
        </div>

        {/* Mobile menu trigger button wrapper */}
        <div className="flex lg:hidden justify-end shrink-0">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center h-8 w-8 text-epic-text-secondary hover:text-epic-text-primary transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar/Nav overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 bg-epic-bg/80 backdrop-blur-xl border border-epic-pill-border rounded-2xl px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-2 duration-300 shadow-2xl">
          <nav className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`group font-mono text-xs uppercase tracking-wider transition-colors duration-200 ${
                  item.activeMatch ? "text-epic-accent font-bold" : "text-epic-text-secondary"
                }`}
              >
                <span className="inline-block transition-all duration-300 ease-out group-hover:tracking-[0.15em]">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
          
          <hr className="border-epic-elevated" />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href={SITE_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-epic-text-secondary hover:text-epic-text-primary"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </a>

              {/* Mobile Theme Toggle */}
              <button
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="text-epic-text-secondary hover:text-epic-text-primary transition-colors p-1"
                aria-label="Toggle Theme"
              >
                {mounted && resolvedTheme === "light" ? (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                )}
              </button>
            </div>

            <Link
              href={SITE_LINKS.install}
              onClick={() => setMobileMenuOpen(false)}
              className="font-mono text-[10px] uppercase tracking-widest bg-epic-brand text-epic-primary-foreground font-bold px-3 py-1.5 rounded"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
