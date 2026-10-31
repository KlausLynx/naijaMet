// ─── DATA (Sources: NBS Nigeria Labour Force Survey Q1 & Q2 2024, ILO Nigeria policy brief Nov 2024,
//           ILO statistical brief on care responsibilities Oct 2024, World Economics Nigeria) ───
// NOTE: the three INNER_DATA slices are ILLUSTRATIVE. No source splits the informal share into these
// three layers. They keep your original proportions, scaled so the total matches the sourced 55.3%.

export const OUTER_DATA = [
    {
        name: "Formal GDP & Corporate Sector",
        value: 44.7,
        fill: "#3C3489",
        lightFill: "#EEEDFE",
        tag: "FORMAL",
        source: "World Economics Nigeria (latest estimate); NBS Labour Force Survey Q1 2024",
        description:
        "The recorded, registered and taxed part of the economy. Includes financial institutions, telecoms, oil & gas, and government spending. It produces roughly 45% of output (World Economics estimate) yet employs only about 7.3% of the workforce. And that share is shrinking: formal jobs went from 7.7% of workers in Q3 2023 to 7.3% in Q1 2024, then to 7.0% in Q2 2024.",
        keyFact: "▼ Formal share of workers: 7.7% → 7.3% → 7.0% (Q3 2023 → Q1 2024 → Q2 2024). Worse.",
        trend: { label: "Formal share of workers", points: [["Q3 2023", 7.7], ["Q1 2024", 7.3], ["Q2 2024", 7.0]], direction: "down", worse: true },
    },
    {
        name: "Informal / unrecorded (not rendered)",
        value: 55.3,
        fill: "transparent",
        description: "",
    },
];

export const INNER_DATA = [
    {
        name: "Informal Labour & Trade",
        value: 35.6, // illustrative
        fill: "#1D9E75",
        lightFill: "#E1F5EE",
        tag: "INFORMAL",
        source: "NBS Labour Force Survey Q1 2024",
        description:
        "Street traders, artisans, transport workers, market women, and SMEs without formal registration. Informal employment has been rising: 92.3% in Q3 2023, 92.7% in Q1 2024, 93.0% in Q2 2024. SMEDAN counts about 40 million micro, small and medium enterprises, most of them informal.",
        keyFact: "▲ 92.3% → 92.7% → 93.0% of all Nigerian workers (Q3 2023 → Q1 2024 → Q2 2024). Worse.",
        trend: { label: "Informal share of workers", points: [["Q3 2023", 92.3], ["Q1 2024", 92.7], ["Q2 2024", 93.0]], direction: "up", worse: true },
    },
    {
        name: "Unpaid Care & Domestic Work",
        value: 10.6, // illustrative
        fill: "#7F77DD",
        lightFill: "#EEEDFE",
        tag: "INVISIBLE",
        source: "ILO statistical brief, Oct 2024",
        description:
        "Cooking, childcare, elder care, fetching water, and community labour. Globally, 748 million people were outside the labour force in 2023 because of care responsibilities, and 708 million of them were women. Under national accounts rules, unpaid care and domestic services are left out of GDP.",
        keyFact: "708 million women worldwide are kept out of paid work by care duties (ILO, 2023).",
    },
    {
        name: "Subsistence Farming & Barter",
        value: 9.1, // illustrative
        fill: "#2FE1CB",
        lightFill: "#7FE1CB",
        tag: "INVISIBLE",
        source: "NBS Labour Force Survey Q1 & Q2 2024",
        description:
        "Smallholder food production consumed at home and local exchange. It is concentrated in rural areas, where informal employment rose from 97.2% in Q3 2023 to 97.6% in Q1 2024 (97.5% in Q2 2024). Output grown for the household is in principle inside the GDP boundary, but it is hard to measure, so it is usually under-recorded.",
        keyFact: "▲ Rural informal rate: 97.2% → 97.6% → 97.5% (Q3 2023 → Q1 2024 → Q2 2024). Urban: 87.5% → 89.0% → 90.0%.",
        trend: { label: "Rural informal rate", points: [["Q3 2023", 97.2], ["Q1 2024", 97.6], ["Q2 2024", 97.5]], direction: "up", worse: true },
    },
];

