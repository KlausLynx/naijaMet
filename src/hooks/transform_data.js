import { main } from "./nigeria_data_api.js";
export async function transformData() {
    try {
        const { value: data, savedAt } = await main(); 

        // Step 1: Build rank lookup from all countries GDP — once, upfront
        const rankLookup = {};
        const yearMap = {};

        (data['ALL Country GDP'] || [])
            .filter(e => e.value !== null && e.countryiso3code?.length === 3 && !AGGREGATES.has(e.countryiso3code))
            .forEach(e => {
                if (!yearMap[e.date]) yearMap[e.date] = [];
                yearMap[e.date].push(e);
            });

        Object.entries(yearMap).forEach(([year, entries]) => {
            const sorted = [...entries].sort((a, b) => b.value - a.value);
            const idx = sorted.findIndex(c => c.countryiso3code === "NGA");
            rankLookup[year] = {
                rank: idx === -1 ? null : idx + 1,
                total_countries: sorted.length
            };
        });

        // Step 2: Transform all metrics
        const transformedData = {};
        for (const metric in data) {
            if (metric === 'ALL Country GDP') continue;
            transformedData[metric] = data[metric]
                .filter(e => e.value !== null)
                .map(e => {
                    const result = {
                        'Indicator value': e.indicator.value,
                        date: e.date,
                        value: e.value,
                    };
                    if (metric === 'Nominal GDP') {
                        result.rank = rankLookup[e.date]?.rank ?? null;
                        result.total_countries = rankLookup[e.date]?.total_countries ?? null;
                    }
                    return result;
                });
        }

        return { transformedData, savedAt }

    } catch (error) {
        console.error('Error transforming data:', error);
    }
}

const AGGREGATES = new Set([
    "AFE","AFW","ARB","CEB","CSS","EAP","EAR","EAS","ECA","ECS",
    "EMU","EUU","FCS","HIC","HPC","IBD","IBT","IDA","IDB","IDX",
    "LAC","LCN","LDC","LIC","LMC","LMY","LTE","MEA","MIC","MNA",
    "NAC","OED","OSS","PRE","PSS","PST","SAS","SSA","SSF","SST",
    "TEA","TEC","TLA","TMN","TSA","TSS","UMC","WLD"
]);
export async function dualAxisData() {
    try {
        const { transformedData } = await transformData();
        const {'GDP Per Capita':  gdpPerCapita, 'GINI Coefficient': giniCoefficient } = transformedData;
        const combinedData = gdpPerCapita.map(gdpEntry => {
            const giniEntry = giniCoefficient.find(g => g.date === gdpEntry.date);
            return {
                date: gdpEntry.date,
                gdpPerCapita: gdpEntry.value,
                giniCoefficient: giniEntry ? giniEntry.value : null,
            };
        });
        return combinedData;
    } catch (error) {
        console.error('Error fetching dual-axis data:', error);
    }
}

export async function nominalGdpData() {
    try {
        const { transformedData, savedAt } = await transformData()  
        const { 'Nominal GDP': nominalGdp } = transformedData;

        const formattedData = nominalGdp.reverse().map(entry => ({
            date: entry.date,
            value: parseFloat(Number(entry.value).toFixed(2)),
            rank: entry.rank,              
            total_countries: entry.total_countries
        }));
        return { formattedData, savedAt };
    } catch (error) {
        console.error('Error fetching Nominal GDP data:', error);
    }
}

    nominalGdpData();
export async function gini() {
    try {
        const { transformedData, savedAt } = await transformData()  
        const { 'GINI Coefficient': giniData } = transformedData    
        
        const formattedData = giniData.reverse().map(entry => ({
            date: entry.date,
            value: parseFloat(Number(entry.value).toFixed(2)),
        }));

        return { formattedData, savedAt }  
    } catch (error) {
        console.error('Error fetching GINI data:', error);
    }
}

export async function sectorsData() {
    try {
        const { transformedData, savedAt } = await transformData();
        const { 'Agricultural Added (% of GDP)': agriculturalAdded, 'Industrial Added (% of GDP)': industrialAdded, 'Services Added (% of GDP)': servicesAdded, 'Manufacturing Added (% of GDP)': manufacturingAdded  } = transformedData;
        const formattedData = agriculturalAdded.map(entry => ({
            date: entry.date,
            agriculturalAdded: parseFloat(Number(entry.value).toFixed(2)),
            industrialAdded: parseFloat(Number(industrialAdded.find(e => e.date === entry.date)?.value).toFixed(2)),
            servicesAdded: parseFloat(Number(servicesAdded.find(e => e.date === entry.date)?.value).toFixed(2)),
            manufacturingAdded: parseFloat(Number(manufacturingAdded.find(e => e.date === entry.date)?.value).toFixed(2)),
        }))

        return { formattedData, savedAt }

        
    } catch (error) {
        console.error('Error fetching sectors data:', error);
    }
    }

export async function Reer() {
    try {
        const { transformedData, savedAt } = await transformData();
        const { 'Real Effective Exchange Rate': Reer} = transformedData

        const formattedData = Reer.map(data => ({
            date: data.date,
            value: data.value
        }))

        return { formattedData, savedAt }
    } catch (error) {
        console.error('Error Fetching Rates', error)
    }
}