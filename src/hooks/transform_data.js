import { main } from "./nigeria_data_api.js";

function convertValues(data) { //eslint-disable-line
    if (data >= 1000000000) {                       
        return (data / 1000000000).toFixed(2) + 'B';

    } else if (data >= 1000000) {                    
        return (data / 1000000).toFixed(2) + 'M';

    } else if (data >= 1000) {                       
        return (data / 1000).toFixed(2) + 'K';

    } else {                                         
        return data.toFixed(2);
    }
}
// export async function transformData()  {
//     try {
//         const data = await main();
//         console.log('Raw data:', JSON.stringify(data, null, 2)); 
        
//         const transformedData = {}
//         for(const metric in data) {
//             transformedData[metric] = data[metric].filter(entry => entry.value !== null).map(entry => ({
//                 'Indicator value': entry.indicator.value,
//                 date: entry.date,
//                 value: entry.value
//             }))
//         }
//         console.log('Transformed data:', JSON.stringify(transformedData, null, 2)); 
//         return transformedData;

//     } catch (error) {
//         console.error('Error transforming data:', error);
//     }
// }

export async function transformData() {
    try {
        const data = await main();

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

        return transformedData;

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
        const data = await transformData();
        const {'GDP Per Capita':  gdpPerCapita, 'GINI Coefficient': giniCoefficient } = data;
        console.log('GDP Per Capita data:', JSON.stringify(gdpPerCapita, null, 2));
        console.log('GINI Coefficient data:', JSON.stringify(giniCoefficient, null, 2));

        const combinedData = gdpPerCapita.map(gdpEntry => {
            const giniEntry = giniCoefficient.find(g => g.date === gdpEntry.date);
            return {
                date: gdpEntry.date,
                gdpPerCapita: gdpEntry.value,
                giniCoefficient: giniEntry ? giniEntry.value : null,
            };
        });
        console.log('Combined data for dual-axis chart:', JSON.stringify(combinedData, null, 2)); 
        return combinedData;
    } catch (error) {
        console.error('Error fetching dual-axis data:', error);
    }
}

export async function nominalGdpData() {
    try {
        const data = await transformData();
        const { 'Nominal GDP': nominalGdp } = data;

        const formattedData = nominalGdp.reverse().map(entry => ({
            date: entry.date,
            value: parseFloat(Number(entry.value).toFixed(2)),
            rank: entry.rank,              
            total_countries: entry.total_countries
        }));

        return formattedData;
    } catch (error) {
        console.error('Error fetching Nominal GDP data:', error);
    }
}

export async function gini() {
    try {
        const data = await transformData();
        const { 'GINI Coefficient': giniData } = data;
        const formattedData = giniData.reverse().map(entry => ({
            date: entry.date,
            value: parseFloat(Number(entry.value).toFixed(2)),
        }));
        return formattedData;
    } catch (error) {
        console.error('Error fetching GINI data:', error);
    }
}