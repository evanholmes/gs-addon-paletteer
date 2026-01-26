/**
 * Generates a random hex color.
 * @returns {string} Hex color code
 */
function randomHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }
  
  /**
   * Converts hex to HSL.
   * @param {string} hex - Hex color code
   * @returns {object} {h, s, l} where h is 0-360, s and l are 0-100
   */
  function hexToHsl(hex) {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16) / 255;
    const g = parseInt(hex.substr(2, 2), 16) / 255;
    const b = parseInt(hex.substr(4, 2), 16) / 255;
  
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
  
    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
  
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  }
  
  /**
   * Converts HSL to hex.
   * @param {number} h - Hue (0-360)
   * @param {number} s - Saturation (0-100)
   * @param {number} l - Lightness (0-100)
   * @returns {string} Hex color code
   */
  function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
  
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
  
    if (0 <= h && h < 60) { r = c; g = x; b = 0; }
    else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
    else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
    else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
    else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
    else if (300 <= h && h < 360) { r = c; g = 0; b = x; }
  
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
  
    return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
  }
  
  /**
   * Generates a harmonious palette based on locked colors.
   * @param {Array} currentColors - Array of {hex, locked} objects
   * @returns {Array} New array of hex colors
   */
  function generatePalette(currentColors) {
    const lockedColors = currentColors.filter(c => c.locked);
    const unlockedCount = currentColors.filter(c => !c.locked).length;
    
    let baseHsl;
    if (lockedColors.length > 0) {
      // Use first locked color as base for harmony
      baseHsl = hexToHsl(lockedColors[0].hex);
    } else {
      // Random base
      baseHsl = { h: Math.floor(Math.random() * 360), s: 65, l: 55 };
    }
  
    // Generate harmonious colors for unlocked slots
    const newColors = [];
    let harmonyOffset = 0;
    
    for (let i = 0; i < currentColors.length; i++) {
      if (currentColors[i].locked) {
        newColors.push(currentColors[i].hex);
      } else {
        // Create variation based on harmony
        const hueShift = (harmonyOffset * 37 + Math.random() * 30 - 15) % 360;
        const newH = (baseHsl.h + hueShift + 360) % 360;
        const newS = Math.min(100, Math.max(20, baseHsl.s + (Math.random() * 30 - 15)));
        const newL = Math.min(85, Math.max(25, 30 + (harmonyOffset * 12) + (Math.random() * 10 - 5)));
        
        newColors.push(hslToHex(newH, newS, newL));
        harmonyOffset++;
      }
    }
  
    return newColors;
  }
  
  /**
   * Parses a Coolors URL and extracts hex colors.
   * @param {string} url - Coolors URL (e.g., "https://coolors.co/eff7cf-bad9b5-aba361-732c2c-420c14")
   * @returns {Array} Array of hex color codes
   */
  function parseCoolorsUrl(url) {
    const match = url.match(/coolors\.co\/([a-f0-9\-]+)/i);
    if (!match) return null;
    
    const colorString = match[1];
    const colors = colorString.split('-').map(c => '#' + c.toUpperCase());
    
    return colors.length > 0 ? colors : null;
  }