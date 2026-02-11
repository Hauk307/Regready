// Wyoming 2025 Official Hunting Regulations Data
// Schema v2 - Full season segments with weapon types, restrictions, cross-area validity
// Extracted from WGFD wy_2025_regs.pdf
// Species: Elk, Deer, Antelope + Searchable Rules

// Wyoming 2025 Elk Regulations - Parsed from wy_2025_regs.pdf
// Generated: 2026-02-06
// Schema: v2

const elkData = {
  1: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Any elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Antlerless elk" }
        ]
      }
    }
  },
  2: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 20 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 20", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 21 - Nov 15", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Dec 15", limitation: "Cow or calf" }
        ]
      }
    }
  },
  3: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Any elk" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: "Unlimited",
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Jan 31", limitation: "Cow or calf" }
        ]
      }
    }
  },
  6: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk", restriction: "Valid off national forest" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk", restriction: "Valid off national forest" },
          { weapon: "rifle", dates: "Nov 1 - Dec 31", limitation: "Antlerless elk", restriction: "Valid off national forest" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 1 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: "Unlimited",
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Jan 31", limitation: "Cow or calf", restriction: "Valid off national forest" }
        ]
      }
    }
  },
  7: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 1500,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Nov 20", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 21 - Dec 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "rifle", dates: "Nov 21 - Dec 31", limitation: "Antlered elk, five (5) points or less on either antler", restriction: "Valid in Converse County" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 2000,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 15 - Dec 31", limitation: "Cow or calf" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: "Unlimited",
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 14", limitation: "Cow or calf", restriction: "Valid on private land in Albany and Carbon counties; also valid in all of Platte County; not valid in Converse or Natrona counties or on Commission owned lands" },
          { weapon: "rifle", dates: "Oct 15 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land in Converse County; also valid off national forest in the remainder of the area" }
        ]
      }
    }
  },
  8: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Jan 31", limitation: "Any elk" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: "Unlimited",
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Jan 31", limitation: "Cow or calf" }
        ]
      }
    }
  },
  9: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 7", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Jan 31", limitation: "Cow or calf", restriction: "Valid off national forest" }
        ],
        validIn: ["9", "10"]
      }
    }
  },
  10: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 7", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Jan 31", limitation: "Cow or calf", restriction: "Valid off national forest" }
        ],
        validIn: ["9", "10"]
      }
    }
  },
  11: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Any elk", restriction: "Valid off national forest" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Any elk", restriction: "Valid off national forest" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 1 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 450,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Sep 30", limitation: "Cow or calf", restriction: "Valid off national forest and off the Wick Wildlife Habitat Management Area" },
          { weapon: "rifle", dates: "Oct 1 - Jan 31", limitation: "Cow or calf" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ]
      }
    }
  },
  12: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 7", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 400,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land" }
        ],
        validIn: ["12", "13", "15", "110"]
      }
    }
  },
  13: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 400,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land" }
        ],
        validIn: ["12", "13", "15", "110"]
      }
    }
  },
  15: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 400,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land" }
        ],
        validIn: ["12", "13", "15", "110"]
      }
    }
  },
  16: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk", restriction: "Valid on private land; also valid on or within 1/2 mile of irrigated land" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 1 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Sep 30", limitation: "Cow or calf", restriction: "Valid on private land; also valid on or within 1/2 mile of irrigated land" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Cow or calf" }
        ]
      }
    }
  },
  19: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Any elk" },
          { weapon: "rifle", dates: "Dec 1 - Dec 14", limitation: "Any elk" },
          { weapon: "rifle", dates: "Dec 15 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Dec 15 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 5": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Nov 1 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 225,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 1 - Jan 31", limitation: "Cow or calf" }
        ]
      }
    }
  },
  21: {
    licenses: {
      "General (Youth)": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk", restriction: "Youth only" },
          { weapon: "rifle", dates: "Oct 11 - Oct 12", limitation: "Any elk", restriction: "Youth only" }
        ]
      },
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 15 - Nov 20", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Dec 31", limitation: "Cow or calf", restriction: "Valid on private land" }
        ]
      }
    }
  },
  22: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 8 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 15 - Dec 15", limitation: "Any elk", validIn: "Also valid in Area 111" },
          { weapon: "rifle", dates: "Dec 16 - Dec 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Nov 1 - Nov 14", limitation: "Antlered elk, five (5) points or less on either antler" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 8 - Oct 31", limitation: "Cow or calf", restriction: "Muddy Creek Drainage" },
          { weapon: "rifle", dates: "Nov 1 - Nov 14", limitation: "Cow or calf", restriction: "Entire area" },
          { weapon: "rifle", dates: "Nov 15 - Dec 31", limitation: "Cow or calf", validIn: "Also valid in Area 111" }
        ]
      }
    }
  },
  23: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Oct 21", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 21", limitation: "Any elk", validIn: "Also valid in Area 128 east of Castle Gardens Road" },
          { weapon: "rifle", dates: "Dec 1 - Dec 15", limitation: "Any elk", validIn: "Also valid in Area 128 east of Castle Gardens Road" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Oct 21", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 21", limitation: "Antlerless elk", validIn: "Also valid in Area 128" },
          { weapon: "rifle", dates: "Dec 1 - Dec 15", limitation: "Antlerless elk", validIn: "Also valid in Area 128" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Oct 21", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 1 - Nov 21", limitation: "Cow or calf", validIn: "Also valid in Area 128" },
          { weapon: "rifle", dates: "Dec 1 - Dec 15", limitation: "Cow or calf", validIn: "Also valid in Area 128" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ]
      }
    }
  },
  24: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Any elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlerless elk" }
        ]
      },
      "Type 5": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Antlerless elk", validIn: "Also valid in Area 128" }
        ]
      }
    }
  },
  25: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" }
        ],
        validIn: ["25", "27"]
      },
      "Type 4": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 11 - Oct 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 5": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 21 - Oct 31", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 10", limitation: "Antlerless elk", restriction: "Valid north of the Sweetwater River" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Cow or calf", restriction: "Valid north of the Sweetwater River" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Sep 30", limitation: "Cow or calf", restriction: "Valid on or within 1/2 mile of private land" }
        ]
      }
    }
  },
  27: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" }
        ],
        validIn: ["25", "27"]
      },
      "Type 4": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 1 - Nov 20", limitation: "Antlerless elk" }
        ]
      }
    }
  },
  28: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 22", limitation: "Antlerless elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlerless elk" }
        ]
      }
    }
  },
  30: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 40,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 6 - Nov 16", limitation: "Antlerless elk" }
        ]
      }
    }
  },
  31: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 40,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 6 - Nov 16", limitation: "Antlerless elk" }
        ]
      }
    }
  },
  32: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 40,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 6 - Dec 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" }
        ]
      }
    }
  },
  33: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 9 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 7 - Dec 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Sep 30", limitation: "Antlerless elk", restriction: "Valid on private land east of Buffalo Creek" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 9 - Oct 31", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Nov 7 - Dec 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 7 - Dec 31", limitation: "Cow or calf" }
        ]
      }
    }
  },
  34: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 800,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 9 - Nov 15", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 16 - Dec 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 700,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 8", limitation: "Cow or calf", restriction: "Valid on private land on or within 1 mile of irrigated land" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 9 - Dec 31", limitation: "Cow or calf", restriction: "Valid off national forest" }
        ]
      }
    }
  },
  35: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 10 - Nov 5", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 15 - Dec 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 10 - Nov 5", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Nov 15 - Dec 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 425,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 9", limitation: "Cow or calf", restriction: "Valid on private land" },
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 10 - Nov 5", limitation: "Cow or calf", restriction: "Valid off national forest" },
          { weapon: "rifle", dates: "Nov 15 - Dec 31", limitation: "Cow or calf", restriction: "Valid off national forest" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ]
      }
    }
  },
  36: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Antlered elk", restriction: "Valid on national forest; any elk off national forest" },
          { weapon: "rifle", dates: "Oct 10 - Nov 5", limitation: "Antlered elk", restriction: "Valid on national forest; any elk off national forest" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 10 - Nov 5", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Nov 15 - Dec 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Oct 9", limitation: "Cow or calf", restriction: "Valid off national forest north of Rock Creek" },
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 10 - Nov 5", limitation: "Cow or calf" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ]
      }
    }
  },
  37: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 10 - Nov 5", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 6 - Nov 15", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 500,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf", restriction: "Valid on private land" },
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Cow or calf" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ]
      }
    }
  },
  38: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "rifle", dates: "Oct 10 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 15", limitation: "Antlerless elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 375,
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Nov 15", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "rifle", dates: "Sep 15 - Dec 31", limitation: "Cow or calf", restriction: "Valid off national forest" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ]
      }
    }
  },
  39: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "rifle", dates: "Oct 10 - Nov 4", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 5 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 5 - Nov 30", limitation: "Cow or calf" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ]
      }
    }
  },
  40: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "rifle", dates: "Oct 15 - Nov 4", limitation: "Any elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Nov 4", limitation: "Cow or calf", restriction: "Valid off national forest" },
          { weapon: "rifle", dates: "Nov 5 - Nov 30", limitation: "Cow or calf" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ]
      }
    }
  },
  41: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "rifle", dates: "Oct 15 - Nov 4", limitation: "Any elk" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "rifle", dates: "Nov 5 - Nov 20", limitation: "Any elk" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Oct 14", limitation: "Any elk", restriction: "Valid off national forest north of Trapper Creek" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "rifle", dates: "Nov 5 - Dec 21", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "rifle", dates: "Dec 1 - Dec 21", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 21", limitation: "Cow or calf", restriction: "Valid off national forest north of Trapper Creek" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ]
      }
    }
  },
  45: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "rifle", dates: "Oct 15 - Nov 4", limitation: "Any elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 5": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Oct 10", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 25 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Oct 14", limitation: "Cow or calf", restriction: "Valid on or within 1 mile of irrigated land" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Dec 1 - Dec 21", limitation: "Cow or calf" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ]
      }
    }
  },
  47: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 9 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 9 - Nov 30", limitation: "Cow or calf" }
        ]
      }
    }
  },
  48: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 400,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 9 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 7 - Dec 15", limitation: "Antlerless elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 9 - Oct 31", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Nov 7 - Dec 15", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 600,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 9 - Oct 31", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 7 - Nov 30", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 7 - Dec 15", limitation: "Cow or calf" }
        ]
      }
    }
  },
  49: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 9 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 7 - Dec 21", limitation: "Antlerless elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Oct 31", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Nov 7 - Dec 21", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 9 - Oct 31", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 500,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 7 - Dec 21", limitation: "Cow or calf" }
        ]
      }
    }
  },
  51: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 120,
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk", restriction: "South and west of the Clark's Fork River" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 40,
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk", restriction: "North and east of the Clark's Fork River" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "rifle", dates: "Nov 16 - Dec 15", limitation: "Antlerless elk" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 80,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ]
      }
    }
  },
  54: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk", restriction: "Valid south of the Clark's Fork River", validIn: "Also valid in Area 65" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk", restriction: "Valid north of the Clark's Fork River" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Dec 21", limitation: "Cow or calf", restriction: "Valid north of the Clark's Fork River" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 40,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk", validIn: "Also valid in Area 65" }
        ]
      }
    }
  },
  55: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 60,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ]
      }
    }
  },
  56: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 21", limitation: "Any elk" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 10,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 5 - Nov 30", limitation: "Any elk", validIn: "Also valid in Area 55" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Dec 21", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Sep 1 - Dec 21", limitation: "Cow or calf", restriction: "Valid off national forest" },
          { weapon: "rifle", dates: "Jan 1 - Jan 15", limitation: "Cow or calf", restriction: "Valid off national forest within the South Fork Shoshone River drainage" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 30,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ]
      }
    }
  },
  58: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 35,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Dec 21", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Jan 1 - Jan 15", limitation: "Cow or calf" }
        ]
      }
    }
  },
  59: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 21", limitation: "Any elk" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 10,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Dec 21", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Jan 1 - Jan 15", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Cow or calf", restriction: "Valid within the Washakie Wilderness" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ]
      }
    }
  },
  60: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 19", limitation: "Any elk" },
          { weapon: "rifle", dates: "Sep 20 - Oct 27", limitation: "Antlered elk" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 20,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ]
      }
    }
  },
  61: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk", validIn: "Also valid in that portion of Area 62 within the Washakie Wilderness" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk", restriction: "Valid within the Washakie Wilderness", validIn: "Also valid in that portion of Area 62 within the Washakie Wilderness" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 7 - Nov 15", limitation: "Any elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 15 - Dec 21", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 7 - Dec 21", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 500,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 21", limitation: "Cow or calf", restriction: "Valid on or within 1/2 mile of irrigated land" },
          { weapon: "rifle", dates: "Jan 1 - Jan 15", limitation: "Cow or calf", restriction: "Valid on or within 1/2 mile of irrigated land" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk", validIn: "Also valid in that portion of Area 62 within the Washakie Wilderness" }
        ]
      }
    }
  },
  62: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 21", limitation: "Any elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 21", limitation: "Antlerless elk" }
        ]
      },
      "Type 5": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 22 - Dec 21", limitation: "Antlerless elk" }
        ],
        validIn: ["62", "63"]
      }
    }
  },
  63: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 21", limitation: "Any elk" }
        ],
        validIn: ["63", "64"]
      },
      "Type 2": {
        category: "limited",
        quota: 35,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 21", limitation: "Any elk", restriction: "Valid within the Washakie Wilderness" }
        ],
        validIn: ["63", "64"]
      },
      "Type 3": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 15", limitation: "Any elk" }
        ],
        validIn: ["63", "64"]
      },
      "Type 4": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 1 - Dec 21", limitation: "Antlerless elk" }
        ]
      },
      "Type 5": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 22 - Dec 21", limitation: "Antlerless elk" }
        ],
        validIn: ["62", "63"]
      },
      "Type 6": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 31", limitation: "Cow or calf", restriction: "Valid off national forest north of Gooseberry Creek" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 1 - Dec 21", limitation: "Cow or calf" }
        ]
      }
    }
  },
  64: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 21", limitation: "Any elk" }
        ],
        validIn: ["63", "64"]
      },
      "Type 2": {
        category: "limited",
        quota: 35,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 21", limitation: "Any elk", restriction: "Valid within the Washakie Wilderness" }
        ],
        validIn: ["63", "64"]
      },
      "Type 3": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 15", limitation: "Any elk" }
        ],
        validIn: ["63", "64"]
      },
      "Type 6": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Nov 14", limitation: "Cow or calf", restriction: "Valid in that portion of the Cottonwood Creek drainage" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 15 - Dec 21", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 15 - Dec 21", limitation: "Cow or calf", restriction: "Valid south of and including the Cottonwood Creek drainage" }
        ]
      }
    }
  },
  65: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Dec 21", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Jan 1 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 31", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "rifle", dates: "Nov 1 - Dec 21", limitation: "Cow or calf" }
        ]
      }
    }
  },
  66: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 21", limitation: "Any elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Jan 15", limitation: "Cow or calf" }
        ]
      }
    }
  },
  67: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 10", limitation: "Antlered elk" },
          { weapon: "rifle", dates: "Oct 11 - Oct 31", limitation: "Antlered elk, spikes excluded" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 400,
        segments: [
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Nov 1 - Dec 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 450,
        segments: [
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Dec 1 - Dec 31", limitation: "Cow or calf", restriction: "Valid west of the Wiggins Fork" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 450,
        segments: [
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Cow or calf", restriction: "Valid west of the Wiggins Fork" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ],
        validIn: ["67", "68", "69"]
      }
    }
  },
  68: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 10", limitation: "Antlered elk" },
          { weapon: "rifle", dates: "Oct 11 - Oct 31", limitation: "Antlered elk, spikes excluded" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Cow or calf" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ],
        validIn: ["67", "68", "69"]
      }
    }
  },
  69: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 15 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Cow or calf" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" }
        ],
        validIn: ["67", "68", "69"]
      }
    }
  },
  70: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 19", limitation: "Any elk" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Antlered elk, spikes excluded" }
        ]
      }
    }
  },
  71: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 19", limitation: "Any elk" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Antlered elk, spikes excluded" }
        ]
      }
    }
  },
  72: {
    licenses: {
      "Closed": {
        category: "closed",
        quota: null,
        segments: []
      }
    }
  },
  73: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 19", limitation: "Any elk" },
          { weapon: "rifle", dates: "Sep 20 - Oct 25", limitation: "Any elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 35,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 19", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Aug 15 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land" }
        ]
      }
    }
  },
  75: {
    licenses: {
      "Type 4": {
        category: "limited",
        quota: 10,
        segments: [
          { weapon: "rifle", dates: "Nov 15 - Dec 7", limitation: "Antlerless elk", restriction: "The Snake River Bottom and Antelope Flats portions shall be closed" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 10,
        segments: [
          { weapon: "rifle", dates: "Nov 15 - Dec 7", limitation: "Cow or calf", restriction: "The Snake River Bottom and Antelope Flats portions shall be closed" }
        ]
      }
    }
  },
  77: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "rifle", dates: "Nov 1 - Nov 26", limitation: "Antlerless elk", restriction: "General license and unused limited quota licenses" },
          { weapon: "rifle", dates: "Dec 1 - Dec 5", limitation: "Antlerless elk", restriction: "General license and unused limited quota licenses" }
        ]
      },
      "Youth": {
        category: "special",
        quota: null,
        segments: [
          { weapon: "rifle", dates: "Nov 27 - Nov 30", limitation: "National Elk Refuge permits", restriction: "Youth only" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "rifle", dates: "Dec 8 - Dec 19", limitation: "Cow or calf" }
        ]
      }
    }
  },
  78: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 25", limitation: "Any elk" },
          { weapon: "rifle", dates: "Aug 15 - Oct 31", limitation: "Antlerless elk", restriction: "Valid on private land" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Sep 25", limitation: "Any elk", restriction: "Valid off national forest" },
          { weapon: "archery", dates: "Sep 1 - Sep 25", limitation: "Any elk" },
          { weapon: "rifle", dates: "Sep 26 - Jan 31", limitation: "Any elk" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 25", limitation: "Any elk" },
          { weapon: "rifle", dates: "Aug 15 - Oct 31", limitation: "Any elk", restriction: "Valid on private land" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Sep 25", limitation: "Cow or calf", restriction: "Valid off national forest" },
          { weapon: "archery", dates: "Sep 1 - Sep 25", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Sep 26 - Jan 31", limitation: "Cow or calf" }
        ]
      }
    }
  },
  79: {
    licenses: {
      "Closed": {
        category: "closed",
        quota: null,
        segments: []
      }
    }
  },
  80: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 25", limitation: "Any elk" },
          { weapon: "rifle", dates: "Sep 26 - Oct 31", limitation: "Any elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 25", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Cow or calf" }
        ]
      }
    }
  },
  81: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 25", limitation: "Any elk" },
          { weapon: "rifle", dates: "Sep 26 - Oct 25", limitation: "Antlered elk, spikes excluded" }
        ]
      }
    }
  },
  82: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 25", limitation: "Any elk" },
          { weapon: "rifle", dates: "Sep 26 - Oct 25", limitation: "Antlered elk, spikes excluded" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 40,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 9", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Sep 10 - Nov 2", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Nov 3 - Jan 31", limitation: "Antlerless elk", restriction: "Valid on private land; also valid on private land in Areas 70 and 81" }
        ]
      }
    }
  },
  83: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 25", limitation: "Antlered elk, spikes excluded" }
        ]
      }
    }
  },
  84: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 25", limitation: "Any elk" },
          { weapon: "rifle", dates: "Sep 26 - Oct 31", limitation: "Any elk, spikes excluded" },
          { weapon: "rifle", dates: "Nov 1 - Nov 15", limitation: "Antlerless elk" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "rifle", dates: "Nov 1 - Jan 31", limitation: "Any elk", restriction: "Valid on private land west of U.S. Highway 191" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 400,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 25", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Sep 26 - Nov 30", limitation: "Cow or calf", restriction: "That portion of Area 84 east and south of Shoal Creek" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land in Area 84; also valid in that portion of Area 85" }
        ],
        validIn: ["84", "85"]
      }
    }
  },
  85: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 25", limitation: "Any elk" },
          { weapon: "rifle", dates: "Sep 26 - Oct 31", limitation: "Any elk, spikes excluded" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 25", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Sep 26 - Nov 15", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land in Area 84; also valid in that portion of Area 85" }
        ],
        validIn: ["84", "85"]
      }
    }
  },
  86: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 25", limitation: "Any elk" },
          { weapon: "rifle", dates: "Sep 26 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 25", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Sep 26 - Nov 30", limitation: "Cow or calf" }
        ]
      }
    }
  },
  87: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlerless elk" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 10,
        segments: [
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Antlered elk", restriction: "Valid within the interior of the Dell Creek Loop Road" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Cow or calf", restriction: "Valid south and east of Dell Creek" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 15 - Nov 20", limitation: "Cow or calf", validIn: "Also valid in that portion of Area 84" }
        ]
      }
    }
  },
  88: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 80,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Jan 31", limitation: "Antlerless elk", restriction: "Valid south of Peterson Lane" }
        ]
      }
    }
  },
  89: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 26", limitation: "Any elk" }
        ]
      }
    }
  },
  90: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 26", limitation: "Any elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 15 - Oct 26", limitation: "Cow or calf" }
        ]
      }
    }
  },
  91: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 15", limitation: "Antlerless elk" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Dec 31", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Jan 1 - Jan 31", limitation: "Antlerless elk", restriction: "Valid off national forest" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Jan 1 - Jan 31", limitation: "Cow or calf", restriction: "Valid off national forest" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Cow or calf", restriction: "Valid off national forest west of U.S. Highway 89" }
        ]
      }
    }
  },
  92: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 500,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Cow or calf", restriction: "Valid north of Wyoming Highway 354" }
        ]
      }
    }
  },
  93: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 275,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Cow or calf" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: "Unlimited",
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Cow or calf", restriction: "Valid on private land" }
        ]
      }
    }
  },
  94: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 500,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 1 - Dec 10", limitation: "Cow or calf", restriction: "Valid north of Middle Piney Creek" },
          { weapon: "rifle", dates: "Dec 11 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land north of Middle Piney Creek" }
        ]
      }
    }
  },
  95: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 225,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Nov 5", limitation: "Any elk" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 30,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Nov 5", limitation: "Any elk", restriction: "Valid within the Green River Drainage" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 15 - Nov 5", limitation: "Antlerless elk" }
        ]
      },
      "Type 5": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 1 - Nov 5", limitation: "Antlerless elk", restriction: "Valid within the Green River Drainage" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 15 - Nov 5", limitation: "Cow or calf" }
        ]
      }
    }
  },
  96: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlerless elk" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 275,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Cow or calf" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: "Unlimited",
        segments: [
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land west of the elk fence" }
        ]
      }
    }
  },
  97: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 19", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 16 - Nov 20", limitation: "Antlerless elk" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 19", limitation: "Any elk" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 19", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Sep 20 - Nov 30", limitation: "Cow or calf" }
        ]
      }
    }
  },
  98: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 19", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 16 - Nov 20", limitation: "Antlerless elk" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 19", limitation: "Any elk" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Antlerless elk", restriction: "Valid between Scab Creek and the East Fork River" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 19", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Sep 20 - Nov 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Antlerless elk", restriction: "Valid between Scab Creek and the East Fork River" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 19", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Sep 20 - Nov 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Cow or calf", restriction: "Valid between Scab Creek and the East Fork River" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: "Unlimited",
        segments: [
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Cow or calf", restriction: "Valid on private land" }
        ]
      }
    }
  },
  99: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlerless elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 1 - Nov 20", limitation: "Antlerless elk" }
        ]
      }
    }
  },
  100: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 6 - Oct 31", limitation: "Any elk" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Oct 19", limitation: "Any elk", restriction: "Valid within 2 miles of the Farson-Eden Irrigation Project" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered elk, four (4) points or less on either antler" },
          { weapon: "rifle", dates: "Oct 20 - Nov 9", limitation: "Antlered elk, four (4) points or less on either antler", restriction: "Any elk valid within 2 miles of the Farson-Eden Irrigation Project" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 13 - Nov 9", limitation: "Antlerless elk" }
        ]
      },
      "Type 5": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Nov 10 - Dec 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Cow or calf", restriction: "Valid east of U.S. Highway 191" }
        ]
      }
    }
  },
  102: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 25 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 15 - Dec 7", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Dec 15 - Jan 31", limitation: "Cow or calf" }
        ]
      }
    }
  },
  103: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 25 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Aug 31", limitation: "Cow or calf", restriction: "Valid on or within 1/2 mile of irrigated land" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 15 - Dec 7", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Dec 15 - Jan 31", limitation: "Cow or calf" }
        ]
      }
    }
  },
  104: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 25 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 500,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 15 - Dec 7", limitation: "Cow or calf", validIn: "Also valid in Area 105 in Lincoln County" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Aug 31", limitation: "Cow or calf", restriction: "Valid on or within 1/2 mile of irrigated land" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Dec 15 - Dec 31", limitation: "Cow or calf", validIn: "Also valid in Area 105 in Lincoln County" },
          { weapon: "rifle", dates: "Jan 1 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land or west of U.S. Highway 30" }
        ]
      }
    }
  },
  105: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Cow or calf" }
        ]
      }
    }
  },
  106: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 15 - Jan 31", limitation: "Any elk", restriction: "Valid west of the Black's Fork River" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 15 - Dec 31", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Jan 1 - Jan 31", limitation: "Antlerless elk", restriction: "Valid on private land or west of the Black's Fork River" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 700,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land or west of the Black's Fork River" }
        ]
      }
    }
  },
  107: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 15 - Dec 31", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Jan 1 - Jan 31", limitation: "Antlerless elk", restriction: "Valid off national forest within the Henry's Fork River drainage" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Aug 31", limitation: "Cow or calf", restriction: "Valid in Sweetwater County" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Dec 15 - Jan 31", limitation: "Cow or calf", restriction: "Valid off national forest within the Henry's Fork River Drainage" }
        ]
      }
    }
  },
  108: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 11 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 11 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 11 - Dec 31", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Jan 1 - Jan 31", limitation: "Cow or calf", restriction: "Valid west of the Twentymile Road" }
        ]
      }
    }
  },
  110: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Nov 7", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Cow or calf" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 400,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land" }
        ],
        validIn: ["12", "13", "15", "110"]
      }
    }
  },
  111: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 10 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 15 - Dec 15", limitation: "Any elk", validIn: "Also valid in Area 22" },
          { weapon: "rifle", dates: "Dec 16 - Dec 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Nov 1 - Nov 14", limitation: "Antlered elk, five (5) points or less on either antler" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 10 - Nov 14", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Nov 15 - Dec 31", limitation: "Antlerless elk", validIn: "Also valid in Area 22" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 1 - Nov 14", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Nov 15 - Dec 31", limitation: "Cow or calf", validIn: "Also valid in Area 22" }
        ]
      }
    }
  },
  113: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 5 - Nov 30", limitation: "Any elk" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Spike or antlerless elk" },
          { weapon: "rifle", dates: "Nov 5 - Dec 31", limitation: "Spike or antlerless elk" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: "Unlimited",
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land" }
        ]
      }
    }
  },
  116: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Nov 10", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 11 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 11 - Dec 31", limitation: "Any elk", restriction: "Valid off national forest" },
          { weapon: "rifle", dates: "Jan 1 - Jan 31", limitation: "Antlerless elk", restriction: "Valid off national forest" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: "Unlimited",
        segments: [
          { weapon: "rifle", dates: "Aug 1 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land" }
        ]
      }
    }
  },
  117: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 500,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Spike or antlerless elk" },
          { weapon: "rifle", dates: "Oct 15 - Jan 31", limitation: "Spike or antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 15 - Jan 31", limitation: "Cow or calf" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: "Unlimited",
        segments: [
          { weapon: "rifle", dates: "Aug 1 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land" }
        ]
      }
    }
  },
  118: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered elk" },
          { weapon: "rifle", dates: "Oct 22 - Nov 12", limitation: "Antlered elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 22 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Cow or calf", restriction: "Valid south of the Mineral X Road" }
        ]
      }
    }
  },
  120: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 9 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Dec 15", limitation: "Antlerless elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 9 - Dec 15", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 9 - Dec 15", limitation: "Cow or calf" }
        ]
      }
    }
  },
  122: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Dec 1 - Dec 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Antlered elk, five (5) points or less on either antler" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Cow or calf" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: "Unlimited",
        segments: [
          { weapon: "rifle", dates: "Aug 1 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land" }
        ]
      }
    }
  },
  123: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Any elk" },
          { weapon: "rifle", dates: "Sep 15 - Oct 20", limitation: "Any elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Cow or calf" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: "Unlimited",
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Jan 31", limitation: "Cow or calf", restriction: "Valid on private land" }
        ]
      }
    }
  },
  124: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Any elk" }
        ]
      },
      "Type 4": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Oct 25 - Nov 30", limitation: "Antlerless elk" },
          { weapon: "rifle", dates: "Dec 1 - Dec 31", limitation: "Antlerless elk", restriction: "East of Sweetwater County Road 19" },
          { weapon: "rifle", dates: "Dec 1 - Jan 31", limitation: "Antlerless elk", restriction: "South and east of Standard Road/West Hangout Road" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "rifle", dates: "Oct 25 - Jan 31", limitation: "Cow or calf", restriction: "South and east of Standard Road/West Hangout Road" }
        ]
      }
    }
  },
  125: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Jan 1 - Jan 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Cow or calf" },
          { weapon: "rifle", dates: "Oct 1 - Jan 31", limitation: "Cow or calf" }
        ]
      }
    }
  },
  126: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk", restriction: "Weston County" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk", restriction: "Entire area" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Dec 31", limitation: "Antlerless elk" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: "Unlimited",
        segments: [
          { weapon: "archery", dates: "Aug 1 - Sep 30", limitation: "Cow or calf", restriction: "Private land" },
          { weapon: "rifle", dates: "Oct 1 - Jan 31", limitation: "Cow or calf", restriction: "Entire area" }
        ]
      }
    }
  },
  127: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "rifle", dates: "Aug 1 - Oct 31", limitation: "Any elk" },
          { weapon: "rifle", dates: "Nov 1 - Jan 31", limitation: "Antlerless elk" }
        ]
      }
    }
  },
  128: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 7", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 8 - Oct 14", limitation: "Antlerless elk" }
        ]
      }
    }
  },
  129: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Any elk", restriction: "Off private land" },
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Any elk", restriction: "On private land" },
          { weapon: "rifle", dates: "Sep 15 - Oct 31", limitation: "Any elk", restriction: "Entire area" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Antlerless elk" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 850,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 15", limitation: "Cow or calf", validIn: "Also valid in Area 2 within Johnson County" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: "Unlimited",
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Jan 31", limitation: "Cow or calf", restriction: "Private land" }
        ]
      }
    }
  },
  130: {
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any elk" },
          { weapon: "rifle", dates: "Oct 1 - Oct 23", limitation: "Any elk" }
        ]
      }
    }
  }
};


