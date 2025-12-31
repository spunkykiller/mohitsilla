@echo off
git add app/page.tsx
git commit -m "Fix: Remove markdown wrappers from page.tsx causing build failure"
git push origin main
