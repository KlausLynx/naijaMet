// hooks/useMetrics.js
export const hdiData = [
    { year: 2018, value: 0.534 },
    { year: 2019, value: 0.539 },
    { year: 2020, value: 0.535 },
    { year: 2021, value: 0.541 },
    { year: 2022, value: 0.548 },
    { year: 2023, value: 0.553 },
];

export const mpiData = [
    { year: 2018, value: 0.298 },
    { year: 2019, value: 0.282 },
    { year: 2020, value: 0.274 },
    { year: 2021, value: 0.261 },
    { year: 2022, value: 0.250 },
    { year: 2023, value: 0.241 },
    { year: 2024, value: 0.233 },
    { year: 2025, value: 0.225 },
];

export const gdpData = [
    { year: 2018, value: 397.3 },
    { year: 2019, value: 448.1 },
    { year: 2020, value: 432.3 },
    { year: 2021, value: 441.5 },
    { year: 2022, value: 477.4 },
    { year: 2023, value: 507.1 },
    { year: 2024, value: 537.8 },
    { year: 2025, value: 568.5 },
];

export const giniData = [
    { year: 2018, value: 43.0 },
    { year: 2019, value: 42.6 },
    { year: 2020, value: 43.1 },
    { year: 2021, value: 42.8 },
    { year: 2022, value: 42.3 },
    { year: 2023, value: 41.9 },
    { year: 2024, value: 41.5 },
    { year: 2025, value: 41.2 },
];

const mockData = [
    { label: "HDI Rank", rank: "161st of 193", value: 0.548, chartData: hdiData, formatter: (v) => v.toFixed(2) },
    { label: "GDP (Nominal)", rank: "52nd globally", value: "$252B", chartData: gdpData, formatter: (v) => `$${v}B` },
    { label: "GINI Index", rank: "161st of 193", value: 35.1, chartData: giniData, formatter: (v) => v.toFixed(1) },
    { label: "MPI Score", rank: "63% multidim. poor", value: 0.234, chartData: mpiData, formatter: (v) => v.toFixed(2) },
]
export const formartFigures = (value) => {
    if (value >= 1000) return `${(value / 1000).toFixed(1)}k`
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`
    if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B`
    return value
};

export const incomeData = [
    { country: "Nigeria",       gdpPerCapita: 2200,  medianIncome: 480,  top1Percent: 98000  },
    { country: "Ghana",         gdpPerCapita: 2300,  medianIncome: 890,  top1Percent: 54000  },
    { country: "Kenya",         gdpPerCapita: 1960,  medianIncome: 820,  top1Percent: 47000  },
    { country: "Côte d'Ivoire", gdpPerCapita: 2400,  medianIncome: 760,  top1Percent: 61000  },
    { country: "Cameroon",      gdpPerCapita: 1530,  medianIncome: 620,  top1Percent: 38000  },
    { country: "Angola",        gdpPerCapita: 3440,  medianIncome: 1050, top1Percent: 112000 },
    { country: "Ethiopia",      gdpPerCapita: 1030,  medianIncome: 280,  top1Percent: 24000  },
    { country: "Senegal",       gdpPerCapita: 1680,  medianIncome: 590,  top1Percent: 41000  },
];

export const formattedIncomeData = incomeData.map(({ country, gdpPerCapita, medianIncome, top1Percent }) => ({
    country,
    gdpPerCapita,
    medianIncome,
    top1Percent,
    formatted: {
        gdpPerCapita: formartFigures(gdpPerCapita),
        medianIncome: formartFigures(medianIncome),
        top1Percent: formartFigures(top1Percent),
    },
}));

export { mockData };