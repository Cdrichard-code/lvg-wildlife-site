// Figures behind the savings estimator, one entry per county page.
// Tax rates: Texas Comptroller, 2025 tax rates and levies (per $100 of value, shown as %).
//   rate = county + median school district + countywide hospital, college or road districts.
//   City taxes and emergency services districts are left out (most rural land has no city tax).
// Productivity value: Texas Comptroller School District Property Value Study, County Productivity
//   Values Report: the value the appraisal district reported for wildlife-managed land (or improved
//   pasture where the county reported no wildlife land). Rebuild these each year from the new files.
export const RATES_SOURCE = 'https://comptroller.texas.gov/taxes/property-tax/rates/';
export const LAND_PRICE = { perAcre: 9159, label: 'Northeast Texas median rural land price, 4th quarter 2025', url: 'https://trerc.tamu.edu/reports/texas-rural-land-markets-fourth-quarter-2025/' };
export const DEFAULT = { rate: 1.5, pv: 120 };
export const taxFigures = [
 {
  "slug": "collin-county",
  "name": "Collin",
  "rate": 1.44,
  "parts": [
   [
    "County",
    0.15
   ],
   [
    "Typical school district (median)",
    1.21
   ],
   [
    "Collin County Junior College District",
    0.08
   ]
  ],
  "isd": [
   0.86,
   1.26
  ],
  "pv": 89,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2024 final",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2024F/0430000001B.php"
 },
 {
  "slug": "hunt-county",
  "name": "Hunt",
  "rate": 1.51,
  "parts": [
   [
    "County",
    0.33
   ],
   [
    "Typical school district (median)",
    0.97
   ],
   [
    "Hunt County Memorial Hospital District",
    0.21
   ]
  ],
  "isd": [
   0.67,
   1.26
  ],
  "pv": 115,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2025 preliminary",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2025P/1160000001B.php"
 },
 {
  "slug": "fannin-county",
  "name": "Fannin",
  "rate": 1.23,
  "parts": [
   [
    "County",
    0.35
   ],
   [
    "Typical school district (median)",
    0.88
   ]
  ],
  "isd": [
   0.71,
   1.25
  ],
  "pv": 93,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2025 preliminary",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2025P/0740000001B.php"
 },
 {
  "slug": "grayson-county",
  "name": "Grayson",
  "rate": 1.59,
  "parts": [
   [
    "County",
    0.31
   ],
   [
    "Typical school district (median)",
    1.14
   ],
   [
    "Grayson County Junior College District",
    0.15
   ]
  ],
  "isd": [
   0.92,
   1.23
  ],
  "pv": 43,
  "pvBasis": "improved pasture",
  "pvYear": "2024 final",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2024F/0910000001B.php"
 },
 {
  "slug": "kaufman-county",
  "name": "Kaufman",
  "rate": 1.51,
  "parts": [
   [
    "County",
    0.42
   ],
   [
    "Typical school district (median)",
    1.1
   ]
  ],
  "isd": [
   0.73,
   1.29
  ],
  "pv": 88,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2025 preliminary",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2025P/1290000001B.php"
 },
 {
  "slug": "ellis-county",
  "name": "Ellis",
  "rate": 1.34,
  "parts": [
   [
    "County",
    0.27
   ],
   [
    "Typical school district (median)",
    1.07
   ]
  ],
  "isd": [
   0.82,
   1.23
  ],
  "pv": 135,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2024 final",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2024F/0700000001B.php"
 },
 {
  "slug": "navarro-county",
  "name": "Navarro",
  "rate": 1.52,
  "parts": [
   [
    "County",
    0.42
   ],
   [
    "Typical school district (median)",
    1.0
   ],
   [
    "Navarro College District",
    0.1
   ]
  ],
  "isd": [
   0.85,
   1.25
  ],
  "pv": 89,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2025 preliminary",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2025P/1750000001B.php"
 },
 {
  "slug": "freestone-county",
  "name": "Freestone",
  "rate": 1.21,
  "parts": [
   [
    "County",
    0.33
   ],
   [
    "Typical school district (median)",
    0.87
   ]
  ],
  "isd": [
   0.67,
   1.11
  ],
  "pv": 89,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2025 preliminary",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2025P/0810000001B.php"
 },
 {
  "slug": "van-zandt-county",
  "name": "Van Zandt",
  "rate": 1.75,
  "parts": [
   [
    "County",
    0.7
   ],
   [
    "Typical school district (median)",
    0.95
   ],
   [
    "Van Zandt Road District",
    0.1
   ]
  ],
  "isd": [
   0.73,
   1.26
  ],
  "pv": 136,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2025 preliminary",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2025P/2340000001B.php"
 },
 {
  "slug": "wood-county",
  "name": "Wood",
  "rate": 1.42,
  "parts": [
   [
    "County",
    0.46
   ],
   [
    "Typical school district (median)",
    0.95
   ]
  ],
  "isd": [
   0.67,
   1.12
  ],
  "pv": 161,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2025 preliminary",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2025P/2500000001B.php"
 },
 {
  "slug": "smith-county",
  "name": "Smith",
  "rate": 1.51,
  "parts": [
   [
    "County",
    0.36
   ],
   [
    "Typical school district (median)",
    0.96
   ],
   [
    "Tyler Junior College District",
    0.19
   ]
  ],
  "isd": [
   0.83,
   1.25
  ],
  "pv": 141,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2025 preliminary",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2025P/2120000001B.php"
 },
 {
  "slug": "hopkins-county",
  "name": "Hopkins",
  "rate": 1.44,
  "parts": [
   [
    "County",
    0.34
   ],
   [
    "Typical school district (median)",
    0.97
   ],
   [
    "Hopkins County Hospital District",
    0.14
   ]
  ],
  "isd": [
   0.62,
   1.17
  ],
  "pv": 90,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2024 final",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2024F/1120000001B.php"
 },
 {
  "slug": "rains-county",
  "name": "Rains",
  "rate": 1.43,
  "parts": [
   [
    "County",
    0.52
   ],
   [
    "Typical school district (median)",
    0.9
   ]
  ],
  "isd": [
   0.75,
   1.16
  ],
  "pv": 101,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2024 final",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2024F/1900000001B.php"
 },
 {
  "slug": "henderson-county",
  "name": "Henderson",
  "rate": 1.37,
  "parts": [
   [
    "County",
    0.33
   ],
   [
    "Typical school district (median)",
    0.93
   ],
   [
    "Trinity Valley Community College District",
    0.11
   ]
  ],
  "isd": [
   0.67,
   1.17
  ],
  "pv": 105,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2025 preliminary",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2025P/1070000001B.php"
 },
 {
  "slug": "delta-county",
  "name": "Delta",
  "rate": 1.6,
  "parts": [
   [
    "County",
    0.59
   ],
   [
    "Typical school district (median)",
    1.0
   ]
  ],
  "isd": [
   0.8,
   1.24
  ],
  "pv": 91,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2025 preliminary",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2025P/0600000001B.php"
 },
 {
  "slug": "lamar-county",
  "name": "Lamar",
  "rate": 1.25,
  "parts": [
   [
    "County",
    0.31
   ],
   [
    "Typical school district (median)",
    0.88
   ],
   [
    "Paris Junior College District",
    0.07
   ]
  ],
  "isd": [
   0.82,
   1.09
  ],
  "pv": 192,
  "pvBasis": "improved pasture",
  "pvYear": "2024 final",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2024F/1390000001B.php"
 },
 {
  "slug": "anderson-county",
  "name": "Anderson",
  "rate": 1.48,
  "parts": [
   [
    "County",
    0.49
   ],
   [
    "Typical school district (median)",
    0.99
   ]
  ],
  "isd": [
   0.81,
   1.08
  ],
  "pv": 136,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2025 preliminary",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2025P/0010000001B.php"
 },
 {
  "slug": "limestone-county",
  "name": "Limestone",
  "rate": 1.62,
  "parts": [
   [
    "County",
    0.56
   ],
   [
    "Typical school district (median)",
    1.06
   ]
  ],
  "isd": [
   0.74,
   1.25
  ],
  "pv": 44,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2024 final",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2024F/1470000001B.php"
 },
 {
  "slug": "hill-county",
  "name": "Hill",
  "rate": 1.53,
  "parts": [
   [
    "County",
    0.45
   ],
   [
    "Typical school district (median)",
    1.0
   ],
   [
    "Hill County Junior College District",
    0.08
   ]
  ],
  "isd": [
   0.74,
   1.25
  ],
  "pv": 96,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2024 final",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2024F/1090000001B.php"
 },
 {
  "slug": "titus-county",
  "name": "Titus",
  "rate": 1.59,
  "parts": [
   [
    "County",
    0.39
   ],
   [
    "Typical school district (median)",
    0.92
   ],
   [
    "Northeast Texas Community College District",
    0.11
   ],
   [
    "Titus County Memorial Hospital District",
    0.18
   ]
  ],
  "isd": [
   0.67,
   1.07
  ],
  "pv": 91,
  "pvBasis": "wildlife-managed land",
  "pvYear": "2025 preliminary",
  "pvUrl": "https://comptroller.texas.gov/auto-data/PT2/PVS/2025P/2250000001B.php"
 }
];
export const taxBySlug = Object.fromEntries(taxFigures.map((t) => [t.slug, t]));
