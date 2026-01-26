/**
 * Creates the add-on menu when the spreadsheet opens.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('Open Palette', 'showSidebar')
    .addToUi();
}

/**
 * Shows the sidebar.
 */
function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('Paletteer');
  SpreadsheetApp.getUi().showSidebar(html);
}

/**
 * Applies a background color to the selected cells.
 * @param {string} hexColor - Hex color code (e.g., "#FF5733")
 */
function applyBackgroundColor(hexColor) {
  const range = SpreadsheetApp.getActiveRange();
  if (range) {
    range.setBackground(hexColor);
  }
}

/**
 * Applies a text color to the selected cells.
 * @param {string} hexColor - Hex color code (e.g., "#FF5733")
 */
function applyTextColor(hexColor) {
  const range = SpreadsheetApp.getActiveRange();
  if (range) {
    range.setFontColor(hexColor);
  }
}

/**
 * Runs when the add-on is installed.
 */
function onInstall(e) {
  onOpen(e);
}