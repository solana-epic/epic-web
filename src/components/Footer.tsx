"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_COLUMNS, SITE_LINKS } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();



  return (
    <footer className="bg-epic-bg border-t border-epic-elevated py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Logo info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-1.5 group transition-opacity duration-300 hover:opacity-80">
              <div className="flex items-center justify-center w-7 h-7">
                <Image 
                  src="/Epic-logo.png" 
                  alt="EPIC" 
                  width={22}
                  height={22}
                  className="w-5.5 h-5.5 object-contain" 
                />
              </div>
              <span className="font-brand font-bold text-xs tracking-widest text-epic-text-primary">
                EPIC
              </span>
            </Link>
            <p className="text-xs text-epic-text-secondary leading-relaxed max-w-[220px]">
              Security-first program upgrade intelligence for Solana protocol engineering teams.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3.5 mt-2">
              <a
                href={SITE_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-epic-text-secondary hover:text-epic-accent transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href={SITE_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-epic-text-secondary hover:text-epic-accent transition-colors"
                aria-label="X"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={SITE_LINKS.npm}
                target="_blank"
                rel="noopener noreferrer"
                className="text-epic-text-secondary hover:text-epic-accent transition-colors"
                aria-label="npm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.763 0C.789 0 0 .789 0 1.763v20.474C0 23.211.789 24 1.763 24h20.474c.974 0 1.763-.789 1.763-1.763V1.763C24 .789 23.211 0 22.237 0H1.763zM5.11 5.11h13.78v13.78H13.78V7.868h-2.895v11.022H5.11V5.11z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[9px] uppercase tracking-wider text-epic-brand font-bold">
              Product
            </span>
            <div className="flex flex-col gap-2">
              {FOOTER_COLUMNS.product.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs text-epic-text-secondary hover:text-epic-text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Links 2 */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[9px] uppercase tracking-wider text-epic-brand font-bold">
              Resources
            </span>
            <div className="flex flex-col gap-2">
              {FOOTER_COLUMNS.resources.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-sans text-xs text-epic-text-secondary hover:text-epic-text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Links 3 */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[9px] uppercase tracking-wider text-epic-brand font-bold">
              Legal
            </span>
            <div className="flex flex-col gap-2">
              {FOOTER_COLUMNS.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-sans text-xs text-epic-text-secondary hover:text-epic-text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-epic-elevated pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-epic-text-secondary/30 select-none">
          <span>&copy; {currentYear} EPIC Platform. All rights reserved.</span>
          <span>Designed for Solana Protocol Engineers.</span>
        </div>
      </div>
    </footer>
  );
}
