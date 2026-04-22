    // ─── DATA (Sources: NBS Nigeria Labour Force Survey Q1 2024, World Bank,
    //           ILO World Employment Report 2023, World Economics Nigeria 2024) ───
    
export const OUTER_DATA = [
    {
        name: "Formal GDP & Corporate Sector",
        value: 42.6,
        fill: "#3C3489",
        lightFill: "#EEEDFE",
        tag: "FORMAL",
        source: "World Economics / World Bank, 2024",
        description:
        "Measured, taxed, and counted output. Includes financial institutions, telecoms, oil & gas, and government expenditure. This is the only layer that appears in Nigeria's official GDP figures, yet it employs just 7.7% of the workforce.",
        keyFact: "7.7% of workers. 42.6% of measured output.",
    },
    {
        name: "Uncounted (not rendered)",
        value: 57.4,
        fill: "transparent",
        description: "",
    },
];
    
export const INNER_DATA = [
    {
        name: "Informal Labour & Trade",
        value: 37,
        fill: "#1D9E75",
        lightFill: "#E1F5EE",
        tag: "INFORMAL",
        source: "NBS Labour Force Survey Q1 2024 / ILO 2023",
        description:
        "Street traders, artisans, transport workers, market women, and SMEs without formal registration. Nigeria's informal employment rate hit 92.7% in Q1 2024 — the highest on record. Kano and Lagos alone account for 9.7 million informal workers.",
        keyFact: "92.7% of all Nigerian workers. Q1 2024.",
    },
    {
        name: "Unpaid Care & Domestic Work",
        value: 11,
        fill: "#7F77DD",
        lightFill: "#EEEDFE",
        tag: "INVISIBLE",
        source: "ILO Care Work Report 2023 / World Bank Gender Portal",
        description:
        "Cooking, childcare, elder care, fetching water, and community labour. In Nigeria, 96% of women in informal work also carry the bulk of unpaid care. Globally, 708 million people — overwhelmingly women — are locked out of the labour force by care responsibilities. This work does not appear in Nigeria's national accounts.",
        keyFact: "96% of informal women workers also do unpaid care.",
    },
    {
        name: "Subsistence Farming & Barter",
        value: 9.4,
        fill: "#2FE1CB",
        lightFill: "#7FE1CB",
        tag: "INVISIBLE",
        source: "World Bank Nigeria Poverty Assessment 2022",
        description:
        "Smallholder food production consumed at home, local exchange networks, and gift economies. Concentrated in Nigeria's rural north and Middle Belt. This is survival-mode economic activity that sustains millions but is invisible to GDP measurement and tax policy.",
        keyFact: "Rural informality rate: 97.2% (NBS, 2023).",
    },
    ];
    
export const STATS = [
    {
        value: "92.7%",
        label: "of Nigerian workers in informal employment. These people are not under the minimum wage, have no contracts, and no social protections. So the #70k minimum wage doesnt apply to them, which is safe to say that the minimum wage only applies to 7.3% of Nigerian workers.",
        source: "NBS Labour Force Survey, Q1 2024",
        color: "#1D9E75",
        borderColor: "#1D9E75",
    },
    {
        value: "57.4%",
        label: "of Nigeria's economy is informal / uncounted",
        source: "World Economics Nigeria, 2024",
        color: "#3C3489",
        borderColor: "#3C3489",
    },
    {
        value: "96%",
        label: "of women in informal work also bear unpaid care",
        source: "ILO / NBS gender disaggregation, 2023",
        color: "#7F77DD",
        borderColor: "#7F77DD",
    },
    {
        value: "97.2%",
        label: "informal employment rate in rural Nigeria",
        source: "NBS Labour Force Survey, Q3 2023",
        color: "#9FE1CB",
        borderColor: "#0F6E56",
    },
];
    
export const EXPLAINERS = [
    {
        accentColor: "#3C3489",
        title: "Why formal GDP is not the whole story",
        body: "Nigeria's official GDP counts only priced, recorded transactions. A woman who farms yam and feeds her household contributes nothing to GDP. A corporation that exports processed yam contributes significantly — even if it employs fewer people. This gap between who creates value and who is counted drives most of Nigeria's policy failures.",
    },
    {
        accentColor: "#1D9E75",
        title: "Informality in Nigeria is not criminality",
        body: "93% informal employment is not a symptom of evasion — it is the architecture of the Nigerian economy. The NBS/World Bank Q1 2024 survey found 141 million working-age Nigerians, the vast majority operating without contracts, pensions, or health benefits. Policy that ignores this is policy that ignores most Nigerians.",
    },
    {
        accentColor: "#7F77DD",
        title: "The care economy is Nigeria's invisible infrastructure",
        body: "Every formal sector worker depends on unpaid domestic labour to function — meals cooked, children raised, elderly cared for. The ILO estimates 708 million people globally are excluded from paid work by care burdens; in Nigeria, 96% of women in informal work carry this double load. It appears nowhere in the national budget.",
    },
];