// Wyoming 2025 Deer Regulations
// Extracted from wy_2025_regs.pdf pages 29-35
// General licenses are over-the-counter for residents, region quota for non-residents
// Limited quota types: 1, 2, 3 (white-tailed), 6, 7, 8 (doe/fawn white-tailed)

const deerData = {
  1: {
    nrRegion: { letter: "A", quota: 2000 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlered deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" }
        ]
      }
    }
  },
  2: {
    nrRegion: { letter: "A", quota: 2000 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlered deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" }
        ]
      }
    }
  },
  3: {
    nrRegion: { letter: "A", quota: 2000 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlered deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" }
        ]
      }
    }
  },
  4: {
    nrRegion: { letter: "A", quota: 2000 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered deer", restriction: "exceptthe lands of the State of Wyoming's Ranch A property shall be closed" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlered deer", restriction: "exceptthe lands of the State of Wyoming's Ranch A property shall be closed" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" }
        ]
      }
    }
  },
  5: {
    nrRegion: { letter: "A", quota: 2000 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlered deer" }
        ]
      }
    }
  },
  6: {
    nrRegion: { letter: "A", quota: 2000 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlered deer" }
        ]
      }
    }
  },
  7: {
    nrRegion: { letter: "B", quota: 800 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      }
    }
  },
  8: {
    nrRegion: { letter: "B", quota: 800 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  9: {
    nrRegion: { letter: "B", quota: 800 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      }
    }
  },
  10: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 21", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  11: {
    nrRegion: { letter: "B", quota: 800 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 16 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  12: {
    nrRegion: { letter: "B", quota: 800 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 16 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  13: {
    nrRegion: { letter: "B", quota: 800 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 16 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  14: {
    nrRegion: { letter: "B", quota: 800 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 16 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  15: {
    nrRegion: { letter: "T", quota: 75 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 20 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 500,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Dec 1 - Dec 31", limitation: "Antlerless white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Doe or fawn", restriction: "on private land" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 450,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  17: {
    nrRegion: { letter: "C", quota: 1800 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  18: {
    nrRegion: { letter: "C", quota: 1800 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 1 - Nov 15", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" }
        ]
      }
    }
  },
  19: {
    nrRegion: { letter: "C", quota: 1800 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer three (3) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer three (3) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 15", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 15", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  21: {
    nrRegion: { letter: "B", quota: 800 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" }
        ]
      }
    }
  },
  22: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer", restriction: "south and east of Wyoming Highway 95, 55 Ranch Road (Converse County Road 23), Sage Creek Divide/Blizzard Heights Road and Ross Road (Converse County Road 31)" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer", restriction: "south and east of Wyoming Highway 95, 55 Ranch Road (Converse County Road 23), Sage Creek Divide/Blizzard Heights Road and Ross Road (Converse County Road 31)" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  23: {
    nrRegion: { letter: "C", quota: 1800 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 500,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 15", limitation: "Doe or fawn", restriction: "on private land" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 1000,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 15", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" }
        ]
      }
    }
  },
  24: {
    nrRegion: { letter: "Y", quota: 1000 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 500,
        segments: [
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any white-tailed deer", restriction: "on private land" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer", restriction: "in the entire area" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer", restriction: "in the entire area" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 15", limitation: "Doe or fawn", restriction: "on private land" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 3000,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 15", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" }
        ]
      }
    }
  },
  25: {
    nrRegion: { letter: "Y", quota: 1000 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer three (3) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Antlered mule deer three (3) points or more on either antler or any white-tailed deer" }
        ]
      }
    }
  },
  26: {
    nrRegion: { letter: "C", quota: 1800 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 500,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 1000,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 15", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" }
        ]
      }
    }
  },
  27: {
    nrRegion: { letter: "Y", quota: 1000 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 1200,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer valid in the entire area", validIn: "Also validin Area 28" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn white-tailed deer valid in the entire area", validIn: "Also validin Area 28" },
          { weapon: "rifle", dates: "Dec 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  28: {
    nrRegion: { letter: "Y", quota: 1000 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 25 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      }
    }
  },
  29: {
    nrRegion: { letter: "C", quota: 1800 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer three (3) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer three (3) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Dec 1 - Dec 31", limitation: "Antlerless white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 700,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" }
        ]
      }
    }
  },
  30: {
    nrRegion: { letter: "Y", quota: 1000 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Dec 1 - Dec 31", limitation: "Antlerless white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 1000,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" },
          { weapon: "rifle", dates: "Oct 15 - Dec 31", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" }
        ]
      }
    }
  },
  31: {
    nrRegion: { letter: "C", quota: 1800 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer three (3) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 10", limitation: "Antlered mule deer three (3) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 700,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" }
        ]
      }
    }
  },
  32: {
    nrRegion: { letter: "Y", quota: 1000 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 21", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 15", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 1000,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" },
          { weapon: "rifle", dates: "Oct 15 - Dec 31", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" }
        ]
      }
    }
  },
  33: {
    nrRegion: { letter: "Y", quota: 1000 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 15", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 16 - Dec 31", limitation: "Antlerless white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 1000,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" },
          { weapon: "rifle", dates: "Oct 15 - Dec 31", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" }
        ]
      }
    }
  },
  34: {
    cwdTesting: "All Types",
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Dec 15", limitation: "Doe or fawn", restriction: "east of Bucknum Road (Natrona County Road 125) and south of Burlington Northern Santa Fe railroad right-of-way" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Dec 15", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  35: {
    nrRegion: { letter: "M", quota: 400 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      }
    }
  },
  36: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  37: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Dec 15", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land within the Buffalo Creek drainage" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land within the Buffalo Creek drainage" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Dec 15", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  39: {
    nrRegion: { letter: "M", quota: 400 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Dec 15", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Dec 15", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  40: {
    nrRegion: { letter: "M", quota: 400 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer", validIn: "Also validin Area 35" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Any white-tailed deer", validIn: "Also validin Area 35" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", validIn: "Also validin Area 35" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn white-tailed deer", validIn: "Also validin Area 35" }
        ]
      }
    }
  },
  41: {
    nrRegion: { letter: "R", quota: 500 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Any deer" },
          { weapon: "rifle", dates: "Oct 25 - Oct 31", limitation: "Any deer", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" },
          { weapon: "rifle", dates: "Oct 15 - Nov 15", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 31", limitation: "Doe or fawn white-tailed deer", validIn: "Also validin Area 46" }
        ]
      }
    }
  },
  46: {
    nrRegion: { letter: "R", quota: 500 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      }
    }
  },
  47: {
    nrRegion: { letter: "R", quota: 500 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Any deer" },
          { weapon: "rifle", dates: "Oct 25 - Oct 31", limitation: "Any deer", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" },
          { weapon: "rifle", dates: "Oct 15 - Nov 15", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 31", limitation: "Doe or fawn white-tailed deer", validIn: "Also validin Area 46" }
        ]
      }
    }
  },
  50: {
    nrRegion: { letter: "R", quota: 500 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer three (3) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Antlered mule deer three (3) points or more on either antler or any white-tailed deer" }
        ]
      }
    }
  },
  51: {
    nrRegion: { letter: "R", quota: 500 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 25 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" },
          { weapon: "rifle", dates: "Oct 15 - Nov 15", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  52: {
    nrRegion: { letter: "R", quota: 500 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 25 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      }
    }
  },
  53: {
    nrRegion: { letter: "R", quota: 500 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer three (3) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Antlered mule deer three (3) points or more on either antler or any white-tailed deer" }
        ]
      }
    }
  },
  59: {
    nrRegion: { letter: "J", quota: 750 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 20 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Dec 1 - Dec 31", limitation: "Antlerless white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 20 - Oct 31", limitation: "Doe or fawn", restriction: "on private land" },
          { weapon: "rifle", dates: "Nov 1 - Dec 31", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  60: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 5", limitation: "Any deer" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any deer off national forest" },
          { weapon: "rifle", dates: "Oct 15 - Nov 5", limitation: "Any deer off national forest" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  61: {
    nrRegion: { letter: "J", quota: 750 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      }
    }
  },
  64: {
    nrRegion: { letter: "J", quota: 750 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer", restriction: "in the entire area" },
          { weapon: "rifle", dates: "Oct 20 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer except the Wyoming Game and Fish Commission's Tom Thorne/Beth Williams Wildlife Habitat Management Area and the Laramie Peak Wildlife Habitat Management Area north of the Tunnel Road (Albany County Road 727) shall be closed" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 20 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Dec 1 - Dec 31", limitation: "Antlerless white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 20 - Oct 31", limitation: "Doe or fawn", restriction: "on private land" },
          { weapon: "rifle", dates: "Nov 1 - Dec 31", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  65: {
    nrRegion: { letter: "J", quota: 750 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 400,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer", validIn: "Also validin that portion of Area 66 in Converse County" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Any white-tailed deer", validIn: "Also validin that portion of Area 66 in Converse County" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 800,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", validIn: "Also validin that portion of Area 66 in Converse County" },
          { weapon: "rifle", dates: "Oct 15 - Dec 31", limitation: "Doe or fawn white-tailed deer", validIn: "Also validin that portion of Area 66 in Converse County" }
        ]
      }
    }
  },
  66: {
    nrRegion: { letter: "D", quota: 300 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 21", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 14", limitation: "Doe or fawn white-tailed deer only", restriction: "in Area 88" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  67: { status: "Closed" },
  70: {
    nrRegion: { letter: "D", quota: 300 },
    cwdTesting: "General",
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 21", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  74: {
    nrRegion: { letter: "D", quota: 300 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  75: {
    nrRegion: { letter: "D", quota: 300 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Dec 1 - Dec 31", limitation: "Antlerless white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  76: {
    nrRegion: { letter: "D", quota: 300 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Dec 1 - Dec 31", limitation: "Antlerless white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  77: {
    nrRegion: { letter: "D", quota: 300 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Dec 1 - Dec 31", limitation: "Antlerless white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  78: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  79: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  80: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  81: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  82: {
    nrRegion: { letter: "W", quota: 600 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 8", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "General (Youth)": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer; youth only" },
          { weapon: "rifle", dates: "Oct 11 - Oct 12", limitation: "Antlered mule deer or any white-tailed deer; youth only" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "rifle", dates: "Nov 1 - Jan 15", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" }
        ]
      }
    }
  },
  84: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      }
    }
  },
  87: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      }
    }
  },
  88: {
    nrRegion: { letter: "D", quota: 300 },
    cwdTesting: "Type 7",
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 21", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 15 - Dec 15", limitation: "Doe or fawn", restriction: "on private land" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 14", limitation: "Doe or fawn white-tailed deer only", restriction: "in Area 88" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  89: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 14", limitation: "Doe or fawn white-tailed deer only", restriction: "in Area 88" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  90: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      }
    }
  },
  92: {
    nrRegion: { letter: "L", quota: 200 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 20", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  94: {
    nrRegion: { letter: "L", quota: 200 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 20", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  96: {
    nrRegion: { letter: "Q", quota: 75 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 20", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      }
    }
  },
  97: {
    nrRegion: { letter: "Q", quota: 75 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 20", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      }
    }
  },
  98: {
    nrRegion: { letter: "Q", quota: 75 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer, archery or muzzle-loading firearms only" },
          { weapon: "rifle", dates: "Oct 15 - Oct 20", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer, archery or muzzle-loading firearms only" }
        ]
      }
    }
  },
  100: {
    nrRegion: { letter: "W", quota: 600 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 6", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "General (Youth)": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer; youth only" },
          { weapon: "rifle", dates: "Oct 11 - Oct 12", limitation: "Antlered mule deer or any white-tailed deer; youth only" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "rifle", dates: "Nov 1 - Jan 15", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" }
        ]
      }
    }
  },
  101: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered deer" }
        ]
      }
    }
  },
  102: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any deer" }
        ]
      }
    }
  },
  105: {
    nrRegion: { letter: "F", quota: 550 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Antlered mule deer", restriction: "on national forest; any mule deer valid on irrigated land; any white-tailed deer valid in the entire area" },
          { weapon: "rifle", dates: "Nov 1 - Nov 5", limitation: "Antlered mule deer", restriction: "off national forest; any white-tailed deer valid in the entire area" },
          { weapon: "rifle", dates: "Nov 6 - Nov 17", limitation: "Antlerless deer", restriction: "on private land" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 20", limitation: "Any deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  106: {
    nrRegion: { letter: "F", quota: 550 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer within the North Absaroka Wilderness; any white-tailed deer", restriction: "in the entire area" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 20", limitation: "Any deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 15", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  109: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 20", limitation: "Any deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 35,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Dec 31", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  110: {
    nrRegion: { letter: "F", quota: 550 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 10", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  111: {
    nrRegion: { letter: "F", quota: 550 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 10", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  112: {
    nrRegion: { letter: "F", quota: 550 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 10", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  113: {
    nrRegion: { letter: "F", quota: 550 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 10", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Doe or fawn", restriction: "north and east of Carter Creek" },
          { weapon: "rifle", dates: "Sep 15 - Dec 31", limitation: "Doe or fawn", restriction: "north and east of Carter Creek" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  114: {
    nrRegion: { letter: "F", quota: 550 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 10", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      }
    }
  },
  115: {
    nrRegion: { letter: "F", quota: 550 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 9", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 10 - Oct 27", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      }
    }
  },
  116: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Oct 14", limitation: "Doe or fawn white-tailed deer", restriction: "on private land in the Wood River drainage" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  117: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Oct 15", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  118: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  119: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 15", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  120: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 15", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 15", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  121: {
    nrRegion: { letter: "X", quota: 100 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any deer on private land; antlered mule deer or any white-tailed deer off private land" },
          { weapon: "rifle", dates: "Nov 1 - Nov 10", limitation: "Any deer on private land; antlered mule deer or any white-tailed deer off private land" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Dec 15", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Nov 30", limitation: "Doe or fawn", restriction: "on private land" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Dec 15", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  122: {
    nrRegion: { letter: "X", quota: 100 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any deer on private land; antlered mule deer or any white-tailed deer off private land" },
          { weapon: "rifle", dates: "Nov 1 - Nov 10", limitation: "Any deer on private land; antlered mule deer or any white-tailed deer off private land" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Dec 15", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn", restriction: "on private land" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Dec 15", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  123: {
    nrRegion: { letter: "X", quota: 100 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn", restriction: "on private land" }
        ]
      }
    }
  },
  124: {
    nrRegion: { letter: "X", quota: 100 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 10", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  125: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 15", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 16 - Dec 15", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Dec 15", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  127: {
    nrRegion: { letter: "X", quota: 100 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 24", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Dec 15", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Dec 15", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  128: {
    nrRegion: { letter: "L", quota: 200 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 20", limitation: "Any deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" }
        ]
      }
    }
  },
  130: {
    nrRegion: { letter: "H", quota: 350 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 6", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 5,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      }
    }
  },
  131: {
    nrRegion: { letter: "W", quota: 600 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 6", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "west of the Blue Rim (Sweetwater County Road 5) and Old Stauffer Roads (Sweetwater County Road 7) and south of the OCI Entrance Road (Sweetwater County Road 6)" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Doe or fawn", restriction: "west of the Blue Rim (Sweetwater County Road 5) and Old Stauffer Roads (Sweetwater County Road 7) and south of the OCI Entrance Road (Sweetwater County Road 6)" }
        ]
      }
    }
  },
  132: {
    nrRegion: { letter: "K", quota: 200 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 6", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "General (Youth)": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer; youth only" },
          { weapon: "rifle", dates: "Oct 1 - Oct 12", limitation: "Antlered mule deer or any white-tailed deer; youth only" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on or within one (1) mile of irrigated land in Sweetwater County west of Wyoming Highway 530 and north of Sweetwater County Road 1 and BLM Road 4315" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Doe or fawn", restriction: "on or within one (1) mile of irrigated land in Sweetwater County west of Wyoming Highway 530 and north of Sweetwater County Road 1 and BLM Road 4315" }
        ]
      }
    }
  },
  133: {
    nrRegion: { letter: "K", quota: 200 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 6", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "General (Youth)": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer; youth only" },
          { weapon: "rifle", dates: "Oct 1 - Oct 12", limitation: "Antlered mule deer or any white-tailed deer; youth only" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      }
    }
  },
  134: {
    nrRegion: { letter: "K", quota: 200 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 6", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "General (Youth)": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer; youth only" },
          { weapon: "rifle", dates: "Oct 1 - Oct 12", limitation: "Antlered mule deer or any white-tailed deer; youth only" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      }
    }
  },
  135: {
    nrRegion: { letter: "G", quota: 250 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 6", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "General (Youth)": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer; youth only" },
          { weapon: "rifle", dates: "Oct 1 - Oct 12", limitation: "Antlered mule deer or any white-tailed deer; youth only" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      }
    }
  },
  138: {
    nrRegion: { letter: "H", quota: 350 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      }
    }
  },
  139: {
    nrRegion: { letter: "H", quota: 350 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      }
    }
  },
  140: {
    nrRegion: { letter: "H", quota: 350 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      }
    }
  },
  141: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 21", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 22 - Oct 31", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer on national forest" }
        ]
      }
    }
  },
  142: {
    nrRegion: { letter: "H", quota: 350 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      }
    }
  },
  143: {
    nrRegion: { letter: "G", quota: 250 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      }
    }
  },
  144: {
    nrRegion: { letter: "G", quota: 250 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      }
    }
  },
  145: {
    nrRegion: { letter: "G", quota: 250 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Nov 15", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 16 - Jan 31", limitation: "Antlerless white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Nov 1 - Jan 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  146: {
    nrRegion: { letter: "H", quota: 350 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      }
    }
  },
  148: {
    nrRegion: { letter: "L", quota: 200 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Oct 25", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  149: {
    nrRegion: { letter: "H", quota: 350 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  150: {
    nrRegion: { letter: "H", quota: 350 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  151: {
    nrRegion: { letter: "H", quota: 350 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  152: {
    nrRegion: { letter: "H", quota: 350 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  153: {
    nrRegion: { letter: "H", quota: 350 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      }
    }
  },
  154: {
    nrRegion: { letter: "H", quota: 350 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      }
    }
  },
  155: {
    nrRegion: { letter: "H", quota: 350 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  156: {
    nrRegion: { letter: "H", quota: 350 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 14", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Sep 15 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  157: {
    nrRegion: { letter: "L", quota: 200 },
    cwdTesting: "All Types",
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 1 - Nov 10", limitation: "Doe or fawn" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: "Unlimited",
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" }
        ]
      }
    }
  },
  160: {
    nrRegion: { letter: "L", quota: 200 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 20", limitation: "Antlered mule deer four (4) points or more on either antler or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  163: {
    nrRegion: { letter: "Y", quota: 1000 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 21", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 15", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 1000,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" },
          { weapon: "rifle", dates: "Oct 15 - Dec 31", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" }
        ]
      }
    }
  },
  164: {
    nrRegion: { letter: "M", quota: 400 },
    cwdTesting: "Type 1, Type 7",
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer", restriction: "on or within one (1) mile of irrigated land" },
          { weapon: "rifle", dates: "Nov 15 - Nov 30", limitation: "Antlered mule deer or any white-tailed deer", restriction: "on or within one (1) mile of irrigated land" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 15", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" },
          { weapon: "rifle", dates: "Oct 1 - Nov 15", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on or within one (1) mile of irrigated land" },
          { weapon: "rifle", dates: "Nov 15 - Nov 30", limitation: "Doe or fawn", restriction: "on or within one (1) mile of irrigated land" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  165: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Dec 15", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Dec 31", limitation: "Doe or fawn white-tailed deer" }
        ]
      }
    }
  },
  168: {
    nrRegion: { letter: "K", quota: 200 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 6", limitation: "Antlered mule deer or any white-tailed deer" }
        ]
      },
      "General (Youth)": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer; youth only" },
          { weapon: "rifle", dates: "Oct 1 - Oct 12", limitation: "Antlered mule deer or any white-tailed deer; youth only" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any white-tailed deer" }
        ]
      }
    }
  },
  169: {
    nrRegion: { letter: "Y", quota: 1000 },
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 15 - Oct 21", limitation: "Antlered mule deer or any white-tailed deer" },
          { weapon: "rifle", dates: "Nov 1 - Nov 15", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 1000,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "on private land" },
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" },
          { weapon: "rifle", dates: "Oct 15 - Dec 31", limitation: "Doe or fawn white-tailed deer", restriction: "in the entire area" }
        ]
      }
    }
  },
  171: {
    nrRegion: { letter: "L", quota: 200 },
    cwdTesting: "All Types",
    licenses: {
      "General": {
        category: "general",
        quota: null,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any deer" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any deer" }
        ]
      },
      "Type 3": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Any white-tailed deer" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Any white-tailed deer" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "archery", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 1 - Dec 31", limitation: "Doe or fawn" }
        ]
      }
    }
  }
};


