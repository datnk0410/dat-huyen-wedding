#!/usr/bin/env bash
set -euo pipefail

# Detect which parts of the project changed between two commits.
# Usage: detect_ci_scope.sh <base-sha> <head-sha>
# Outputs: web=true/false to GITHUB_OUTPUT

base_sha="${1:-${GITHUB_BASE_SHA:-}}"
head_sha="${2:-${GITHUB_HEAD_SHA:-}}"

if [ -z "$base_sha" ] || [ -z "$head_sha" ]; then
  echo "Usage: detect_ci_scope.sh <base-sha> <head-sha>" >&2
  exit 1
fi

web=false
shared=false
lockfile_changed=false

while IFS= read -r file; do
  [ -z "$file" ] && continue

  case "$file" in
    app/*|components/*|lib/*|public/*)
      web=true
      ;;
    package.json|pnpm-workspace.yaml|tsconfig.json|next.config.ts|postcss.config.mjs|.github/workflows/*|scripts/detect_ci_scope.sh)
      shared=true
      ;;
    pnpm-lock.yaml)
      lockfile_changed=true
      ;;
  esac
done < <(git diff --name-only --diff-filter=ACMRTUXB "$base_sha" "$head_sha")

if [ "$lockfile_changed" = true ]; then
  web=true
  shared=true
fi

{
  echo "web=$web"
  echo "shared=$shared"
} >>"${GITHUB_OUTPUT:?GITHUB_OUTPUT is required}"