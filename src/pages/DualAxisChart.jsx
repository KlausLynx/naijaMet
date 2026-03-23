import { ComposedChart, Legend, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

const data = [
    { year: 1960, gdpPerCapita: 93,   giniCoefficient: 0.37 },
    { year: 1961, gdpPerCapita: 98,   giniCoefficient: 0.38 },
    { year: 1962, gdpPerCapita: 104,  giniCoefficient: 0.38 },
    { year: 1963, gdpPerCapita: 111,  giniCoefficient: 0.39 },
    { year: 1964, gdpPerCapita: 118,  giniCoefficient: 0.39 },
    { year: 1965, gdpPerCapita: 126,  giniCoefficient: 0.40 },
    { year: 1966, gdpPerCapita: 121,  giniCoefficient: 0.40 },
    { year: 1967, gdpPerCapita: 108,  giniCoefficient: 0.41 },
    { year: 1968, gdpPerCapita: 113,  giniCoefficient: 0.41 },
    { year: 1969, gdpPerCapita: 120,  giniCoefficient: 0.41 },
  // OIL BOOM — GDP jumps hard, Gini jumps with it (oil money = elite money)
    { year: 1970, gdpPerCapita: 156,  giniCoefficient: 0.42 },
    { year: 1971, gdpPerCapita: 195,  giniCoefficient: 0.43 },
    { year: 1972, gdpPerCapita: 218,  giniCoefficient: 0.43 },
    { year: 1973, gdpPerCapita: 274,  giniCoefficient: 0.44 },
    { year: 1974, gdpPerCapita: 413,  giniCoefficient: 0.45 },
    { year: 1975, gdpPerCapita: 381,  giniCoefficient: 0.46 },
    { year: 1976, gdpPerCapita: 420,  giniCoefficient: 0.46 },
    { year: 1977, gdpPerCapita: 462,  giniCoefficient: 0.47 },
    { year: 1978, gdpPerCapita: 441,  giniCoefficient: 0.47 },
    { year: 1979, gdpPerCapita: 502,  giniCoefficient: 0.48 },
    { year: 1980, gdpPerCapita: 588,  giniCoefficient: 0.49 },
  // OIL CRASH — GDP collapses, but Gini stays stuck (rich keep assets, poor lose jobs)
    { year: 1981, gdpPerCapita: 521,  giniCoefficient: 0.49 },
    { year: 1982, gdpPerCapita: 487,  giniCoefficient: 0.49 },
    { year: 1983, gdpPerCapita: 421,  giniCoefficient: 0.49 },
    { year: 1984, gdpPerCapita: 390,  giniCoefficient: 0.48 },
    { year: 1985, gdpPerCapita: 376,  giniCoefficient: 0.48 },
    { year: 1986, gdpPerCapita: 251,  giniCoefficient: 0.48 },
    { year: 1987, gdpPerCapita: 263,  giniCoefficient: 0.48 },
    { year: 1988, gdpPerCapita: 278,  giniCoefficient: 0.49 },
    { year: 1989, gdpPerCapita: 271,  giniCoefficient: 0.49 },
  // MILITARY ERA — stagnation, Gini flatlines high
    { year: 1990, gdpPerCapita: 315,  giniCoefficient: 0.49 },
    { year: 1991, gdpPerCapita: 307,  giniCoefficient: 0.49 },
    { year: 1992, gdpPerCapita: 298,  giniCoefficient: 0.49 },
    { year: 1993, gdpPerCapita: 272,  giniCoefficient: 0.50 },
    { year: 1994, gdpPerCapita: 255,  giniCoefficient: 0.50 },
    { year: 1995, gdpPerCapita: 263,  giniCoefficient: 0.50 },
    { year: 1996, gdpPerCapita: 282,  giniCoefficient: 0.50 },
    { year: 1997, gdpPerCapita: 295,  giniCoefficient: 0.50 },
    { year: 1998, gdpPerCapita: 278,  giniCoefficient: 0.50 },
    { year: 1999, gdpPerCapita: 296,  giniCoefficient: 0.50 },
  // GROWTH ERA — GDP booms again, Gini ALSO keeps rising (the key contradiction)
    { year: 2000, gdpPerCapita: 378,  giniCoefficient: 0.51 },
    { year: 2001, gdpPerCapita: 389,  giniCoefficient: 0.51 },
    { year: 2002, gdpPerCapita: 412,  giniCoefficient: 0.51 },
    { year: 2003, gdpPerCapita: 468,  giniCoefficient: 0.52 },
    { year: 2004, gdpPerCapita: 552,  giniCoefficient: 0.52 },
    { year: 2005, gdpPerCapita: 673,  giniCoefficient: 0.52 },
    { year: 2006, gdpPerCapita: 802,  giniCoefficient: 0.53 },
    { year: 2007, gdpPerCapita: 931,  giniCoefficient: 0.53 },
    { year: 2008, gdpPerCapita: 1118, giniCoefficient: 0.53 },
    { year: 2009, gdpPerCapita: 1059, giniCoefficient: 0.53 },
    { year: 2010, gdpPerCapita: 1219, giniCoefficient: 0.54 },
    { year: 2011, gdpPerCapita: 1428, giniCoefficient: 0.54 },
    { year: 2012, gdpPerCapita: 1617, giniCoefficient: 0.54 },
    { year: 2013, gdpPerCapita: 1810, giniCoefficient: 0.55 },
    { year: 2014, gdpPerCapita: 2042, giniCoefficient: 0.55 },
  // POST-2015 COLLAPSE — GDP crashes but Gini keeps rising (the cruelest part)
    { year: 2015, gdpPerCapita: 1596, giniCoefficient: 0.56 },
    { year: 2016, gdpPerCapita: 1194, giniCoefficient: 0.56 },
    { year: 2017, gdpPerCapita: 1175, giniCoefficient: 0.57 },
    { year: 2018, gdpPerCapita: 1246, giniCoefficient: 0.57 },
    { year: 2019, gdpPerCapita: 1198, giniCoefficient: 0.57 },
    { year: 2020, gdpPerCapita: 1028, giniCoefficient: 0.58 },
    { year: 2021, gdpPerCapita: 1107, giniCoefficient: 0.58 },
    { year: 2022, gdpPerCapita: 1218, giniCoefficient: 0.59 },
    { year: 2023, gdpPerCapita: 1143, giniCoefficient: 0.59 },
    { year: 2024, gdpPerCapita: 997,  giniCoefficient: 0.60 },
    { year: 2025, gdpPerCapita: 1041, giniCoefficient: 0.60 },
    { year: 2026, gdpPerCapita: 1089, giniCoefficient: 0.61 },
];

const eras = [
    { start: 1960, end: 1969, label: "Independence" },
    { start: 1970, end: 1980, label: "Oil Boom" },
    { start: 1981, end: 1999, label: "Crash & SAP" },
    { start: 2000, end: 2014, label: "Growth Era" },
    { start: 2015, end: 2026, label: "Decline" },
];

const GDP_COLOR = "#22c55e";
const GINI_COLOR = "#F59E0B";

const CustomTooltip = ({active, payload, label}) => {
    if (!active || !payload?.length) return null;

    const gdp = payload.find(p => p.dataKey === "gdpPerCapita");
    const gini = payload.find(p => p.dataKey === "giniCoefficient");
    const era = eras.find(e => label >= e.start && label <= e.end);

    return (
        <div style={{backgroundColor: "#0F172A",
            border: "1px solid rgba(255,255,255,0.1) ",
            borderRadius: "10px",
            padding: "12px 16px",
            minWidth: 180,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)"
        }}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8}}>
                <span style={{fontSize: 18, fontWeight: 700, color: "#fff",fontFamily: "'Playfair Display', serif"}}>{label}</span>
                {era && <span style={{fontSize: 10, color: "#94A3B8", backgroundColor: "rgba(255,255,255,0.07)", padding: "2px 8px", borderRadius: 20, fontFamily: "monospace" }}>{era.label}</span>}
            </div>
            <div style={{borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: 8, display: "flex", flexDirection: "column", gap: 6}}>
                {gdp && (
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
                        <span style={{ fontSize: 11, color: "#94A3B8", display: "flex", alignItems: "center", gap: 5 }}>
                            <span style={{ width: 8, height: 8, borderRadius: 2, background: GDP_COLOR, display: "inline-block" }} /> GDP per Capita
                        </span>
                        <span style={{ fontSize: 13, fontWeight: 600, color: GDP_COLOR, fontFamily: "monospace" }}>${gdp.value.toLocaleString()}</span>
                    </div>
                )}
                {gini && (
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
                        <span style={{ fontSize: 11, color: "#94A3B8", display: "flex", alignItems: "center", gap: 5 }}>
                            <span style={{ width: 8, height: 8, borderRadius: 2, background: GINI_COLOR, display: "inline-block" }} />
                            Gini Coefficient
                        </span>
                        <span style={{ fontSize: 13, fontWeight: 600, color: GINI_COLOR, fontFamily: "monospace" }}>{gini.value.toFixed(2)}</span>
                    </div>
                )}
            </div>
        </div>
    )

}

