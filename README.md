# Paletteer

A Google Sheets add-on for generating and applying color palettes, inspired by Coolors.

## What it does

- Import palettes from Coolors URLs (e.g., `coolors.co/eff7cf-bad9b5-aba361-732c2c-420c14`)
- Generate harmonious palettes with lock/unlock functionality
- One-click apply colors to selected cells (background or text)
- Copy hex codes for Google Sheets' custom color picker
- Compact mode for minimal screen footprint

## Project Structure
```
coolors-sheets-addon/
├── src/
│   ├── appsscript.json    # Manifest with add-on config
│   ├── Code.gs            # Main entry points (onOpen, showSidebar, apply colors)
│   ├── ColorUtils.gs      # Color generation, HSL conversion, URL parsing
│   └── Sidebar.html       # Full UI (HTML + CSS + JS)
├── .clasp.json            # Links to Google Apps Script project
├── package.json
└── README.md
```

## Development
```bash
# Push changes to Google
npx clasp push

# Open in Apps Script editor
npx clasp open
```

Uses clasp 2.4.2 (pinned due to Node 25 + MCP module issue in newer versions).

## Current Status

✅ Core functionality complete:
- Palette display with lock/unlock
- Color generation algorithm (HSL-based harmony)
- Import from Coolors URLs
- Apply to cells (click = background, shift+click = text)
- Copy individual/all hex codes
- Compact mode toggle

🔲 Next step: GCP project setup for cross-sheet deployment

## GCP Setup (in progress)

To deploy as an installable add-on across all sheets:

1. Go to https://console.cloud.google.com
2. Create new project named "Paletteer"
3. Copy the **project number** (not project ID)
4. In Apps Script editor: Project Settings → Change project → paste number
5. Configure OAuth consent screen (internal/testing)
6. Deploy → New deployment → Add-on
7. Test deployments → Install

## Notes

- Google Sheets sidebar is fixed at 300px width (can't be changed)
- Custom colors in Google's color picker can't be set programmatically—user must paste hex manually
- Palette generation uses our own HSL-based algorithm (Coolors has no public API)