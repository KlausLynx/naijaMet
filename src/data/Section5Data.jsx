export const metricCards = [
    { label: "Gini coefficient", value: "35.1", sub: "High inequality", color: "#BA7517", bg: "#FAEEDA",
        explain: "The number dropped significantly not because inequality improved, but because the measurement method changed. A score from 0 to 100 where 0 means total equality and 100 means one person owns everything. Nigeria's 35.1 sits in 'high inequality' territory — a figure that masks the concentration of oil wealth among a small elite." },
    { label: "HDI score", value: "0.560", sub: "Rank 164 of 193", color: "#A32D2D", bg: "#FCEBEB",
        explain: "The Human Development Index blends life expectancy, years of schooling, and income into a single 0–1 score. Nigeria's rank of 161 is far below its GDP rank — the gap measures what growth failed to deliver." },
    { label: "MPI score", value: "0.175", sub: "~63% multidimensionally poor", color: "#D85A30", bg: "#FAECE7",
        explain: "The Multidimensional Poverty Index counts people lacking adequate nutrition, schooling, electricity, clean water, and sanitation — simultaneously. It reveals the layered, compounding nature of poverty that income alone obscures." },
    { label: "Median income", value: "~$480 (~#645,000)/yr", sub: "vs $2,448 GDP per capita (PPP)", color: "#185FA5", bg: "#E6F1FB", explain: "Nigeria's GDP per capita (~$2,450) is an average dragged upward by oil revenues and a small wealthy elite. The median tells a different story: 93% of Nigerian workers have no formal salary — they're traders, farmers, artisans, and day labourers in the informal economy earning irregularly. When you factor in the full population — formal and informal workers alike — the median Nigerian lives on roughly $490 a year. The 5× gap between that and the GDP average is not a rounding error. It's the inequality."} 
];

export const tableRows = [
    {
        metric: "GDP per capita PPP",
        measures: "Average production per person",
        score: "~$2,450 · rank ~178",
        reveals: "Hides distribution entirely — treats a billionaire and a subsistence farmer as equal contributors",
        severity: "neutral",
    },
    {
        metric: "Gini coefficient",
        measures: "Income inequality (0 = equal, 100 = one person owns all)",
        score: "35.1",
        reveals: "Highly unequal — the top 10% capture a disproportionate share of GDP's so-called average",
        severity: "warn",
    },
    {
        metric: "HDI",
        measures: "Health + education + income combined into one score",
        score: "0.560 · rank 164",
        reveals: "A 44-place gap below GDP rank — Nigeria produces far more than its people can access in schools and hospitals",
        severity: "bad",
    },
    {
        metric: "MPI",
        measures: "Water, electricity, school, healthcare — deprivations measured simultaneously",
        score: "0.175 · ~63% deprived",
        reveals: "Shows that most poor Nigerians lack multiple basic services at once — invisible to any single metric",
        severity: "bad",
    },
    {
        metric: "Median income",
        measures: "What the typical person actually earns",
        score: "~$490/yr",
        reveals: "5× lower than GDP per capita implies — 93% of workers are in the informal economy with no fixed salary",
        severity: "warn",
    },
    {
        metric: "Inflation",
        score: "15.38% (Mar 2026)", 
        reveals: "Inflation has fallen sharply from its 2024 peak of ~35% — but prices are still rising, just slower. Everything that got expensive stayed expensive; the crisis is in the accumulated damage, not just the rate",
        severity: "warn",  
    },
    {
        metric: "Currency devaluation",
        score: "₦1,343/$ (Apr 2026)",  
        reveals: "The naira has partially recovered — up ~16% over the past year — but is still ~65% weaker than pre-2023 (₦460/$). Savings and import costs from that collapse haven't reversed",
        severity: "warn",
    },
    {
        metric: "Real food inflation",
        score: "14.31% (Mar 2026)", 
        reveals: "Food prices are rising more slowly now, but after two years of 35–40% annual increases, the base is already devastated. A loaf of bread that cost ₦500 in 2022 still costs ₦2,000+ today",
        severity: "warn",  
    },
];
export const incomeGapData = [
    {
        label: "GDP per capita (PPP)",
        value: 2450,          // IMF/Trading Economics 2024; ~$1,223 nominal IMF 2025
        fill: "#185FA5",
    },
    {
        label: "Median income",
        value: 480,           // ~₦696,000/yr (₦58,000/mo avg formal+informal) ÷ ₦1,450
        fill: "#D85A30",
    },
];
// ── DATA: all ranks verified from primary sources ─────────────
// GDP per capita: IMF WEO 2025, ~189 countries
// HDI: UNDP Human Development Report 2025, 193 countries  
// Human Capital: World Bank HCI 2020, 174 countries (latest with rankings)
// MPI (poverty): OPHI/UNDP Global MPI 2024, 112 countries — rank ~87
// Note: all plotted on same 0–193 scale for visual comparison
// "Higher bar = worse rank"

