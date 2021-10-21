#!/usr/bin/env bash
set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
NEW_MODULE_PATH="file:../../dist"
SAMPLE_DIRS=(
  imposter-sample-javascript
  imposter-sample-typescript
)

cd "${SCRIPT_DIR}"

for SAMPLE_DIR in "${SAMPLE_DIRS[@]}"; do
  MODIFIED_PKG_JSON=$(jq --arg moduleVer "${NEW_MODULE_PATH}" '.devDependencies["@imposter-js/types"] = ($moduleVer)' "${SAMPLE_DIR}/package.json")
  echo "${MODIFIED_PKG_JSON}" | jq > "${SAMPLE_DIR}/package.json"
done