// Wyoming 2025 Antelope Regulations
// Extracted from wy_2025_regs.pdf pages 17-19
// All antelope licenses are limited quota (no general tags)

const antelopeData = {
  1: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 400,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Nov 20", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 1 - Nov 20", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  2: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Nov 20", limitation: "Any antelope" }
        ]
      }
    }
  },
  3: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 225,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Nov 20", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 1 - Nov 20", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  4: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Nov 20", limitation: "Any antelope" }
        ]
      }
    }
  },
  5: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Nov 20", limitation: "Any antelope" }
        ]
      }
    }
  },
  6: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope", validIn: "Also validon private land in that portion of Area 8 in Weston County" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Any antelope", validIn: "Also validon private land in that portion of Area 8 in Weston County" }
        ]
      }
    }
  },
  7: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Any antelope" }
        ]
      }
    }
  },
  8: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 225,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Any antelope" }
        ]
      }
    }
  },
  9: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope", validIn: "Also validin that portion of Area 11 in Converse or Niobrara counties" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any antelope", validIn: "Also validin that portion of Area 11 in Converse or Niobrara counties" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Nov 1 - Nov 30", limitation: "Doe or fawn", restriction: "on private land" }
        ]
      }
    }
  },
  10: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  11: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 400,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  15: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 350,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  16: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  17: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 500,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 20", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 1 - Oct 20", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  18: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 20", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 1 - Oct 20", limitation: "Doe or fawn" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 1 - Oct 20", limitation: "Doe or fawn", restriction: "on private land" }
        ]
      }
    }
  },
  19: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 20", limitation: "Any antelope" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 1 - Oct 20", limitation: "Doe or fawn", restriction: "on private land" }
        ]
      }
    }
  },
  20: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Oct 14", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 15 - Nov 15", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Oct 14", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 15 - Nov 15", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  21: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 400,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Oct 14", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Oct 14", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 15 - Oct 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  22: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 600,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on private land north of Crazy Woman Creek" },
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn valid in the entire area" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Doe or fawn valid in the entire area" }
        ]
      }
    }
  },
  23: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 550,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 1500,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any antelope", restriction: "on private land" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Doe or fawn" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 700,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Doe or fawn", restriction: "on private land" }
        ]
      }
    }
  },
  24: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 20", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 425,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 1 - Oct 20", limitation: "Any antelope", restriction: "on private land" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 1 - Oct 20", limitation: "Doe or fawn" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 1 - Oct 20", limitation: "Doe or fawn", restriction: "on private land" }
        ]
      }
    }
  },
  25: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 550,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 14", limitation: "Any antelope" }
        ]
      }
    }
  },
  26: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 1000,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 23", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 24 - Oct 14", limitation: "Any antelope" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 23", limitation: "Doe or fawn", restriction: "on or within one (1) mile of irrigated land" },
          { weapon: "rifle", dates: "Sep 24 - Oct 31", limitation: "Doe or fawn", restriction: "on or within one (1) mile of irrigated land" }
        ]
      }
    }
  },
  27: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Any antelope" }
        ]
      }
    }
  },
  29: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any antelope", restriction: "on private land" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn", restriction: "on private land" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Doe or fawn", restriction: "on private land" }
        ]
      }
    }
  },
  30: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 500,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Oct 4", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 5 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Oct 4", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 5 - Oct 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  31: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 24", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 25 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  32: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 700,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 24", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 25 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 600,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 24", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 25 - Oct 31", limitation: "Doe or fawn" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 24", limitation: "Doe or fawn", restriction: "on or within one (1) mile of irrigated land" },
          { weapon: "rifle", dates: "Sep 25 - Nov 15", limitation: "Doe or fawn", restriction: "on or within one (1) mile of irrigated land" }
        ]
      }
    }
  },
  34: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 600,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 14", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 20 - Nov 30", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  37: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 400,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  38: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 400,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Oct 4", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 5 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Oct 4", limitation: "Any antelope south of Wyoming Highway 34" },
          { weapon: "rifle", dates: "Oct 5 - Nov 30", limitation: "Any antelope south of Wyoming Highway 34" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Oct 4", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Nov 1 - Dec 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  42: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 24", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 25 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 24", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 25 - Oct 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  43: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 14", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 15 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  44: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 14", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 15 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  45: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 600,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 14", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 15 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 14", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 15 - Oct 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  46: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 24", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 25 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 24", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 5 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  47: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 600,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 24", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 25 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 500,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 24", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 5 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 600,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 24", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 25 - Oct 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  48: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 24", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 25 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 24", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 5 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 24", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 25 - Oct 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  50: {
    licenses: {
      "Type 0": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "muzzleloader", dates: "Sep 1 - Sep 15", limitation: "Any antelope, muzzle-loading firearms only" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Aug 31", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 16 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Aug 31", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 16 - Oct 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  51: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 15", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 16 - Nov 14", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 15", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 16 - Nov 14", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  52: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 15", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 16 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 15", limitation: "Any antelope valid south of North Spring Creek" },
          { weapon: "rifle", dates: "Sep 16 - Nov 14", limitation: "Any antelope valid south of North Spring Creek" }
        ]
      }
    }
  },
  53: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Aug 31", limitation: "Doe or fawn", restriction: "south of Wyoming Highway 70 and west of Carbon County Road 601 in Area 53, and on private land within one (1) mile of Carbon County Road 603 in Area 57" },
          { weapon: "rifle", dates: "Sep 1 - Nov 30", limitation: "Doe or fawn", restriction: "south of Wyoming Highway 70 and west of Carbon County Road 601 in Area 53, and on private land within one (1) mile of Carbon County Road 603 in Area 57" }
        ]
      }
    }
  },
  55: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  56: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  57: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope valid west of Sweetwater County Road 23S and B.L.M. Road 3310, and north and east of B.L.M. Roads 4411 and 4409" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope valid west of Sweetwater County Road 23S and B.L.M. Road 3310, and north and east of B.L.M. Roads 4411 and 4409" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Aug 31", limitation: "Doe or fawn", restriction: "south of Wyoming Highway 70 and west of Carbon County Road 601 in Area 53, and on private land within one (1) mile of Carbon County Road 603 in Area 57" },
          { weapon: "rifle", dates: "Sep 1 - Nov 30", limitation: "Doe or fawn", restriction: "south of Wyoming Highway 70 and west of Carbon County Road 601 in Area 53, and on private land within one (1) mile of Carbon County Road 603 in Area 57" }
        ]
      }
    }
  },
  58: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  59: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  60: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  61: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 12", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 13 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  62: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 12", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 13 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  63: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope", restriction: "east of Buzzard Road (Natrona County Road 410-Carbon County Road 497)" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope", restriction: "east of Buzzard Road (Natrona County Road 410-Carbon County Road 497)" }
        ]
      }
    }
  },
  64: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  65: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Aug 31", limitation: "Doe or fawn valid north of the Little Popo Agie River", validIn: "Also validin Area 66 west of the Little Popo Agie River" },
          { weapon: "rifle", dates: "Sep 1 - Nov 7", limitation: "Doe or fawn valid north of the Little Popo Agie River", validIn: "Also validin Area 66 west of the Little Popo Agie River" }
        ]
      }
    }
  },
  66: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  67: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  68: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  69: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 14", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 15 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  70: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 14", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 15 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 14", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 15 - Oct 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  71: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 14", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 15 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  72: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 800,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 14", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 15 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 14", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 15 - Oct 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  73: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 400,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 14", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 15 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 31", limitation: "Doe or fawn", restriction: "east of Bucknum Road (Natrona County Road 125) and south of Burlington Northern Santa Fe railroad right-of-way" }
        ]
      }
    }
  },
  74: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  75: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  76: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  77: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 14", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Aug 31", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" },
          { weapon: "rifle", dates: "Sep 1 - Oct 14", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Aug 31", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Aug 31", limitation: "Doe or fawn valid north of Wyoming Highway 30 or within one-half (1/2) mile south of Wyoming Highway 30" },
          { weapon: "rifle", dates: "Sep 1 - Oct 31", limitation: "Doe or fawn valid north of Wyoming Highway 30 or within one-half (1/2) mile south of Wyoming Highway 30" }
        ]
      }
    }
  },
  78: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Nov 30", limitation: "Doe or fawn", restriction: "on irrigated land" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn", restriction: "on irrigated land in Big Horn County" }
        ]
      }
    }
  },
  79: {
    licenses: {
      "Type 0": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "muzzleloader", dates: "Oct 1 - Oct 31", limitation: "Any antelope, muzzle-loading firearms only" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Oct 1 - Oct 15", limitation: "Any antelope", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Nov 30", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 9": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" }
        ]
      }
    }
  },
  80: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope", restriction: "on private land east of Wyoming Highway 120" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope", restriction: "on private land east of Wyoming Highway 120" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Doe or fawn", restriction: "on private land" },
          { weapon: "rifle", dates: "Sep 20 - Nov 15", limitation: "Doe or fawn", restriction: "on private land" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Doe or fawn", restriction: "on private land east of Wyoming Highway 120" },
          { weapon: "rifle", dates: "Sep 20 - Nov 15", limitation: "Doe or fawn", restriction: "on private land east of Wyoming Highway 120" }
        ]
      }
    }
  },
  81: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Nov 15", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 20 - Nov 15", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  82: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 14", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope valid east of Wyoming Highway 120" },
          { weapon: "rifle", dates: "Oct 15 - Nov 15", limitation: "Any antelope valid east of Wyoming Highway 120" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 20 - Oct 14", limitation: "Doe or fawn" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Doe or fawn valid in Big Horn County" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn valid in Big Horn County" }
        ]
      }
    }
  },
  83: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Nov 7", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Aug 31", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" },
          { weapon: "rifle", dates: "Sep 1 - Nov 30", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Aug 31", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land within Gooseberry Creek drainage" },
          { weapon: "rifle", dates: "Sep 1 - Oct 14", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land within Gooseberry Creek drainage" }
        ]
      },
      "Type 8": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Aug 31", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land within Gooseberry Creek drainage" },
          { weapon: "rifle", dates: "Oct 15 - Dec 15", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land within Gooseberry Creek drainage" }
        ]
      }
    }
  },
  84: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  85: { status: "Closed" },
  86: { status: "Closed" },
  87: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 20,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 10 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 15,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 25 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  88: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 35,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 10 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  89: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 20,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 10 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 20,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 10 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  90: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 35,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 10 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  91: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 10 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 31", limitation: "Doe or fawn", restriction: "on private land and Bureau of Reclamation land within Sweetwater County" }
        ]
      }
    }
  },
  92: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 200,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 10 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  93: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 10 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 31", limitation: "Doe or fawn", restriction: "on private irrigated land" }
        ]
      }
    }
  },
  94: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 400,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 10 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 31", limitation: "Doe or fawn", restriction: "on private irrigated land" }
        ]
      }
    }
  },
  95: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 10 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 31", limitation: "Doe or fawn", restriction: "on or within one-quarter (1/4) mile of private irrigated land" }
        ]
      }
    }
  },
  96: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 10 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  97: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 31", limitation: "Any antelope", restriction: "in Area 97 south of U.S. Highway 26 or Wyoming Highway 134 and east of Eight Mile Road, and in all of Area 117" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 31", limitation: "Doe or fawn", restriction: "in Area 97 south of U.S. Highway 26 or Wyoming Highway 134 and east of Eight Mile Road, and in all of Area 117" }
        ]
      }
    }
  },
  98: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 10 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  99: {
    licenses: {
      "Type 0": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "muzzleloader", dates: "Sep 1 - Oct 31", limitation: "Any antelope, muzzle-loading firearms only" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 125,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 10 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Nov 30", limitation: "Any antelope", restriction: "north and west of Wyoming Highway 410 and west of Uinta County Road 271" }
        ]
      }
    }
  },
  100: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 10 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  101: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 35,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 10 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  102: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 300,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Oct 14", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 15 - Nov 15", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 175,
        segments: [
          { weapon: "rifle", dates: "Sep 1 - Sep 30", limitation: "Doe or fawn", restriction: "on private land" },
          { weapon: "archery", dates: "Aug 15 - Oct 14", limitation: "Doe or fawn valid in the entire area" },
          { weapon: "rifle", dates: "Oct 15 - Nov 15", limitation: "Doe or fawn valid in the entire area" }
        ]
      }
    }
  },
  103: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Oct 4", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 5 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Oct 4", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 5 - Nov 30", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  106: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 100,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  107: {
    licenses: {
      "Type 0": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "muzzleloader", dates: "Aug 20 - Sep 9", limitation: "Any antelope, handguns and muzzle-loading firearms only" }
        ]
      },
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 9", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 10 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  108: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  109: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 250,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 1 - Nov 30", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  110: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 14", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 20 - Oct 14", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  111: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 14", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Sep 20 - Dec 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  112: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      }
    }
  },
  113: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 11 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Doe or fawn" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Doe or fawn" }
        ]
      }
    }
  },
  114: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Aug 31", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" },
          { weapon: "rifle", dates: "Sep 1 - Oct 14", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Aug 31", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" },
          { weapon: "rifle", dates: "Oct 15 - Nov 30", limitation: "Doe or fawn", restriction: "on or within one-half (1/2) mile of irrigated land" }
        ]
      }
    }
  },
  115: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 150,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 30", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Oct 1 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 6": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Aug 31", limitation: "Doe or fawn valid east of the Nowood River or south of the Nowater Stock Trail (B.L.M. Road 1404)" },
          { weapon: "rifle", dates: "Sep 1 - Nov 30", limitation: "Doe or fawn valid east of the Nowood River or south of the Nowater Stock Trail (B.L.M. Road 1404)" }
        ]
      }
    }
  },
  117: {
    licenses: {
      "Type 1": {
        category: "limited",
        quota: 75,
        segments: [
          { weapon: "archery", dates: "Aug 15 - Sep 19", limitation: "Any antelope" },
          { weapon: "rifle", dates: "Sep 20 - Oct 31", limitation: "Any antelope" }
        ]
      },
      "Type 2": {
        category: "limited",
        quota: 25,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 31", limitation: "Any antelope", restriction: "in Area 97 south of U.S. Highway 26 or Wyoming Highway 134 and east of Eight Mile Road, and in all of Area 117" }
        ]
      },
      "Type 7": {
        category: "limited",
        quota: 50,
        segments: [
          { weapon: "rifle", dates: "Aug 15 - Oct 31", limitation: "Doe or fawn", restriction: "in Area 97 south of U.S. Highway 26 or Wyoming Highway 134 and east of Eight Mile Road, and in all of Area 117" }
        ]
      }
    }
  }
};


