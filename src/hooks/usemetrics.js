// hooks/useMetrics.js

import  { nominalGdpData, gini } from "./transform_data.js";

export const formartFigures = (value) => {
    if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B`  
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`        
    if (value >= 1000) return `${(value / 1000).toFixed(1)}k`              
    return value
};

export const mockData = {
  nigeriaHDI: [
    { date: "1990", value: 0.379, rank: null },
    { date: "2000", value: 0.435, rank: null },
    { date: "2001", value: null,  rank: null },
    { date: "2002", value: null,  rank: null },
    { date: "2003", value: 0.452, rank: 151 },
    { date: "2004", value: 0.461, rank: 149 },
    { date: "2005", value: 0.468, rank: 157 },
    { date: "2006", value: 0.475, rank: 156 },
    { date: "2007", value: 0.479, rank: 157 },
    { date: "2008", value: 0.482, rank: 160 },
    { date: "2009", value: 0.486, rank: 163 },
    { date: "2010", value: 0.502, rank: 163 },
    { date: "2011", value: 0.494, rank: 165 },
    { date: "2012", value: 0.499, rank: 165 },
    { date: "2013", value: 0.504, rank: 163 },
    { date: "2014", value: 0.513, rank: 163 },
    { date: "2015", value: 0.530, rank: 163 },
    { date: "2016", value: 0.526, rank: 163 },
    { date: "2017", value: 0.528, rank: 163 },
    { date: "2018", value: 0.530, rank: 163 },
    { date: "2019", value: 0.537, rank: 162 },
    { date: "2020", value: 0.547, rank: 162 },
    { date: "2021", value: 0.554, rank: 162 },
    { date: "2022", value: 0.557, rank: 161 },
    { date: "2023", value: 0.560, rank: 164 },
  ],
  nigeriaMPI: [
    {
      date: "2013",                          
      survey: "DHS 2013",
      value: 0.303,                          
      rank: '27th out of 91 countries',                             
      countries_covered: 91,                 
      cme: {
        mpi: 0.303,
        headcount_pct: 58.3,
        intensity_pct: 51.9,
        vulnerable_pct: 17.3,
        severe_poverty_pct: 32.1,
      },
      hot: {
        mpi: 0.279,
        headcount_pct: 50.9,
        intensity_pct: 54.8,
      },
      source: "OPHI Global MPI — Data Table 1 (CME) & Data Table 6 (HOT)"
    },
    {
      date: "2016",                          
      survey: "MICS 2016-17",
      value: 0.215,                          
      rank: null,                         
      countries_covered: null,
      cme: null,                            
      hot: {
        mpi: 0.215,
        headcount_pct: 40.82,
        intensity_pct: 52.64,
      },
      source: "OPHI Global MPI 2024 Country Briefing — Nigeria, Table 3 (harmonised trends)"
    },
    {
      date: "2018",
      survey: "DHS 2018",
      value: 0.254,
      rank: '24th out of 101 countries',                              
      countries_covered: 101, 
      cme: {
        mpi: 0.254,
        headcount_pct: 46.4,
        intensity_pct: 54.7,
        vulnerable_pct: 17.1,
        severe_poverty_pct: 26.5,
      },
      hot: {
        mpi: 0.208,                          
        headcount_pct: 38.18,
        intensity_pct: 54.55,
      },
      source: "OPHI Global MPI — Data Table 1 (CME) & Data Table 6 (HOT); OPHI 2024 Briefing Table 3"
    },
    {
      date: "2021",
      survey: "MICS 2021",
      value: 0.175,
      rank: '22nd out of 112 countries',            
      countries_covered: 112,
      cme: {
        mpi: 0.175,
        headcount_pct: 33.0,
        intensity_pct: 52.9,
        vulnerable_pct: 16.6,
        severe_poverty_pct: 18.1,
      },
      hot: {
        mpi: 0.175,                         
        headcount_pct: 33.0,
        intensity_pct: 52.9,
      },
      urban: { mpi: 0.049, headcount_pct: 11.0, intensity_pct: 44.8 },
      rural: { mpi: 0.268, headcount_pct: 49.4, intensity_pct: 54.2 },
      source: "OPHI/UNDP Global MPI 2024 Country Briefing — Nigeria (MICS 2021)"
    }
  ],
  nigeriaNominalGDP: await nominalGdpData(),
  nigeriaGini: await gini(),
}

export const cards = [
  {
    label: "HDI Score",
    value: mockData.nigeriaHDI.findLast(item => item.rank !== null).value,        
    rank: `Rank ${mockData.nigeriaHDI.findLast(item => item.rank !== null).rank}`,
    chartData: mockData.nigeriaHDI,
    formatter: (v) => v.toFixed(3),
  },
  {
    label: "MPI Score",
    value: mockData.nigeriaMPI.findLast(item => item.rank !== null).value,
    rank: mockData.nigeriaMPI.findLast(item => item.rank !== null).rank ?? "N/A",
    chartData: mockData.nigeriaMPI,
    formatter: (v) => v.toFixed(3),
  },
  {
    label: "Nominal GDP (USD)",
    value: parseFloat(Number(mockData.nigeriaNominalGDP.findLast(item => item.value !== null).value).toFixed(2)),
    rank: mockData.nigeriaNominalGDP.findLast(item => item.rank !== null).rank ? `Rank ${mockData.nigeriaNominalGDP.findLast(item => item.rank !== null).rank}` : "N/A",
    chartData: mockData.nigeriaNominalGDP,
    formatter: (v) => formartFigures(v),
  },
  {
    label: "GINI Coefficient",
    value: parseFloat(Number(mockData.nigeriaGini.findLast(item => item.value !== null).value).toFixed(3)), 
    rank: mockData.nigeriaGini.findLast(item => item.rank !== null).rank ? `Rank ${mockData.nigeriaGini.findLast(item => item.rank !== null).rank}` : "N/A",
    chartData: mockData.nigeriaGini,
    formatter: (v) => v.toFixed(3),
  },
]



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