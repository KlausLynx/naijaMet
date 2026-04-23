import { useState } from "react";
import { useScrollToTop } from "../utils/ScrolltoTop";
import { STEPS, DATA, regionFilters, policyUpdates, keyChallenges, sources, getStatCards } from "../data/Section4Data";
import Section4Card from "../components/cards/Section4Card";
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ReferenceLine } from "recharts";

// ── Region Color Styling ──────────────────────────────────────────────────────
const COLORS = {
    southSouth: { dot: "#c0392b", label: "South-South / Niger Delta", fill: "#c0392b22" },
    southWest:  { dot: "#2471a3", label: "South-West / FCT",          fill: "#2471a322" },
    southEast:  { dot: "#1a7a4a", label: "South-East",                fill: "#1a7a4a22" },
    north:      { dot: "#7d6608", label: "North",                     fill: "#7d660822" },
};

// ── Custom Tooltip ────────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    const d = payload[0].payload;
    const quadrant =
        d.gdp >= 5 && d.poverty >= 50 ? "🔴 Elite Capture Zone"
        : d.gdp >= 5 && d.poverty < 50 ? "🟢 Redistribution Working"
        : d.gdp < 5 && d.poverty >= 50 ? "🟡 Underdeveloped + Poor"
        : "⚪ Low Activity, Low Poverty";

    return (
        <div style={{
        background: "#0d0d0d", border: "1px solid #333", borderRadius: 6,
        padding: "12px 16px", maxWidth: 240, fontSize: 12, lineHeight: 1.7, color: "#e0e0e0",
        }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#fff", marginBottom: 4 }}>{d.name}</div>
            <div>GDP share: <strong>{d.gdp.toFixed(1)}%</strong></div>
            <div>Poverty rate: <strong>{d.poverty.toFixed(1)}%</strong></div>
            <div>Population: <strong>{d.pop.toFixed(1)}M</strong></div>
            {d.oil && <div style={{ color: "#D9534F", marginTop: 4 }}>● Oil-producing state</div>}
            <div style={{ color: "#888", marginTop: 6, fontSize: 11 }}>{quadrant}</div>
            {d.note && (
                <div style={{ color: "#888", marginTop: 6, fontSize: 10, borderTop: "1px solid #222", paddingTop: 6 }}>
                {d.note}
                </div>
            )}
        </div>
    );
};

// ── Quadrant badge helper ─────────────────────────────────────────────────────
const getQuadrant = (d) =>
    d.gdp >= 5 && d.poverty >= 50 ? { label: "Capture",  color: "#c0392b" }
    : d.gdp >= 5 && d.poverty < 50 ? { label: "Works",   color: "#1a7a4a" }
    : d.gdp < 5  && d.poverty >= 50 ? { label: "Poor+Low",color: "#7d6608" }
    :                                  { label: "Low/Low", color: "#2471a3" };

