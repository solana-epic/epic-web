import React from "react";
import { docsData } from "@/data/docs";
import { notFound } from "next/navigation";
import { renderDocContent } from "@/lib/md";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(docsData).map((slug) => ({
    slug,
  }));
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = docsData[slug.toLowerCase()];

  if (!doc) {
    notFound();
  }

  return (
    <article className="prose prose-invert max-w-none">
      <span className="font-mono text-[10px] uppercase text-epic-accent tracking-wider mb-2 inline-block">
        Category: {doc.category}
      </span>
      <h1 className="text-2xl sm:text-4xl font-heading font-bold text-epic-text-primary tracking-tight mb-8">
        {doc.title}
      </h1>
      <div className="space-y-4">
        {renderDocContent(doc.content)}
      </div>
    </article>
  );
}
