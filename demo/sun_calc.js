/**
 * Sunrise/Sunset Calculator for Wyoming Hunting
 * Uses the NOAA Solar Calculator algorithm
 * No external dependencies - pure JavaScript
 */

/**
 * Convert degrees to radians
 */
function toRad(deg) {
  return deg * Math.PI / 180;
}

/**
 * Convert radians to degrees
 */
function toDeg(rad) {
  return rad * 180 / Math.PI;
}

/**
 * Calculate sunrise and sunset times for a given location and date
 * Based on NOAA Solar Calculator equations
 * @param {number} lat - Latitude in decimal degrees (positive = North)
 * @param {number} lon - Longitude in decimal degrees (negative = West)
 * @param {Date} date - The date to calculate for
 * @returns {Object} Object with sunrise, sunset, legalStart, legalEnd times
 */
function calculateSunTimes(lat, lon, date) {
  // Standard zenith angle for sunrise/sunset (accounts for atmospheric refraction)
  const ZENITH = 90.833;
  
  // Get the year, month, day
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // Calculate the day of the year
  const N1 = Math.floor(275 * month / 9);
  const N2 = Math.floor((month + 9) / 12);
  const N3 = (1 + Math.floor((year - 4 * Math.floor(year / 4) + 2) / 3));
  const dayOfYear = N1 - (N2 * N3) + day - 30;
  
  // Convert longitude to hour value and calculate approximate time
  const lngHour = lon / 15;
  
  // Calculate for sunrise (t = 6) and sunset (t = 18)
  const tRise = dayOfYear + ((6 - lngHour) / 24);
  const tSet = dayOfYear + ((18 - lngHour) / 24);
  
  // Calculate the sun's mean anomaly
  function calcMeanAnomaly(t) {
    return (0.9856 * t) - 3.289;
  }
  
  // Calculate the sun's true longitude
  function calcSunLongitude(M) {
    let L = M + (1.916 * Math.sin(toRad(M))) + (0.020 * Math.sin(toRad(2 * M))) + 282.634;
    // Normalize to [0, 360)
    while (L < 0) L += 360;
    while (L >= 360) L -= 360;
    return L;
  }
  
  // Calculate the sun's right ascension
  function calcRightAscension(L) {
    let RA = toDeg(Math.atan(0.91764 * Math.tan(toRad(L))));
    // Normalize to [0, 360)
    while (RA < 0) RA += 360;
    while (RA >= 360) RA -= 360;
    
    // Right ascension must be in the same quadrant as L
    const Lquadrant = Math.floor(L / 90) * 90;
    const RAquadrant = Math.floor(RA / 90) * 90;
    RA = RA + (Lquadrant - RAquadrant);
    
    // Convert to hours
    return RA / 15;
  }
  
  // Calculate the sun's declination
  function calcDeclination(L) {
    const sinDec = 0.39782 * Math.sin(toRad(L));
    return Math.asin(sinDec);
  }
  
  // Calculate the hour angle
  function calcHourAngle(decRad, forRise) {
    const cosH = (Math.cos(toRad(ZENITH)) - (Math.sin(decRad) * Math.sin(toRad(lat)))) /
                 (Math.cos(decRad) * Math.cos(toRad(lat)));
    
    // Check for polar conditions
    if (cosH > 1) return null; // Sun never rises
    if (cosH < -1) return null; // Sun never sets
    
    let H = toDeg(Math.acos(cosH));
    
    // For sunrise, H is measured westward from south (use 360 - H)
    // For sunset, H is measured as-is
    if (forRise) {
      H = 360 - H;
    }
    
    return H / 15; // Convert to hours
  }
  
  // Calculate local mean time
  function calcLocalTime(t, H, RA) {
    return H + RA - (0.06571 * t) - 6.622;
  }
  
  // Calculate sunrise
  const M_rise = calcMeanAnomaly(tRise);
  const L_rise = calcSunLongitude(M_rise);
  const RA_rise = calcRightAscension(L_rise);
  const dec_rise = calcDeclination(L_rise);
  const H_rise = calcHourAngle(dec_rise, true);
  
  // Calculate sunset
  const M_set = calcMeanAnomaly(tSet);
  const L_set = calcSunLongitude(M_set);
  const RA_set = calcRightAscension(L_set);
  const dec_set = calcDeclination(L_set);
  const H_set = calcHourAngle(dec_set, false);
  
  // Check for polar conditions
  if (H_rise === null || H_set === null) {
    return {
      sunrise: "N/A",
      sunset: "N/A",
      legalStart: "N/A",
      legalEnd: "N/A",
      polar: true
    };
  }
  
  // Calculate local mean time
  const T_rise = calcLocalTime(tRise, H_rise, RA_rise);
  const T_set = calcLocalTime(tSet, H_set, RA_set);
  
  // Adjust to UTC
  let UT_rise = T_rise - lngHour;
  let UT_set = T_set - lngHour;
  
  // Normalize to [0, 24)
  while (UT_rise < 0) UT_rise += 24;
  while (UT_rise >= 24) UT_rise -= 24;
  while (UT_set < 0) UT_set += 24;
  while (UT_set >= 24) UT_set -= 24;
  
  // Determine timezone offset (MST = -7, MDT = -6)
  const isDST = isInDST(date);
  const offset = isDST ? -6 : -7;
  
  // Convert UTC to local time
  let localRise = UT_rise + offset;
  let localSet = UT_set + offset;
  
  // Normalize to [0, 24)
  while (localRise < 0) localRise += 24;
  while (localRise >= 24) localRise -= 24;
  while (localSet < 0) localSet += 24;
  while (localSet >= 24) localSet -= 24;
  
  // Calculate legal shooting times (30 min before sunrise, 30 min after sunset)
  let legalStart = localRise - 0.5;
  let legalEnd = localSet + 0.5;
  
  // Normalize
  while (legalStart < 0) legalStart += 24;
  while (legalEnd >= 24) legalEnd -= 24;
  
  return {
    sunrise: formatTime(localRise),
    sunset: formatTime(localSet),
    legalStart: formatTime(legalStart),
    legalEnd: formatTime(legalEnd),
    sunriseDecimal: localRise,
    sunsetDecimal: localSet,
    isDST: isDST,
    timezone: isDST ? "MDT" : "MST"
  };
}