export const STATS = [
    {
        value: "92.7%",
        label: "of Nigerian workers are in informal employment. They mostly have no contract and no social protection. So the ₦70,000 minimum wage in practice only reaches formal employees, roughly the other 7.3% of workers. It is getting worse: informal employment was 92.3% in Q3 2023 and reached 93.0% in Q2 2024, so the formal share fell from 7.7% to 7.3% to 7.0%.",
        change: "▲ +0.4 pts (92.3 → 92.7), then ▲ +0.3 pts to 93.0 in Q2 2024",
        source: "NBS Labour Force Survey, Q3 2023, Q1 2024 and Q2 2024",
        color: "#1D9E75",
        borderColor: "#1D9E75",
    },
    {
        value: "55.3%",
        label: "of Nigeria's economy is informal, by World Economics' latest estimate. Earlier versions were higher (58.2% on 2023 data, about 57.2% in mid-2026 reports), so the estimate has been revised down. That is a revision, not a real improvement.",
        change: "▼ 58.2% → 57.2% → 55.3% (successive World Economics estimates, not a measured trend)",
        source: "World Economics Nigeria (latest); rated data quality D",
        color: "#3C3489",
        borderColor: "#3C3489",
    },
    {
        value: "96%",
        label: "of employed women work informally, compared with 88.7% of men, a gap of 7.3 percentage points",
        change: "Women are more exposed to informality than men",
        source: "ILO Nigeria policy brief, Nov 2024",
        color: "#7F77DD",
        borderColor: "#7F77DD",
    },
    {
        value: "97.6%",
        label: "informal employment rate in rural Nigeria (up from 97.2% in Q3 2023). Urban rose faster: 87.5% to 89.0%, then 90.0% in Q2 2024.",
        change: "▲ +0.4 pts rural (97.2 → 97.6), ▲ +1.5 pts urban (87.5 → 89.0)",
        source: "NBS Labour Force Survey, Q3 2023, Q1 2024 and Q2 2024",
        color: "#9FE1CB",
        borderColor: "#0F6E56",
    },
    {
        value: "90.0%",
        label: "informal employment rate in urban Nigeria in Q2 2024, up from 87.5% in Q3 2023 and 89.0% in Q1 2024. City jobs are becoming informal faster than rural ones.",
        change: "▲ +1.5 pts (87.5 → 89.0), then ▲ +1.0 pt to 90.0 in Q2 2024",
        source: "NBS Labour Force Survey, Q3 2023, Q1 2024 and Q2 2024",
        color: "#F59E0B",
        borderColor: "#F59E0B",
    },
];

// Notes to show under the charts so the data is read correctly.
export const NOTES = [
    "Quarters: NBS published no Q4 2023 report, so Q3 2023 to Q1 2024 spans two quarters, not one.",
    "Rural informality dipped slightly from 97.6% (Q1 2024) to 97.5% (Q2 2024) but is still above 97.2% in Q3 2023.",
    "The World Economics figures (58.2%, 57.2%, 55.3%) are successive estimates of the same thing, not a time trend.",
    "The three INNER_DATA slices are illustrative. No source splits the informal share into these layers.",
    "Informal employment (share of workers) and the informal economy (share of output) are different measures: 92.7-93.0% vs about 55%.",
];

export const EXPLAINERS = [
    {
        accentColor: "#3C3489",
        title: "Why formal GDP is not the whole story",
        body: "Official GDP is built mostly from recorded, priced transactions, and informal activity is only partly captured. Unpaid cooking, childcare and elder care are excluded entirely, and food a household grows for itself is counted in principle but badly measured. A corporation that exports processed yam is easy to count. The millions of people who grow, carry and sell it are not. This gap between who creates value and who gets counted shapes much of Nigeria's policy.",
    },
    {
        accentColor: "#1D9E75",
        title: "Informality in Nigeria is not criminality",
        body: "About 93% informal employment is not a symptom of evasion. It is how the Nigerian economy is built. NBS estimated Nigeria's working-age population at 116.6 million in its 2023 annual survey, and the vast majority of those who work do so without contracts, pensions or health benefits. Policy that ignores this ignores most Nigerians.",
    },
    {
        accentColor: "#7F77DD",
        title: "The care economy is Nigeria's invisible infrastructure",
        body: "Every formal sector worker depends on unpaid domestic labour to function: meals cooked, children raised, elderly relatives looked after. The ILO estimates 708 million women worldwide are outside the labour force because of care duties. In Nigeria, 96% of employed women work informally, against 88.7% of men. Unpaid care itself appears nowhere in the national accounts.",
    },
];