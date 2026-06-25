export interface DocPage {
  slug: string;
  title: string;
  category: string;
  content: string;
}

export const sidebarItems = [
  { category: "Overview", items: [{ name: "Getting Started", slug: "getting-started" }] },
  { category: "CLI", items: [{ name: "CLI Reference", slug: "cli-reference" }] },
  { category: "Integrations", items: [{ name: "GitHub Action", slug: "github-action" }] },
  { category: "Core Concept", items: [
    { name: "Upgrade Intelligence", slug: "upgrade-intelligence" },
    { name: "Security Rules", slug: "security-rules" }
  ]}
];

export const docsData: Record<string, DocPage> = {
  "getting-started": {
    slug: "getting-started",
    title: "Getting Started with EPIC",
    category: "Overview",
    content: `
### Overview
EPIC is the Upgrade Intelligence and Deployment Readiness gateway for Solana programs. By checking structures, space limits, and upgrade parameters before deployment, EPIC prevents serialization anomalies and access control failures.

### Installation
You can install EPIC CLI directly on your development environment:
\`\`\`bash
npm install -g @solana-epic/cli
\`\`\`

### Verification
Confirm the installation was successful by calling the verify helper:
\`\`\`bash
epic --version
\`\`\`

### Execute First Scan
To run upgrade compatibility checks against a target binary:
\`\`\`bash
epic audit --binary target/deploy/program.so
\`\`\`
`
  },
  "cli-reference": {
    slug: "cli-reference",
    title: "CLI Command Reference",
    category: "CLI",
    content: `
### Commands

#### 1. \`epic audit\`
Analyzes compiled Solana binaries against 50+ upgrade and compatibility verification rules.
\`\`\`bash
epic audit [options]
\`\`\`
*   \`--binary <path>\` (Required) Path to target compiled program binary.
*   \`--rules-only\` Validate rules parameters without staging simulations.

#### 2. \`epic check\`
Compares structures across two builds.
\`\`\`bash
epic check --compare <path_v1> <path_v2>
\`\`\`
*   \`--space\` Scan account reallocation limits.

#### 3. \`epic verify-authority\`
Validates upgrade authority addresses.
\`\`\`bash
epic verify-authority --expected-authority <address> --binary <path>
\`\`\`
`
  },
  "github-action": {
    slug: "github-action",
    title: "GitHub Actions Integration",
    category: "Integrations",
    content: `
### GitHub Action Workflows
EPIC provides a custom GitHub Action to validate compatibility checks in continuous integration pipelines. It automatically comments on PRs showing layout structure diff reports.

### Example Configuration
Insert the following workflow inside \`.github/workflows/epic-gate.yml\`:
\`\`\`yaml
name: EPIC Upgrade Readiness Gate
on:
  pull_request:
    branches: [ main ]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Run EPIC CLI Gate
        uses: solana-epic/action@v1
        with:
          binary: target/deploy/vault.so
          expected-authority: \${{ secrets.MULTISIG_PDA }}
\`\`\`
`
  },
  "upgrade-intelligence": {
    slug: "upgrade-intelligence",
    title: "Upgrade Intelligence Overview",
    category: "Core Concept",
    content: `
### Staging & Fork Simulations
Program upgrades on Solana write code buffers in-place. EPIC provides **Upgrade Intelligence** by simulating deployments against mainnet state forks inside sandbox environments.

### Offset Tracking
The simulator decodes instruction layouts, matching instruction data arrays to verify that layout offsets do not shift, preventing client-side integration bugs post-upgrade.
`
  },
  "security-rules": {
    slug: "security-rules",
    title: "Security Rules Database",
    category: "Core Concept",
    content: `
### Verification Rules
EPIC matches binaries against a list of compatibility parameters:
*   **EPIC-SEC-001**: Realloc space constraint validation.
*   **EPIC-SEC-002**: Structure field offset shifts.
*   **EPIC-SEC-003**: Upgrade authority access control.
*   **EPIC-SEC-004**: Structural memory byte padding alignment.
*   **EPIC-SEC-005**: Slot timing limitations.

Check the homepage rules section to view code diff comparisons for specific rule IDs.
`
  }
};
