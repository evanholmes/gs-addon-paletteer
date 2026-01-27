Initialize and sync this project with a GitHub repository.

Assumes the user has already created an empty repo on GitHub with the same name as this project folder.

Steps:
1. Check if git is already initialized (look for .git folder)
2. If not initialized:
   - Run `git init`
   - Create .gitignore if missing (exclude node_modules/, .DS_Store, etc.)
3. Derive the repo name from the current directory name
4. Add remote: `https://github.com/evanholmes/<project-name>.git`
5. Stage all relevant files (exclude node_modules, .DS_Store)
6. Create initial commit with descriptive message summarizing the project
7. Push to origin main with `-u` flag
8. Confirm success and show the GitHub URL