export const rankGapData = [
    { name: "GDP per capita", value: 178, fill: "#185FA5", total: 189 },
    { name: "HDI rank",       value: 164, fill: "#D85A30", total: 193 },
    { name: "Human Capital",  value: 155, fill: "#A32D2D", total: 174 },
    { name: "MPI poverty",    value: 87,  fill: "#BA7517", total: 112 },
];
export const nigeriaEconomicHighlights = [
    { label: "CPI Inflation 2025 (avg)", val: "~23%", color: "#BA7517", bg: "#FAEEDA" },
    { label: "Food Inflation 2025 (avg)", val: "~20%", color: "#A32D2D",bg: "#FCEBEB" },
    { label: "Naira vs USD drop (2023–24)", val: "~70%", color: "#D85A30", bg: "#FAECE7" },
]

export const nigeriaInflationData = [
    // --- Pre-NBS food tracking era (headline only) ---
    { year: "1996", cpi: 29.3,  food: 29.8  }, // NBS food index begins ~1996; estimates aligned to headline
    { year: "1997", cpi: 10.7,  food: 8.5   },
    { year: "1998", cpi: 7.9,   food: 7.4   },
    { year: "1999", cpi: 6.6,   food: 3.7   },
    { year: "2000", cpi: 6.9,   food: -5.0  }, // Food deflation episode (record low ~-17.5% Jan 2000, avg ~-5%)
    { year: "2001", cpi: 18.9,  food: 19.3  },
    { year: "2002", cpi: 12.9,  food: 13.2  },
    { year: "2003", cpi: 14.0,  food: 13.9  },
    { year: "2004", cpi: 15.0,  food: 14.8  },
    { year: "2005", cpi: 17.9,  food: 19.2  },
    { year: "2006", cpi: 8.2,   food: 8.7   },
    { year: "2007", cpi: 5.4,   food: 5.9   },
    { year: "2008", cpi: 11.6,  food: 14.8  }, // Global food crisis impact
    { year: "2009", cpi: 12.5,  food: 13.3  },
    { year: "2010", cpi: 13.7,  food: 14.1  },
    { year: "2011", cpi: 10.8,  food: 11.3  },
    { year: "2012", cpi: 12.2,  food: 12.0  },
    { year: "2013", cpi: 8.5,   food: 9.3   },
    { year: "2014", cpi: 8.0,   food: 9.0   },
    { year: "2015", cpi: 9.0,   food: 9.6   },
    { year: "2016", cpi: 15.7,  food: 16.8  }, // FX crisis, fuel subsidy removal
    { year: "2017", cpi: 16.5,  food: 20.3  },
    { year: "2018", cpi: 12.1,  food: 13.5  },
    { year: "2019", cpi: 11.4,  food: 13.2  },
    { year: "2020", cpi: 13.2,  food: 16.0  }, // COVID + border closure
    { year: "2021", cpi: 17.0,  food: 20.6  },
    { year: "2022", cpi: 18.8,  food: 23.7  },
    { year: "2023", cpi: 24.7,  food: 29.2  },
    { year: "2024", cpi: 31.4,  food: 36.0  }, // Peak: food hit 40.87% in June 2024
    // ⚠️ 2025 onward uses NEW NBS rebased methodology (2024=100) — not directly comparable to prior years
    { year: "2025", cpi: 23.0,  food: 14.8  }, // Rebased series; apparent drop partly methodological
];

