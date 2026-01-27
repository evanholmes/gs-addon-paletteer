Verify the Paletteer add-on is working correctly.

## Self-Verification Loop for Google Apps Script

### Step 1: Syntax Validation
Before deploying, validate the code:
1. Read all .gs and .html files in src/
2. Check for obvious syntax errors (unclosed braces, missing semicolons, typos)
3. Verify HTML structure is valid (matching tags)
4. If errors found, fix them before proceeding

### Step 2: Deploy
Run `npx clasp push` to deploy the latest code.
- If push fails, analyze the error and fix it
- If push succeeds, proceed to browser verification

### Step 3: Browser Verification (Puppeteer)
Use Puppeteer MCP to verify the add-on works:

1. Ask user for their Google Sheet URL (store it for future runs)
2. Navigate to the Google Sheet using `mcp__puppeteer__puppeteer_navigate`
3. Take a screenshot to confirm page loaded: `mcp__puppeteer__puppeteer_screenshot`
4. Click Extensions menu, then Paletteer > Open Paletteer
5. Take screenshot of sidebar to verify it renders
6. Test core interactions:
   - Click Generate button
   - Take screenshot to verify colors changed
   - Click a color swatch
   - Verify no JavaScript errors in console using `mcp__puppeteer__puppeteer_evaluate`

### Step 4: Report Results
After verification:
- If all checks pass: "✓ Verified: Sidebar renders, generate works, colors apply"
- If issues found: Describe what failed, fix the code, run /verify again

### Notes
- First run will need the Google Sheet URL
- Save the URL in .claude/config.json for subsequent runs
- If browser verification fails due to auth, fall back to syntax validation + deploy confirmation
