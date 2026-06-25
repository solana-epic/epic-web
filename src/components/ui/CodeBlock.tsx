"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
  maxHeight?: string;
}

export function CodeBlock({ code, filename, language = "rust", maxHeight = "auto" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-[#D6B98C]/8 bg-[#11151B] overflow-hidden select-text text-left">
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#D6B98C]/8 bg-[#080B0F]/60">
        <div className="flex items-center gap-2">
          {filename && (
            <span className="font-mono text-[10px] text-[#A9B1BC] tracking-wide">
              {filename}
            </span>
          )}
          {language && !filename && (
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#A9B1BC]/60">
              {language}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="p-1 rounded hover:bg-[#171C23] text-[#A9B1BC] hover:text-[#F5EFE6] transition-all duration-200"
          title="Copy code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
      <pre 
        className="p-4 overflow-x-auto font-mono text-[11px] leading-relaxed text-[#F5EFE6]"
        style={{ maxHeight }}
      >
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}
