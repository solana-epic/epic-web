# EPIC — Upgrade Intelligence and Deployment Readiness Landing Page

A premium, developer-first landing page built from scratch for **EPIC**, the Solana program Upgrade Intelligence and Deployment Readiness gateway.

“Know what changes. Know what breaks. Ship with confidence.”

## Technology Stack

- **Framework**: Next.js 15.5 App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 & custom inline tokens
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Typography**: Geist Mono & Geist Sans (loaded dynamically from Next.js fonts)

## Design Language

- **Premium, Technical, and Confident**
- **Inspirations**: Linear, Vercel, and Stripe Press.
- **Color Palette**:
  - Background: `#0B0A09` (Warm Charcoal/Ebony)
  - Surface: `#141210` (Warm Obsidian)
  - Primary Gold: `#C6A15B` (Bright Sand Gold)
  - Secondary Gold: `#E0C48A` (Pale Gold Accent)
  - Text Primary: `#F6F3ED` (Warm White)
  - Text Secondary: `#A8A29E` (Warm Grey)

## Key Landing Page Sections

1. **Hero**: High-impact bold title detailing the core message with dynamic background grids and validation badges.
2. **Why EPIC**: Structural explanation of the Solana program mutable upgrade problem, distinguishing EPIC from security scanners and static lint tools.
3. **Pipeline (Compiler → EPIC → Mainnet)**: Visual interactive SVG-connector timeline displaying compiled program binaries passing through state check offsets and releasing cryptographic readiness validation proofs to multisigs.
4. **Interactive Terminal Demo**: Functional mock terminal allowing users to run interactive CLI queries (`epic check`, `epic space`, `epic audit`) and see layout shifts, account allocations, and safety rules running live.
5. **Capabilities Grid**: Bento layout illustrating State Layout Verification, Anchor IDL alignment, Realloc boundary checks, and CI/CD gatekeeping.
6. **Security Rules Showcase**: Code explorer allowing developers to view active rules (e.g. `EPIC-SEC-001`) showing side-by-side vulnerable vs. safe Rust structures.
7. **Final CTA**: High-impact command-line installer block, documentation redirection, and enterprise support inquiries.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css         # Custom dark-theme design tokens & styling layer
│   │   ├── layout.tsx          # Font configurations & metadata title tags
│   │   └── page.tsx            # Main landing page assembling sections
│   ├── components/
│   │   ├── Header.tsx          # Responsive navigation & CTA controls
│   │   ├── Hero.tsx            # Headline copy, client credentials & visual grid
│   │   ├── WhyEpic.tsx         # Platform positioning, problem context
│   │   ├── Pipeline.tsx        # Interactive compilation flow timeline
│   │   ├── TerminalDemo.tsx    # Live terminal simulator with colored CLI returns
│   │   ├── Capabilities.tsx    # Bento feature showcase grid
│   │   ├── RulesShowcase.tsx   # Interactive rule specs and Rust diff compiler
│   │   ├── CTA.tsx             # CLI copy-command and enterprise gateways
│   │   └── Footer.tsx          # Modular links & protocol engineer credits
│   └── lib/
│       └── utils.ts            # Class merge helper utilities
├── package.json                # Project dependencies and workspace scripts
└── tsconfig.json               # TypeScript path aliasing & strict validation configs
```

## Getting Started

First, install the package dependencies:

```bash
npm install
```

To run the Next.js development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) inside your browser to inspect the visual interface.

To run a production-ready build optimization check:

```bash
npm run build
```
