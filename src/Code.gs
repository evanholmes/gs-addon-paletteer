/**
 * Creates the add-on menu when the spreadsheet opens.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('Open Paletteer', 'showSidebar')
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

/**
 * Gets user's favorite colors.
 * @returns {string[]} Array of hex colors
 */
function getFavorites() {
  const props = PropertiesService.getUserProperties();
  const favs = props.getProperty('favorites');
  return favs ? JSON.parse(favs) : [];
}

/**
 * Adds a color to favorites.
 * @param {string} hex - Hex color code
 * @returns {string[]} Updated favorites array
 */
function addFavorite(hex) {
  const props = PropertiesService.getUserProperties();
  let favs = getFavorites();
  if (!favs.includes(hex.toUpperCase())) {
    favs.unshift(hex.toUpperCase());
    if (favs.length > 20) favs = favs.slice(0, 20); // Max 20 favorites
    props.setProperty('favorites', JSON.stringify(favs));
  }
  return favs;
}

/**
 * Removes a color from favorites.
 * @param {string} hex - Hex color code
 * @returns {string[]} Updated favorites array
 */
function removeFavorite(hex) {
  const props = PropertiesService.getUserProperties();
  let favs = getFavorites();
  favs = favs.filter(f => f !== hex.toUpperCase());
  props.setProperty('favorites', JSON.stringify(favs));
  return favs;
}