// ══════════════════════════════════════════════════════════════
// NIGERIA NAIRA / USD EXCHANGE RATE — FULL HISTORY
// Sources: CBN Official, IMF, World Bank, FreeCurrencyRates
// 1973–2004: Annual average (NGN per $1) — CBN/IMF data
// 2005–2022: Annual average — CBN IFEM/WDAS official rate
// 2023–2026: Monthly average — CBN NAFEM official rate
// Note: Naira introduced Jan 1, 1973 (replaced Nigerian pound)
// ══════════════════════════════════════════════════════════════

export const nairaRateHistory = [
    // ── ANNUAL DATA (1973–2022) ─────────────────────────────────
    // Era 1: Strong Naira — Oil boom, managed peg
    { date: "1973", rate: 0.658 },
    { date: "1974", rate: 0.630 },
    { date: "1975", rate: 0.616 },
    { date: "1976", rate: 0.620 },
    { date: "1977", rate: 0.647 },
    { date: "1978", rate: 0.606 },
    { date: "1979", rate: 0.596 }, // Naira at its strongest vs USD
    { date: "1980", rate: 0.550 }, // Peak oil, naira stronger than dollar
    { date: "1981", rate: 0.610 },
    { date: "1982", rate: 0.673 },
    { date: "1983", rate: 0.724 },
    { date: "1984", rate: 0.765 },
    { date: "1985", rate: 0.894 },

    // Era 2: SAP devaluation — Babangida float (1986)
    { date: "1986", rate: 2.02  }, // ⚡ SAP introduced, naira floated — 126% devaluation
    { date: "1987", rate: 4.02  },
    { date: "1988", rate: 4.54  },
    { date: "1989", rate: 7.39  },
    { date: "1990", rate: 7.39  },
    { date: "1991", rate: 8.04  },
    { date: "1992", rate: 9.91  },
    { date: "1993", rate: 17.30 }, // Abacha takes power

    // Era 3: Abacha peg — artificial fix at ₦21.89
    { date: "1994", rate: 22.33 },
    { date: "1995", rate: 21.89 }, // Abacha peg begins
    { date: "1996", rate: 21.89 },
    { date: "1997", rate: 21.89 },
    { date: "1998", rate: 21.89 },
    { date: "1999", rate: 21.89 }, // Abacha dies; Obasanjo elected

    // Era 4: Liberalisation — Dutch Auction System
    { date: "2000", rate: 85.98  }, // ⚡ Peg removed; naira collapses
    { date: "2001", rate: 102.11 },
    { date: "2002", rate: 120.97 },
    { date: "2003", rate: 129.22 },
    { date: "2004", rate: 133.50 },
    { date: "2005", rate: 132.15 },
    { date: "2006", rate: 128.65 }, // WDAS introduced; naira appreciates
    { date: "2007", rate: 125.83 },
    { date: "2008", rate: 118.57 }, // Global financial crisis
    { date: "2009", rate: 148.91 }, // Post-crisis depreciation
    { date: "2010", rate: 150.30 },
    { date: "2011", rate: 153.90 },
    { date: "2012", rate: 157.31 },
    { date: "2013", rate: 157.31 },
    { date: "2014", rate: 158.55 },

    // Era 5: Oil crash → managed float
    { date: "2015", rate: 196.99 }, // ⚡ Oil crash; CBN pegs at ₦197
    { date: "2016", rate: 253.49 }, // ⚡ June 2016: float allowed; ₦282→₦380
    { date: "2017", rate: 305.79 },
    { date: "2018", rate: 306.08 },
    { date: "2019", rate: 306.92 },
    { date: "2020", rate: 358.81 }, // COVID devaluation
    { date: "2021", rate: 381.00 },
    { date: "2022", rate: 419.00 }, // Official; parallel ~₦671

    // ── MONTHLY DATA (2023–2026) ────────────────────────────────
    // Era 6: Tinubu reforms — float + subsidy removal
    { date: "Jan 2023", rate: 461  }, // CBN peg still holding officially
    { date: "Feb 2023", rate: 461  }, // Naira cash crunch crisis
    { date: "Mar 2023", rate: 461  },
    { date: "Apr 2023", rate: 462  },
    { date: "May 2023", rate: 463  },
    { date: "Jun 2023", rate: 664  }, // ⚡ June 14: CBN abandons peg; -23% in one day
    { date: "Jul 2023", rate: 779  }, // Hit ₦853 low on July 19
    { date: "Aug 2023", rate: 762  },
    { date: "Sep 2023", rate: 763  },
    { date: "Oct 2023", rate: 775  },
    { date: "Nov 2023", rate: 816  },
    { date: "Dec 2023", rate: 848  },

    { date: "Jan 2024", rate: 912  },
    { date: "Feb 2024", rate: 1495 }, // ⚡ Crashed 50%+ in one week (₦898→₦1,400)
    { date: "Mar 2024", rate: 1561 },
    { date: "Apr 2024", rate: 1290 }, // CBN interventions; partial recovery
    { date: "May 2024", rate: 1453 },
    { date: "Jun 2024", rate: 1493 },
    { date: "Jul 2024", rate: 1579 },
    { date: "Aug 2024", rate: 1584 },
    { date: "Sep 2024", rate: 1638 },
    { date: "Oct 2024", rate: 1641 },
    { date: "Nov 2024", rate: 1672 }, // ⚡ All-time high: ₦1,695.54 on Nov 22
    { date: "Dec 2024", rate: 1583 },

    { date: "Jan 2025", rate: 1541 },
    { date: "Feb 2025", rate: 1574 },
    { date: "Mar 2025", rate: 1566 },
    { date: "Apr 2025", rate: 1543 },
    { date: "May 2025", rate: 1530 },
    { date: "Jun 2025", rate: 1533 },
    { date: "Jul 2025", rate: 1531 },
    { date: "Aug 2025", rate: 1533 },
    { date: "Sep 2025", rate: 1504 },
    { date: "Oct 2025", rate: 1466 },
    { date: "Nov 2025", rate: 1443 },
    { date: "Dec 2025", rate: 1453 },

    { date: "Jan 2026", rate: 1420 },
    { date: "Feb 2026", rate: 1358 },
    { date: "Mar 2026", rate: 1344 },
    { date: "Apr 2026", rate: 1342 }, // ~current as of mid-April 2026
];

