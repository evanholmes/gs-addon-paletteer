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

## Current Status
- Core functionality complete
- Next: GCP project setup for public distribution
