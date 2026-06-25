import React from "react";

export function renderDocContent(content: string) {
  const lines = content.split("\n");
  const elements = [];
  let codeBlockLines: string[] = [];
  let inCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre key={`code-${i}`} className="p-4 rounded border border-[#171C23] bg-[#11151B] font-mono text-[11px] text-[#F5EFE6] overflow-x-auto my-4 leading-relaxed">
            <code>{codeBlockLines.join("\n")}</code>
          </pre>
        );
        codeBlockLines = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockLines.push(line);
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg sm:text-xl font-bold text-[#F5EFE6] tracking-tight mt-8 mb-4 border-b border-[#171C23] pb-2">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("#### ")) {
      elements.push(
        <h4 key={i} className="text-base sm:text-lg font-bold text-[#F5EFE6] tracking-tight mt-6 mb-3">
          {line.replace("#### ", "")}
        </h4>
      );
    } else if (line.startsWith("* ")) {
      elements.push(
        <li key={i} className="text-xs sm:text-sm text-[#A9B1BC] ml-5 list-disc leading-relaxed mb-2">
          {line.replace("* ", "")}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
    } else {
      const parts = line.split(/(`[^`]+`)/g);
      const contentParts = parts.map((part, pIdx) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={pIdx} className="bg-epic-surface border border-epic-border text-epic-brand px-1.5 py-0.5 rounded font-mono text-[11px]">
              {part.slice(1, -1)}
            </code>
          );
        }
        return part;
      });

      elements.push(
        <p key={i} className="text-xs sm:text-sm text-[#A9B1BC] leading-relaxed mb-3">
          {contentParts}
        </p>
      );
    }
  }

  return elements;
}