export const radarData = [
    {
        metric: "GDP size",
        nigeria: 100,
        peerAvg: 30,
    },
    {
        metric: "HDI",
        nigeria: 56,  
        peerAvg: 59,   
    },
    {
        metric: "Gini equity",
        nigeria: 65,  
        peerAvg: 59,   
    },
    {
        metric: "Poverty reduction",
        nigeria: 44,  
        peerAvg: 74,  
    },
    {
        metric: "Median income",
        nigeria: 11,   
        peerAvg: 38,   
    },
    {
        metric: "Food security",
        nigeria: 30,   
        peerAvg: 37,   
    },
];

export const keyTakeaways = [
    "A 123-place gap between GDP rank and HDI rank is not a data anomaly — it is evidence of structural wealth capture.",
    "Food inflation of 40% in a single year represents a humanitarian shock invisible to national output statistics.",
    "Currency devaluation transfers wealth from wage earners to asset holders, widening inequality even as GDP holds steady.",
    "Median income being 4.5× below GDP per capita means the \"average\" Nigerian the data describes does not exist.",
    "No single metric is enough. Truth requires the full dashboard.",
];

export const sources = [
    "World Bank WDI 2024",
    "UNDP Human Development Report 2023",
    "NBS Nigeria Inflation Reports 2024",
    "IMF Article IV Consultation Nigeria 2024",
    "OPHI Multidimensional Poverty Index 2023",
    "CBN Exchange Rate Data 2023–2025"
]