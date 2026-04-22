import { getFromLocalStorage, saveToLocalStorage } from './api.js';

// -----------------------------------------------------------
//  World Bank Indicator URLs
// -----------------------------------------------------------
const BASE = 'https://api.worldbank.org/v2/country/NG/indicator';

const WB_INDICATORS = {
    'Electricity Access (%)':                  `${BASE}/EG.ELC.ACCS.ZS?format=json`,
    'Population Total':                        `${BASE}/SP.POP.TOTL?format=json`,
    'Self Employment (%)':                     `${BASE}/SL.EMP.SELF.ZS?format=json`,
    'Youth Unemployment (%)':                  `${BASE}/SL.UEM.1524.ZS?format=json`,
    'Unemployment Rate (%)':                   `${BASE}/SL.UEM.TOTL.NE.ZS?format=json`,
    'HDI':                                     `${BASE}/UNDP.HDI.XD?format=json`,
    'Oil Rents (% of GDP)':                    `${BASE}/NY.GDP.PETR.RT.ZS?format=json`,
    'Imports of Goods & Services (% of GDP)':  `${BASE}/NE.IMP.GNFS.ZS?format=json`,
    'Agricultural Value Added (% of GDP)':     `${BASE}/NV.AGR.TOTL.ZS?format=json`,
    'Industrial Value Added (% of GDP)':       `${BASE}/NV.IND.TOTL.ZS?format=json`,
    'Services Value Added (% of GDP)':         `${BASE}/NV.SRV.TOTL.ZS?format=json`,
    'Manufacturing Value Added (% of GDP)':    `${BASE}/NV.IND.MANF.ZS?format=json`,
    'GINI Coefficient':                        `${BASE}/SI.POV.GINI?format=json`, 
    'Nominal GDP':                             `${BASE}/NY.GDP.MKTP.CD?format=json`,
    'Real GDP':                                `${BASE}/NY.GDP.MKTP.KD?format=json`, 
    'GDP Growth Rate (annual %)':              `${BASE}/NY.GDP.MKTP.KD.ZG?format=json`,
    'GDP Per Capita Growth':                   `${BASE}/NY.GDP.PCAP.KD.ZG?format=json`,
    'GDP Per Capita':                          `${BASE}/NY.GDP.PCAP.KN?format=json`,
    'ALL Country GDP':                         `https://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?format=json&mrv=50&per_page=20000`,
    'Real Effective Exchange Rate':            `${BASE}/PX.REX.REER?format=json`
};


async function fetchWorldBankData() {
    try {
        const [electricityRes, populationRes, selfEmpRes, youthUnempRes, unempRes, hdiRes, oilRentsRes, importsRes, agriRes, indRes, srvRes, manufRes, giniRes, nominalRes, realRes, gdpGrowthRes, gdpPerCapRes, allGdpRes, realExchangeRes] = await Promise.all([
            fetch(WB_INDICATORS['Electricity Access (%)']).then(res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
            fetch(WB_INDICATORS['Population Total']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
            fetch(WB_INDICATORS['Self Employment (%)']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
            fetch(WB_INDICATORS['Youth Unemployment (%)']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
            fetch(WB_INDICATORS['Unemployment Rate (%)']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
            fetch(WB_INDICATORS['HDI']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
            fetch(WB_INDICATORS['Oil Rents (% of GDP)']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
            fetch(WB_INDICATORS['Imports of Goods & Services (% of GDP)']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
            fetch(WB_INDICATORS['Agricultural Value Added (% of GDP)']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
            fetch(WB_INDICATORS['Industrial Value Added (% of GDP)']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
            fetch(WB_INDICATORS['Services Value Added (% of GDP)']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
            fetch(WB_INDICATORS['Manufacturing Value Added (% of GDP)']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
            fetch(WB_INDICATORS['GINI Coefficient']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
            fetch(WB_INDICATORS['Nominal GDP']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
            fetch(WB_INDICATORS['Real GDP']).then( res => {
                if (!res.ok) throw new Error(res.statusText);                
                return res.json();                
            }),
            fetch(WB_INDICATORS['GDP Growth Rate (annual %)']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
            fetch(WB_INDICATORS['GDP Per Capita']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }), 
            fetch(WB_INDICATORS['ALL Country GDP']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            }),
                fetch(WB_INDICATORS['Real Effective Exchange Rate']).then( res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            })
        ]);
        return { 
            'Electricity Access (%)': electricityRes[1],
            'Population Total': populationRes[1],
            'Self Employment (%)': selfEmpRes[1],
            'Youth Unemployment (%)': youthUnempRes[1],
            'Unemployment Rate (%)': unempRes[1],
            'HDI': hdiRes[1], // note: this will not b used i think, as we have OPHI's HDI data which is more harmonised across years
            'Oil Rents (% of GDP)': oilRentsRes[1],
            'Imports of Goods & Services (% of GDP)': importsRes[1],
            'Agricultural Added (% of GDP)': agriRes[1],
            'Industrial Added (% of GDP)': indRes[1],
            'Services Added (% of GDP)': srvRes[1],
            'Manufacturing Added (% of GDP)': manufRes[1],
            'GINI Coefficient': giniRes[1],
            'Nominal GDP': nominalRes[1],
            'Real GDP': realRes[1],
            'GDP Growth Rate (annual %)': gdpGrowthRes[1],
            'GDP Per Capita': gdpPerCapRes[1],
            'ALL Country GDP': allGdpRes[1],
            'Real Effective Exchange Rate': realExchangeRes[1]

        };  
    } catch(err) {
        console.error(err);
    }
}

export async function main() {
    try {
        const result = getFromLocalStorage();
        if (result.status === "ok") {
            return { value: result.value, savedAt: result.savedAt };
        } else {
            const fetchedData = await fetchWorldBankData()
            saveToLocalStorage(fetchedData)
            return { value: fetchedData, savedAt: Date.now() } 
        }
    } catch (error) {
        console.error('main() crashed:', error)
    }
}