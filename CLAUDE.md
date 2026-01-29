# Paletteer - Claude Code Project Instructions

## Project Overview
Paletteer is a Google Sheets add-on for generating and managing color palettes, inspired by Coolors.co.

## Tech Stack
- Google Apps Script (V8 runtime)
- HTML/CSS/JavaScript (ES2015)
- CLASP for deployment

## Project Structure
- `src/Code.gs` - Backend entry points (menu, sidebar, apply colors)
- `src/ColorUtils.gs` - Color conversion and palette generation
- `src/Sidebar.html` - Complete UI (HTML + CSS + JS in single file)
- `src/appsscript.json` - Add-on manifest and OAuth scopes

## Development Commands
```bash
npx clasp push    # Deploy to Google Apps Script
npx clasp open    # Open in Apps Script editor
npx clasp pull    # Pull changes from Apps Script
```

## Key Constraints
- Sidebar width is fixed at 300px by Google Sheets (cannot be changed)
- CLASP pinned to v2.4.2 for Node compatibility
- No external API calls - all color generation is local
- OAuth scopes: spreadsheets.currentonly, script.container.ui

## Color Algorithm
- Uses HSL color space for harmonic generation
- 37° hue shifts for pleasing color relationships
- Lock/unlock mechanism preserves user-selected colors during regeneration

## Current Status (Updated Jan 2026)

### Completed
- GCP project created and linked to Apps Script
- OAuth consent screen configured (scopes: spreadsheets.currentonly)
- OAuth verification submitted (under review - has logo)
- GitHub Pages live at https://evanholmes.github.io/gs-addon-paletteer/
  - Privacy policy, terms of service, home page
  - Google Search Console verified
- Marketplace SDK enabled and app configured
- Corrected logo exports created (Canva versions in marketing-material/)

### In Progress - Store Listing
Currently at: **GCP Console → Google Workspace Marketplace SDK → Store Listing**

Need to upload:
- Icons: Use `-canva.png` files from `marketing-material/Paletteer - Logo - Google WS Marketplace Exports/`
  - 32x32, 48x48, 96x96, 128x128
  - 220x140 card banner (Paletteer-Logo-with-text-220x140-canva.png)

Need to fill in:
- App name: Paletteer
- Short/detailed description
- Category: Productivity
- Support URL: https://github.com/evanholmes/gs-addon-paletteer/issues

Still needed:
- Screenshot(s) of add-on in action (1280×800 recommended)
- Submit for Marketplace publication review

### Brand Colors
1. Ocean Mist: #63B8A5
2. Vibrant Coral: #EC7B64
3. Tuscan Sun: #F4CC5C
4. Deep Lilac: #8A54B2
5. Twilight Indigo: #2C2A69
- Text "Paletteer": #363845
