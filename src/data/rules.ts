export interface Rule {
  id: string;
  title: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM";
  target: string;
  description: string;
  rationale: string;
  exampleBad: string;
  exampleGood: string;
  relatedDocs: { name: string; href: string }[];
}

export const rules: Rule[] = [
  {
    id: "epic-sec-001",
    title: "Account Layout Allocation & Resize Checks",
    severity: "CRITICAL",
    target: "Memory Boundaries",
    description: "Asserts realloc size boundary checks.",
    rationale: "Solana program account sizes can be resized dynamically up to account storage limits. Without strict size boundary assertions preceding the realloc instruction, a malicious instruction could expand state parameters arbitrarily, triggering account rent exhaustion or stack overflows.",
    exampleBad: `// Vulnerable: Account is resized dynamically based on user input size
let new_size = account.data_len() + extra_bytes;
account.realloc(new_size, false)?;`,
    exampleGood: `// Safe: Reallocation size is checked against a maximum threshold
let new_size = account.data_len() + extra_bytes;
require!(new_size <= MAX_STATE_LIMIT, ErrorCode::ExceedsLimit);
account.realloc(new_size, false)?;`,
    relatedDocs: [
      { name: "Upgrade Intelligence Specs", href: "/docs/upgrade-intelligence" },
      { name: "Account Layout Analysis", href: "/docs/account-layout" }
    ]
  },
  {
    id: "epic-sec-002",
    title: "Missing Struct Discriminant Modification",
    severity: "CRITICAL",
    target: "Layout Deserialization",
    description: "Protects struct field byte offsets.",
    rationale: "Solana programs store serialized state on-chain. Inserting new fields in the middle of a struct shifts the serialization offsets of subsequent fields. This shifts the binary layout, causing older active accounts on mainnet to fail to deserialize properly.",
    exampleBad: `// Vulnerable: Mid-struct field insertion shifts offset of 'balance'
struct UserState {
    authority: Pubkey,
    is_restricted: bool, // Inserted in version 2
    balance: u64,
}`,
    exampleGood: `// Safe: Appending new fields preserves byte offsets of older fields
struct UserState {
    authority: Pubkey,
    balance: u64,
    is_restricted: bool, // Appended to end
}`,
    relatedDocs: [
      { name: "Upgrade Intelligence Docs", href: "/docs/upgrade-intelligence" },
      { name: "Security Rules Overview", href: "/docs/security-rules" }
    ]
  },
  {
    id: "epic-sec-003",
    title: "Unauthorized Program Upgrade Authority Gate",
    severity: "HIGH",
    target: "Access Control",
    description: "Locks authority to governance multisigs.",
    rationale: "Upgrading programs with direct developer keys exposes the program to single-point-of-failure hotkey compromises. Asserting that only verified multisig accounts (e.g. Squads PDAs) hold the authorization buffer verifies governance integration.",
    exampleBad: `// Vulnerable: Deploying using standard CLI keypair directly
$ solana program deploy \\
    --upgrade-authority developer_hotkey.json \\
    target/deploy/program.so`,
    exampleGood: `// Safe: Asserting expected governance PDA authority before deploy
$ epic verify-authority \\
    --expected-authority squads_multisig_pda \\
    --binary target/deploy/program.so`,
    relatedDocs: [
      { name: "CLI Reference Guide", href: "/docs/cli-reference" },
      { name: "Security Rules Docs", href: "/docs/security-rules" }
    ]
  },
  {
    id: "epic-sec-004",
    title: "Struct Memory Offset Alignment Verification",
    severity: "MEDIUM",
    target: "Data Alignment",
    description: "Enforces memory structural byte alignment.",
    rationale: "Solana's execution runtime requires memory structures to align to 8-byte boundaries for efficient instruction loading. A structural layout that leaves u64 or Pubkey fields misaligned will cause sudden transaction crashes.",
    exampleBad: `// Vulnerable: u8 insertion leaves u64 misaligned on 8-byte boundary
struct Stats {
    authority: Pubkey,
    tier: u8, // 1 byte
    amount: u64, // Misaligned! Causes runtime panic
}`,
    exampleGood: `// Safe: Padding restores exact 8-byte alignment constraints
struct Stats {
    authority: Pubkey,
    tier: u8,
    _padding: [u8; 7], // Pads to 8-byte boundary
    amount: u64,
}`,
    relatedDocs: [
      { name: "Account Layout Analysis Docs", href: "/docs/account-layout" },
      { name: "Security Rules Guide", href: "/docs/security-rules" }
    ]
  },
  {
    id: "epic-sec-005",
    title: "Slot Dependency Integration Validation",
    severity: "HIGH",
    target: "Integration Compatibility",
    description: "Verifies slot dependency synchronization boundaries.",
    rationale: "External program upgrades can modify states that CPI integrations depend on. Enforcing target slot validations ensures dependent program architectures are aligned at the moment of redeployment.",
    exampleBad: `// Vulnerable: Upgrade executes unconditionally on raw compile completion`,
    exampleGood: `// Safe: Verification locks target slots ranges against dependency versions`,
    relatedDocs: [
      { name: "Upgrade Intelligence Docs", href: "/docs/upgrade-intelligence" },
      { name: "GitHub Action Setup", href: "/docs/github-action" }
    ]
  }
];
