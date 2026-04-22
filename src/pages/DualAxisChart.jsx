import { ComposedChart, Legend, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { dualAxisData } from "../hooks/transform_data.js";
import { useState, useEffect} from "react";
import { formatFigures } from "../hooks/usemetrics.js";

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
                        <span style={{ fontSize: 13, fontWeight: 600, color: GDP_COLOR, fontFamily: "monospace" }}>#{gdp.value.toLocaleString()}</span>
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
    const [combinedData, setCombinedData] = useState([]);

    useEffect(() => {
        dualAxisData()
            .then(result => setCombinedData([...result].reverse()))
            .catch(err => console.error(err));
    }, [])

    return (
        <div style={{
            backgroundColor: "#0B1120",
            borderRadius: 20,
            width: "100%",
            maxWidth: 900,
            boxSizing: "border-box",
            padding: "28px 20px 20px"  
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
                            }}>Nigeria <small>World bank data</small> </span>
                            <span style={{display: "inline-block",borderRadius: "50%", width: 4, height: 4, backgroundColor: "#22C55E"}}/>
                            <span style={{fontSize: 11, color: "#22C55E"}}>1976 - 2024</span>
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
                            <span style={{fontSize: 12, color: "#94A3B8"}} >GDP per Capita PPP (Naira)</span>
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
                width: "100%", height: window.innerWidth < 640 ? 240 : 360  
            }}>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={combinedData} margin={{ left: 12, right: 12, top: 8, bottom: 8 }}>

                        <defs>
                            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={GDP_COLOR} stopOpacity={0.9}/>
                                <stop offset="100%" stopColor={GDP_COLOR} stopOpacity={0.3}/>
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="2 4" vertical={false}/>

                        <Tooltip content={CustomTooltip}/>

                        <XAxis 
                            dataKey="date" 
                            tick={{ fontSize: window.innerWidth < 640 ? 9 : 14, fill: "#475569", fontFamily: "monospace" }}  
                            tickLine={false} 
                            axisLine={false} 
                            interval={window.innerWidth < 640 ? 9 : 4}  
                        />

                        <YAxis 
                        yAxisId="left"
                        orientation="left"
                        tickLine={false}
                        axisLine={false}
                        tick={{fontSize: 10, fill: GDP_COLOR }}
                        domain={['auto', 'auto']}
                        tickFormatter={(v) => `#${formatFigures(v)}`}
                        width={65} />

                        <YAxis 
                        yAxisId="right"
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                        tick={{fontSize: 11, fill: GINI_COLOR }} 
                        domain={[30, 55]}                          
                        tickFormatter={(v) => v.toFixed(1)} 
                        width={40}/>
                        <Line yAxisId="right" type="monotone" dataKey="giniCoefficient" connectNulls={true}  
                            dot={(props) => {
                                if (props.value == null) return null;  // skip null points
                                    return <circle cx={props.cx} cy={props.cy} r={4} fill={GINI_COLOR} stroke="#0B1120" strokeWidth={2} />;
                            }}  
                        stroke={GINI_COLOR} strokeWidth={2.5} activeDot={{ r: 5, fill: GINI_COLOR, stroke: "#0B1120", strokeWidth: 2 }} name="Gini Coefficient"/>
                        <Bar yAxisId="left" dataKey="gdpPerCapita" radius={[3, 3, 0, 0]} barSize={9} fill="url(#chartGrad)" name="gdpPerCapita" />
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