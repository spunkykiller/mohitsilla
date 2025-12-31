@echo off
git add package.json package-lock.json
git commit -m "Fix: Update Next.js to latest version to resolve CVE-2025-66478"
git push origin main
