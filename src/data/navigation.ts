export const SITE_LINKS = {
  home: "/",
  docs: "/docs",
  rules: "/rules",
  changelog: "/changelog",
  github: "https://github.com/solana-epic/epic",
  install: "/#installation",
  npm: "https://www.npmjs.com/package/@solana-epic/cli",
  x: "https://x.com/solana_epic",
  releases: "https://github.com/solana-epic/epic/releases",
  license: "https://github.com/solana-epic/epic/blob/main/LICENSE",
  privacy: "/privacy",
  terms: "/terms",
};

export const GLOBAL_NAV = [
  { name: "Rules Library", href: SITE_LINKS.rules, prefix: "/rules" },
  { name: "Documentation", href: SITE_LINKS.docs, prefix: "/docs" },
  { name: "Changelog", href: SITE_LINKS.changelog, prefix: "/changelog" },
];

export const FOOTER_COLUMNS = {
  product: [
    { name: "Documentation", href: SITE_LINKS.docs },
    { name: "Rules", href: SITE_LINKS.rules },
    { name: "Changelog", href: SITE_LINKS.changelog },
    { name: "GitHub", href: SITE_LINKS.github },
  ],
  resources: [
    { name: "npm", href: SITE_LINKS.npm },
    { name: "GitHub", href: SITE_LINKS.github },
    { name: "Releases", href: SITE_LINKS.releases },
    { name: "CLI Reference", href: "/docs/cli-reference" },
  ],
  legal: [
    { name: "License", href: SITE_LINKS.license },
    { name: "Privacy", href: SITE_LINKS.privacy },
    { name: "Terms", href: SITE_LINKS.terms },
  ],
  social: [
    { name: "GitHub", href: SITE_LINKS.github },
    { name: "X", href: SITE_LINKS.x },
    { name: "npm", href: SITE_LINKS.npm },
  ]
};

export const DOCS_SIDEBAR_NAV = [
  { category: "Overview", items: [{ name: "Getting Started", slug: "getting-started", href: "/docs/getting-started" }] },
  { category: "CLI", items: [{ name: "CLI Reference", slug: "cli-reference", href: "/docs/cli-reference" }] },
  { category: "Integrations", items: [{ name: "GitHub Action", slug: "github-action", href: "/docs/github-action" }] },
  { category: "Core Concept", items: [
    { name: "Upgrade Intelligence", slug: "upgrade-intelligence", href: "/docs/upgrade-intelligence" },
    { name: "Security Rules", slug: "security-rules", href: "/docs/security-rules" }
  ]}
];
