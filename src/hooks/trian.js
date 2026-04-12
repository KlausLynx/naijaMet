function getUserId(username) {
    fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
    .then(res => {
        if (!res.ok) throw new Error(res.statusText);    
        res.json()
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

getUserId('Bret');

// async function getWorldBankData (id) {
//     try {
//         const res = await fetch(`https://api.worldbank.org/v2/${id}?format=json`);
        
//         if (!res.ok) {
//             throw new Error(res.statusText);
//         }
//         const json = await res.json();
//         console.log(json);
//     } catch(err) {
//         console.log(err);
//     }
// }

// // Total GDP
// 'countries/NGA/indicators/NY.GDP.MKTP.CD'

// // GDP Per Capita (per person)
// 'countries/NGA/indicators/NY.GDP.PCAP.CD'

// // GDP Per Capita Growth (% change per year)
// 'countries/NGA/indicators/NY.GDP.PCAP.KD.ZG'

async function getRestData() {
    try {
    const res = await fetch('https://corsproxy.io/?https://www.imf.org/external/datamapper/api/v1/NGDPD/NGA')
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    const json = await res.json();
    console.log(json);
    }catch(err) {
        console.log(err);
    }
}

getRestData()


// The Indicators Worth Knowing
// Code    What it measures
// NGDPD       GDP in current US dollars (billions)
// NGDP_RPCH   Real GDP growth (% per year)
// NGDPDPC     GDP per capita (per person)
// PCPIPCH     Inflation rate
// LUR         Unemployment rate
// LP          Population
// BCA         Current account balance
// GGXWDG_NGDP Government gross debt (% of GDP)


// GNI per capita
// getWorldBankData('countries/NGA/indicators/NY.GNP.PCAP.CD');

// // Gini coefficient
// getWorldBankData('countries/NGA/indicators/SI.POV.GINI');

// // Life expectancy (part of HDI calculation)
// getWorldBankData('countries/NGA/indicators/SP.DYN.LE00.IN');

// // Mean years of schooling
// getWorldBankData('countries/NGA/indicators/BAR.SCHL.15UP');

const apiKey = '5c525dee708e296757b9ee556ad81e05';
const seriesId = 'SIPOVGININGA'; // ✅ correct ID for Nigeria

const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&api_key=${apiKey}&file_type=json`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('Nigeria GINI Data:');
    data.observations.forEach(obs => {
      console.log(`Year: ${obs.date} | GINI: ${obs.value}`);
    });
  })
  .catch(error => console.error('Error:', error));