/**
 * Determine if a date falls within US Daylight Saving Time
 * DST: Second Sunday in March (2 AM) to First Sunday in November (2 AM)
 * @param {Date} date - The date to check
 * @returns {boolean} True if DST is in effect
 */
function isInDST(date) {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-indexed
  const day = date.getDate();
  
  // January, February, December: Standard time
  if (month < 2 || month > 10) return false;
  
  // April through October: DST
  if (month > 2 && month < 10) return true;
  
  // March: DST starts second Sunday at 2 AM
  if (month === 2) {
    const secondSunday = getSecondSunday(year, 2);
    return day >= secondSunday;
  }
  
  // November: DST ends first Sunday at 2 AM  
  if (month === 10) {
    const firstSunday = getFirstSunday(year, 10);
    return day < firstSunday;
  }
  
  return false;
}

/**
 * Get the first Sunday of a given month
 */
function getFirstSunday(year, month) {
  const firstOfMonth = new Date(year, month, 1);
  const dayOfWeek = firstOfMonth.getDay();
  return dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
}

/**
 * Get the second Sunday of a given month
 */
function getSecondSunday(year, month) {
  return getFirstSunday(year, month) + 7;
}

/**
 * Format decimal hours to 12-hour time string
 * @param {number} decimalHours - Time in decimal hours (e.g., 7.5 = 7:30)
 * @returns {string} Formatted time (e.g., "7:30 AM")
 */
function formatTime(decimalHours) {
  // Normalize to 0-24 range
  while (decimalHours < 0) decimalHours += 24;
  while (decimalHours >= 24) decimalHours -= 24;
  
  let hours = Math.floor(decimalHours);
  let minutes = Math.round((decimalHours - hours) * 60);
  
  // Handle minute overflow
  if (minutes === 60) {
    minutes = 0;
    hours++;
    if (hours >= 24) hours = 0;
  }
  
  // Convert to 12-hour format
  const period = hours >= 12 ? "PM" : "AM";
  let displayHours = hours % 12;
  if (displayHours === 0) displayHours = 12;
  
  // Pad minutes
  const minStr = minutes.toString().padStart(2, '0');
  
  return `${displayHours}:${minStr} ${period}`;
}

/**
 * Get sun times for a specific Wyoming hunt area
 * @param {string} species - 'elk', 'deer', or 'antelope'
 * @param {number} areaNumber - The hunt area number
 * @param {Date} date - The date to calculate for
 * @returns {Object} Sun times for that area
 */
function getSunTimesForArea(species, areaNumber, date) {
  // Check if areaCoords is available (loaded from area_coords.js)
  if (typeof areaCoords === 'undefined') {
    console.error('area_coords.js must be loaded before calling getSunTimesForArea');
    return null;
  }
  
  const coords = areaCoords[species] && areaCoords[species][areaNumber];
  
  if (!coords) {
    // Default to Wyoming center if area not found
    console.warn(`Area ${species} ${areaNumber} not found, using Wyoming center`);
    return calculateSunTimes(43.0, -107.5, date);
  }
  
  return calculateSunTimes(coords.lat, coords.lon, date);
}

