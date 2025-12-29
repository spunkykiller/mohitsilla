@echo off
git init
git add .
git commit -m "Initial commit Portfolio V1"
git branch -M main
git remote remove origin
git remote add origin https://github.com/spunkykiller/mohitsilla
git push -u origin main