/**
 * Wyoming 2025 Hunting Rules & Regulations Database
 * Extracted from official WGFD regulations (pages 2-15)
 * For RegReady app - searchable rules database
 */

const rulesData = [
  // ==================== TERMS & DEFINITIONS ====================
  {
    category: "Terms & Definitions",
    title: "Accompanied by a mentor",
    content: "\"Accompanied by a mentor\" means being directly supervised at all times by a mentor who is within sight and direct voice contact.",
    keywords: ["mentor", "supervised", "youth", "accompanied", "sight", "voice contact"]
  },
  {
    category: "Terms & Definitions",
    title: "Adult",
    content: "\"Adult\" means a person eighteen (18) years of age or older.",
    keywords: ["adult", "age", "eighteen", "18"]
  },
  {
    category: "Terms & Definitions",
    title: "Aircraft",
    content: "\"Aircraft\" means any machine or device capable of atmospheric flight including but not limited to an airplane, helicopter, glider, dirigible or unmanned aerial vehicle (UAV).",
    keywords: ["aircraft", "airplane", "helicopter", "glider", "UAV", "drone", "flight"]
  },
  {
    category: "Terms & Definitions",
    title: "Antlered",
    content: "\"Antlered\" means a deer, elk or moose that has visible antler growth plainly protruding from the skull. Where a minimum number of antler points are specified, points shall be counted on the side with the greater number of points.",
    keywords: ["antlered", "deer", "elk", "moose", "antler", "points", "skull"]
  },
  {
    category: "Terms & Definitions",
    title: "Antlerless",
    content: "\"Antlerless\" means a deer, elk or moose that has no antler growth plainly protruding from the skull. Females and young-of-the-year without visible antlers are antlerless big game animals.",
    keywords: ["antlerless", "deer", "elk", "moose", "female", "young", "doe", "cow"]
  },
  {
    category: "Terms & Definitions",
    title: "Approved Landfill or Incinerator",
    content: "\"Approved Landfill or Incinerator\" means a landfill or incinerator permitted by the State of Wyoming Department of Environmental Quality to dispose of animal carcasses.",
    keywords: ["landfill", "incinerator", "disposal", "carcass", "CWD"]
  },
  {
    category: "Terms & Definitions",
    title: "Artificial light or lighting device",
    content: "\"Artificial light or lighting device\" means any man-made light or lighting device which projects a visible light outside the device, or any electronic device that provides an enhanced ability to see in the dark.",
    keywords: ["artificial light", "lighting", "night vision", "electronic", "dark"]
  },
  {
    category: "Terms & Definitions",
    title: "Bag limit",
    content: "\"Bag limit\" means the maximum number of big game or trophy game animals that may be taken by an individual possessing a proper license.",
    keywords: ["bag limit", "maximum", "harvest", "limit"]
  },
  {
    category: "Terms & Definitions",
    title: "Big game animal",
    content: "\"Big game animal\" means antelope, bighorn sheep, deer, elk, moose or mountain goat.",
    keywords: ["big game", "antelope", "bighorn sheep", "deer", "elk", "moose", "mountain goat"]
  },
  {
    category: "Terms & Definitions",
    title: "Buck antelope",
    content: "\"Buck antelope\" means male antelope with visible horns and dark cheek patch at the base of the ear.",
    keywords: ["buck", "antelope", "male", "horns", "cheek patch"]
  },
  {
    category: "Terms & Definitions",
    title: "Bureau of Land Management (B.L.M.)",
    content: "\"Bureau of Land Management (B.L.M.)\" means the land management agency administered by the U.S. Department of the Interior.",
    keywords: ["BLM", "Bureau of Land Management", "federal land", "public land"]
  },
  {
    category: "Terms & Definitions",
    title: "Bureau of Reclamation Land",
    content: "\"Bureau of Reclamation Land\" means lands administered by the U.S. Department of the Interior Bureau of Reclamation.",
    keywords: ["Bureau of Reclamation", "federal land", "public land"]
  },
  {
    category: "Terms & Definitions",
    title: "Calf",
    content: "\"Calf\" means young-of-the-year elk or young-of-the-year moose.",
    keywords: ["calf", "elk", "moose", "young", "juvenile"]
  },
  {
    category: "Terms & Definitions",
    title: "Certificate of Competency and Safety",
    content: "\"Certificate of Competency and Safety in the Use and Handling of Firearms\" means a certification issued for the completion of an approved hunter safety course.",
    keywords: ["hunter safety", "certificate", "competency", "firearms", "training"]
  },
  {
    category: "Terms & Definitions",
    title: "Cow",
    content: "\"Cow\" means an adult female elk or an adult female moose.",
    keywords: ["cow", "elk", "moose", "female", "adult"]
  },
  {
    category: "Terms & Definitions",
    title: "Designated road",
    content: "\"Designated road\" means an established road marked with a white arrow sign.",
    keywords: ["designated road", "road", "white arrow", "sign", "travel"]
  },
  {
    category: "Terms & Definitions",
    title: "Doe",
    content: "\"Doe\" means an adult female antelope or adult female deer.",
    keywords: ["doe", "antelope", "deer", "female", "adult"]
  },
  {
    category: "Terms & Definitions",
    title: "Domicile",
    content: "\"Domicile\" means that place where a person has his true, fixed and permanent home to which whenever the person is temporarily absent the person has the intention of returning. To prove domicile as required by Wyoming Statutes § 23-1-102 and § 23-1-107 a person shall be able to establish that he: physically resides in Wyoming; has made his permanent home in Wyoming; is not residing in Wyoming for a special or temporary purpose; and, has abandoned his domicile in all other states, territories or countries.",
    keywords: ["domicile", "residence", "resident", "home", "permanent"]
  },
  {
    category: "Terms & Definitions",
    title: "Drainage",
    content: "\"Drainage\" means all lands within the watershed of a named river or stream, including all tributaries and standing waters, which drain into that river or stream.",
    keywords: ["drainage", "watershed", "river", "stream", "tributaries"]
  },
  {
    category: "Terms & Definitions",
    title: "Edible portion of big game animal",
    content: "\"Edible portion of big game animal\" means the meat from the front quarters as far down as the knees, meat from the hindquarters as far down as the hocks, and the meat along the backbone between the neck and hindquarters including the loins and tenderloins, excluding meat on the ribs and neck.",
    keywords: ["edible portion", "meat", "quarters", "backstrap", "tenderloin", "waste"]
  },
  {
    category: "Terms & Definitions",
    title: "Established road",
    content: "\"Established road\" means any road or trail that has been graded or constructed to carry motor vehicles or on which repeated legal motor vehicle traffic has created well-defined tracks.",
    keywords: ["established road", "road", "trail", "motor vehicle", "tracks"]
  },
  {
    category: "Terms & Definitions",
    title: "Expanding point bullet",
    content: "\"Expanding point bullet\" means any bullet designed by its manufacturer to create a wound channel larger than the bullet's diameter.",
    keywords: ["expanding point", "bullet", "ammunition", "wound channel"]
  },
  {
    category: "Terms & Definitions",
    title: "Fawn",
    content: "\"Fawn\" means a young-of-the-year antelope or young-of-the-year deer.",
    keywords: ["fawn", "antelope", "deer", "young", "juvenile"]
  },
  {
    category: "Terms & Definitions",
    title: "General licenses",
    content: "\"General licenses\" means big or trophy game or wild turkey licenses valid in any hunt area in which licenses have not been totally limited in number. General licenses shall be valid only under species, sex, age class and harvest limitations that are in effect for each hunt area.",
    keywords: ["general license", "hunt area", "species", "sex", "limitations"]
  },
  {
    category: "Terms & Definitions",
    title: "Handgun",
    content: "\"Handgun\" means a firearm that has a barrel length of less than sixteen (16) inches, has a short stock, and is designed to be fired by the use of a single hand without shoulder support.",
    keywords: ["handgun", "pistol", "firearm", "barrel", "16 inches"]
  },
  {
    category: "Terms & Definitions",
    title: "Hunt area",
    content: "\"Hunt area\" means the area within a defined geographic boundary where a license shall be valid.",
    keywords: ["hunt area", "boundary", "geographic", "license valid"]
  },
  {
    category: "Terms & Definitions",
    title: "Irrigated land",
    content: "\"Irrigated land\" means agricultural lands that are supplied with supplemental water by ditches, pipes, flooding or spraying.",
    keywords: ["irrigated land", "agricultural", "water", "ditches", "farming"]
  },
  {
    category: "Terms & Definitions",
    title: "Issue-After License",
    content: "\"Issue-After License\" means licenses that are limited in number and that were not issued in the initial or leftover drawings; these licenses shall be issued on an as processed basis through the ELS.",
    keywords: ["issue-after", "license", "drawing", "ELS", "leftover"]
  },
  {
    category: "Terms & Definitions",
    title: "Leftover Drawing",
    content: "\"Leftover Drawing\" means a computer processed random drawing to issue licenses remaining after the initial drawings.",
    keywords: ["leftover drawing", "random", "computer", "licenses", "initial drawing"]
  },
  {
    category: "Terms & Definitions",
    title: "Leftover Licenses",
    content: "\"Leftover Licenses\" means limited quota licenses and nonresident region general deer licenses issued in the leftover drawing.",
    keywords: ["leftover licenses", "limited quota", "nonresident", "deer", "drawing"]
  },
  {
    category: "Terms & Definitions",
    title: "Limited Quota Licenses",
    content: "\"Limited Quota Licenses\" means licenses that are limited in number and valid only in a specified hunt area(s) or portion(s) of a hunt area. Limited quota licenses shall be valid only under species, sex, age class, harvest, and weapon type limitations that are in effect for each hunt area.",
    keywords: ["limited quota", "license", "hunt area", "weapon type", "sex", "species"]
  },
  {
    category: "Terms & Definitions",
    title: "Mentee",
    content: "\"Mentee\" means a person who has received special authorization from the Department to take wildlife and who has not received a certificate of competency and safety in the use and handling of firearms.",
    keywords: ["mentee", "youth", "hunter safety", "authorization", "mentor program"]
  },
  {
    category: "Terms & Definitions",
    title: "Mentor",
    content: "\"Mentor\" means a person who is at least eighteen (18) years of age, can demonstrate they have a certificate of competency and safety in the use and handling of firearms, possesses a valid Wyoming hunting license and is directly supervising not more than one (1) mentee, other than immediate family members, at a time while in the field.",
    keywords: ["mentor", "18 years", "hunter safety", "supervising", "mentee", "family"]
  },
  {
    category: "Terms & Definitions",
    title: "Motorized vehicle",
    content: "\"Motorized vehicle\" means any vehicle powered by an internal combustion engine or electric motor.",
    keywords: ["motorized vehicle", "engine", "electric", "motor", "vehicle"]
  },
  {
    category: "Terms & Definitions",
    title: "Muzzle-loading firearm",
    content: "\"Muzzle-loading firearm\" means a muzzle-loading rifle or muzzle-loading handgun of at least .40 caliber and firing an expanding point bullet or lead ball and using a charge of at least fifty (50) grains of black powder or its equivalent.",
    keywords: ["muzzleloader", "muzzle-loading", ".40 caliber", "black powder", "50 grains", "lead ball"]
  },
  {
    category: "Terms & Definitions",
    title: "National Elk Refuge Permit",
    content: "\"National Elk Refuge Permit\" means a permit that allows a properly licensed elk hunter to access the National Elk Refuge to take an elk.",
    keywords: ["National Elk Refuge", "permit", "elk", "Jackson", "refuge"]
  },
  {
    category: "Terms & Definitions",
    title: "Off national forest",
    content: "\"Off national forest\" means lands other than those administered by the U.S. Forest Service.",
    keywords: ["off national forest", "forest service", "federal land", "public land"]
  },
  {
    category: "Terms & Definitions",
    title: "On national forest",
    content: "\"On national forest\" means lands administered by the U.S. Forest Service.",
    keywords: ["on national forest", "forest service", "federal land", "USFS"]
  },
  {
    category: "Terms & Definitions",
    title: "On national grassland",
    content: "\"On national grassland\" means the Thunder Basin National Grassland and Bankhead-Jones lands administered by the U.S. Forest Service.",
    keywords: ["national grassland", "Thunder Basin", "Bankhead-Jones", "forest service"]
  },
  {
    category: "Terms & Definitions",
    title: "Park permit",
    content: "\"Park permit\" means a permit issued by Grand Teton National Park that allows a properly licensed elk hunter to take an elk within Grand Teton National Park.",
    keywords: ["park permit", "Grand Teton", "elk", "national park", "permit"]
  },
  {
    category: "Terms & Definitions",
    title: "Point (antler)",
    content: "\"Point\" means any protrusion from an antler one (1) inch or more in length.",
    keywords: ["point", "antler", "inch", "protrusion", "tine"]
  },
  {
    category: "Terms & Definitions",
    title: "Predacious bird",
    content: "\"Predacious bird\" means English sparrow and starling.",
    keywords: ["predacious bird", "English sparrow", "starling", "pest"]
  },
  {
    category: "Terms & Definitions",
    title: "Predatory animal",
    content: "\"Predatory animal\" means coyote, jackrabbit, porcupine, raccoon, red fox, skunk or stray cat. \"Predatory animal\" also means gray wolf located outside the Wolf Trophy Game Management Area and Seasonal Wolf Trophy Game Management Area as described in Wyoming Statute § 23-1-101 (a) (xii) (B) (l) and (ll).",
    keywords: ["predatory animal", "coyote", "jackrabbit", "porcupine", "raccoon", "red fox", "skunk", "stray cat", "wolf"]
  },
  {
    category: "Terms & Definitions",
    title: "Private land",
    content: "\"Private land\" means all fee title/deeded lands owned by a private individual, partnership or corporation.",
    keywords: ["private land", "deeded", "fee title", "landowner", "property"]
  },
  {
    category: "Terms & Definitions",
    title: "Processor",
    content: "\"Processor\" means a custom meat processor licensed by the Wyoming Department of Agriculture.",
    keywords: ["processor", "meat processor", "butcher", "Department of Agriculture"]
  },
  {
    category: "Terms & Definitions",
    title: "Public road or highway",
    content: "\"Public road or highway\" (except as otherwise provided) means any roadway that is open to vehicular travel by the public. The road surface, the area between the fences on a fenced public road or highway, and an area thirty (30) feet perpendicular to the edge of the road surface on an unfenced public road or highway shall be considered the public road or highway. Two-track trails on public lands are not public roads.",
    keywords: ["public road", "highway", "30 feet", "two-track", "road surface", "shooting"]
  },
  {
    category: "Terms & Definitions",
    title: "Real Time Video Photography Equipment",
    content: "\"Real Time Video Photography Equipment\" means any video or photography equipment capable of utilizing cellular or Wi-Fi technology to transmit images or video for remote viewing.",
    keywords: ["real time video", "cellular", "Wi-Fi", "trail camera", "remote viewing", "technology"]
  },
  {
    category: "Terms & Definitions",
    title: "Region General Deer Licenses",
    content: "\"Region General Deer Licenses\" means general nonresident deer licenses that shall be limited in number and valid for a specified group of hunt areas in accordance with Commission regulations. A license issued for a region shall only be valid in hunt areas within the region where limitations in Commission regulations specify general licenses. A license issued for a region shall not be valid in any hunt area within that region in which licenses are totally limited in quota, unless specified by Commission regulations.",
    keywords: ["region general", "deer license", "nonresident", "hunt area", "limited quota"]
  },
  {
    category: "Terms & Definitions",
    title: "Region General Elk Licenses",
    content: "\"Region General Elk Licenses\" means general nonresident elk licenses that shall be limited in number and valid for a specified group of hunt areas in accordance with Commission regulations. A license issued for a region shall only be valid in hunt areas within the region where limitations in Commission regulations specify general licenses. A license issued for a region shall not be valid in any hunt area within that region in which licenses are totally limited in quota, unless specified by Commission regulations.",
    keywords: ["region general", "elk license", "nonresident", "hunt area", "limited quota"]
  },
  {
    category: "Terms & Definitions",
    title: "Regular hunting seasons",
    content: "\"Regular hunting seasons\" means seasons which delineate the dates and hunt areas for the taking of big game or trophy game animals with legal weapons in accordance with the license types and limitations set forth in Section 2 of Chapters 5 (Antelope), 6 (Deer), 7 (Elk) and 8 (Moose); Sections 3 and 7 of Chapter 9 (Bighorn Sheep and Mountain Goat); Section 9 of Chapter 3 (Black Bear); Section 3 of Chapter 42 (Mountain Lion); and, Section 4 of Chapter 47 (Gray Wolf) of the Commission regulations.",
    keywords: ["regular hunting season", "season dates", "hunt area", "legal weapons"]
  },
  {
    category: "Terms & Definitions",
    title: "Resident",
    content: "\"Resident\" means a United States citizen or legal alien who is domiciled in Wyoming for at least one (1) full year immediately preceding making application for any resident game and fish license, preference point, permit or tag, shall not have claimed residency in any other state, territory or country for any other purpose during that one (1) year period, and meets the requirements specified in Wyoming Statutes § 23-1-102 and § 23-1-107.",
    keywords: ["resident", "domicile", "one year", "citizenship", "residency"]
  },
  {
    category: "Terms & Definitions",
    title: "Site of the kill",
    content: "\"Site of the kill\" means the location where the harvested animal died.",
    keywords: ["site of kill", "location", "harvest", "died"]
  },
  {
    category: "Terms & Definitions",
    title: "Special archery seasons",
    content: "\"Special archery seasons\" means seasons that delineate the dates and hunt areas for the taking of big game or trophy game animals with legal archery equipment, in which a hunter with the proper hunting license and an archery license may hunt in addition to the regular hunting seasons in accordance with the limitations as set forth in Section 2 of Chapters 5 (Antelope), 6 (Deer), 7 (Elk), 8 (Moose), Sections 3 and 7 of Chapter 9 (Bighorn Sheep and Mountain Goat) and Section 9 of Chapter 3 (Black Bear).",
    keywords: ["special archery", "archery season", "archery license", "bow hunting"]
  },
  {
    category: "Terms & Definitions",
    title: "Spike elk",
    content: "\"Spike elk\" means an elk with at least one (1) antler consisting of a single unbranched beam.",
    keywords: ["spike elk", "antler", "unbranched", "beam", "bull elk"]
  },
  {
    category: "Terms & Definitions",
    title: "State Trust Land or State Land",
    content: "\"State Trust Land\" or \"State Land\" means lands administered by the Office of State Lands and Investments.",
    keywords: ["state trust land", "state land", "public land", "State Lands and Investments"]
  },
  {
    category: "Terms & Definitions",
    title: "Take",
    content: "\"Take\" means hunt, pursue, catch, capture, shoot, fish, seine, trap, kill, or possess, or attempt to hunt, pursue, catch, capture, shoot, fish, seine, trap, kill or possess.",
    keywords: ["take", "hunt", "pursue", "catch", "capture", "shoot", "kill", "possess"]
  },
  {
    category: "Terms & Definitions",
    title: "Trophy game animal",
    content: "\"Trophy game animal\" means black bear, grizzly bear, mountain lion, or any gray wolf within the Wolf Trophy Game Management Area and Seasonal Wolf Trophy Game Management Area as described in Wyoming Statute § 23-1-101 (a) (xii) (B) (I) and (II).",
    keywords: ["trophy game", "black bear", "grizzly bear", "mountain lion", "gray wolf"]
  },
  {
    category: "Terms & Definitions",
    title: "Type (license)",
    content: "\"Type\" means a limitation on a license in a particular hunt area for the sex of animal, the species of animal, the length of the season, the type of weapon or a portion of the hunt area in which the license shall be valid.",
    keywords: ["type", "license type", "limitation", "weapon", "sex", "species"]
  },
  {
    category: "Terms & Definitions",
    title: "Waste",
    content: "\"Waste\" means to leave, abandon or allow any edible portion of meat from a big game animal, game bird, game fish or small game animal to become tainted, rotten or otherwise unfit for human consumption prior to processing at a person's home or at a processor.",
    keywords: ["waste", "abandon", "meat", "edible portion", "spoil", "rotten"]
  },
  {
    category: "Terms & Definitions",
    title: "Youth license",
    content: "\"Youth license\" means: A big game license that may be issued to a resident or nonresident person who is at least eleven (11) years of age provided that person shall attain twelve (12) years of age by the end of the same calendar year and who is under eighteen (18) years of age at the time of application. For all other species, excluding furbearing animals, requiring a license to take, youth license means a license that may be issued to a resident or nonresident person who is under eighteen (18) years of age. A furbearer trapping license that may be only issued to a resident under seventeen (17) years of age.",
    keywords: ["youth license", "11 years", "12 years", "18 years", "minor", "juvenile", "trapping"]
  },

  // ==================== ACCESS YES PROGRAM ====================
  {
    category: "Access Programs",
    title: "Access Yes Program",
    content: "Access to private lands enrolled in the Access Yes Walk-In or Hunter Management Program is granted only for the take of specific wildlife species during the dates specified in Department publications. Special rules apply for each individual area. Refer to the Department website for rules pertaining to each area. Travel by motorized vehicle is prohibited, except as otherwise stated. Hunters wishing to use enrolled private lands for any other activity or to take wildlife species not listed or outside designated time periods must obtain permission from the landowner or person in charge of the property. Department publications or signs shall serve as official regulations of the Commission and may advise of additional restrictions. The landowner or person in charge of the property may grant permission for activities contrary to that specified by Department signs or publications.",
    keywords: ["Access Yes", "Walk-In", "Hunter Management", "private land", "permission", "motorized vehicle"]
  },

  // ==================== CONSERVATION STAMP ====================
  {
    category: "Licenses & Stamps",
    title: "Conservation Stamp Requirement",
    content: "Hunters and anglers must purchase a conservation stamp prior to hunting and fishing in Wyoming. Conservation stamps are only available electronically through the Department's Electronic Licensing System (ELS), and may be purchased from the Cheyenne Headquarters, Department Regional Offices, license selling agents throughout the state and the Department website.",
    keywords: ["conservation stamp", "ELS", "license", "purchase", "required"]
  },
  {
    category: "Licenses & Stamps",
    title: "Conservation Stamp Exemptions - Full Exemption",
    content: "Persons holding the following licenses are exempt from the requirement to purchase a conservation stamp while exercising hunting or fishing privileges under ANY Wyoming license. The person shall, at all times, be in possession of the license allowing the conservation stamp exemption while in the field: Any Wyoming pioneer hunting or fishing license; Honorably discharged Wyoming resident veteran who is one hundred percent (100%) disabled game bird, small game and fishing license; Military combat general elk or general deer license; Military combat game bird or small game license; Licenses reissued to a veteran with disabilities or a person with a permanent disability who uses a wheelchair; or, Resident United States Military Purple Heart Medal recipients.",
    keywords: ["conservation stamp", "exemption", "pioneer", "veteran", "disabled", "military", "Purple Heart", "wheelchair"]
  },
  {
    category: "Licenses & Stamps",
    title: "Conservation Stamp Exemptions - Specific License Exemption",
    content: "Persons holding the following licenses are exempt from the requirement to purchase a conservation stamp while exercising privileges under THESE licenses: Daily hunting or fishing license; Nonresident five (5) consecutive day fishing license; Special limited fishing permit holders; Wyoming fifty (50%) percent disabled veteran fishing license; or, Resident permanently and totally disabled lifetime fishing license.",
    keywords: ["conservation stamp", "exemption", "daily license", "fishing", "disabled veteran"]
  },
  {
    category: "Licenses & Stamps",
    title: "Lifetime Conservation Stamp",
    content: "A lifetime conservation stamp may be purchased by applying to the Cheyenne Headquarters or through any Department Regional Office.",
    keywords: ["lifetime", "conservation stamp", "purchase", "Cheyenne"]
  },

  // ==================== AGE RESTRICTIONS ====================
  {
    category: "Age Restrictions",
    title: "Minimum Age for Big or Trophy Game",
    content: "The minimum age to take any big or trophy game animal is eleven (11) years old if that person will be twelve (12) years old by the end of that calendar year.",
    keywords: ["minimum age", "11 years", "12 years", "youth", "big game", "trophy game"]
  },
  {
    category: "Age Restrictions",
    title: "Youth Under 14 Supervision Requirements",
    content: "Youths under fourteen (14) years of age shall at all times be accompanied by an adult who possesses and can exhibit a hunter safety certificate, or who has been issued a Wyoming big game hunting license within the last five (5) years. If the accompanying adult is not the youth's parent or guardian, the youth shall have in their possession a permission slip signed by their parent or guardian allowing them to hunt under supervision. Each accompanying adult shall supervise not more than one (1) hunter under fourteen (14) years of age.",
    keywords: ["youth", "14 years", "supervision", "adult", "hunter safety", "permission slip", "parent", "guardian"]
  },

  // ==================== ARCHERY EQUIPMENT ====================
  {
    category: "Legal Weapons",
    title: "Archery Equipment - General",
    content: "Archery equipment is legal to take game animals.",
    keywords: ["archery", "bow", "legal weapon", "game animals"]
  },
  {
    category: "Legal Weapons",
    title: "Archery Draw Weight - Small Big Game",
    content: "When hunting antelope, bighorn sheep, black bear, deer, mountain goat, mountain lion, or gray wolf where designated as a trophy game animal, an archery hunter shall use a longbow, recurve bow or compound bow of not less than forty (40) pounds draw weight.",
    keywords: ["archery", "draw weight", "40 pounds", "antelope", "deer", "bighorn sheep", "black bear", "mountain goat", "mountain lion", "wolf"]
  },
  {
    category: "Legal Weapons",
    title: "Archery Draw Weight - Elk and Moose",
    content: "When hunting elk or moose, an archery hunter shall use a longbow, recurve bow or compound bow of not less than fifty (50) pounds draw weight.",
    keywords: ["archery", "draw weight", "50 pounds", "elk", "moose", "bow"]
  },
  {
    category: "Legal Weapons",
    title: "Crossbow Requirements",
    content: "A crossbow hunter shall use a crossbow having a peak draw weight of at least ninety (90) pounds and a bolt of at least sixteen (16) inches in length.",
    keywords: ["crossbow", "90 pounds", "16 inches", "bolt", "draw weight"]
  },
  {
    category: "Legal Weapons",
    title: "Broadhead Requirements",
    content: "The broadhead used on arrows or bolts shall not pass through a seven-eighths (7/8) inch solid ring when fully expanded.",
    keywords: ["broadhead", "7/8 inch", "arrow", "bolt", "expanded"]
  },

  // ==================== ARCHERY LICENSES ====================
  {
    category: "Licenses & Stamps",
    title: "Archery License Requirement",
    content: "No person shall hunt big game or trophy game animals with archery equipment during a special archery hunting season without first obtaining an archery license and the appropriate hunting license.",
    keywords: ["archery license", "special archery season", "hunting license", "required"]
  },
  {
    category: "Licenses & Stamps",
    title: "Archery Season Firearm Prohibition",
    content: "No person holding an archery license shall take big game or trophy game animals during a special archery hunting season or limited quota archery only season by the use of any type of firearm.",
    keywords: ["archery season", "firearm prohibited", "archery only", "Type 9"]
  },
  {
    category: "Licenses & Stamps",
    title: "Archery Harvest Compliance Testing",
    content: "Upon request by a game warden or other Wyoming law enforcement officer, a person who has taken a big or trophy game animal during a special archery hunting season or limited quota archery only hunting season shall allow testing of the animal's tissue for confirmation of compliance with this section.",
    keywords: ["archery", "compliance", "testing", "game warden", "tissue", "enforcement"]
  },

  // ==================== ARTIFICIAL LIGHT ====================
  {
    category: "Prohibited Acts",
    title: "Artificial Light for Hunting Prohibited",
    content: "No person shall take any wildlife with the aid of or by using any artificial light or lighting device except as provided by statute and Commission regulation.",
    keywords: ["artificial light", "prohibited", "night hunting", "lighting device"]
  },
  {
    category: "Predatory Animals",
    title: "Artificial Light Exception - Predatory Animals",
    content: "Predatory animals may be taken with the aid of an artificial light or lighting device, including thermal or infrared imaging or other light imaging by: (i) A public officer authorized to and conducting predator control; (ii) A landowner, resident manager or person with the landowner's or a resident manager's written permission to take predatory animals, on land under the landowner's control for the protection of their property; (iii) Any person taking a predatory animal on public or state land is subject to limitations established by the Commission.",
    keywords: ["predatory animal", "artificial light", "thermal", "infrared", "landowner", "predator control"]
  },
  {
    category: "Predatory Animals",
    title: "Artificial Light Prima Facie Evidence",
    content: "It is prima facie evidence of a violation if a person uses an artificial light in an area that may be inhabited by wildlife while having in their possession and control any device for taking wildlife.",
    keywords: ["artificial light", "prima facie", "violation", "possession"]
  },
  {
    category: "Predatory Animals",
    title: "Raccoon Hunting Exception",
    content: "This shall not prohibit the hunting on foot of raccoon with the aid of a handlight, provided the hunter is accompanied by a raccoon hunting dog and, if hunting on private land(s), has the written permission of the landowner or their agent.",
    keywords: ["raccoon", "handlight", "hunting dog", "private land", "permission"]
  },
  {
    category: "Predatory Animals",
    title: "Predator Hunting on Public Land - IR Beacon Required",
    content: "Any person hunting predatory animals on public land with an artificial light or lighting device, thermal or infrared imaging or other light imaging device shall display an activated infrared (IR) strobe beacon on their person visible from at least one hundred (100) yards in every direction. If the predator hunter is enclosed inside a vehicle, an activated IR strobe beacon shall be displayed on the exterior roof of the vehicle so as to be visible for at least one hundred (100) yards around the vehicle.",
    keywords: ["IR beacon", "infrared", "strobe", "public land", "predator", "100 yards", "vehicle"]
  },
  {
    category: "Predatory Animals",
    title: "Night Predator Hunting Closure on Public Land",
    content: "Hunting of predatory animals at night with artificial light or lighting devices, thermal or infrared imaging or other light imaging on public land shall be closed from September 1 through December 31.",
    keywords: ["night hunting", "predator", "closed", "September", "December", "public land"]
  },

  // ==================== AUTOMATIC WEAPONS & SUPPRESSORS ====================
  {
    category: "Legal Weapons",
    title: "Automatic Weapons Prohibited",
    content: "No person shall take any wildlife with any fully automatic weapon.",
    keywords: ["automatic weapon", "prohibited", "full auto", "machine gun"]
  },
  {
    category: "Legal Weapons",
    title: "Suppressors Allowed",
    content: "Firearm suppressors may be used during the legal taking of any game animal.",
    keywords: ["suppressor", "silencer", "legal", "allowed", "firearm"]
  },

  // ==================== BAG LIMITS ====================
  {
    category: "Bag Limits",
    title: "License Limitations - One Per Species",
    content: "No person shall apply for or receive more than one (1) license valid for each big or trophy game species during any one (1) calendar year, except as otherwise allowed by Commission regulations.",
    keywords: ["bag limit", "one license", "species", "calendar year"]
  },
  {
    category: "Bag Limits",
    title: "Maximum Bag Limit",
    content: "The maximum bag limit is one (1) big or trophy game animal per each valid license held, and in accordance with age, sex, species and antler or horn development limitations as specified by Commission regulation.",
    keywords: ["bag limit", "maximum", "one animal", "license", "antler", "horn"]
  },

  // ==================== BAITING ====================
  {
    category: "Prohibited Acts",
    title: "Baiting of Big Game Prohibited",
    content: "No person shall take any big game animal over, or by the use of bait, except as follows: any legally blind person, person confined to a wheelchair, person hunting with a permit issued pursuant to Wyoming Statute § 23-3-304 (d) (iv) or any person hunting with a license issued pursuant to Wyoming Statute § 23-1-705 (j) may place a bait for big game or take a big game animal by the use of bait.",
    keywords: ["baiting", "prohibited", "bait", "big game", "disabled", "wheelchair", "blind"]
  },

  // ==================== BEAR PEPPER SPRAY ====================
  {
    category: "Safety",
    title: "Bear Pepper Spray Required - Grand Teton",
    content: "All persons hunting elk in Grand Teton National Park (Elk Hunt Areas 75 and 79) shall carry and have readily accessible bear pepper spray.",
    keywords: ["bear spray", "pepper spray", "Grand Teton", "Area 75", "Area 79", "required", "elk"]
  },

  // ==================== CHECK STATIONS ====================
  {
    category: "Check Stations",
    title: "Check Station Requirements",
    content: "Every hunter, angler or trapper entering or leaving areas for which check stations have been established shall stop and report at the check station if the check station is on the hunter's, angler's or trapper's route to and from the hunting or fishing area. This requirement applies even if the person does not have wildlife in possession.",
    keywords: ["check station", "stop", "report", "required", "route"]
  },
  {
    category: "Check Stations",
    title: "License Inspection at Check Stations",
    content: "Game and fish licensees shall produce their licenses, permits or stamps as required by regulation for any game animals, game birds, fish or furbearing animals in their possession for inspection upon request by any authorized department representative.",
    keywords: ["check station", "inspection", "license", "permit", "stamps", "possession"]
  },

  // ==================== CHRONIC WASTING DISEASE (CWD) ====================
  {
    category: "CWD",
    title: "CWD - Transportation Within Wyoming",
    content: "Deer, elk and moose taken in Wyoming may be transported within Wyoming to a camp, a private residence for processing, a taxidermist, a processor, or a CWD sample collection site in Wyoming, provided the head and all portions of the spinal column remain at the site of the kill or such parts are disposed of in any approved landfill or incinerator in Wyoming.",
    keywords: ["CWD", "transportation", "Wyoming", "head", "spinal column", "site of kill", "landfill"]
  },
  {
    category: "CWD",
    title: "CWD - Allowed Parts for Transport in Wyoming",
    content: "Except as provided for transport to camp/residence/taxidermist, only the following parts of any deer, elk or moose taken in Wyoming may be transported in Wyoming: edible portions with no part of the spinal column or head attached; cleaned hide without the head; skull or skull plate or antlers that have been cleaned of all meat and brain tissue; teeth; or, finished taxidermy mounts.",
    keywords: ["CWD", "parts", "transport", "edible portion", "skull", "antlers", "hide", "taxidermy"]
  },
  {
    category: "CWD",
    title: "CWD - Transport Out of State",
    content: "Only the following parts of any deer, elk or moose taken in Wyoming may be transported to other states, provinces or countries: edible portions with no part of the spinal column or head; cleaned hide without the head; skull or skull plate or antlers that have been cleaned of all meat and brain tissue; teeth; or finished taxidermy mounts. Whole deer, elk and moose carcasses shall not be transported out of Wyoming.",
    keywords: ["CWD", "out of state", "export", "transport", "whole carcass", "prohibited"]
  },
  {
    category: "CWD",
    title: "CWD - Importation into Wyoming",
    content: "Deer, elk or moose taken from within any other state, province or country shall only be imported into Wyoming if carcasses are transported directly to a private residence for processing, to a taxidermist, to a processor or to a CWD sample collection site provided the head and all portions of the spinal column are disposed of in an approved landfill or incinerator.",
    keywords: ["CWD", "import", "importation", "other state", "landfill", "incinerator"]
  },
  {
    category: "CWD",
    title: "CWD - Mandatory Sample Submission",
    content: "The Department may mandate hunters submit CWD samples from harvested deer, elk and moose from designated hunt areas within Wyoming to evaluate testing, monitoring and management actions. If the Department mandates hunters submit CWD samples, public notice shall be given through the Department website, publications and news releases.",
    keywords: ["CWD", "mandatory", "sample", "testing", "submission", "designated areas"]
  },
  {
    category: "CWD",
    title: "CWD - Sample Submission Violation",
    content: "It shall be a violation of Commission regulation for a hunter to fail to submit mandated CWD samples in accordance with this section.",
    keywords: ["CWD", "violation", "sample", "mandatory", "fail to submit"]
  },
  {
    category: "CWD",
    title: "CWD - Sample Submission Notice",
    content: "When the Department mandates hunters submit CWD samples, public notice shall be given through posting of mandatory submission requirements in Department offices and designated license selling agents, electronic or traditional mailings to known license holders (and other sportspersons) and through the Department website, publications and news releases.",
    keywords: ["CWD", "notice", "mandatory", "posting", "mailing", "website"]
  },

  // ==================== CLOSED AREAS ====================
  {
    category: "Closed Areas",
    title: "Closed Areas",
    content: "All areas within the state of Wyoming not opened by specific order of the Commission shall be closed to the taking of game animals, furbearing animals and game birds.",
    keywords: ["closed area", "Commission order", "prohibited", "not opened"]
  },

  // ==================== CLOTHING REQUIREMENTS ====================
  {
    category: "Safety",
    title: "Fluorescent Orange/Pink Clothing Required",
    content: "All persons hunting big or trophy game during an open regular season, shall wear in a visible manner one (1) or more exterior garments of a fluorescent orange or fluorescent pink color that shall include at least one of the following: a hat, shirt, jacket, coat, vest or sweater. Fluorescent orange camouflage or fluorescent pink camouflage are legal. Hunters participating in limited quota muzzle-loading seasons are also required to meet the fluorescent orange or fluorescent pink requirements.",
    keywords: ["fluorescent orange", "fluorescent pink", "clothing", "required", "safety", "visible", "hat", "vest"]
  },
  {
    category: "Safety",
    title: "Archery Season Clothing Exemption",
    content: "Archers and crossbow hunters hunting during a special archery season or limited quota archery only Type 9 season are exempt from this requirement.",
    keywords: ["archery", "crossbow", "exempt", "fluorescent", "Type 9", "clothing"]
  },

  // ==================== COLLARS & TRACKING DEVICES ====================
  {
    category: "Research",
    title: "Collars and Tracking Devices",
    content: "The Wyoming Game and Fish Department asks that the presence of a collar doesn't sway the sportsperson's decision to harvest or not harvest the collared animal. A few reminders about collars and tracking devices: Do not throw them away; Do not intentionally destroy them; Please return them to the department.",
    keywords: ["collar", "tracking device", "GPS", "research", "return", "harvest"]
  },

  // ==================== DISABLED HUNTER ====================
  {
    category: "Disabled Hunters",
    title: "Disabled Hunter Information",
    content: "Contact the Cheyenne Headquarters or any Department Regional Office for specific information.",
    keywords: ["disabled", "handicapped", "accessibility", "special permit", "information"]
  },

  // ==================== DUPLICATE LICENSES ====================
  {
    category: "Licenses & Stamps",
    title: "Duplicate and Replacement Licenses",
    content: "When any license issued has been lost or destroyed, the licensee may secure a duplicate or replacement of the original license from the Cheyenne Headquarters, any Department Regional Office or designated license selling agents. A duplicate license shall be issued if the original license contained a carcass coupon. A replacement license shall be issued if the original license did not contain a carcass coupon. The Department shall charge a fee of seven dollars ($7) for each duplicate or replacement license.",
    keywords: ["duplicate", "replacement", "lost", "destroyed", "$7", "fee", "carcass coupon"]
  },

  // ==================== EMERGENCY CLOSURES ====================
  {
    category: "Emergency Closures",
    title: "Emergency Closures",
    content: "The Commission may institute an emergency closure by regulation to shorten the season in any area at any time if a harvest quota is reached or if an emergency arises warranting the closure. Should a closure become necessary after the season opens, no refunds will be given for unused licenses.",
    keywords: ["emergency closure", "quota", "shorten season", "no refund"]
  },

  // ==================== FIREARM CALIBERS ====================
  {
    category: "Legal Weapons",
    title: "Firearm Calibers - Large Big Game",
    content: "When hunting bighorn sheep, elk, moose, mountain goat or black bear by the use of a firearm, a hunter shall use any center-fire firearm of at least .24 caliber and firing a cartridge of at least two (2) inches in overall length and using an expanding point bullet.",
    keywords: ["firearm", "caliber", ".24", "elk", "moose", "bighorn sheep", "mountain goat", "black bear", "2 inches", "expanding point"]
  },
  {
    category: "Legal Weapons",
    title: "Firearm Calibers - Deer, Antelope, Mountain Lion, Wolf",
    content: "When hunting antelope, deer, mountain lion, or gray wolf where designated as a trophy game animal, a hunter shall use any center-fire firearm of at least .22 caliber (excluding .22 Hornet) and having a bullet weight of at least sixty (60) grains and firing a cartridge of at least two (2) inches in overall length and using an expanding point bullet.",
    keywords: ["firearm", "caliber", ".22", "60 grains", "antelope", "deer", "mountain lion", "wolf", "expanding point"]
  },
  {
    category: "Legal Weapons",
    title: "Alternative Calibers - .35 and Larger",
    content: "Big or trophy game animals may be taken with any other cartridge of at least .35 caliber and at least one and one-half (1.5) inches in overall length and using an expanding point bullet or any shotgun firing \"00\" or larger buckshot or a slug.",
    keywords: [".35 caliber", "shotgun", "00 buckshot", "slug", "1.5 inches"]
  },
  {
    category: "Legal Weapons",
    title: "Muzzleloader Requirements",
    content: "Any muzzle-loading rifle or muzzle-loading handgun of at least .40 caliber and firing an expanding point bullet or lead ball and using a charge of at least fifty (50) grains of black powder or its equivalent may also be used to hunt big or trophy game animals.",
    keywords: ["muzzleloader", ".40 caliber", "50 grains", "black powder", "lead ball"]
  },
  {
    category: "Legal Weapons",
    title: "Firearm Possession Laws",
    content: "Wyoming has no restrictive laws concerning firearms that may be legally possessed under the law of one's home state. Safety dictates that all firearms in a vehicle should be unloaded with the action open.",
    keywords: ["firearm laws", "possession", "vehicle", "unloaded", "action open", "safety"]
  },

  // ==================== GUIDES ====================
  {
    category: "Guides",
    title: "Guides Required in Wilderness",
    content: "No nonresident shall hunt big or trophy game animals on any designated wilderness area, as defined by federal or state law, in Wyoming unless accompanied by a licensed professional guide or a resident guide. There shall be at least one (1) licensed professional guide or resident guide accompanying each two (2) nonresident hunters.",
    keywords: ["guide", "wilderness", "nonresident", "required", "professional guide", "resident guide"]
  },
  {
    category: "Guides",
    title: "Resident Guide Limitations",
    content: "A resident guide shall not guide more than two (2) hunters in any calendar year on any wilderness area. Any resident possessing a valid big or trophy game animal license shall apply for and receive a free resident guide license prior to guiding any nonresident in designated wilderness areas. A resident guide license may be obtained at no charge from the Cheyenne Headquarters, Department Regional Offices and game wardens.",
    keywords: ["resident guide", "two hunters", "free license", "wilderness", "calendar year"]
  },

  // ==================== HARVEST SURVEY ====================
  {
    category: "Surveys",
    title: "Harvest Survey",
    content: "Each year the Department and its contractors send harvest survey questionnaires to a sample of sportspersons, primarily through email and postal mail. Since a person can hunt multiple species in Wyoming, some sportspersons may be asked to complete more than one harvest survey questionnaire. Your reply provides critical data the Department uses to evaluate the past hunting season and set future hunting seasons. Even if you did not hunt, we need to hear from you to accurately track hunter effort. We ask that you complete any harvest survey questionnaires sent to you by the Department or its contractors.",
    keywords: ["harvest survey", "questionnaire", "email", "data", "hunter effort", "statistics"]
  },

  // ==================== HUNTER SAFETY ====================
  {
    category: "Hunter Safety",
    title: "Hunter Safety Requirement",
    content: "Except as otherwise provided, no person born on or after January 1, 1966, may take wildlife by the use of firearms on land other than that of their own family, unless that person can demonstrate they have obtained a certificate of competency and safety in the use and handling of firearms. Attendance and successful completion of a hunter safety course offered by an association or governmental agency approved by the Commission satisfies the requirements of this section.",
    keywords: ["hunter safety", "certificate", "January 1 1966", "required", "course"]
  },
  {
    category: "Hunter Safety",
    title: "Hunter Mentor Program",
    content: "A person who has not received a certificate of competency and safety in the use and handling of firearms may apply to the Department for a special authorization to take wildlife with the use of a firearm while being accompanied by a person acting as a mentor. A special authorization shall be valid for one (1) year from the date of issue and shall be in the possession of the recipient at all times while in the field. The application process may be completed on the Department website.",
    keywords: ["mentor program", "special authorization", "one year", "mentee", "website"]
  },
  {
    category: "Hunter Safety",
    title: "Mentor Requirements",
    content: "Any person acting as a mentor shall be at least eighteen (18) years of age, shall possess a valid hunting license, and shall demonstrate they have successfully completed a hunter safety course. A mentor shall not provide supervision for more than one (1) person at a time in the field, other than immediate family members, and shall accompany the mentee at all times to provide constant supervision.",
    keywords: ["mentor", "18 years", "hunter safety", "supervision", "one person", "family"]
  },
  {
    category: "Hunter Safety",
    title: "Youth Small Game Exception",
    content: "A person under fourteen (14) years of age who has not yet received a hunter safety certificate may take small game and game birds while being accompanied by a mentor who possesses a valid Wyoming small game or game bird license and conservation stamp.",
    keywords: ["youth", "14 years", "small game", "game birds", "mentor", "no hunter safety"]
  },
  {
    category: "Hunter Safety",
    title: "Military/Law Enforcement Exemption",
    content: "Any active member, honorably discharged past member or veteran of the armed forces of the United States and any active or retired Wyoming peace officer qualified pursuant to Wyoming Statutes § 9-1-701 through § 9-1-707 may obtain an exemption from the hunter safety requirement. Hunter safety exemption applications are available at the Cheyenne Headquarters and Department Regional Offices. This hunter safety exemption is not valid for hunting elk within Grand Teton National Park (Hunt Areas 75 and 79), or for persons acting as mentors in the Hunter Mentor Program.",
    keywords: ["military", "veteran", "peace officer", "exemption", "hunter safety", "armed forces", "Grand Teton"]
  },

  // ==================== ISSUANCE OF LICENSES ====================
  {
    category: "Licenses & Stamps",
    title: "Deer License Limits - Initial Drawing",
    content: "For deer, no person shall apply for and receive more than one (1) full price deer license (General, Type 0, 1, 2, 3, 4, 5 or 9) through the initial drawing.",
    keywords: ["deer", "license", "initial drawing", "one license", "full price"]
  },
  {
    category: "Licenses & Stamps",
    title: "Deer License Limits - After Initial Drawing",
    content: "After the initial drawing is completed, any person may apply for and receive up to two (2) full priced deer licenses provided that at least one (1) license is a Limited Quota Type 3 any white-tailed deer license. However, no person shall apply for and receive more than a total of two (2) deer licenses valid for the taking of antlered or any deer, of which not more than one (1) shall be valid for antlered or any mule deer.",
    keywords: ["deer", "license", "leftover", "two licenses", "white-tailed", "mule deer", "Type 3"]
  },
  {
    category: "Licenses & Stamps",
    title: "Doe/Fawn Deer License Limits - Initial Drawing",
    content: "For doe/fawn deer, any person may apply for and receive a maximum of two (2) limited quota reduced price doe/fawn deer licenses (Type 6, 7 or 8) through the initial drawing.",
    keywords: ["doe", "fawn", "deer", "Type 6", "Type 7", "Type 8", "reduced price", "initial drawing"]
  },
  {
    category: "Licenses & Stamps",
    title: "Doe/Fawn Deer License Limits - After Drawing",
    content: "After the initial drawing is completed, any person may apply for and receive up to four (4) limited quota reduced price doe/fawn deer licenses. However, no person shall apply for and receive more than a total of four (4) limited quota reduced price doe/fawn deer licenses. In Hunt Areas 24, 65, 157 or 171 after the leftover drawing is completed, any person may purchase an unlimited number of limited quota reduced price doe/fawn deer licenses.",
    keywords: ["doe", "fawn", "deer", "four licenses", "Area 24", "Area 65", "Area 157", "Area 171", "unlimited"]
  },
  {
    category: "Licenses & Stamps",
    title: "Antelope License Limits",
    content: "For antelope, no person shall apply for and receive more than one (1) full price antelope license (Type 0, 1, 2, 3, 4, 5 or 9) through the initial drawing.",
    keywords: ["antelope", "license", "one license", "initial drawing", "full price"]
  },
  {
    category: "Licenses & Stamps",
    title: "Doe/Fawn Antelope License Limits",
    content: "For doe/fawn antelope, any person may apply for and receive a maximum of two (2) limited quota reduced price doe/fawn antelope licenses (Type 6, 7 or 8) through the initial drawing. After the initial drawing is completed, any person may apply for and receive up to four (4) limited quota reduced price doe/fawn antelope licenses. However, no person shall apply for and receive more than a total of four (4) limited quota reduced price doe/fawn antelope licenses.",
    keywords: ["doe", "fawn", "antelope", "Type 6", "Type 7", "Type 8", "four licenses", "reduced price"]
  },
  {
    category: "Licenses & Stamps",
    title: "Elk License Limits - Initial Drawing",
    content: "For elk, no person shall apply for and receive more than one (1) full price license (General, Type 0, 1, 2, 3, 4, 5 or 9) and one (1) reduced price cow/calf license (Type 6, 7 or 8) through the initial drawing.",
    keywords: ["elk", "license", "initial drawing", "full price", "cow/calf", "Type 6", "Type 7", "Type 8"]
  },
  {
    category: "Licenses & Stamps",
    title: "Elk License Limits - After Initial Drawing",
    content: "After the initial drawing, a person may apply for and receive up to a total of three (3) elk licenses, of which no more than one (1) shall be a General, Type 0, 1, 2, 3 or 9 license. However, no person shall apply for and receive more than a total of three (3) elk licenses which shall include not more than one (1) General, Type 0, 1, 2, 3 or 9 license in a single hunting season, except as authorized in Commission regulations.",
    keywords: ["elk", "license", "three licenses", "leftover", "cow/calf"]
  },
  {
    category: "Licenses & Stamps",
    title: "Elk Type 8 Unlimited",
    content: "After the leftover drawing, any person may apply for and receive an unlimited number of Type 8 reduced price cow/calf elk licenses.",
    keywords: ["elk", "Type 8", "unlimited", "cow/calf", "reduced price", "leftover"]
  },
  {
    category: "Licenses & Stamps",
    title: "License Limit Violation",
    content: "It is a violation to apply for and receive more than the specified number of licenses allowed by Commission regulations.",
    keywords: ["violation", "license limit", "too many licenses"]
  },

  // ==================== LANDOWNER COUPONS ====================
  {
    category: "Tagging & Transport",
    title: "Landowner Coupons",
    content: "Antelope, deer and elk licenses shall have two (2) coupons attached: one (1) designated \"antelope, deer or elk carcass coupon\" and one (1) designated \"landowner coupon\". When an antelope, deer or elk is harvested on a landowner's private land, the landowner coupon shall be promptly detached, dated, signed and delivered to the landowner. Landowner coupons are not transferable.",
    keywords: ["landowner coupon", "private land", "detach", "sign", "deliver", "not transferable"]
  },

  // ==================== LICENSE FRAUD ====================
  {
    category: "Prohibited Acts",
    title: "License Fraud Prohibited",
    content: "Department licenses, permits, stamps, tags or coupons shall not be altered by anyone other than authorized Department personnel. No license, permit, stamp, tag or coupon shall be transferred or used for the purpose of taking wildlife except by the individual to whom it was issued and therein named and while in that individual's possession. No individual shall take or attempt to take any wildlife using another individual's license, permit, stamp, tag or coupon.",
    keywords: ["license fraud", "altered", "transferred", "another person", "prohibited"]
  },
  {
    category: "Prohibited Acts",
    title: "Invalid License - Improper Fees",
    content: "Any license, permit, stamp, or tag shall not be valid unless the proper fees have been received by the Department. Any Wyoming Game and Fish law enforcement officer may seize as evidence any license, permit, stamp or tag that was obtained in violation of Commission regulations or Wyoming statutes.",
    keywords: ["invalid license", "fees", "seized", "evidence", "violation"]
  },

  // ==================== SHOOTING HOURS ====================
  {
    category: "Shooting Hours",
    title: "Legal Shooting Hours",
    content: "Big game and trophy game animals may only be taken from one-half (1/2) hour before sunrise to one-half (1/2) hour after sunset.",
    keywords: ["shooting hours", "sunrise", "sunset", "half hour", "legal hours"]
  },

  // ==================== OUTFITTER INFORMATION ====================
  {
    category: "Outfitters",
    title: "Outfitter Verification Responsibility",
    content: "No person shall directly or indirectly compensate a person holding themselves out as engaging in the business of, or acting in the capacity of, an outfitter or a professional guide unless that person provides proof that they are a licensed outfitter or professional guide as required by statute. Before hiring an outfitter, the Department advises hunters to consult the Wyoming State Board of Outfitters and Professional Guides to verify the outfitter is licensed by the state of Wyoming.",
    keywords: ["outfitter", "guide", "licensed", "verify", "State Board of Outfitters"]
  },
  {
    category: "Outfitters",
    title: "Landowner Outfitter Exemption",
    content: "Landowners who outfit on their own deeded land, or deeded lands leased to them, are not required to be licensed as outfitters or guides.",
    keywords: ["landowner", "outfitter", "exemption", "deeded land", "not required"]
  },
  {
    category: "Outfitters",
    title: "State Board of Outfitters Contact",
    content: "Contact: Wyoming State Board of Outfitters at 1950 Bluegrass Circle Suite 280, Cheyenne, Wyoming, 82002 or call toll free 1-800-264-0981.",
    keywords: ["State Board of Outfitters", "contact", "Cheyenne", "phone", "1-800-264-0981"]
  },
  {
    category: "Outfitters",
    title: "Outfitter Information on License",
    content: "Any license holder utilizing the services of an outfitter shall have the name of the outfitter, the outfitter's license number and the type of outfitter license legibly printed on the back of licensee's big or trophy game license.",
    keywords: ["outfitter", "license", "name", "license number", "back of license"]
  },

  // ==================== PERMISSION TO HUNT ====================
  {
    category: "Trespass",
    title: "Permission Required for Private Land",
    content: "No person shall enter upon, travel through or return across the private property of any person to take wildlife, hunt, fish, trap or collect antlers or horns without the permission of the landowner or person in charge of the property. \"Travel through or return across\" requires physically touching or driving on the surface of the private property.",
    keywords: ["permission", "private land", "trespass", "landowner", "travel through", "antlers"]
  },
  {
    category: "Trespass",
    title: "Proof of Permission",
    content: "The license must bear the signature of the landowner, lessee or agent of the landowner on whose private property the person is accessing or other legitimate proof as evidence that permission to hunt has been granted.",
    keywords: ["permission", "signature", "landowner", "lessee", "proof", "license"]
  },

  // ==================== GRIZZLY BEAR PRECAUTIONS ====================
  {
    category: "Safety",
    title: "Grizzly Bear Precautions",
    content: "Hunters and anglers are reminded grizzly bears occupy many areas in and around the Bridger-Teton, Shoshone and Caribou-Targhee National Forests in northwest Wyoming. The Department strongly recommends individuals working and recreating in these areas take precautions, including carrying bear pepper spray, to avoid conflicts with grizzly bears. Information about human safety and proper storage of food and other attractants in occupied grizzly habitat is available from the Cheyenne Headquarters, Department Regional Offices, U.S. Forest Service Offices and the Department website.",
    keywords: ["grizzly bear", "bear precautions", "Bridger-Teton", "Shoshone", "Caribou-Targhee", "bear spray", "food storage"]
  },
  {
    category: "Safety",
    title: "Grizzly Bear Food Storage",
    content: "Regulations concerning food/carcass storage in occupied grizzly habitat can be obtained from the U.S. Forest Service. Report all conflicts with grizzly bears to the nearest Department Regional Office.",
    keywords: ["grizzly bear", "food storage", "carcass storage", "Forest Service", "report conflicts"]
  },
  {
    category: "Safety",
    title: "Bear Wise Information",
    content: "For information about staying safe in bear country, visit the Department bear wise page: https://wgfd.wyo.gov/Bear-Wise-Print",
    keywords: ["bear wise", "bear safety", "bear country", "website"]
  },

  // ==================== PROHIBITED ACTS ====================
  {
    category: "Prohibited Acts",
    title: "Shooting From Public Road Prohibited",
    content: "It is illegal to shoot or attempt to kill any wildlife from any public road or highway. No person shall fire any firearm from, upon, along or across any public road or highway. No person shall knowingly fire any rifle from the enclosed lands of one person onto or across the enclosed lands of another without the permission of both persons.",
    keywords: ["road hunting", "public road", "highway", "shooting", "prohibited", "enclosed lands"]
  },
  {
    category: "Prohibited Acts",
    title: "Dogs Prohibited for Big Game",
    content: "It is illegal to use any dog to hunt, run or harass any big or trophy game animal, protected animal or furbearing animal except as otherwise provided by statute. The Commission shall regulate the use of dogs to take mountain lions and bobcats during hunting or trapping seasons.",
    keywords: ["dogs", "prohibited", "big game", "harass", "mountain lion", "bobcat"]
  },
  {
    category: "Prohibited Acts",
    title: "Aircraft Use Prohibited",
    content: "It is illegal to use any aircraft with the intent to spot, locate and aid in the taking of any big game animal from August 1 through January 31 of the following calendar year. Additionally, no person shall use any aircraft to spot, locate and aid in the taking of any trophy game animal during any open season. Nothing in this Section shall apply to the operation of an aircraft in a usual manner where there is no attempt or intent to locate any game animal, such as aircraft used for the sole purpose of passenger transport.",
    keywords: ["aircraft", "airplane", "helicopter", "drone", "spotting", "prohibited", "August", "January"]
  },
  {
    category: "Prohibited Acts",
    title: "Wanton Waste Prohibited",
    content: "It is illegal to take and leave, abandon or allow the edible portion of any game bird, game fish or game animal (except trophy game animal) to intentionally or needlessly go to waste.",
    keywords: ["waste", "wanton waste", "abandon", "edible portion", "prohibited"]
  },
  {
    category: "Prohibited Acts",
    title: "Federal Lacey Act",
    content: "It is illegal to transport illegally taken wildlife across state lines; such transportation is a violation of the Federal Lacey Act.",
    keywords: ["Lacey Act", "federal", "state lines", "transport", "illegal"]
  },
  {
    category: "Prohibited Acts",
    title: "Baiting Prohibited",
    content: "It is illegal to place any bait for the purpose of taking a big game animal or knowingly take a big game animal by the use of bait, except as authorized by Commission regulation or state statute.",
    keywords: ["bait", "baiting", "prohibited", "big game"]
  },
  {
    category: "Prohibited Acts",
    title: "Spoiling Meat Prohibited",
    content: "It is illegal to allow the edible portions of a big game animal to spoil. Failure to properly dress and care for any big game animal you have killed, and, if the carcass is reasonably accessible, within forty-eight (48) hours to take or transport the carcass to your camp, and there properly care for the carcass is prima facie evidence of a violation.",
    keywords: ["spoil", "meat", "48 hours", "dress", "care", "camp", "prima facie"]
  },
  {
    category: "Prohibited Acts",
    title: "Abandoned Meat at Processor",
    content: "It is illegal to abandon meat from a big game animal or game bird at a meat processing plant. Unless there is an express agreement between the processing plant and the person providing otherwise, any meat from a big game animal or game bird left at a meat processing plant for more than forty-five (45) days is prima facie evidence of a violation if written notice of the expiration of time has been attempted by the processing plant in accordance with rules and regulations promulgated by the Commission.",
    keywords: ["abandoned meat", "processor", "45 days", "meat processing", "violation"]
  },
  {
    category: "Prohibited Acts",
    title: "Intoxicated Hunting Prohibited",
    content: "It is illegal to carry a firearm with a cartridge therein, or take any wildlife, while intoxicated or under the influence of any controlled substance.",
    keywords: ["intoxicated", "alcohol", "drugs", "controlled substance", "firearm", "prohibited"]
  },
  {
    category: "Prohibited Acts",
    title: "Motorized Vehicle Hunting Prohibited",
    content: "It is illegal to harass, pursue, hunt, shoot or kill any Wyoming wildlife that requires a license or permit to take, is protected under W.S. 23-1-101(a)(ix) and (x) or is classified as threatened or endangered by federal wildlife regulations, with, from or by use of any flying machine, automotive vehicle, trailer, motor-propelled wheeled vehicle or vehicle designed for travel over snow. The Commission may exempt handicapped hunters from any of these provisions.",
    keywords: ["vehicle", "motorized", "snowmobile", "ATV", "harass", "pursue", "prohibited", "handicapped"]
  },

  // ==================== RETENTION OF EVIDENCE ====================
  {
    category: "Tagging & Transport",
    title: "Evidence of Antler/Horn Size",
    content: "Any person who takes any big game animal in a hunt area where the taking of either sex, species, or antler or horn development is controlled or prohibited by regulation shall comply with this section while said animal is in transportation from the site of the kill to the residence of the person taking the animal, or delivered to a processor for processing. In hunt areas where the taking of any big game animal is restricted to antler point or horn size by regulation, the antlers or horns shall accompany the carcass, or edible portions thereof.",
    keywords: ["evidence", "antler", "horn", "transport", "point restriction", "carcass"]
  },
  {
    category: "Tagging & Transport",
    title: "Evidence of Sex",
    content: "In hunt areas where the taking of any big game animal is restricted to a specific sex of animal by regulation, either the visible external sex organs, head or antlers shall accompany the carcass, or edible portions thereof.",
    keywords: ["evidence", "sex", "organs", "head", "antlers", "transport"]
  },
  {
    category: "Tagging & Transport",
    title: "Evidence of Deer Species",
    content: "In hunt areas where the taking of a species of deer is controlled or prohibited by regulation, either the head or the tail of the deer shall accompany the carcass or edible portion thereof as evidence of the species taken.",
    keywords: ["evidence", "species", "deer", "head", "tail", "mule deer", "white-tailed"]
  },

  // ==================== RETRIEVAL OF GAME ====================
  {
    category: "Tagging & Transport",
    title: "Retrieval Requirement",
    content: "The Department may require substantive proof from any person who fails to retrieve from the site of kill all edible portions of a big game animal as to why the edible portions were not removed from the field.",
    keywords: ["retrieval", "edible portions", "site of kill", "proof", "field"]
  },
  {
    category: "Tagging & Transport",
    title: "Wounding and Retrieving",
    content: "No person shall wound or kill any game animal without making a reasonable effort to retrieve it and reduce it to possession. For the purpose of this subsection, making a reasonable effort shall include a person physically going to the nearest location where the game animal was when a person attempted to take the game animal, in order to search for any sign the game animal was wounded or killed, and take the game animal into possession.",
    keywords: ["wound", "retrieve", "reasonable effort", "search", "possession"]
  },
  {
    category: "Tagging & Transport",
    title: "48-Hour Care Requirement",
    content: "The failure of any person to properly dress and care for any big game animal killed by that person, and, if the carcass is reasonably accessible, within forty-eight (48) hours to take or transport the carcass to the camp of that person, and there properly care for the carcass, is prima facie evidence of a violation of subsection (a) of W.S. §23-3-303.",
    keywords: ["48 hours", "dress", "care", "camp", "transport", "prima facie"]
  },

  // ==================== SHIPPING REQUIREMENTS ====================
  {
    category: "Tagging & Transport",
    title: "Federal Export Requirements",
    content: "If you ship any wildlife parts or products out of the United States, federal regulations require that you complete a \"Declaration of Importation or Exportation of Fish and Wildlife\" (Form #3-177), available online at http://www.fws.gov/le/declaration-form-3-177.html",
    keywords: ["export", "federal", "Form 3-177", "declaration", "international"]
  },
  {
    category: "Tagging & Transport",
    title: "CITES Permit Required",
    content: "If you ship hides, skulls, meat or products of black bears, wolves, lynx, bobcats or river otters out of the United States, you must first obtain a Federal CITES permit. These forms are only available through U.S. Fish and Wildlife offices.",
    keywords: ["CITES", "export", "black bear", "wolf", "lynx", "bobcat", "river otter", "international"]
  },
  {
    category: "Tagging & Transport",
    title: "Shipping Game Out of State",
    content: "Except as otherwise exempt by state statute, no game animal or game bird, or any part thereof, shall be shipped or transported from the state except by the person who harvested the animal, and in possession of the proper license, stamp and carcass coupon as required, or unless the amount does not exceed twenty-five (25) pounds and is properly tagged with a Wyoming interstate game tag.",
    keywords: ["shipping", "out of state", "25 pounds", "interstate game tag", "transport"]
  },
  {
    category: "Tagging & Transport",
    title: "Interstate Game Tag - Over 25 Pounds",
    content: "Not more than twenty-five (25) pounds from any one (1) big or trophy game animal may be exported from the state unless the part to be exported from the state is of a nonedible trophy or hidelike nature and properly tagged with a Wyoming interstate game tag or the big or trophy game animal was legally harvested by a nonresident and is tagged with a Wyoming interstate game tag.",
    keywords: ["interstate game tag", "25 pounds", "export", "trophy", "hide", "nonresident"]
  },
  {
    category: "Tagging & Transport",
    title: "Shipping Game Within Wyoming",
    content: "Except as otherwise exempt by state statute, no person shall ship, transport or receive for shipment or transportation within Wyoming any game animal, game bird, or any part thereof, unless tagged with a Wyoming interstate game tag, or unless the transportation of a big or trophy game animal is by a person in possession of a proper carcass coupon signed and dated by the person who harvested the animal, or the transportation of game birds or small game is by a properly licensed hunter in possession of not more than the daily bag or possession limit.",
    keywords: ["shipping", "within Wyoming", "interstate game tag", "carcass coupon", "transport"]
  },

  // ==================== PREDATORY ANIMALS ====================
  {
    category: "Predatory Animals",
    title: "No License Required for Predators",
    content: "Predatory animals and predacious birds may be taken without a license.",
    keywords: ["predatory animal", "predacious bird", "no license", "coyote", "jackrabbit"]
  },

  // ==================== LEASHED DOGS FOR TRACKING ====================
  {
    category: "Blood Trailing",
    title: "Leashed Dogs for Blood Trailing",
    content: "A person may use one (1) leashed blood-trailing dog to track a wounded or killed big game animal within seventy-two (72) hours of shooting the animal.",
    keywords: ["blood trailing", "dog", "leashed", "72 hours", "wounded", "tracking"]
  },
  {
    category: "Blood Trailing",
    title: "Blood Trailing Dog Requirements",
    content: "A person using a dog in this manner: Shall maintain physical control of the dog at all times by means of a maximum fifty (50) foot leash attached to the collar or harness of the dog; Shall wear fluorescent orange or fluorescent pink consistent with Wyoming Statute § 23-3-113(a); May kill the wounded animal using any weapon authorized under the hunting license; and, Shall, in accordance with Wyoming Statute § 23-3-104, attached the proper coupon to the carcass of any animal killed under the hunting license.",
    keywords: ["blood trailing", "dog", "50 foot leash", "fluorescent orange", "collar", "harness"]
  },
  {
    category: "Blood Trailing",
    title: "Dog Handler Exemption",
    content: "A person acting solely as a dog handler accompanying the licensed hunter that wounded the game animal is exempt from the licensing requirement of this act. Nothing in this section shall be construed to allow a dog handler to hunt without a license.",
    keywords: ["dog handler", "exempt", "license", "blood trailing", "accompanying"]
  },

  // ==================== SPECIALIZED TECHNOLOGIES ====================
  {
    category: "Technology",
    title: "Thermal/Infrared Imaging on Firearms Prohibited",
    content: "No person shall use any device attached to a legal firearm, muzzleloader or archery equipment, capable of producing a thermal or infrared image, or other imaging outside the normal visible light spectrum, with the intent to spot, locate and aid in the taking of any big game animal, trophy game animal or wild bison.",
    keywords: ["thermal", "infrared", "scope", "prohibited", "firearm", "archery", "night vision"]
  },
  {
    category: "Technology",
    title: "Real-Time/Thermal Cameras Prohibited",
    content: "No person shall use any real-time video photography equipment, thermal or infrared imaging device, or other imaging device outside the normal visible light spectrum, with the intent to spot, locate and aid in the taking of any big game animal, trophy game animal or wild bison.",
    keywords: ["real-time", "thermal", "infrared", "camera", "prohibited", "cellular", "Wi-Fi"]
  },
  {
    category: "Technology",
    title: "Trail Cameras Allowed",
    content: "A trail camera, or similar device, that can only store an image, picture or video inside the device, and which does not have the capability to utilize cellular or Wi-Fi technology to transmit images or video for remote viewing is permissible for use in the taking of any big game animal, trophy game animal or wild bison.",
    keywords: ["trail camera", "allowed", "legal", "no cellular", "no Wi-Fi", "store images"]
  },
  {
    category: "Technology",
    title: "Selling Location Information Prohibited",
    content: "No person shall sell or barter any geographic location information for any big game animal, trophy game animal or wild bison to aid in the taking of any big game animal, trophy game animal or wild bison.",
    keywords: ["sell", "barter", "location", "GPS", "prohibited", "geographic"]
  },

  // ==================== CARCASS COUPONS ====================
  {
    category: "Tagging & Transport",
    title: "Carcass Coupon - When to Attach",
    content: "When any big game animal, trophy game animal or wild turkey is killed under a license, or sandhill crane is killed under a limited quota sandhill crane permit, the licensee shall detach, sign and date the proper carcass coupon and attach the coupon to the carcass in a readily visible manner before leaving the site of the kill.",
    keywords: ["carcass coupon", "detach", "sign", "date", "site of kill", "attach"]
  },
  {
    category: "Tagging & Transport",
    title: "Carcass Coupon - How to Date",
    content: "When dating a carcass coupon, the entire day and month of the kill shall be completely cut out and removed.",
    keywords: ["carcass coupon", "date", "cut out", "month", "day"]
  },
  {
    category: "Tagging & Transport",
    title: "Carcass Coupon - Display Requirements",
    content: "The carcass coupon shall remain on the game animal, wild turkey or sandhill crane carcass at all times until the meat undergoes processing, or on the trophy game animal hide until it reaches the hunter's home or a taxidermist, except that during transportation of the carcass or hide, the validated carcass coupon may be removed to prevent its loss.",
    keywords: ["carcass coupon", "display", "attached", "processing", "taxidermist", "hide"]
  },
  {
    category: "Tagging & Transport",
    title: "Carcass Coupon - During Transport",
    content: "If the carcass coupon is removed for transportation of the carcass or hide, it must be completely filled out and in the possession of the person accompanying the carcass or hide at all times. While quarters or pieces of an animal are being packed from the field, the carcass coupon shall remain with the person transporting the animal.",
    keywords: ["carcass coupon", "transport", "possession", "quarters", "packed", "field"]
  },
  {
    category: "Tagging & Transport",
    title: "How to Fill Out Carcass Coupon",
    content: "Steps to complete a carcass coupon: 1) Detach the carcass coupon from the license. 2) CUT OUT the entire MONTH of the kill. 3) CUT OUT the entire DAY of the kill. 4) SIGN the carcass coupon. Complete all steps immediately after harvesting and before leaving the site of the kill.",
    keywords: ["carcass coupon", "how to", "fill out", "cut out", "month", "day", "sign", "detach"]
  },

  // ==================== VEHICLE RESTRICTIONS ====================
  {
    category: "Vehicle Restrictions",
    title: "Vehicle Restrictions on Federal Land",
    content: "Sportspersons are advised that many areas of National Forest and Bureau of Land Management lands are subject to travel and vehicle use limitations to protect resources. Maps and additional information regarding these limitations are available at U.S. Forest Service, Bureau of Land Management and other agency offices near these public lands.",
    keywords: ["vehicle", "restrictions", "National Forest", "BLM", "travel", "maps", "off-road"]
  },

  // ==================== WILDERNESS AREAS ====================
  {
    category: "Wilderness",
    title: "Wilderness Guide Requirement",
    content: "Nonresident big game and trophy game hunters must be accompanied by a professional or resident guide when hunting in designated wilderness areas.",
    keywords: ["wilderness", "nonresident", "guide", "required", "professional guide", "resident guide"]
  },

  // ==================== WILDLIFE VIOLATOR COMPACT ====================
  {
    category: "Enforcement",
    title: "Wildlife Violator Compact",
    content: "Wyoming is a member of the Wildlife Violator Compact. The Compact enables a violator from any member state to accept a wildlife citation and proceed on their way without being required to post an appearance bond unless the violation requires MUST APPEAR and NO BOND ACCEPTED. The Compact provides for the suspension of wildlife license privileges in the home state of any person whose license privileges have been suspended by a participating state.",
    keywords: ["Wildlife Violator Compact", "citation", "bond", "suspension", "member state"]
  },
  {
    category: "Enforcement",
    title: "Wildlife Violator Compact - License Suspension",
    content: "If you have had your privileges suspended in any of the participating states, you may lose your privileges in Wyoming, in addition to all the participating Compact states. Additional information about the Compact can be obtained by contacting the Wildlife Law Enforcement Coordinator at (307) 233-6413.",
    keywords: ["Wildlife Violator Compact", "suspended", "privileges", "contact", "307-233-6413"]
  },

  // ==================== WIND RIVER RESERVATION ====================
  {
    category: "Special Areas",
    title: "Wind River Reservation",
    content: "Only non-Indian owned, fee title lands are open to the taking of wildlife with a State of Wyoming license. Land status is complicated and lawful access must be investigated thoroughly. Sportspersons are advised it is their responsibility to determine land status prior to entering these areas.",
    keywords: ["Wind River Reservation", "tribal land", "fee title", "land status", "access"]
  },

  // ==================== WYOMING STATE PARKS ====================
  {
    category: "Special Areas",
    title: "Wyoming State Parks",
    content: "Wyoming State Parks allow limited hunting opportunities at specific locations and may have additional restrictions and regulations for access and hunting. Sportspersons are encouraged to contact Wyoming State Parks at wyoparks.wyo.gov or contact the individual State Park Office for additional information prior to hunting.",
    keywords: ["State Parks", "limited hunting", "restrictions", "wyoparks.wyo.gov"]
  },

  // ==================== CREDIT CARD FEE ====================
  {
    category: "Fees",
    title: "Credit Card Processing Fee",
    content: "The Department shall charge a two point five percent (2.5%) credit card processing fee of the cost of any license, permit, stamp, tag, preference point or competitive raffle chance applied for or purchased by the use of a credit card.",
    keywords: ["credit card", "fee", "2.5%", "processing", "license", "permit"]
  },

  // ==================== BEAR IDENTIFICATION ====================
  {
    category: "Safety",
    title: "Bear Identification - Black Bear vs Grizzly Bear",
    content: "Wyoming is home to black bears and grizzly bears. It's important to know the difference between the two whether you are a hunter or an occasional hiker. Although grizzly bears are often more aggressive, black bears can still be dangerous and being able to identify the species can help you stay safe in bear country. When identifying a bear, make sure to use all four reliable characteristics to determine the species. Never use color or size to identify a bear.",
    keywords: ["bear identification", "black bear", "grizzly bear", "safety", "species"]
  },
  {
    category: "Safety",
    title: "Black Bear Identification",
    content: "Black bear characteristics: Lack of shoulder hump; Straight facial profile; Tall pointed ears; Short curved claws 1-2 inches; Toes are inline.",
    keywords: ["black bear", "identification", "no hump", "straight face", "pointed ears", "short claws"]
  },
  {
    category: "Safety",
    title: "Grizzly Bear Identification",
    content: "Grizzly bear characteristics: Prominent shoulder hump; Dished facial profile; Short, round ears; Long, straight claws 3-4 inches; Toes not inline.",
    keywords: ["grizzly bear", "identification", "shoulder hump", "dished face", "round ears", "long claws"]
  }
];

