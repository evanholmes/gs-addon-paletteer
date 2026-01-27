Provide testing instructions for the Paletteer add-on.

Guide the user through testing:

1. Make sure latest code is deployed (`npx clasp push`)
2. Open the linked Google Sheet
3. Refresh the page to load updated add-on code
4. Go to Extensions > Paletteer > Open Paletteer
5. Test these features:
   - Generate button creates new palette
   - Click color swatch to apply background color
   - Shift+click to apply text color
   - Lock icon preserves color during generation
   - Copy button copies hex to clipboard
   - Copy All copies all hex codes
   - Compact mode toggle works
   - Import Coolors URL (e.g., coolors.co/264653-2a9d8f-e9c46a-f4a261-e76f51)