export default function DualAxisChart() {
    return (
        <div style={{
            backgroundColor: "#0B1120",
            borderRadius: 20,
            width: "100%",
            maxWidth: 900,
            boxSizing: "border-box",
            padding: "28px 28px 20px"
        }}>
            <div style={{marginBottom: 24}}>
                <div style={{display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12}}>
                    {/* HEADER */}
                    <div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 4
                        }}>
                            <span style={{
                                fontSize: 11,
                                letterSpacing: 2,
                                color: "#64748B",
                                textTransform: "uppercase",
                                fontWeight: 500
                            }}>Nierian . Mock Data</span>
                            <span style={{display: "inline-block",borderRadius: "50%", width: 4, height: 4, backgroundColor: "#22C55E"}}/>
                            <span style={{fontSize: 11, color: "#22C55E"}}>1960 - 2026</span>
                        </div>
                        <h2 style={{
                            margin: 0,
                            fontSize: 22,
                            fontWeight: 700,
                            color: "#F8FAFC",
                            fontFamily: "'Playfair Display', serif",
                            lineHeight: 1.2
                        }}>Growth Without Equality</h2>
                        <p style={{margin: "4px 0 0", fontSize: 13, color: "#64748B", maxWidth: 420}}>GDP per capita rose and fell - but inequality barely moved below 0.43</p>
                    </div>
                    {/* LEGEND */}
                    <div style={{display: "flex", flexDirection: "column", gap: 8, alignSelf: "flex-start"}}>
                        <div style={{display: "flex", alignItems: "center", gap: 8}}>
                            <div style={{width: 24, height: 10, borderRadius: 3, background: GDP_COLOR, opacity: 0.85}} />
                            <span style={{fontSize: 12, color: "#94A3B8"}} >GDP per Capita (USD)</span>
                        </div>
                        <div style={{display: "flex", alignItems: "center", gap: 8}}>
                            <div style={{width: 24, height: 3, borderRadius: 2, backgroundColor: GINI_COLOR, position: "relative"}}>
                                <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)",width: 7, height: 7, borderRadius: "50%", backgroundColor: GINI_COLOR}}/>
                            </div>
                            <span style={{fontSize: 12, color: "#94A3B8"}}>Gini Coefficient</span>
                        </div>
                    </div>
                </div>
                <div style={{display: "flex", gap: 6, marginTop: 16, flexWrap: "wrap"}}>
                    {eras.map(e => (
                        <span key={e.label} style={{
                            fontSize: 10, padding: "3px 10px",
                            borderRadius: 20,
                            background: "rgba(255,255,255,0.05",
                            border: "1px solid rgba(255,255,255, 0.08)",
                            color: "#94A3B8",
                            letterSpacing: 0.5
                        }}>{e.start}-{e.end}</span>
                    ))}
                </div>
            </div>
            <div style={{
                width: "100%", height: 360
            }}>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={data}>

                        <defs>
                            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={GDP_COLOR} stopOpacity={0.9}/>
                                <stop offset="100%" stopColor={GDP_COLOR} stopOpacity={0.3}/>
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="2 4" vertical={false}/>

                        <Tooltip content={<CustomTooltip/>} />

                        <XAxis dataKey="year" tick={{fontSize: 14, fill: "#475569", fontFamily: "monospace"}} tickLine={false} axisLine={false} interval={4}/>

                        <YAxis 
                        yAxisId="left"
                        orientation="left"
                        tickLine={false}
                        axisLine={false}
                        tick={{fontSize: 11, fill: GDP_COLOR }}
                        domain={[50, 2000]}
                        tickFormatter={(v) => v >=1000 ? `$${(v/1000).toFixed(1)}k` : `$${v}`}
                        width={48} />

                        <YAxis 
                        yAxisId="right"
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                        tick={{fontSize: 11, fill: GINI_COLOR }} 
                        domain={[0.30, 0.55]}
                        tickFormatter={(v)=> v.toFixed(2)}
                        width={40}/>

                        <Bar yAxisId="left" dataKey="gdpPerCapita" radius={[3, 3, 0, 0]} barSize={9} fill="url(#chartGrad)" name="GDP per Capita" />

                        <Line yAxisId="right" type="monotone" dataKey="giniCoefficient" stroke={GINI_COLOR} strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: GINI_COLOR, stroke: "#0B1120", strokeWidth: 2 }} name="Gini Coefficient"/>

                        {eras.slice(1).map(e => (
                            <ReferenceLine 
                            key={e.start}
                            x={e.start}
                            yAxisId="left"
                            stroke="rgba(255, 255, 255, 0.16)"
                            strokeDasharray="4 4"
                            />
                        ))}

                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}