/**
 * Format sun times for display
 * @param {Object} sunTimes - Result from calculateSunTimes
 * @returns {string} Formatted multi-line string
 */
function formatSunTimesDisplay(sunTimes) {
  if (sunTimes.polar) {
    return "Polar conditions - unusual sun behavior";
  }
  
  return `Sunrise: ${sunTimes.sunrise} ${sunTimes.timezone}
Sunset: ${sunTimes.sunset} ${sunTimes.timezone}
Legal Shooting Hours: ${sunTimes.legalStart} to ${sunTimes.legalEnd}`;
}

// Self-test function to verify accuracy
function testSunCalculator() {
  console.log("=== Sun Calculator Tests ===\n");
  
  // Test 1: Cheyenne, WY on June 21 (summer solstice)
  const cheyenne = { lat: 41.14, lon: -104.82 };
  const summerSolstice = new Date(2024, 5, 21); // June 21, 2024
  const summerResult = calculateSunTimes(cheyenne.lat, cheyenne.lon, summerSolstice);
  
  console.log("Cheyenne, WY - June 21 (Summer Solstice):");
  console.log(`  Expected: Sunrise ~5:31 AM MDT, Sunset ~8:33 PM MDT`);
  console.log(`  Got:      Sunrise ${summerResult.sunrise}, Sunset ${summerResult.sunset}`);
  console.log(`  DST: ${summerResult.isDST}, Timezone: ${summerResult.timezone}`);
  console.log(`  Legal hours: ${summerResult.legalStart} to ${summerResult.legalEnd}\n`);
  
  // Test 2: Cheyenne, WY on Dec 21 (winter solstice)
  const winterSolstice = new Date(2024, 11, 21); // Dec 21, 2024
  const winterResult = calculateSunTimes(cheyenne.lat, cheyenne.lon, winterSolstice);
  
  console.log("Cheyenne, WY - December 21 (Winter Solstice):");
  console.log(`  Expected: Sunrise ~7:13 AM MST, Sunset ~4:38 PM MST`);
  console.log(`  Got:      Sunrise ${winterResult.sunrise}, Sunset ${winterResult.sunset}`);
  console.log(`  DST: ${winterResult.isDST}, Timezone: ${winterResult.timezone}`);
  console.log(`  Legal hours: ${winterResult.legalStart} to ${winterResult.legalEnd}\n`);
  
  // Test 3: Jackson, WY (further north and west)
  const jackson = { lat: 43.48, lon: -110.76 };
  const fallEquinox = new Date(2024, 8, 22); // Sept 22, 2024
  const jacksonResult = calculateSunTimes(jackson.lat, jackson.lon, fallEquinox);
  
  console.log("Jackson, WY - September 22 (Fall Equinox):");
  console.log(`  Expected: ~7:10 AM MDT sunrise, ~7:20 PM MDT sunset`);
  console.log(`  Got:      Sunrise ${jacksonResult.sunrise}, Sunset ${jacksonResult.sunset}`);
  console.log(`  DST: ${jacksonResult.isDST}, Timezone: ${jacksonResult.timezone}`);
  console.log(`  Legal hours: ${jacksonResult.legalStart} to ${jacksonResult.legalEnd}\n`);
  
  // Test 4: Today's date for Casper
  const casper = { lat: 42.87, lon: -106.31 };
  const today = new Date();
  const casperResult = calculateSunTimes(casper.lat, casper.lon, today);
  
  console.log(`Casper, WY - Today (${today.toDateString()}):`);
  console.log(`  Sunrise ${casperResult.sunrise}, Sunset ${casperResult.sunset}`);
  console.log(`  DST: ${casperResult.isDST}, Timezone: ${casperResult.timezone}`);
  console.log(`  Legal hours: ${casperResult.legalStart} to ${casperResult.legalEnd}\n`);
  
  // Test 5: DST boundary tests
  console.log("DST Boundary Tests:");
  console.log(`  March 9, 2024 (before DST): ${isInDST(new Date(2024, 2, 9)) ? 'DST' : 'Standard'}`);
  console.log(`  March 10, 2024 (DST starts): ${isInDST(new Date(2024, 2, 10)) ? 'DST' : 'Standard'}`);
  console.log(`  November 2, 2024 (before DST ends): ${isInDST(new Date(2024, 10, 2)) ? 'DST' : 'Standard'}`);
  console.log(`  November 3, 2024 (DST ends): ${isInDST(new Date(2024, 10, 3)) ? 'DST' : 'Standard'}`);
  
  return { summerResult, winterResult, jacksonResult, casperResult };
}

// Export for Node.js / module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateSunTimes,
    getSunTimesForArea,
    formatSunTimesDisplay,
    formatTime,
    isInDST,
    testSunCalculator
  };
}
