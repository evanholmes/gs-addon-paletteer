Set up a verification loop for this project.

Analyze the project to determine its type and create the appropriate verification tool.

## Step 1: Identify Project Type

Examine the codebase to determine what kind of project this is:
- **Google Apps Script**: Look for .gs files, appsscript.json, .clasp.json
- **Web app**: Look for index.html, package.json with dev server, vite/webpack config
- **Node server**: Look for express, fastify, server.js, app.js
- **Mobile app**: Look for React Native, Flutter, Expo config
- **CLI tool**: Look for bin/ directory, commander/yargs deps
- **Library/package**: Look for src/ with exports, no entry point

## Step 2: Create Verification Command

Based on project type, create `.claude/commands/verify.md` with the appropriate steps:

### For Google Apps Script:
1. Run `npx clasp push` to deploy
2. Instruct user to refresh their Google Sheet
3. Provide testing checklist specific to the add-on's features
4. Ask user to confirm if working or report issues

### For Web Apps:
1. Start dev server if not running
2. Use Puppeteer MCP to navigate to localhost
3. Take screenshot to verify UI renders
4. Check console for errors

### For Node Servers:
1. Start server if not running
2. Make HTTP requests to key endpoints
3. Verify responses are correct

### For Mobile Apps:
1. Build and deploy to simulator
2. Use simulator MCP to interact
3. Take screenshots to verify

### For CLI Tools:
1. Run the CLI with test arguments
2. Verify output matches expected

## Step 3: Confirm Setup

After creating the verify command:
1. Tell the user what verification approach was set up
2. Run `/verify` once to confirm it works
3. Remind: "ALWAYS run /verify after making changes"
