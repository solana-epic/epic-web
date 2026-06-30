export interface ChangelogEntry {
  version: string;
  date: string;
  description: string;
  changes: {
    category: "Added" | "Fixed" | "Improved" | "Security";
    items: string[];
  }[];
}

export const changelogData: ChangelogEntry[] = [
  {
    version: "v0.2.0-beta.0",
    date: "2026-06-30",
    description: "Public beta launch of EPIC Upgrade Intelligence. Positioned as the deployment safety layer for Solana.",
    changes: [
      {
        category: "Added",
        items: [
          "Account Compatibility Engine simulating byte shifts and serialization drifts.",
          "First-class GitHub Action Integration for CI/CD.",
          "Prebuilt Cross-Platform Binaries bundled via optional dependencies.",
          "New --format json and --format sarif CLI outputs."
        ]
      },
      {
        category: "Improved",
        items: [
          "Completely rewritten AST parser in Rust supporting complex struct resolution.",
          "Diff Engine now enforces explicit semantic rules matching Solana deployment mechanics."
        ]
      }
    ]
  },
  {
    version: "v0.1.0-beta.2",
    date: "2026-06-15",
    description: "Second beta release focusing on stabilizing account layout checks and improving CLI error reports.",
    changes: [
      {
        category: "Added",
        items: [
          "Introduced `epic-sec-005` slot dependency checks.",
          "Added raw offset layout binary parser."
        ]
      },
      {
        category: "Improved",
        items: [
          "CLI outputs now display color-coded warning messages for shifted byte variables.",
          "Updated IDL analysis matching for complex enum deserialization."
        ]
      },
      {
        category: "Fixed",
        items: [
          "Resolved memory leak in structural boundary simulations.",
          "Fixed parser panic when reading nested generic type declarations."
        ]
      }
    ]
  },
  {
    version: "v0.1.0-beta.1",
    date: "2026-05-10",
    description: "Initial beta release launching core CLI validation tools and program verification rules.",
    changes: [
      {
        category: "Added",
        items: [
          "Initial CLI release for `@solana-epic/cli` package.",
          "Core upgrade intelligence engines verifying reallocations.",
          "Enforced initial rules `epic-sec-001` through `epic-sec-004`."
        ]
      },
      {
        category: "Security",
        items: [
          "Integrated Squads PDA authority validation checks."
        ]
      }
    ]
  }
];
