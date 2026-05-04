#!/usr/bin/env bash
set -euo pipefail

echo "=== tx-va-wedding: Workspace Initialization ==="
echo ""

# 1. Install dependencies
echo "=== Installing dependencies ==="
pnpm install
echo ""

# 2. Harness size check
echo "=== Checking harness ==="
if [ -f scripts/check_harness_size.sh ]; then
  bash scripts/check_harness_size.sh
else
  echo "Harness size check script not found, skipping."
fi
echo ""

# 3. Lint
echo "=== Running lint ==="
pnpm lint
echo ""

# 4. Type check
echo "=== Running type check ==="
npx tsc --noEmit
echo ""

# 5. Build
echo "=== Building application ==="
pnpm build
echo ""

echo "=== Verification complete ==="
echo "All checks passed. Ready to develop."