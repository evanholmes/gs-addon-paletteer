Sync current changes to GitHub.

Steps:
1. Run `git status` to see what's changed
2. Run `git diff` to review the changes
3. If there are changes:
   - Stage the changed files (be specific, avoid `git add -A`)
   - Create a concise commit message describing what changed
   - Push to origin
4. If no changes, inform the user the repo is already up to date
5. Show final status confirming sync is complete
