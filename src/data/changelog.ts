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
