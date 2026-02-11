/**
 * Wyoming Hunt Area Coordinates
 * Approximate center-point GPS coordinates for sunrise/sunset calculations
 * 
 * Coordinates are approximate (within 10-20 miles) which is sufficient
 * for sunrise/sunset calculations (varies only 1-3 minutes across the state)
 * 
 * Wyoming bounds: 41°N-45°N latitude, 104°W-111°W longitude
 * 
 * Regional reference points:
 * - Northeast (Black Hills/Devils Tower): 44.5°N, 104.5°W
 * - Southeast (Cheyenne/Laramie): 41.3°N, 105°W
 * - Northwest (Yellowstone/Jackson): 44°N, 110.5°W
 * - Southwest (Rock Springs/Kemmerer): 41.5°N, 109.5°W
 * - Central (Casper): 42.8°N, 106.3°W
 * - North-central (Bighorns): 44.5°N, 107.5°W
 * - West-central (Wind River/Lander): 43°N, 109°W
 */

const areaCoords = {
  // ============================================================
  // ELK AREAS (1-130)
  // ============================================================
  elk: {
    // Northeast Wyoming - Black Hills / Thunder Basin
    1: { lat: 44.59, lon: -104.71 },  // Black Hills
    2: { lat: 44.35, lon: -104.55 },  // Bear Lodge
    3: { lat: 44.10, lon: -104.40 },  // Thunder Basin NE
    4: { lat: 43.85, lon: -104.35 },  // Thunder Basin SE
    5: { lat: 44.75, lon: -105.10 },  // Belle Fourche area
    
    // Bighorn Mountains region
    6: { lat: 44.85, lon: -107.30 },  // Bighorn north
    7: { lat: 44.70, lon: -107.45 },  // Shell Canyon
    8: { lat: 44.55, lon: -107.60 },  // Tensleep area
    9: { lat: 44.40, lon: -107.75 },  // Cloud Peak
    10: { lat: 44.25, lon: -107.85 }, // Bighorn south
    11: { lat: 44.70, lon: -106.90 }, // Bighorn east slopes
    12: { lat: 44.55, lon: -106.75 }, // Story area
    13: { lat: 44.35, lon: -106.60 }, // Buffalo area
    
    // Absaroka Range / Yellowstone region
    14: { lat: 44.95, lon: -109.35 }, // North Absaroka
    15: { lat: 44.80, lon: -109.50 }, // Sunlight Basin
    16: { lat: 44.65, lon: -109.65 }, // Cody area
    17: { lat: 44.50, lon: -109.80 }, // Wapiti
    18: { lat: 44.35, lon: -109.95 }, // South Fork Shoshone
    19: { lat: 44.85, lon: -110.10 }, // Yellowstone boundary
    20: { lat: 44.70, lon: -110.25 }, // Thorofare
    21: { lat: 44.55, lon: -110.40 }, // Two Ocean
    22: { lat: 44.40, lon: -110.55 }, // Teton Wilderness
    23: { lat: 44.25, lon: -110.70 }, // Buffalo Fork
    
    // Teton / Jackson region
    24: { lat: 43.95, lon: -110.75 }, // Jackson north
    25: { lat: 43.80, lon: -110.85 }, // Teton area
    26: { lat: 43.65, lon: -110.95 }, // Hoback
    27: { lat: 43.50, lon: -110.80 }, // Gros Ventre
    28: { lat: 43.35, lon: -110.65 }, // Upper Green
    29: { lat: 43.20, lon: -110.50 }, // Green River Lakes
    30: { lat: 43.05, lon: -110.35 }, // Pinedale area
    
    // Wind River Range
    31: { lat: 43.40, lon: -109.60 }, // Wind River north
    32: { lat: 43.25, lon: -109.45 }, // Dubois
    33: { lat: 43.10, lon: -109.30 }, // Union Pass
    34: { lat: 42.95, lon: -109.15 }, // Lander area
    35: { lat: 42.80, lon: -109.00 }, // South Pass
    36: { lat: 43.55, lon: -109.25 }, // Togwotee
    37: { lat: 43.70, lon: -109.10 }, // Owl Creek
    38: { lat: 43.85, lon: -108.95 }, // Thermopolis area
    
    // Owl Creek / Wind River Basin
    39: { lat: 43.55, lon: -108.60 }, // Wind River Basin north
    40: { lat: 43.40, lon: -108.45 }, // Riverton area
    41: { lat: 43.25, lon: -108.30 }, // Wind River Reservation edge
    42: { lat: 43.10, lon: -108.15 }, // Beaver Rim
    43: { lat: 42.95, lon: -108.00 }, // Gas Hills
    44: { lat: 43.70, lon: -108.25 }, // Boysen area
    
    // Central Wyoming
    45: { lat: 42.85, lon: -106.50 }, // Casper Mountain
    46: { lat: 42.70, lon: -106.35 }, // Casper south
    47: { lat: 42.55, lon: -106.20 }, // Shirley Basin
    48: { lat: 42.40, lon: -106.05 }, // Medicine Bow north
    49: { lat: 43.00, lon: -106.65 }, // Natrona north
    50: { lat: 43.15, lon: -106.80 }, // Powder River
    
    // Laramie Range
    51: { lat: 42.30, lon: -105.30 }, // Laramie Peak north
    52: { lat: 42.15, lon: -105.45 }, // Laramie Peak south
    53: { lat: 42.00, lon: -105.60 }, // Laramie Range
    54: { lat: 41.85, lon: -105.75 }, // Vedauwoo area
    55: { lat: 41.70, lon: -105.90 }, // Sherman Hill
    
    // Medicine Bow / Snowy Range
    56: { lat: 41.55, lon: -106.15 }, // Snowy Range north
    57: { lat: 41.40, lon: -106.30 }, // Snowy Range
    58: { lat: 41.25, lon: -106.45 }, // Centennial
    59: { lat: 41.10, lon: -106.60 }, // Medicine Bow south
    60: { lat: 41.35, lon: -105.85 }, // Laramie area
    
    // Sierra Madre
    61: { lat: 41.20, lon: -106.95 }, // Sierra Madre north
    62: { lat: 41.05, lon: -107.10 }, // Encampment
    63: { lat: 41.35, lon: -107.25 }, // Sierra Madre central
    64: { lat: 41.50, lon: -107.40 }, // Savery
    65: { lat: 41.65, lon: -107.55 }, // Baggs area
    
    // Southwest Wyoming
    66: { lat: 41.80, lon: -108.90 }, // Rock Springs north
    67: { lat: 41.65, lon: -109.05 }, // White Mountain
    68: { lat: 41.50, lon: -109.20 }, // Rock Springs west
    69: { lat: 41.35, lon: -109.35 }, // Flaming Gorge
    70: { lat: 41.20, lon: -109.50 }, // Green River south
    71: { lat: 41.90, lon: -109.65 }, // Eden area
    72: { lat: 42.05, lon: -109.80 }, // Big Sandy
    
    // Salt River / Wyoming Range
    73: { lat: 42.80, lon: -110.75 }, // Salt River north
    74: { lat: 42.65, lon: -110.90 }, // Afton area
    75: { lat: 42.50, lon: -111.00 }, // Star Valley
    76: { lat: 42.35, lon: -110.85 }, // Wyoming Range south
    77: { lat: 42.95, lon: -110.60 }, // Wyoming Range north
    78: { lat: 43.10, lon: -110.45 }, // La Barge
    
    // Bear River / Kemmerer
    79: { lat: 42.20, lon: -110.70 }, // Kemmerer area
    80: { lat: 42.05, lon: -110.55 }, // Fossil Basin
    81: { lat: 41.90, lon: -110.40 }, // Opal
    82: { lat: 42.35, lon: -110.25 }, // Ham's Fork
    83: { lat: 42.50, lon: -110.10 }, // LaBarge Creek
    
    // Uinta region
    84: { lat: 41.20, lon: -110.25 }, // Uinta north
    85: { lat: 41.05, lon: -110.40 }, // Mountain View
    86: { lat: 41.35, lon: -110.55 }, // Fort Bridger
    87: { lat: 41.50, lon: -110.70 }, // Evanston area
    88: { lat: 41.65, lon: -110.85 }, // Bear River
    
    // Powder River Basin
    89: { lat: 44.45, lon: -106.25 }, // Sheridan area
    90: { lat: 44.30, lon: -106.10 }, // Tongue River
    91: { lat: 44.15, lon: -105.95 }, // Gillette area
    92: { lat: 44.00, lon: -105.80 }, // Reno Junction
    93: { lat: 43.85, lon: -105.65 }, // Campbell County
    94: { lat: 43.70, lon: -105.50 }, // Pumpkin Buttes
    95: { lat: 43.55, lon: -105.35 }, // Sussex
    96: { lat: 43.40, lon: -105.20 }, // Bill area
    
    // Eastern Plains
    97: { lat: 43.25, lon: -104.75 }, // Newcastle area
    98: { lat: 43.10, lon: -104.60 }, // Lance Creek
    99: { lat: 42.95, lon: -104.45 }, // Lusk area
    100: { lat: 42.80, lon: -104.30 }, // Niobrara
    101: { lat: 43.45, lon: -105.05 }, // Midwest
    102: { lat: 43.30, lon: -105.90 }, // Kaycee
    
    // Additional areas
    103: { lat: 42.50, lon: -105.05 }, // Glendo
    104: { lat: 42.35, lon: -104.90 }, // Guernsey
    105: { lat: 42.20, lon: -104.75 }, // Fort Laramie
    106: { lat: 42.05, lon: -104.60 }, // Torrington
    107: { lat: 41.90, lon: -104.45 }, // Goshen Hole
    108: { lat: 42.65, lon: -105.20 }, // Douglas area
    109: { lat: 42.50, lon: -105.35 }, // Natural Bridge
    110: { lat: 42.35, lon: -105.50 }, // Laramie Peak SE
    
    // Scattered additional elk areas
    111: { lat: 43.00, lon: -107.50 }, // Central Wyoming
    112: { lat: 43.15, lon: -107.35 }, // Lost Cabin
    113: { lat: 43.30, lon: -107.20 }, // Lysite
    114: { lat: 43.45, lon: -107.05 }, // Moneta
    115: { lat: 43.60, lon: -106.90 }, // Arminto
    116: { lat: 42.65, lon: -107.65 }, // Sweetwater
    117: { lat: 42.50, lon: -107.80 }, // Jeffrey City
    118: { lat: 42.35, lon: -107.95 }, // Split Rock
    119: { lat: 42.20, lon: -108.10 }, // Granite Mountains
    120: { lat: 42.05, lon: -108.25 }, // Crooks Gap
    121: { lat: 41.90, lon: -108.40 }, // Wamsutter
    122: { lat: 41.75, lon: -108.55 }, // Red Desert north
    123: { lat: 41.60, lon: -108.70 }, // Red Desert south
    124: { lat: 42.20, lon: -109.00 }, // Farson
    125: { lat: 42.35, lon: -109.15 }, // Big Sandy Opening
    126: { lat: 42.50, lon: -109.30 }, // Oregon Buttes
    127: { lat: 42.65, lon: -109.45 }, // South Pass City
    128: { lat: 42.80, lon: -109.60 }, // Atlantic City
    129: { lat: 42.95, lon: -109.75 }, // Wind River SE
    130: { lat: 43.10, lon: -109.90 }  // Lander NW
  },

  // ============================================================
  // DEER AREAS (1-171)
  // ============================================================
  deer: {
    // Northeast Wyoming - Black Hills region
    1: { lat: 44.59, lon: -104.71 },  // Black Hills
    2: { lat: 44.45, lon: -104.55 },  // Bear Lodge
    3: { lat: 44.30, lon: -104.40 },  // Devils Tower
    4: { lat: 44.15, lon: -104.25 },  // Keyhole
    5: { lat: 44.00, lon: -104.10 },  // Sundance
    6: { lat: 44.75, lon: -104.85 },  // Beulah
    7: { lat: 44.60, lon: -105.00 },  // Aladdin
    8: { lat: 44.45, lon: -105.15 },  // Moorcroft
    9: { lat: 44.30, lon: -105.30 },  // Rozet
    10: { lat: 44.15, lon: -105.45 }, // Gillette NE
    
    // Powder River Basin
    11: { lat: 44.80, lon: -106.10 }, // Sheridan
    12: { lat: 44.65, lon: -105.95 }, // Ranchester
    13: { lat: 44.50, lon: -105.80 }, // Dayton
    14: { lat: 44.35, lon: -105.65 }, // Banner
    15: { lat: 44.20, lon: -105.50 }, // Buffalo NE
    16: { lat: 44.05, lon: -105.35 }, // Gillette S
    17: { lat: 43.90, lon: -105.20 }, // Spotted Horse
    18: { lat: 43.75, lon: -105.05 }, // Recluse
    19: { lat: 43.60, lon: -104.90 }, // Osage
    20: { lat: 43.45, lon: -104.75 }, // Newcastle
    
    // Bighorn Mountains
    21: { lat: 44.85, lon: -107.30 }, // Bighorn NW
    22: { lat: 44.70, lon: -107.45 }, // Shell Creek
    23: { lat: 44.55, lon: -107.60 }, // Hyattville
    24: { lat: 44.40, lon: -107.75 }, // Cloud Peak
    25: { lat: 44.25, lon: -107.90 }, // Meadowlark
    26: { lat: 44.10, lon: -108.05 }, // Tensleep Canyon
    27: { lat: 43.95, lon: -108.20 }, // Worland area
    28: { lat: 44.75, lon: -106.85 }, // Bighorn E
    29: { lat: 44.60, lon: -106.70 }, // Story
    30: { lat: 44.45, lon: -106.55 }, // Buffalo
    
    // Absaroka / Yellowstone region
    31: { lat: 44.95, lon: -109.35 }, // North Absaroka
    32: { lat: 44.80, lon: -109.50 }, // Sunlight
    33: { lat: 44.65, lon: -109.65 }, // Cody N
    34: { lat: 44.50, lon: -109.80 }, // Wapiti
    35: { lat: 44.35, lon: -109.95 }, // South Fork
    36: { lat: 44.20, lon: -110.10 }, // Carter Mountain
    37: { lat: 44.85, lon: -110.20 }, // Yellowstone boundary
    38: { lat: 44.70, lon: -110.35 }, // Thorofare
    39: { lat: 44.55, lon: -110.50 }, // Two Ocean Plateau
    40: { lat: 44.40, lon: -110.65 }, // Teton Wilderness
    
    // Jackson / Teton region
    41: { lat: 43.95, lon: -110.75 }, // Jackson N
    42: { lat: 43.80, lon: -110.90 }, // Teton Pass
    43: { lat: 43.65, lon: -111.00 }, // Snake River
    44: { lat: 43.50, lon: -110.85 }, // Hoback
    45: { lat: 43.35, lon: -110.70 }, // Gros Ventre
    46: { lat: 43.20, lon: -110.55 }, // Upper Green
    47: { lat: 43.05, lon: -110.40 }, // New Fork
    48: { lat: 42.90, lon: -110.25 }, // La Barge
    49: { lat: 43.40, lon: -110.10 }, // Daniel
    50: { lat: 43.25, lon: -109.95 }, // Pinedale
    
    // Wind River Range
    51: { lat: 43.55, lon: -109.50 }, // Wind River N
    52: { lat: 43.40, lon: -109.35 }, // Dubois
    53: { lat: 43.25, lon: -109.20 }, // Brooks Lake
    54: { lat: 43.10, lon: -109.05 }, // Lander N
    55: { lat: 42.95, lon: -108.90 }, // Sinks Canyon
    56: { lat: 42.80, lon: -108.75 }, // Red Canyon
    57: { lat: 42.65, lon: -108.60 }, // South Pass
    58: { lat: 43.70, lon: -109.15 }, // Togwotee
    59: { lat: 43.85, lon: -109.00 }, // Owl Creek
    60: { lat: 44.00, lon: -108.85 }, // Thermopolis
    
    // Wind River Basin
    61: { lat: 43.55, lon: -108.45 }, // Riverton N
    62: { lat: 43.40, lon: -108.30 }, // Riverton
    63: { lat: 43.25, lon: -108.15 }, // Pavillion
    64: { lat: 43.10, lon: -108.00 }, // Gas Hills
    65: { lat: 42.95, lon: -107.85 }, // Sweetwater Station
    66: { lat: 43.70, lon: -108.60 }, // Boysen
    67: { lat: 43.85, lon: -108.75 }, // Wind River Canyon
    68: { lat: 44.15, lon: -108.45 }, // Lucerne
    69: { lat: 44.30, lon: -108.30 }, // Greybull
    70: { lat: 44.45, lon: -108.15 }, // Basin
    
    // Central Wyoming
    71: { lat: 42.85, lon: -106.50 }, // Casper Mountain
    72: { lat: 42.70, lon: -106.35 }, // Casper S
    73: { lat: 42.55, lon: -106.20 }, // Alcova
    74: { lat: 42.40, lon: -106.05 }, // Shirley Basin
    75: { lat: 42.25, lon: -105.90 }, // Medicine Bow
    76: { lat: 43.00, lon: -106.65 }, // Natrona N
    77: { lat: 43.15, lon: -106.80 }, // Midwest
    78: { lat: 43.30, lon: -106.95 }, // Edgerton
    79: { lat: 43.45, lon: -107.10 }, // Kaycee
    80: { lat: 43.60, lon: -107.25 }, // Mayoworth
    
    // Laramie Range
    81: { lat: 42.30, lon: -105.30 }, // Laramie Peak N
    82: { lat: 42.15, lon: -105.45 }, // Laramie Peak S
    83: { lat: 42.00, lon: -105.60 }, // Laramie Range
    84: { lat: 41.85, lon: -105.75 }, // Pole Mountain
    85: { lat: 41.70, lon: -105.90 }, // Sherman
    86: { lat: 42.45, lon: -105.15 }, // Glendo
    87: { lat: 42.30, lon: -105.00 }, // Guernsey
    88: { lat: 42.15, lon: -104.85 }, // Fort Laramie
    89: { lat: 42.00, lon: -104.70 }, // Torrington
    90: { lat: 41.85, lon: -104.55 }, // Goshen
    
    // Medicine Bow / Snowy Range
    91: { lat: 41.55, lon: -106.15 }, // Snowy Range N
    92: { lat: 41.40, lon: -106.30 }, // Centennial
    93: { lat: 41.25, lon: -106.45 }, // Albany
    94: { lat: 41.10, lon: -106.60 }, // Foxpark
    95: { lat: 41.35, lon: -105.85 }, // Laramie
    96: { lat: 41.20, lon: -105.70 }, // Tie Siding
    97: { lat: 41.05, lon: -105.55 }, // Virginia Dale
    98: { lat: 41.50, lon: -106.00 }, // Woods Landing
    99: { lat: 41.65, lon: -106.15 }, // Rock River
    100: { lat: 41.80, lon: -106.30 }, // McFadden
    
    // Sierra Madre
    101: { lat: 41.20, lon: -106.95 }, // Sierra Madre N
    102: { lat: 41.05, lon: -107.10 }, // Encampment
    103: { lat: 41.35, lon: -107.25 }, // Battle Lake
    104: { lat: 41.50, lon: -107.40 }, // Savery
    105: { lat: 41.65, lon: -107.55 }, // Baggs
    106: { lat: 41.80, lon: -107.70 }, // Dixon
    107: { lat: 41.95, lon: -107.85 }, // Wamsutter E
    108: { lat: 42.10, lon: -108.00 }, // Crooks Gap
    109: { lat: 42.25, lon: -108.15 }, // Sweetwater
    110: { lat: 42.40, lon: -108.30 }, // Jeffrey City
    
    // Southwest Wyoming
    111: { lat: 41.80, lon: -108.90 }, // Rock Springs N
    112: { lat: 41.65, lon: -109.05 }, // White Mountain
    113: { lat: 41.50, lon: -109.20 }, // Rock Springs
    114: { lat: 41.35, lon: -109.35 }, // Flaming Gorge
    115: { lat: 41.20, lon: -109.50 }, // Manila
    116: { lat: 41.90, lon: -109.65 }, // Eden
    117: { lat: 42.05, lon: -109.80 }, // Farson
    118: { lat: 42.20, lon: -109.95 }, // Big Sandy
    119: { lat: 42.35, lon: -110.10 }, // Boulder
    120: { lat: 42.50, lon: -110.25 }, // Pinedale S
    
    // Salt River / Wyoming Range
    121: { lat: 42.80, lon: -110.75 }, // Salt River N
    122: { lat: 42.65, lon: -110.90 }, // Afton
    123: { lat: 42.50, lon: -111.00 }, // Star Valley
    124: { lat: 42.35, lon: -110.85 }, // Bedford
    125: { lat: 42.20, lon: -110.70 }, // Auburn
    126: { lat: 42.05, lon: -110.55 }, // Sage
    127: { lat: 41.90, lon: -110.40 }, // Opal
    128: { lat: 42.35, lon: -110.25 }, // Kemmerer
    129: { lat: 42.50, lon: -110.10 }, // Fontenelle
    130: { lat: 42.65, lon: -109.95 }, // La Barge
    
    // Bear River / Uinta region
    131: { lat: 41.20, lon: -110.25 }, // Uinta N
    132: { lat: 41.05, lon: -110.40 }, // Mountain View
    133: { lat: 41.35, lon: -110.55 }, // Fort Bridger
    134: { lat: 41.50, lon: -110.70 }, // Lyman
    135: { lat: 41.65, lon: -110.85 }, // Evanston
    136: { lat: 41.80, lon: -111.00 }, // Bear River
    137: { lat: 41.95, lon: -110.15 }, // Carter
    138: { lat: 42.10, lon: -110.00 }, // Granger
    139: { lat: 42.25, lon: -109.85 }, // Green River N
    140: { lat: 42.40, lon: -109.70 }, // Names Hill
    
    // Eastern Plains
    141: { lat: 43.25, lon: -104.75 }, // Newcastle area
    142: { lat: 43.10, lon: -104.60 }, // Lance Creek
    143: { lat: 42.95, lon: -104.45 }, // Lusk
    144: { lat: 42.80, lon: -104.30 }, // Manville
    145: { lat: 42.65, lon: -104.15 }, // Van Tassell
    146: { lat: 43.40, lon: -104.90 }, // Upton
    147: { lat: 43.55, lon: -105.05 }, // Osage S
    148: { lat: 43.70, lon: -105.20 }, // Wright
    149: { lat: 43.85, lon: -105.35 }, // Reno Junction
    150: { lat: 44.00, lon: -105.50 }, // Gillette W
    
    // Additional central areas
    151: { lat: 43.00, lon: -107.50 }, // Central WY
    152: { lat: 43.15, lon: -107.35 }, // Lost Cabin
    153: { lat: 43.30, lon: -107.20 }, // Lysite
    154: { lat: 43.45, lon: -107.05 }, // Moneta
    155: { lat: 43.60, lon: -106.90 }, // Arminto
    156: { lat: 42.65, lon: -107.65 }, // Sweetwater
    157: { lat: 42.50, lon: -107.80 }, // Split Rock
    158: { lat: 42.35, lon: -107.95 }, // Muddy Gap
    159: { lat: 42.20, lon: -108.10 }, // Granite Mtns
    160: { lat: 42.05, lon: -108.25 }, // Bairoil
    
    // Red Desert / Great Divide Basin
    161: { lat: 41.90, lon: -108.55 }, // Wamsutter
    162: { lat: 41.75, lon: -108.70 }, // Red Desert N
    163: { lat: 41.60, lon: -108.85 }, // Red Desert S
    164: { lat: 41.45, lon: -109.00 }, // Point of Rocks
    165: { lat: 41.30, lon: -109.15 }, // Superior
    166: { lat: 42.10, lon: -109.30 }, // Farson N
    167: { lat: 42.25, lon: -109.45 }, // Eden S
    168: { lat: 42.40, lon: -109.60 }, // Big Sandy NW
    169: { lat: 42.55, lon: -109.75 }, // Boulder S
    170: { lat: 42.70, lon: -109.90 }, // Pinedale SW
    171: { lat: 42.85, lon: -110.05 }  // Cora
  },

  // ============================================================
  // ANTELOPE AREAS (1-102)
  // ============================================================
  antelope: {
    // Northeast Wyoming
    1: { lat: 44.59, lon: -104.71 },  // Black Hills
    2: { lat: 44.40, lon: -104.50 },  // Devils Tower
    3: { lat: 44.20, lon: -104.35 },  // Sundance
    4: { lat: 44.00, lon: -104.20 },  // Newcastle
    5: { lat: 43.80, lon: -104.05 },  // Osage
    6: { lat: 44.65, lon: -104.90 },  // Aladdin
    7: { lat: 44.45, lon: -105.10 },  // Moorcroft
    8: { lat: 44.25, lon: -105.30 },  // Gillette NE
    9: { lat: 44.05, lon: -105.50 },  // Gillette
    10: { lat: 43.85, lon: -105.70 }, // Wright
    
    // Powder River Basin
    11: { lat: 44.75, lon: -106.00 }, // Sheridan
    12: { lat: 44.55, lon: -105.85 }, // Big Horn
    13: { lat: 44.35, lon: -105.70 }, // Buffalo
    14: { lat: 44.15, lon: -105.55 }, // Kaycee NE
    15: { lat: 43.95, lon: -105.40 }, // Midwest
    16: { lat: 43.75, lon: -105.25 }, // Edgerton
    17: { lat: 43.55, lon: -105.10 }, // Bill
    18: { lat: 43.35, lon: -104.95 }, // Upton
    19: { lat: 43.15, lon: -104.80 }, // Lance Creek
    20: { lat: 42.95, lon: -104.65 }, // Lusk
    
    // Bighorn Basin
    21: { lat: 44.80, lon: -107.30 }, // Bighorn
    22: { lat: 44.60, lon: -107.50 }, // Shell
    23: { lat: 44.40, lon: -107.70 }, // Hyattville
    24: { lat: 44.20, lon: -107.90 }, // Worland
    25: { lat: 44.00, lon: -108.10 }, // Thermopolis
    26: { lat: 44.75, lon: -108.40 }, // Greybull
    27: { lat: 44.55, lon: -108.60 }, // Basin
    28: { lat: 44.35, lon: -108.80 }, // Lovell
    29: { lat: 44.70, lon: -109.20 }, // Cody
    30: { lat: 44.50, lon: -109.40 }, // Meeteetse
    
    // Wind River Basin
    31: { lat: 43.60, lon: -108.50 }, // Riverton N
    32: { lat: 43.40, lon: -108.35 }, // Riverton
    33: { lat: 43.20, lon: -108.20 }, // Pavillion
    34: { lat: 43.00, lon: -108.05 }, // Gas Hills
    35: { lat: 42.80, lon: -107.90 }, // Sweetwater
    36: { lat: 43.75, lon: -108.65 }, // Boysen
    37: { lat: 43.90, lon: -108.80 }, // Wind River Canyon
    38: { lat: 43.50, lon: -109.00 }, // Dubois
    39: { lat: 43.30, lon: -109.20 }, // Lander
    40: { lat: 43.10, lon: -109.40 }, // Atlantic City
    
    // Central Wyoming
    41: { lat: 42.85, lon: -106.50 }, // Casper
    42: { lat: 42.65, lon: -106.35 }, // Alcova
    43: { lat: 42.45, lon: -106.20 }, // Shirley Basin
    44: { lat: 42.25, lon: -106.05 }, // Medicine Bow
    45: { lat: 43.05, lon: -106.65 }, // Midwest
    46: { lat: 43.25, lon: -106.80 }, // Salt Creek
    47: { lat: 43.45, lon: -106.95 }, // Kaycee
    48: { lat: 43.65, lon: -107.10 }, // Arminto
    49: { lat: 43.85, lon: -107.25 }, // Moneta
    50: { lat: 44.05, lon: -107.40 }, // Lost Cabin
    
    // Laramie Plains
    51: { lat: 42.20, lon: -105.40 }, // Laramie Peak
    52: { lat: 42.00, lon: -105.55 }, // Wheatland
    53: { lat: 41.80, lon: -105.70 }, // Chugwater
    54: { lat: 41.60, lon: -105.85 }, // Cheyenne N
    55: { lat: 41.40, lon: -105.50 }, // Cheyenne
    56: { lat: 42.40, lon: -105.25 }, // Glendo
    57: { lat: 42.20, lon: -105.10 }, // Guernsey
    58: { lat: 42.00, lon: -104.95 }, // Fort Laramie
    59: { lat: 41.80, lon: -104.80 }, // Torrington
    60: { lat: 41.60, lon: -104.65 }, // Goshen Hole
    
    // Southeast Wyoming
    61: { lat: 41.35, lon: -104.90 }, // Pine Bluffs
    62: { lat: 41.50, lon: -105.05 }, // Burns
    63: { lat: 41.65, lon: -105.20 }, // Horse Creek
    64: { lat: 41.80, lon: -105.35 }, // Iron Mountain
    65: { lat: 41.95, lon: -105.50 }, // Laramie SE
    66: { lat: 42.10, lon: -105.65 }, // Laramie
    67: { lat: 42.25, lon: -105.80 }, // Bosler
    68: { lat: 42.40, lon: -105.95 }, // Rock River
    69: { lat: 42.55, lon: -106.10 }, // Medicine Bow
    70: { lat: 42.70, lon: -106.25 }, // Hanna
    
    // Carbon County
    71: { lat: 41.30, lon: -106.50 }, // Elk Mountain
    72: { lat: 41.45, lon: -106.70 }, // Saratoga
    73: { lat: 41.60, lon: -106.90 }, // Encampment
    74: { lat: 41.75, lon: -107.10 }, // Baggs
    75: { lat: 41.90, lon: -107.30 }, // Rawlins N
    76: { lat: 42.05, lon: -107.50 }, // Rawlins
    77: { lat: 42.20, lon: -107.70 }, // Ferris
    78: { lat: 42.35, lon: -107.90 }, // Split Rock
    79: { lat: 42.50, lon: -108.10 }, // Jeffrey City
    80: { lat: 42.65, lon: -108.30 }, // Sweetwater
    
    // Southwest Wyoming
    81: { lat: 41.55, lon: -109.00 }, // Rock Springs
    82: { lat: 41.40, lon: -109.20 }, // Green River
    83: { lat: 41.25, lon: -109.40 }, // Flaming Gorge
    84: { lat: 41.70, lon: -109.15 }, // Superior
    85: { lat: 41.85, lon: -109.30 }, // Point of Rocks
    86: { lat: 42.00, lon: -109.45 }, // Bitter Creek
    87: { lat: 42.15, lon: -109.60 }, // Eden
    88: { lat: 42.30, lon: -109.75 }, // Farson
    89: { lat: 42.45, lon: -109.90 }, // Big Sandy
    90: { lat: 42.60, lon: -110.05 }, // Boulder
    
    // Sublette / Lincoln Counties
    91: { lat: 42.75, lon: -110.20 }, // La Barge
    92: { lat: 42.90, lon: -110.35 }, // Big Piney
    93: { lat: 43.05, lon: -110.50 }, // Marbleton
    94: { lat: 43.20, lon: -110.65 }, // Pinedale
    95: { lat: 42.55, lon: -110.40 }, // Kemmerer
    96: { lat: 42.40, lon: -110.55 }, // Diamondville
    97: { lat: 42.25, lon: -110.70 }, // Frontier
    98: { lat: 42.10, lon: -110.85 }, // Evanston N
    99: { lat: 41.95, lon: -110.50 }, // Fort Bridger
    100: { lat: 41.80, lon: -110.65 }, // Lyman
    101: { lat: 41.65, lon: -110.80 }, // Evanston
    102: { lat: 41.50, lon: -110.95 }  // Bear River
  }
};

/**
 * Get coordinates for a specific hunt area
 * @param {string} species - 'elk', 'deer', or 'antelope'
 * @param {number} areaNumber - The hunt area number
 * @returns {Object|null} { lat, lon } or null if not found
 */
function getAreaCoords(species, areaNumber) {
  const speciesData = areaCoords[species.toLowerCase()];
  if (!speciesData) {
    console.warn(`Unknown species: ${species}`);
    return null;
  }
  
  const coords = speciesData[areaNumber];
  if (!coords) {
    console.warn(`Area ${areaNumber} not found for ${species}, using Wyoming center`);
    return { lat: 43.0, lon: -107.5 };
  }
  
  return coords;
}

/**
 * Get all areas for a species
 * @param {string} species - 'elk', 'deer', or 'antelope'
 * @returns {Array} Array of area numbers
 */
function getAreaList(species) {
  const speciesData = areaCoords[species.toLowerCase()];
  if (!speciesData) return [];
  return Object.keys(speciesData).map(Number).sort((a, b) => a - b);
}

// Export for Node.js / module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { areaCoords, getAreaCoords, getAreaList };
}
