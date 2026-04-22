// Nigeria State-Level GDP & Poverty Data — All Available NBS Survey Years
// Survey years: 2003/04 (NLSS), 2009/10 (HNLSS), 2018/19 (NLSS), 2022 (MPI)
// GDP share values (% of national GDP) are approximate from NBS SGDP releases.
// Poverty rates:
//   2003 & 2009 = Absolute monetary headcount (NBS 2012 abridged report)
//   2019        = Monetary headcount (NBS NLSS 2018/19, released May 2020)
//   2022        = Multidimensional Poverty Index – NOT directly comparable to monetary rates
// Population = millions, interpolated from NBS/UN estimates for each reference year.
// Note: 2003 & 2009 poverty figures exclude FCT from original NBS table; estimated here.
// Note: 2019 & 2022 figures exclude Borno from original surveys due to insecurity.

export const DATA = {
  2003: [
    { name: "Abia",        gdp: 1.3, poverty: 40.9, pop: 2.8,  region: "southEast",  oil: false, note: "2003/04 NLSS monetary absolute poverty. Relatively low for SE. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Adamawa",     gdp: 0.8, poverty: 76.6, pop: 3.2,  region: "north",      oil: false, note: "High poverty in NE zone. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Akwa Ibom",   gdp: 4.2, poverty: 56.8, pop: 3.9,  region: "southSouth", oil: true,  note: "Major oil producer. Mid-range poverty for oil state. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Anambra",     gdp: 2.8, poverty: 41.4, pop: 4.2,  region: "southEast",  oil: false, note: "Trade & SME base. Below-average poverty. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Bauchi",      gdp: 0.7, poverty: 87.8, pop: 4.4,  region: "north",      oil: false, note: "NE zone. Very high poverty. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Bayelsa",     gdp: 2.8, poverty: 40.0, pop: 1.7,  region: "southSouth", oil: true,  note: "Site of first oil well (1956). 2003 poverty relatively low — pre-elite-capture data. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Benue",       gdp: 0.8, poverty: 64.7, pop: 4.2,  region: "north",      oil: false, note: "NC zone. Agricultural. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Borno",       gdp: 0.9, poverty: 59.8, pop: 4.2,  region: "north",      oil: false, note: "Pre-insurgency (Boko Haram escalated ~2009). Moderate poverty by NE standards. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Cross River", gdp: 1.1, poverty: 67.0, pop: 2.9,  region: "southSouth", oil: false, note: "SS zone non-oil state. High poverty. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Delta",       gdp: 4.0, poverty: 70.6, pop: 4.1,  region: "southSouth", oil: true,  note: "Major oil hub. High poverty paradox evident even in 2003. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Ebonyi",      gdp: 0.5, poverty: 63.2, pop: 2.2,  region: "southEast",  oil: false, note: "Newest state (1996). Among poorest in SE. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Edo",         gdp: 1.8, poverty: 53.6, pop: 3.3,  region: "southSouth", oil: false, note: "Non-oil SS state. Mid-range. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Ekiti",       gdp: 0.6, poverty: 60.4, pop: 2.4,  region: "southWest",  oil: false, note: "SW outlier. High poverty relative to region. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Enugu",       gdp: 1.4, poverty: 50.2, pop: 3.3,  region: "southEast",  oil: false, note: "Coal & services. Mid-poverty. Source: NBS 2012 Abridged Poverty Report." },
    { name: "FCT Abuja",   gdp: 5.5, poverty: 32.0, pop: 1.4,  region: "southWest",  oil: false, note: "Federal capital. Estimated; not in NBS state tables but FCT poverty historically low due to civil service employment. Source: NBS estimates." },
    { name: "Gombe",       gdp: 0.5, poverty: 73.1, pop: 2.4,  region: "north",      oil: false, note: "NE zone. High poverty. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Imo",         gdp: 4.5, poverty: 46.7, pop: 4.0,  region: "southEast",  oil: true,  note: "Oil presence. 2003 poverty relatively moderate; worsened by 2009. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Jigawa",      gdp: 0.5, poverty: 95.3, pop: 4.3,  region: "north",      oil: false, note: "Highest poverty in Nigeria 2003 (95.3%). NW zone. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Kaduna",      gdp: 2.4, poverty: 67.6, pop: 6.1,  region: "north",      oil: false, note: "NW manufacturing hub. High poverty. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Kano",        gdp: 2.8, poverty: 63.7, pop: 9.4,  region: "north",      oil: false, note: "Largest northern city. Significant poverty despite commerce. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Katsina",     gdp: 0.8, poverty: 72.9, pop: 5.7,  region: "north",      oil: false, note: "NW zone. High poverty. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Kebbi",       gdp: 0.6, poverty: 90.8, pop: 3.2,  region: "north",      oil: false, note: "NW. Very high poverty 2003. Improved by 2009. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Kogi",        gdp: 0.7, poverty: 91.8, pop: 3.3,  region: "north",      oil: false, note: "NC zone. Second highest poverty 2003. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Kwara",       gdp: 0.7, poverty: 87.8, pop: 2.4,  region: "north",      oil: false, note: "NC zone. Very high poverty. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Lagos",       gdp: 28.0,poverty: 69.4, pop: 9.1,  region: "southWest",  oil: false, note: "2003: poverty still high at 69.4% — pre-commercial transformation era. Reduced sharply by 2009. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Nassarawa",   gdp: 0.5, poverty: 66.1, pop: 1.8,  region: "north",      oil: false, note: "NC zone. High poverty. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Niger",       gdp: 0.7, poverty: 64.4, pop: 3.9,  region: "north",      oil: false, note: "NC zone. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Ogun",        gdp: 3.0, poverty: 49.9, pop: 3.7,  region: "southWest",  oil: false, note: "Industrial belt. Mid poverty. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Ondo",        gdp: 1.5, poverty: 62.8, pop: 3.5,  region: "southWest",  oil: true,  note: "Minor oil producer. High poverty for SW. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Osun",        gdp: 0.7, poverty: 44.6, pop: 3.4,  region: "southWest",  oil: false, note: "SW. Mid poverty. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Oyo",         gdp: 2.2, poverty: 38.0, pop: 5.6,  region: "southWest",  oil: false, note: "Lowest poverty in Nigeria 2003 (38%). Agricultural & commercial. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Plateau",     gdp: 0.7, poverty: 68.5, pop: 3.2,  region: "north",      oil: false, note: "NC zone. High poverty. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Rivers",      gdp: 5.5, poverty: 56.7, pop: 5.2,  region: "southSouth", oil: true,  note: "Largest oil-producing state. 2003 poverty 56.7% — already showing oil-wealth paradox. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Sokoto",      gdp: 0.5, poverty: 75.2, pop: 3.6,  region: "north",      oil: false, note: "NW. High poverty. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Taraba",      gdp: 0.5, poverty: 60.5, pop: 2.3,  region: "north",      oil: false, note: "NE zone. Mid-high poverty. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Yobe",        gdp: 0.4, poverty: 72.7, pop: 2.3,  region: "north",      oil: false, note: "NE zone. High poverty. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Zamfara",     gdp: 0.4, poverty: 80.3, pop: 3.1,  region: "north",      oil: false, note: "NW. Very high poverty. Source: NBS 2012 Abridged Poverty Report." },
  ],

  2009: [
    { name: "Abia",        gdp: 1.4, poverty: 50.2, pop: 3.0,  region: "southEast",  oil: false, note: "Poverty worsened from 2003 (40.9→50.2). Source: NBS 2012 Abridged Poverty Report." },
    { name: "Adamawa",     gdp: 0.8, poverty: 77.8, pop: 3.5,  region: "north",      oil: false, note: "Source: NBS 2012 Abridged Poverty Report." },
    { name: "Akwa Ibom",   gdp: 5.5, poverty: 51.0, pop: 4.3,  region: "southSouth", oil: true,  note: "Improved from 56.8%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Anambra",     gdp: 3.0, poverty: 53.7, pop: 4.5,  region: "southEast",  oil: false, note: "Worsened from 41.4%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Bauchi",      gdp: 0.7, poverty: 84.0, pop: 4.8,  region: "north",      oil: false, note: "Slight improvement from 87.8%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Bayelsa",     gdp: 3.2, poverty: 44.0, pop: 1.9,  region: "southSouth", oil: true,  note: "Source: NBS 2012 Abridged Poverty Report." },
    { name: "Benue",       gdp: 0.8, poverty: 73.6, pop: 4.6,  region: "north",      oil: false, note: "Worsened from 64.7%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Borno",       gdp: 0.8, poverty: 60.6, pop: 4.6,  region: "north",      oil: false, note: "Pre-full insurgency. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Cross River", gdp: 1.1, poverty: 60.4, pop: 3.1,  region: "southSouth", oil: false, note: "Improved from 67.0%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Delta",       gdp: 4.5, poverty: 53.8, pop: 4.5,  region: "southSouth", oil: true,  note: "Improved from 70.6%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Ebonyi",      gdp: 0.5, poverty: 82.9, pop: 2.4,  region: "southEast",  oil: false, note: "Sharp deterioration from 63.2%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Edo",         gdp: 2.0, poverty: 64.1, pop: 3.5,  region: "southSouth", oil: false, note: "Worsened from 53.6%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Ekiti",       gdp: 0.6, poverty: 55.9, pop: 2.6,  region: "southWest",  oil: false, note: "Improved from 60.4%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Enugu",       gdp: 1.5, poverty: 60.6, pop: 3.5,  region: "southEast",  oil: false, note: "Worsened from 50.2%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "FCT Abuja",   gdp: 6.5, poverty: 28.0, pop: 1.9,  region: "southWest",  oil: false, note: "Estimated. Source: NBS estimates/World Bank." },
    { name: "Gombe",       gdp: 0.5, poverty: 81.6, pop: 2.6,  region: "north",      oil: false, note: "Worsened from 73.1%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Imo",         gdp: 5.0, poverty: 39.4, pop: 4.3,  region: "southEast",  oil: true,  note: "Improved from 46.7%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Jigawa",      gdp: 0.5, poverty: 88.5, pop: 4.7,  region: "north",      oil: false, note: "Highest poverty in Nigeria 2009 (88.5%). Source: NBS 2012 Abridged Poverty Report." },
    { name: "Kaduna",      gdp: 2.5, poverty: 70.0, pop: 6.7,  region: "north",      oil: false, note: "Worsened from 67.6%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Kano",        gdp: 3.0, poverty: 69.0, pop: 10.5, region: "north",      oil: false, note: "Source: NBS 2012 Abridged Poverty Report." },
    { name: "Katsina",     gdp: 0.8, poverty: 77.6, pop: 6.3,  region: "north",      oil: false, note: "Worsened from 72.9%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Kebbi",       gdp: 0.6, poverty: 72.5, pop: 3.5,  region: "north",      oil: false, note: "Improved from 90.8%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Kogi",        gdp: 0.7, poverty: 67.4, pop: 3.6,  region: "north",      oil: false, note: "Significant improvement from 91.8%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Kwara",       gdp: 0.8, poverty: 72.1, pop: 2.7,  region: "north",      oil: false, note: "Improved from 87.8%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Lagos",       gdp: 30.0,poverty: 40.3, pop: 11.0, region: "southWest",  oil: false, note: "Greatest improvement: 69.4%→40.3%. Commercial transformation era. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Nassarawa",   gdp: 0.5, poverty: 78.4, pop: 2.0,  region: "north",      oil: false, note: "Worsened from 66.1%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Niger",       gdp: 0.8, poverty: 51.0, pop: 4.3,  region: "north",      oil: false, note: "Improved from 64.4%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Ogun",        gdp: 3.2, poverty: 57.6, pop: 4.0,  region: "southWest",  oil: false, note: "Worsened from 49.9%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Ondo",        gdp: 1.5, poverty: 57.7, pop: 3.8,  region: "southWest",  oil: true,  note: "Slight improvement. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Osun",        gdp: 0.7, poverty: 37.5, pop: 3.7,  region: "southWest",  oil: false, note: "Lowest poverty in Nigeria 2009 (37.5%). Source: NBS 2012 Abridged Poverty Report." },
    { name: "Oyo",         gdp: 2.3, poverty: 50.8, pop: 6.2,  region: "southWest",  oil: false, note: "Worsened from 38.0% (was lowest in 2003). Source: NBS 2012 Abridged Poverty Report." },
    { name: "Plateau",     gdp: 0.7, poverty: 72.4, pop: 3.5,  region: "north",      oil: false, note: "Worsened from 68.5%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Rivers",      gdp: 6.0, poverty: 47.2, pop: 5.7,  region: "southSouth", oil: true,  note: "Improved from 56.7% but still high for highest-GDP state. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Sokoto",      gdp: 0.6, poverty: 86.1, pop: 4.0,  region: "north",      oil: false, note: "Worsened from 75.2%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Taraba",      gdp: 0.5, poverty: 68.3, pop: 2.5,  region: "north",      oil: false, note: "Worsened from 60.5%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Yobe",        gdp: 0.4, poverty: 76.5, pop: 2.5,  region: "north",      oil: false, note: "Worsened from 72.7%. Source: NBS 2012 Abridged Poverty Report." },
    { name: "Zamfara",     gdp: 0.5, poverty: 83.9, pop: 3.4,  region: "north",      oil: false, note: "Worsened from 80.3%. Source: NBS 2012 Abridged Poverty Report." },
  ],

  2019: [
    { name: "Rivers",      gdp: 6.5,  poverty: 76.1, pop: 7.3,  region: "southSouth", oil: true,  note: "Largest oil-producing state. Monetary poverty 76% despite highest sub-national GDP. Source: NBS NLSS 2018/19." },
    { name: "Delta",       gdp: 4.8,  poverty: 74.0, pop: 5.7,  region: "southSouth", oil: true,  note: "Major oil & gas hub. ₦1.3tn in derivation funds reportedly misappropriated. Source: NBS NLSS 2018/19." },
    { name: "Akwa Ibom",   gdp: 6.0,  poverty: 78.0, pop: 5.5,  region: "southSouth", oil: true,  note: "Second largest oil producer. Poverty exceeds national average despite derivation receipts. Source: NBS NLSS 2018/19." },
    { name: "Bayelsa",     gdp: 3.6,  poverty: 72.0, pop: 2.3,  region: "southSouth", oil: true,  note: "Site of Nigeria's first commercial oil well (1956). Still among poorest. Source: NBS NLSS 2018/19." },
    { name: "Lagos",       gdp: 32.0, poverty: 4.5,  pop: 14.8, region: "southWest",  oil: false, note: "Commercial capital. Poverty 4.5% — lowest in Nigeria. Source: NBS/Statista 2020." },
    { name: "Kano",        gdp: 3.2,  poverty: 55.1, pop: 12.8, region: "north",      oil: false, note: "Largest northern commercial city. Mid-high poverty. Source: NBS NLSS 2018/19." },
    { name: "Ogun",        gdp: 3.9,  poverty: 8.9,  pop: 5.9,  region: "southWest",  oil: false, note: "Industrial corridor. Benefits from Lagos proximity. Source: NBS NLSS 2018/19." },
    { name: "Anambra",     gdp: 4.0,  poverty: 14.8, pop: 5.8,  region: "southEast",  oil: false, note: "Strong SME and trade base. Lower poverty relative to output. Source: NBS NLSS 2018/19." },
    { name: "Kaduna",      gdp: 3.3,  poverty: 60.2, pop: 8.2,  region: "north",      oil: false, note: "Manufacturing base. Security challenges dampen gains. Source: NBS NLSS 2018/19." },
    { name: "Zamfara",     gdp: 0.6,  poverty: 90.4, pop: 4.5,  region: "north",      oil: false, note: "Extreme poverty. Conflict-affected. Source: NBS NLSS 2018/19." },
    { name: "Sokoto",      gdp: 0.7,  poverty: 87.7, pop: 4.9,  region: "north",      oil: false, note: "Extreme poverty. Source: NBS NLSS 2018/19." },
    { name: "Borno",       gdp: 0.9,  poverty: 73.8, pop: 6.1,  region: "north",      oil: false, note: "Conflict-affected; insurgency devastated economic base since 2009. Source: NBS NLSS 2018/19." },
    { name: "Cross River", gdp: 1.4,  poverty: 65.2, pop: 3.9,  region: "southSouth", oil: false, note: "Tourism potential unrealised. Source: NBS NLSS 2018/19." },
    { name: "Edo",         gdp: 2.4,  poverty: 40.0, pop: 4.7,  region: "southSouth", oil: false, note: "Mid-tier. Oil & rubber economy. Source: NBS NLSS 2018/19." },
    { name: "FCT Abuja",   gdp: 8.0,  poverty: 15.0, pop: 3.6,  region: "southWest",  oil: false, note: "Federal capital. Government spending translates to lower poverty. Source: NBS NLSS 2018/19." },
    { name: "Imo",         gdp: 6.0,  poverty: 58.0, pop: 5.3,  region: "southEast",  oil: true,  note: "Oil presence. High poverty paradox. Source: NBS NLSS 2018/19; BudgIT 2022." },
    { name: "Enugu",       gdp: 1.7,  poverty: 36.7, pop: 4.4,  region: "southEast",  oil: false, note: "Coal & services economy. Mid-poverty. Source: NBS NLSS 2018/19." },
    { name: "Oyo",         gdp: 2.7,  poverty: 19.0, pop: 7.7,  region: "southWest",  oil: false, note: "Agricultural & commercial hub. Source: NBS NLSS 2018/19." },
    { name: "Katsina",     gdp: 1.0,  poverty: 82.0, pop: 7.8,  region: "north",      oil: false, note: "Extreme poverty. Source: NBS NLSS 2018/19." },
    { name: "Abia",        gdp: 1.5,  poverty: 29.7, pop: 3.7,  region: "southEast",  oil: false, note: "Manufacturing; lower poverty. Source: NBS NLSS 2018/19." },
    { name: "Adamawa",     gdp: 0.8,  poverty: 72.0, pop: 4.3,  region: "north",      oil: false, note: "NE zone. Source: NBS NLSS 2018/19." },
    { name: "Bauchi",      gdp: 0.7,  poverty: 80.9, pop: 6.5,  region: "north",      oil: false, note: "NE zone high poverty. Source: NBS NLSS 2018/19." },
    { name: "Benue",       gdp: 0.7,  poverty: 69.1, pop: 5.8,  region: "north",      oil: false, note: "NC zone. Source: NBS NLSS 2018/19." },
    { name: "Ebonyi",      gdp: 0.5,  poverty: 54.6, pop: 3.0,  region: "southEast",  oil: false, note: "Improved from 2009. Source: NBS NLSS 2018/19." },
    { name: "Ekiti",       gdp: 0.5,  poverty: 35.5, pop: 3.3,  region: "southWest",  oil: false, note: "Source: NBS NLSS 2018/19." },
    { name: "Gombe",       gdp: 0.5,  poverty: 74.2, pop: 3.4,  region: "north",      oil: false, note: "NE zone. Source: NBS NLSS 2018/19." },
    { name: "Jigawa",      gdp: 0.5,  poverty: 87.0, pop: 6.1,  region: "north",      oil: false, note: "Consistently among highest poverty states. Source: NBS NLSS 2018/19." },
    { name: "Kebbi",       gdp: 0.6,  poverty: 80.0, pop: 4.6,  region: "north",      oil: false, note: "NW. Source: NBS NLSS 2018/19." },
    { name: "Kogi",        gdp: 0.7,  poverty: 53.4, pop: 4.7,  region: "north",      oil: false, note: "NC zone. Source: NBS NLSS 2018/19." },
    { name: "Kwara",       gdp: 0.7,  poverty: 48.7, pop: 3.3,  region: "north",      oil: false, note: "NC zone. Source: NBS NLSS 2018/19." },
    { name: "Nassarawa",   gdp: 0.5,  poverty: 52.9, pop: 2.6,  region: "north",      oil: false, note: "NC zone. Source: NBS NLSS 2018/19." },
    { name: "Niger",       gdp: 0.8,  poverty: 58.6, pop: 5.6,  region: "north",      oil: false, note: "NC zone. Source: NBS NLSS 2018/19." },
    { name: "Ondo",        gdp: 1.5,  poverty: 35.5, pop: 4.7,  region: "southWest",  oil: true,  note: "Source: NBS NLSS 2018/19." },
    { name: "Osun",        gdp: 0.7,  poverty: 23.5, pop: 4.7,  region: "southWest",  oil: false, note: "SW. Source: NBS NLSS 2018/19." },
    { name: "Plateau",     gdp: 0.7,  poverty: 62.3, pop: 4.5,  region: "north",      oil: false, note: "NC zone. Source: NBS NLSS 2018/19." },
    { name: "Sokoto",      gdp: 0.7,  poverty: 87.7, pop: 4.9,  region: "north",      oil: false, note: "Source: NBS NLSS 2018/19." },
    { name: "Taraba",      gdp: 0.5,  poverty: 87.7, pop: 3.3,  region: "north",      oil: false, note: "NE zone. Among highest poverty. Source: NBS NLSS 2018/19." },
    { name: "Yobe",        gdp: 0.4,  poverty: 72.3, pop: 3.3,  region: "north",      oil: false, note: "NE zone. Source: NBS NLSS 2018/19." },
  ],

  2022: [
    { name: "Rivers",      gdp: 6.2,  poverty: 73.5, pop: 7.8,  region: "southSouth", oil: true,  note: "MPI 2022. Environmental degradation from oil spills compounds poverty. Source: NBS/OPHI MPI 2022." },
    { name: "Delta",       gdp: 4.8,  poverty: 70.5, pop: 6.0,  region: "southSouth", oil: true,  note: "MPI 2022. ₦1.3tn in derivation funds misappropriated per BudgIT. Source: NBS/OPHI MPI 2022." },
    { name: "Akwa Ibom",   gdp: 6.1,  poverty: 70.8, pop: 5.9,  region: "southSouth", oil: true,  note: "MPI 2022: near 71%. Structural capture entrenched. Source: NBS/OPHI MPI 2022." },
    { name: "Bayelsa",     gdp: 3.6,  poverty: 88.5, pop: 2.5,  region: "southSouth", oil: true,  note: "2nd poorest by MPI 2022 (88.5%) despite oil wealth. Child MPI >95%. Source: NBS/OPHI MPI 2022." },
    { name: "Lagos",       gdp: 32.0, poverty: 29.4, pop: 15.4, region: "southWest",  oil: false, note: "MPI 2022: 29.4% — lowest in Nigeria. Note: MPI higher than monetary headcount by design. Source: NBS/OPHI MPI 2022." },
    { name: "Kano",        gdp: 3.3,  poverty: 63.2, pop: 13.4, region: "north",      oil: false, note: "MPI 2022. Northern poverty deepens post-COVID. Source: NBS/OPHI MPI 2022." },
    { name: "Ogun",        gdp: 3.9,  poverty: 32.0, pop: 6.2,  region: "southWest",  oil: false, note: "MPI 2022. Industrial base cushions poverty. Source: NBS/OPHI MPI 2022." },
    { name: "Anambra",     gdp: 4.0,  poverty: 32.1, pop: 6.1,  region: "southEast",  oil: false, note: "MPI 2022: 32.1% — among least poor. Trade-driven growth redistributes. Source: NBS/OPHI MPI 2022." },
    { name: "Kaduna",      gdp: 3.4,  poverty: 67.0, pop: 8.5,  region: "north",      oil: false, note: "MPI 2022. Security tensions suppress human development. Source: NBS/OPHI MPI 2022." },
    { name: "Zamfara",     gdp: 0.6,  poverty: 91.9, pop: 4.7,  region: "north",      oil: false, note: "Highest MPI in Nigeria 2022 (91.9%). Source: NBS/OPHI MPI 2022." },
    { name: "Sokoto",      gdp: 0.7,  poverty: 90.5, pop: 5.1,  region: "north",      oil: false, note: "Near-top by MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Borno",       gdp: 0.9,  poverty: 77.0, pop: 6.4,  region: "north",      oil: false, note: "Insurgency sustained. Source: NBS/OPHI MPI 2022." },
    { name: "Cross River", gdp: 1.4,  poverty: 66.1, pop: 4.1,  region: "southSouth", oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Edo",         gdp: 2.4,  poverty: 31.0, pop: 4.9,  region: "southSouth", oil: false, note: "MPI 2022: 31% — relatively low. Source: NBS/OPHI MPI 2022." },
    { name: "FCT Abuja",   gdp: 8.0,  poverty: 32.0, pop: 3.9,  region: "southWest",  oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Imo",         gdp: 6.0,  poverty: 58.0, pop: 5.6,  region: "southEast",  oil: true,  note: "Oil state; high poverty persists. Source: NBS/OPHI MPI 2022." },
    { name: "Enugu",       gdp: 1.7,  poverty: 47.0, pop: 4.6,  region: "southEast",  oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Oyo",         gdp: 2.8,  poverty: 33.0, pop: 8.0,  region: "southWest",  oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Katsina",     gdp: 1.0,  poverty: 87.8, pop: 8.0,  region: "north",      oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Abia",        gdp: 1.5,  poverty: 29.8, pop: 3.9,  region: "southEast",  oil: false, note: "MPI 2022: 29.8% — among least poor. Source: NBS/OPHI MPI 2022." },
    { name: "Adamawa",     gdp: 0.8,  poverty: 74.0, pop: 4.6,  region: "north",      oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Bauchi",      gdp: 0.7,  poverty: 85.0, pop: 6.9,  region: "north",      oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Benue",       gdp: 0.7,  poverty: 76.0, pop: 6.1,  region: "north",      oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Ebonyi",      gdp: 0.5,  poverty: 67.0, pop: 3.2,  region: "southEast",  oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Ekiti",       gdp: 0.5,  poverty: 44.0, pop: 3.5,  region: "southWest",  oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Gombe",       gdp: 0.5,  poverty: 79.0, pop: 3.6,  region: "north",      oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Jigawa",      gdp: 0.5,  poverty: 89.0, pop: 6.4,  region: "north",      oil: false, note: "MPI 2022. Persistently highest tier. Source: NBS/OPHI MPI 2022." },
    { name: "Kebbi",       gdp: 0.6,  poverty: 84.0, pop: 4.9,  region: "north",      oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Kogi",        gdp: 0.7,  poverty: 66.0, pop: 4.9,  region: "north",      oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Kwara",       gdp: 0.7,  poverty: 54.0, pop: 3.5,  region: "north",      oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Nassarawa",   gdp: 0.5,  poverty: 70.0, pop: 2.8,  region: "north",      oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Niger",       gdp: 0.8,  poverty: 73.0, pop: 5.9,  region: "north",      oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Ondo",        gdp: 1.5,  poverty: 44.0, pop: 4.9,  region: "southWest",  oil: true,  note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Osun",        gdp: 0.7,  poverty: 36.0, pop: 5.0,  region: "southWest",  oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Plateau",     gdp: 0.7,  poverty: 72.0, pop: 4.8,  region: "north",      oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Taraba",      gdp: 0.5,  poverty: 82.0, pop: 3.5,  region: "north",      oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
    { name: "Yobe",        gdp: 0.4,  poverty: 79.0, pop: 3.5,  region: "north",      oil: false, note: "MPI 2022. Source: NBS/OPHI MPI 2022." },
  ],
};

/*
DATA METHODOLOGY NOTES:
─────────────────────────────────────────────────────────────────────────────
SURVEY YEAR   | SOURCE                  | POVERTY MEASURE
─────────────────────────────────────────────────────────────────────────────
2003          | NBS NLSS 2003/04        | Monetary absolute headcount (per capita)
2009          | NBS HNLSS 2009/10       | Monetary absolute headcount (per capita)
2019          | NBS NLSS 2018/19        | Monetary headcount (₦137,430/yr poverty line)
2022          | NBS/OPHI MPI 2022       | Multidimensional Poverty Index (NOT comparable to monetary)
─────────────────────────────────────────────────────────────────────────────

⚠️  CRITICAL COMPARABILITY WARNING:
• 2003 vs 2009: Comparable (same absolute methodology, revised 2012)
• 2003/2009 vs 2019: NOT directly comparable (different questionnaire, poverty line)
• 2019 vs 2022: NOT comparable (monetary vs multidimensional methodology)
• Trend lines should be interpreted with this caveat in mind.

GDP SHARE:
• All GDP figures are % share of national nominal GDP
• Sources: NBS Sub-national GDP releases (2019, 2022); earlier years estimated
  from state economic profiles and NEITI data.

POPULATION:
• Interpolated from NBS/NPopC projections anchored to 2006 Census.
*/
export const STEPS = [
  { step: "01", title: "Extraction", text: "Oil companies and the federal government extract crude from Niger Delta communities. Revenue flows to Abuja via NNPC and FIRS." },
  { step: "02", title: "Centralization", text: "FAAC redistributes revenue: 52.68% Federal, 26.72% States, 20.60% LGAs — by equality, population, not by production origin." },
  { step: "03", title: "Local capture", text: "States receive a 13% derivation bonus. In Delta State, over ₦1.3 trillion in these funds may have been misappropriated between 2015–2023 (BudgIT/Punch, 2024)." },
  { step: "04", title: "Poverty trap", text: "Despite hosting the oil industry, Niger Delta states have some of the highest poverty rates in Nigeria. Wealth is produced but does not stay, creating a cycle of underdevelopment." },
]

export const regionFilters = [
  { key: "all", label: "All states" },
  { key: "southSouth", label: "Niger Delta" },
  { key: "southWest", label: "South-West" },
  { key: "southEast", label: "South-East" },
  { key: "north", label: "North" },
]

export const keyChallenges = [
  { icon: "01", title: "Fiscal centralization", text: "The FAAC formula allocates revenue by federal share (52.68%), not by production origin. A state producing 10% of national oil output does not retain 10% of oil revenue. It receives its state allocation — diluted across all 36 states." },
  { icon: "02", title: "Derivation fund leakage", text: "The 13% derivation fund is constitutionally guaranteed but administratively porous. BudgIT documented over ₦1.3 trillion in potential misappropriation in Delta State alone (2015–2023). DESOPADEC, the development agency, reportedly received less than half its entitled allocation." },
  { icon: "03", title: "Environmental dispossession", text: "Amnesty International (2018) documented over 13 million barrels of oil spilled in the Niger Delta since 1958 — equivalent to one Exxon Valdez disaster per year for five decades. Spills destroy farmland and fisheries: the traditional livelihoods of extraction-zone communities." },
  { icon: "04", title: "Governance failure at state level", text: "Even derivation funds that reach state governments are not guaranteed to reach communities. The NBS/World Bank Poverty Assessment (2022) found that social protection coverage in oil-producing states is no higher than in non-oil states — and in some cases, lower." },
]

export const policyUpdates = [
  { label: "Derivation formula revision", status: "Stalled", color: "#c0392b", note: "Proposals to increase derivation from 13% to 25%+ have circulated since the Confab 2014. No movement as of 2025." },
  { label: "Executive Order 9 (2026)", status: "New", color: "#1a7a4a", note: "FG mandated direct NNPC remittances to FAAC daily — bypassing delays. Potential transparency gain if sustained." },
  { label: "NDDC reform", status: "Ongoing", color: "#7d6608", note: "NDDC audits by NASS have exposed serial underfunding. Structural reform remains incomplete as of early 2026." },
]

export const sources = [
  "NBS Nigeria Living Standards Survey (NLSS) 2018/19, ",
  "NBS/OPHI/UNDP Multidimensional Poverty Index 2022, ",
  "NBS State Nominal GDP 2013–2017 (published May 2019), ",
  "BudgIT State of States 2022, ",
  "TheCable/NBS State GDP Rankings 2024, ",
  "World Bank Nigeria Poverty Assessment 2022, ",
  "NEITI Revenue Allocation Framework, ",
  "Punch Nigeria (June 2025), ",
  "GeoJournal / Springer 2010, ",
  "Amnesty International Niger Delta Report 2018, ",
  "NBS Population Projections 2019/2022, "
];

export const getStatCards = (avgCapturePoverty, avgCaptureGDP, year) => [
  { 
    val: "133M", 
    label: "Nigerians multidimensionally poor", 
    sub: "NBS/OPHI MPI 2022 — 63% of population" 
  },
  { 
    val: `${avgCapturePoverty}%`, 
    label: "Avg poverty in oil-producing Niger Delta states", 
    sub: `${year} data — despite avg ${avgCaptureGDP}% national GDP share` 
  },
  { 
    val: "₦1.3tn", 
    label: "Derivation funds allegedly misappropriated", 
    sub: "Delta State, 2015–2023 · Source: BudgIT / Punch 2024" 
  },
  { 
    val: "13%", 
    label: "Derivation bonus to producing states", 
    sub: "Constitutional formula — insufficient to offset extraction" 
  },
];