// ── Main Component ────────────────────────────────────────────────────────────
export default function SectionFour() {
    const [year,   setYear]   = useState(2022);
    const [filter, setFilter] = useState("all");

    const rawData      = DATA[year];
    const filteredData = filter === "all" ? rawData : rawData.filter(d => d.region === filter);

    const [loading, setLoading] = useState(false); //eslint-disable-line
    const scrollTOTop = useScrollToTop();
    
    if (loading) scrollTOTop();

    const captureStates     = rawData.filter(d => d.oil && d.poverty > 60).sort((a, b) => b.gdp - a.gdp).slice(0, 5);
    const avgCapturePoverty = (captureStates.reduce((s, d) => s + d.poverty, 0) / captureStates.length).toFixed(1);
    const avgCaptureGDP     = (captureStates.reduce((s, d) => s + d.gdp,     0) / captureStates.length).toFixed(1);

    return (
        <div id="growth-for-who">
            <div className="mx-3 sm:mx-6 lg:mx-10 mt-8 sm:mt-10 pb-10 flex flex-col">

                {/* ── Section Header ── */}
                <div className="flex w-full items-center">
                    <div className="w-full h-0.5 bg-[#F59E0B]" />
                    <div className="text-xl sm:text-2xl text-green-500 mx-4 sm:mx-6 shrink-0">04</div>
                    <div className="w-full h-0.5 bg-[#F59E0B]" />
                </div>

                <article className="space-y-10 mt-8">

                    {/* ── Intro ── */}
                    <section>
                        <small className="text-[#E89B3A] text-xs font-semibold tracking-widest uppercase">
                        Elite Capture Detector
                        </small>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 leading-tight">
                        Wealth is produced here
                        <em className="text-[#D9534F] not-italic"> .....It does not stay here.</em>
                        </h2>
                        <p className="text-[#F0EDE6] mt-3 text-sm sm:text-base leading-relaxed max-w-2xl">
                        Nigeria's oil-producing states generate a disproportionate share of national GDP yet sustain poverty
                        rates that dwarf the cities that govern them. This is not an accident of geography — it is the
                        predictable outcome of a fiscal architecture that extracts revenue upward while delivering services
                        downward in a trickle.
                        </p>
                    </section>

                    {/* ── Steps Card ── */}
                    <section>
                        <Section4Card data={STEPS} />
                    </section>

                    {/* ── Pull Quote 1 ── */}
                    <section>
                        <blockquote style={{ borderLeft: "4px solid #E89B3A", paddingLeft: 20, marginBottom: 0, fontStyle: "italic", color: "#c0bdb8", lineHeight: 1.7 }}
                        className="text-sm sm:text-base">
                        "Economic exploitation of the region's vast crude oil reserves by multinationals and government
                        authorities is juxtaposed with the specter of environmental devastation, excruciating poverty,
                        and recurrent rule of impunity."
                        <footer className="text-xs mt-2" style={{ color: "#c0bdb8", fontStyle: "normal" }}>
                            — GeoJournal, "Resource Control, Revenue Allocation and Petroleum Politics in Nigeria" (Springer, 2010)
                        </footer>
                        </blockquote>
                    </section>

                    {/* ── Stat Cards ── */}
                    <section>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {getStatCards(avgCapturePoverty, avgCaptureGDP, year).map(({ val, label, sub }) => (
                            <div key={val} style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 6, padding: "16px 12px" }}>
                            <div className="text-xl sm:text-2xl" style={{ fontWeight: 800, color: "#22c55e", lineHeight: 1, marginBottom: 6 }}>{val}</div>
                            <div className="text-xs" style={{ color: "#c0bdb8", lineHeight: 1.5, marginBottom: 4 }}>{label}</div>
                            <div style={{ fontSize: 10, color: "#888" }}>{sub}</div>
                            </div>
                        ))}
                        </div>
                    </section>

                    {/* ── Chart Controls ── */}
                    <section>
                        <div className="flex flex-col gap-3 mb-5">

                            {/* Year toggle */}
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-xs" style={{ color: "#888", letterSpacing: "0.1em" }}>SURVEY YEAR</span>
                                {[2003, 2009, 2019, 2022].map(y => (
                                <button
                                    key={y}
                                    onClick={() => setYear(y)}
                                    className="text-xs sm:text-sm"
                                    style={{
                                    padding: "5px 10px", borderRadius: 4, cursor: "pointer", fontWeight: 600,
                                    border:      year === y ? "1px solid #D9534F" : "1px solid #333",
                                    background:  year === y ? "#D9534F22"         : "transparent",
                                    color:       year === y ? "#FF6B5B"           : "#888",
                                    transition: "all 0.2s",
                                    }}
                                >{y}</button>
                                ))}
                                <span className="text-xs" style={{ color: "#888" }}>
                                {year === 2019 ? "NLSS monetary poverty" : "MPI multidimensional poverty"}
                                </span>
                            </div>

                            {/* Region filter */}
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-xs" style={{ color: "#888", letterSpacing: "0.1em" }}>REGION</span>
                                {regionFilters.map(({ key, label }) => (
                                <button
                                    key={key}
                                    onClick={() => setFilter(key)}
                                    className="text-xs"
                                    style={{
                                    padding: "4px 10px", borderRadius: 4, cursor: "pointer",
                                    border:     filter === key ? `1px solid ${COLORS[key]?.dot || "#D9534F"}` : "1px solid #2a2a2a",
                                    background: filter === key ? (COLORS[key]?.fill || "#D9534F22")           : "transparent",
                                    color:      filter === key ? (COLORS[key]?.dot  || "#FF6B5B")             : "#888",
                                    transition: "all 0.15s",
                                    }}
                                >{label}</button>
                                ))}
                            </div>
                        </div>

                        {/* Data note */}
                        <div style={{ fontSize: 11, color: "#888", marginBottom: 20, padding: "10px 14px", border: "1px solid #1a1a1a", borderRadius: 4 }}>
                        ⚠ DATA NOTE: 2019 uses NBS monetary poverty headcount (NLSS 2018/19). 2022 uses NBS/OPHI Multidimensional
                        Poverty Index — a broader measure capturing health, education, and living standards. MPI rates are structurally
                        higher. Direct year-on-year comparison should account for methodology shift. GDP share: NBS State GDP 2013–17,
                        BudgIT 2022, TheCable/NBS 2024.
                        </div>
                    </section>

                    {/* ── Scatter Chart ── */}
                    <section>
                        <div style={{ position: "relative" }}>
                            {/* Quadrant labels — hidden on mobile to avoid clutter */}
                            <div className="hidden sm:block" style={{ position: "absolute", top: 24, left: 72, zIndex: 1, pointerEvents: "none" }}>
                                <span style={{ fontSize: 10, fontWeight: 700, color: "#c0392b55", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                                ← Elite Capture Zone
                                </span>
                            </div>
                            <div className="hidden sm:block" style={{ position: "absolute", top: 24, right: 24, zIndex: 1, pointerEvents: "none" }}>
                                <span style={{ fontSize: 10, fontWeight: 700, color: "#1a7a4a55", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                                Redistribution Working →
                                </span>
                            </div>

                            <ResponsiveContainer width="100%" height={typeof window !== "undefined" && window.innerWidth < 640 ? 280 : 460}>
                                <ScatterChart margin={{ top: 20, right: 16, bottom: 40, left: 8 }}>
                                <CartesianGrid stroke="#1a1a1a" strokeDasharray="3 3" />
                                <XAxis
                                    type="number" dataKey="gdp" name="GDP Share" domain={[0, 36]}
                                    tick={{ fill: "#555", fontSize: 9 }}
                                    label={{ value: "GDP contribution (%)", position: "insideBottom", offset: -24, fill: "#555", fontSize: 10 }}
                                />
                                <YAxis
                                    type="number" dataKey="poverty" name="Poverty Rate" domain={[0, 100]}
                                    tick={{ fill: "#555", fontSize: 9 }}
                                    label={{ value: "Poverty (%)", angle: -90, position: "insideLeft", offset: 16, fill: "#555", fontSize: 10 }}
                                />
                                <ZAxis type="number" dataKey="pop" range={[40, 500]} />
                                <Tooltip content={<CustomTooltip />} />
                                <ReferenceLine x={5}  stroke="#666" strokeDasharray="6 4" strokeWidth={1.5} />
                                <ReferenceLine y={50} stroke="#666" strokeDasharray="6 4" strokeWidth={1.5} />
                                {Object.entries(COLORS).map(([regionKey, { dot }]) => (
                                    <Scatter
                                    key={regionKey}
                                    data={filteredData.filter(d => d.region === regionKey)}
                                    name={COLORS[regionKey].label}
                                    fill={dot}
                                    fillOpacity={0.7}
                                    />
                                ))}
                                </ScatterChart>
                            </ResponsiveContainer>

                            {/* Mobile-only quadrant key (below chart) */}
                            <div className="flex sm:hidden justify-between mt-2 px-1">
                                <span style={{ fontSize: 9, color: "#c0392b88", fontWeight: 700, letterSpacing: "0.08em" }}>← CAPTURE ZONE</span>
                                <span style={{ fontSize: 9, color: "#1a7a4a88", fontWeight: 700, letterSpacing: "0.08em" }}>REDISTRIBUTION →</span>
                            </div>
                        </div>
                    </section>

                    {/* ── Legend ── */}
                    <section>
                        <div className="flex flex-wrap gap-4 pl-0 sm:pl-16 items-center">
                        {Object.entries(COLORS).map(([key, { dot, label }]) => (
                            <span key={key} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#888" }}>
                            <span style={{ width: 10, height: 10, borderRadius: "50%", background: dot, display: "inline-block" }} />
                            {label}
                            </span>
                        ))}
                        <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#888" }}>
                            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#c0392b", border: "2px solid #ff6b5b", display: "inline-block" }} />
                            Oil-producing state
                        </span>
                        <span style={{ fontSize: 12, color: "#888" }}>Bubble size = population</span>
                        </div>
                    </section>

                    {/* ── Analysis Cards ── */}
                    <section>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 8, padding: "28px 24px" }}>
                            <div style={{ fontSize: 11, color: "#c0392b", marginBottom: 10, letterSpacing: "0.1em" }}>THE PARADOX</div>
                            <h3 style={{ fontSize: 17, fontWeight: 700, color: "#F0EDE6", margin: "0 0 14px", lineHeight: 1.3 }}>
                            Rivers, Akwa Ibom, Bayelsa, Delta — rich states, poor people
                            </h3>
                            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.8, margin: 0 }}>
                            These four states collectively account for roughly 20% of Nigeria's GDP — yet their multidimensional
                            poverty rates range from 70% to 88.5% (NBS/OPHI MPI 2022). Bayelsa, where Nigeria's first commercial
                            oil well was drilled in 1956, has the second-highest MPI poverty rate in the country. Revenue is
                            extracted, centralised, and re-routed through channels that are systematically captured before
                            they reach communities.
                            </p>
                        </div>
                        <div style={{ background: "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 8, padding: "28px 24px" }}>
                            <div style={{ fontSize: 11, color: "#1a7a4a", marginBottom: 10, letterSpacing: "0.1em" }}>THE COUNTEREXAMPLE</div>
                            <h3 style={{ fontSize: 17, fontWeight: 700, color: "#F0EDE6", margin: "0 0 14px", lineHeight: 1.3 }}>
                            Lagos shows redistribution is possible — not inevitable
                            </h3>
                            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.8, margin: 0 }}>
                            Lagos contributes ~32% of national GDP and registers the lowest poverty rate in Nigeria (4.5% monetary,
                            2019; 29.4% MPI, 2022). This reflects internally generated revenue, diversified economic activity, and
                            — imperfectly — local investment in infrastructure. It demonstrates the scatter chart's right quadrant
                            is reachable. The question is governance, not geography.
                            </p>
                        </div>
                        </div>
                    </section>

                    {/* ── Niger Delta Table ── */}
                    <section>
                        <div className="text-xs mb-4" style={{ color: "#F0EDE6", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                        Niger Delta Oil States · {year} Data
                        </div>

                        {/* Mobile: stacked cards */}
                        <div className="flex flex-col gap-2 sm:hidden">
                        {rawData.filter(d => d.region === "southSouth").map(d => {
                            const q = getQuadrant(d);
                            return (
                            <div key={d.name} style={{ background: d.oil && d.poverty > 60 ? "#1a0808" : "#0f0f0f", border: "1px solid #1e1e1e", borderRadius: 6, padding: "12px 14px" }}>
                                <div className="flex justify-between items-center mb-2">
                                <span style={{ color: "#ccc", fontWeight: d.oil ? 700 : 400, fontSize: 13 }}>
                                    {d.name}
                                    {d.oil && <span style={{ color: "#c0392b", marginLeft: 6, fontSize: 9 }}>OIL</span>}
                                </span>
                                <span style={{ background: q.color + "22", color: q.color, borderRadius: 3, padding: "2px 7px", fontSize: 9, fontWeight: 600 }}>
                                    {q.label}
                                </span>
                                </div>
                                <div className="grid grid-cols-3 gap-1" style={{ fontSize: 11, color: "#888" }}>
                                <div><span style={{ color: "#555", fontSize: 9 }}>GDP</span><br />{d.gdp.toFixed(1)}%</div>
                                <div>
                                    <span style={{ color: "#555", fontSize: 9 }}>POVERTY</span><br />
                                    <span style={{ color: d.poverty > 70 ? "#ff6b5b" : d.poverty > 50 ? "#e67e22" : "#aaa", fontWeight: 600 }}>
                                    {d.poverty.toFixed(1)}%
                                    </span>
                                </div>
                                <div><span style={{ color: "#555", fontSize: 9 }}>POP</span><br />{d.pop.toFixed(1)}M</div>
                                </div>
                            </div>
                            );
                        })}
                        </div>

                        {/* Desktop: full table */}
                        <table className="hidden sm:table w-full" style={{ borderCollapse: "collapse", fontSize: 13 }}>
                        <thead>
                            <tr style={{ borderBottom: "1px solid #2a2a2a" }}>
                            {["State", "GDP Share (%)", `Poverty (%) — ${year}`, "Population (M)", "Oil Output", "Quadrant"].map(h => (
                                <th key={h} style={{ textAlign: "left", padding: "10px 12px", color: "#888", fontSize: 10, letterSpacing: "0.08em", fontWeight: 500 }}>
                                {h}
                                </th>
                            ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rawData.filter(d => d.region === "southSouth").map(d => {
                            const q = getQuadrant(d);
                            return (
                                <tr key={d.name} style={{ borderBottom: "1px solid #141414", background: d.oil && d.poverty > 60 ? "#1a0808" : "transparent" }}>
                                <td style={{ padding: "12px", color: "#888", fontWeight: d.oil ? 600 : 400 }}>
                                    {d.name}
                                    {d.oil && <span style={{ color: "#c0392b", marginLeft: 6, fontSize: 10 }}>OIL</span>}
                                </td>
                                <td style={{ padding: "12px", color: "#aaa" }}>{d.gdp.toFixed(1)}</td>
                                <td style={{ padding: "12px", color: d.poverty > 70 ? "#ff6b5b" : d.poverty > 50 ? "#e67e22" : "#aaa", fontWeight: 600 }}>
                                    {d.poverty.toFixed(1)}
                                </td>
                                <td style={{ padding: "12px", color: "#888" }}>{d.pop.toFixed(1)}</td>
                                <td style={{ padding: "12px", color: d.oil ? "#c0392b" : "#888", fontSize: 12 }}>{d.oil ? "Yes" : "—"}</td>
                                <td style={{ padding: "12px" }}>
                                    <span style={{ background: q.color + "22", color: q.color, borderRadius: 3, padding: "3px 8px", fontSize: 10, fontWeight: 600 }}>
                                    {q.label}
                                    </span>
                                </td>
                                </tr>
                            );
                            })}
                        </tbody>
                        </table>

                        <div className="text-xs mt-2" style={{ color: "#888" }}>
                        Sources: NBS/OPHI MPI 2022; NBS NLSS 2018/19; BudgIT State of States 2022; NBS State Nominal GDP 2013–17; TheCable/NBS 2024.
                        </div>
                    </section>

                    {/* ── Pull Quote 2 ── */}
                    <section>
                        <blockquote className="text-sm sm:text-base rounded" style={{
                        borderLeft: "4px solid #22c55e", background: "#0d0d0d",
                        padding: "20px 20px 20px 24px", fontStyle: "italic", color: "#F0EDE6", lineHeight: 1.7,
                        }}>
                        "In theory, the 13% derivation fund — which allocates a portion of oil revenues to producing states —
                        is meant to bridge inequality. In practice, many oil-rich communities, especially riverine settlements,
                        still lack schools, clinics, potable water, and roads."
                        <footer className="text-xs mt-2" style={{ color: "#888", fontStyle: "normal" }}>
                            — Punch Nigeria, "Beneath the Black Gold: Oil-rich Niger Delta's paradox of plenty and pain" (June 2025)
                        </footer>
                        </blockquote>
                    </section>

                    {/* ── Structural Causes ── */}
                    <section>
                        <div className="text-xs mb-5" style={{ color: "#888", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                        Why the scatter chart looks this way — structural causes
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1a1a1a] rounded-md overflow-hidden">
                        {keyChallenges.map(({ icon, title, text }) => (
                            <div key={icon} style={{ background: "#0d0d0d", padding: "20px 16px" }}>
                            <div className="text-xs mb-2" style={{ color: "#F59E0B" }}>{icon}</div>
                            <div className="text-sm font-semibold mb-2" style={{ color: "#ddd" }}>{title}</div>
                            <div className="text-xs leading-relaxed" style={{ color: "#777" }}>{text}</div>
                            </div>
                        ))}
                        </div>
                    </section>

                    {/* ── Year Comparison Callout ── */}
                    <section>
                        <div className="rounded-2xl p-4 sm:p-6" style={{
                        borderTop: "4px solid #D9534F",
                        background: "linear-gradient(135deg, rgba(217,83,79,0.06) 0%, transparent 70%)",
                        }}>
                        <div className="text-xs mb-3" style={{ color: "#c0392b", letterSpacing: "0.1em" }}>
                            2019 → 2022: DID ANYTHING CHANGE?
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed mb-3" style={{ color: "#aaa" }}>
                            Toggle between 2019 and 2022 in the chart above. The geography of capture is structurally stable.
                            Oil-producing Niger Delta states remain clustered in the top-left quadrant across both survey periods,
                            across different poverty methodologies, and despite two full gubernatorial cycles.
                        </p>
                        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#aaa" }}>
                            <strong style={{ color: "#e0e0e0" }}>Methodological note:</strong> 2019 uses NBS NLSS monetary headcount;
                            2022 uses NBS/OPHI Multidimensional Poverty Index, which includes health, education, and living standards.
                            MPI rates are structurally higher. Bayelsa's apparent jump from 72% to 88.5% is partly methodological —
                            but the structural story is unchanged either way.
                        </p>
                        </div>
                    </section>

                    {/* ── Policy Levers ── */}
                    <section>
                        <div style={{ borderTop: "1px solid #1e1e1e", paddingTop: 32 }}>
                        <div className="text-xs mb-4" style={{ color: "#666", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                            Policy levers and what to monitor
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {policyUpdates.map(({ label, status, color, note }) => (
                            <div key={label} style={{ padding: "16px 14px", background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 6 }}>
                                <div className="flex justify-between items-start mb-2">
                                <div className="text-xs sm:text-sm font-semibold leading-snug flex-1" style={{ color: "#ddd" }}>{label}</div>
                                <span className="text-xs font-bold ml-2 shrink-0" style={{ background: color + "22", color, borderRadius: 3, padding: "2px 7px" }}>
                                    {status}
                                </span>
                                </div>
                                <div className="text-xs leading-relaxed" style={{ color: "#666" }}>{note}</div>
                            </div>
                            ))}
                        </div>
                        </div>
                    </section>

                    {/* ── Sources ── */}
                    <section>
                        <div className="rounded-2xl p-4 sm:p-5 lg:p-6" style={{
                        borderTop: "4px solid #F59E0B",
                        background: "linear-gradient(135deg, rgba(217,83,79,0.06) 0%, transparent 70%)",
                        }}>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-500 mt-2 mb-1">Sources</h3>
                        <div className="text-xs text-gray-400 space-y-1">{sources}</div>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
}