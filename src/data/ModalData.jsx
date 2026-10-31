// Figures: World Bank (WDI + Poverty and Inequality Platform)
// GDP per capita: current US$, 2025 = 1,224 (2024 = 1,084, 2014 peak = 3,089)
// Gini: 33.9 (2022). Poverty: 40.1% below national line (2018), 30.9% below $2.15/day (2018)

const modalContent = {
    "Gdp Per Capita": {
        title: "GDP Per Capita",
        subtitle: "The metric that papers over inequality",
        stat: "$1,224",
        statLabel: "Nigeria's GDP per capita, 2025 (World Bank)",
        body: [
        "GDP per capita is a country's total economic output divided by its population. In 2025 that came to about $1,224 per Nigerian per year. It is not what anyone earns. It is just output divided by headcount.",
        "It is also much lower than it used to be. It peaked at about $3,089 in 2014, then fell with oil prices and the naira's loss of value, and dropped to about $1,084 in 2024. Part of that fall is the exchange rate, not a real shrinking of the economy.",
        "Because it is an average, a few very high earners pull it up. 'On average, everyone in this room is a millionaire' can be true when one billionaire walks in. The number is accurate. The impression it creates can be false."
        ],
        accent: "#F59E0B",
        tag: "Mean vs. Reality"
    },
    "Top One Person": {
        title: "The Top of the Ladder",
        subtitle: "What the official inequality number does and doesn't show",
        stat: "33.9",
        statLabel: "Nigeria's Gini index, 2022 (0 = equal, 100 = unequal)",
        body: [
        "The World Bank's Gini index for Nigeria was 33.9 in 2022, down from 35.1 in 2018. That is moderate by world standards, and well below its 1996 survey high of 51.9.",
        "Household surveys measure what ordinary households report spending. They are known to under-capture the very rich, so the true gap between the top and everyone else is likely wider than the Gini suggests.",
        "The point is not envy. It is knowing whether a reported average reflects a society's reality, or just its outliers."
        ],
        accent: "#D9534F",
        tag: "Wealth Concentration"
    },
    "Median Income": {
        title: "Median Income",
        subtitle: "The number that actually tells the story",
        stat: "40.1%",
        statLabel: "Nigerians below the national poverty line, 2018 (World Bank)",
        body: [
        "The median finds the person exactly in the middle of the income ladder, with half the country earning more and half earning less. A few very rich people cannot move it, which is why it describes the typical person better than the average does.",
        "The gap between the two shows up when you compare countries. Research from the Center for Global Development found Nigeria and Tanzania have very different GDP per capita but similar median incomes. Niger is far poorer on paper, yet its middle earner lives on more than Nigeria's.",
        "In 2018, about 40% of Nigerians were below the national poverty line and about 31% lived on less than $2.15 a day. Policy and aid decisions built on the median, not the mean, are built for the country that actually exists."
        ],
        accent: "#4ADE80",
        tag: "The True Benchmark"
    }
};

export { modalContent };