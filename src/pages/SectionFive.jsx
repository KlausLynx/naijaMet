import { useState, useEffect } from "react";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, ReferenceLine,
} from "recharts";
import { useScrollToTop } from "../utils/ScrolltoTop";
import {
  metricCards, tableRows, rankGapData, nigeriaInflationData,
  nigeriaEconomicHighlights, incomeGapData, nairaRateHistory,
  keyTakeaways, radarData, sources,
} from "../data/Section5Data";
import { Reer } from "../hooks/transform_data";

/* ─── Design tokens ───────────────────────────────────────────── */
const C = {
  coral:    "#D85A30",
  coralLt:  "#FAECE7",
  amber:    "#BA7517",
  amberLt:  "#FAEEDA",
  amberMd:  "#EF9F27",
  blue:     "#185FA5",
  teal:     "#0F6E56",
  tealMd:   "#5DCAA5",
  red:      "#A32D2D",
  redLt:    "#FCEBEB",
  purple:   "#534AB7",
  purpleLt: "#EEEDFE",
  text:     "#F0EDE6",
  muted:    "#929292",
};

const badge = {
  neutral: { background: C.purpleLt, color: C.purple },
  warn:    { background: C.amberLt,  color: C.amber  },
  bad:     { background: C.redLt,    color: C.red    },
};

/* ─── Responsive hook ─────────────────────────────────────────── */
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

/* ─── Injected CSS ────────────────────────────────────────────── */
const STYLES = `
  .s5-wrap  { padding: 0 0.75rem; box-sizing: border-box; }
  .s5-inner { margin: 0 auto; padding: 2.5rem 0 3rem; }
  .s5-article { display: flex; flex-direction: column; gap: 1.75rem; }

  /* Card shell */
  .s5-card {
    border-radius: 14px;
    padding: 1.25rem 1.25rem;
    background: linear-gradient(135deg, rgba(217,83,79,0.06) 0%, transparent 70%);
    box-sizing: border-box;
  }
  @media (max-width: 480px) {
    .s5-card { padding: 0.9rem; }
    .s5-wrap { padding: 0 0.5rem; }
  }

  /* Typography */
  .s5-page-title {
    font-size: clamp(1.35rem, 5.5vw, 2.1rem);
    font-weight: 700;
    color: #fff;
    margin-top: 0.5rem;
    line-height: 1.25;
  }
  .s5-section-title {
    font-size: clamp(0.95rem, 4vw, 1.1rem);
    font-weight: 500;
    color: #F59E0B;
    margin: 0 0 0.5rem;
  }
  .s5-prose {
    font-size: clamp(12.5px, 3.5vw, 14.5px);
    line-height: 1.8;
    color: #F0EDE6;
    margin: 0 0 0.85rem;
  }
  .s5-chart-label {
    font-size: clamp(9px, 2.8vw, 12px);
    font-weight: 500;
    color: #F0EDE6;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    margin: 8px 0 4px;
  }
  .s5-source-note {
    font-size: clamp(9px, 2.5vw, 10px);
    color: #F0EDE6;
    margin-top: 6px;
    text-align: right;
  }

  /* Header divider */
  .s5-header-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; }
  .s5-header-line { flex: 1; height: 1px; background: #F59E0B; }
  .s5-header-num  { font-size: clamp(1rem, 4vw, 1.25rem); color: #22c55e; flex-shrink: 0; }

  /* Metric cards */
  .s5-metric-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 8px;
  }
  .s5-metric-card { border-radius: 10px; padding: 0.85rem; cursor: pointer; transition: all 0.15s ease; box-sizing: border-box; }
  .s5-metric-label   { font-size: clamp(8px, 2.3vw, 10px); font-weight: 500; color: #F0EDE6; margin: 0 0 5px; text-transform: uppercase; letter-spacing: 0.07em; }
  .s5-metric-value   { font-size: clamp(1.05rem, 4.5vw, 1.4rem); font-weight: 500; margin: 0 0 3px; }
  .s5-metric-sub     { font-size: clamp(9px, 2.3vw, 11px); color: #929292; margin: 0 0 6px; }
  .s5-metric-explain { font-size: clamp(11px, 3vw, 13px); line-height: 1.65; color: #F0EDE6; margin: 0; padding-top: 8px; }
  .s5-metric-hint    { font-size: clamp(9px, 2vw, 10px); color: #929292; margin: 3px 0 0; }

  /* Table — scrolls on small screens */
  .s5-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; margin-bottom: 0.5rem; }
  .s5-table { width: 100%; border-collapse: collapse; min-width: 500px; }
  .s5-th {
    font-size: clamp(8px, 2.5vw, 11px);
    font-weight: 500;
    letter-spacing: 0.07em;
    color: #F0EDE6;
    text-transform: uppercase;
    padding: 10px 8px;
    text-align: left;
    white-space: nowrap;
  }
  .s5-td {
    font-size: clamp(11px, 3vw, 13px);
    padding: 10px 8px;
    color: #F0EDE6;
    vertical-align: top;
    line-height: 1.55;
  }
  /* Card-style table on very small screens */
  @media (max-width: 520px) {
    .s5-table-wrap { overflow-x: unset; }
    .s5-table, .s5-table thead, .s5-table tbody,
    .s5-table th, .s5-table td, .s5-table tr { display: block; }
    .s5-table thead tr { display: none; }
    .s5-table tr {
      border: 1px solid #3a3a3a;
      border-radius: 10px;
      margin-bottom: 10px;
      padding: 10px 12px;
      background: rgba(255,255,255,0.02);
    }
    .s5-table { min-width: unset; width: 100%; }
    .s5-td { padding: 4px 0; border: none; }
    .s5-td::before {
      content: attr(data-label);
      display: block;
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #929292;
      margin-bottom: 2px;
    }
  }

  /* Highlight pills */
  .s5-pill-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 1.25rem; }
  .s5-pill { border-radius: 8px; padding: 9px 12px; flex: 1 1 100px; min-width: 90px; box-sizing: border-box; }
  .s5-pill-label { font-size: clamp(8px, 2.3vw, 10px); font-weight: 500; text-transform: uppercase; letter-spacing: 0.07em; margin: 0 0 3px; }
  .s5-pill-val   { font-size: clamp(1rem, 4.5vw, 1.25rem); font-weight: 500; margin: 0; }

  /* Pullquote */
  .s5-pullquote { border-left: 3px solid #F0EDE6; margin: 1.5rem 0; padding: 0.4rem 1rem; border-radius: 0 8px 8px 0; }
  .s5-pullquote p     { font-size: clamp(12px, 3.5vw, 15px); line-height: 1.75; color: #F0EDE6; margin: 0 0 6px; font-style: italic; }
  .s5-pullquote small { font-size: clamp(9px, 2.5vw, 11px); color: #F0EDE6; }

  /* Chart legend */
  .s5-legend { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px; font-size: clamp(9px, 2.8vw, 12px); color: #F0EDE6; }

  /* Income gap label row */
  .s5-income-labels { display: flex; justify-content: space-between; font-size: clamp(10px, 2.8vw, 12px); color: #F0EDE6; margin-bottom: 8px; flex-wrap: wrap; gap: 4px; }

  /* Key takeaways */
  .s5-takeaway-row  { display: flex; gap: 10px; margin-bottom: 8px; align-items: flex-start; }
  .s5-takeaway-text { font-size: clamp(12px, 3.2vw, 14px); line-height: 1.65; color: #F0EDE6; margin: 0; }
  .s5-badge-num {
    min-width: 18px; height: 18px; border-radius: 50%;
    background: #F0EDE6; color: #000;
    font-size: 10px; font-weight: 600;
    display: flex; align-items: center; justify-content: center;
    margin-top: 2px; flex-shrink: 0;
  }
`;

/* ─── Sub-components ──────────────────────────────────────────── */
const CustomTooltip = ({ active, payload, label, unit = "" }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "#F0EDE6", borderRadius: 8, padding: "8px 12px", fontSize: 12, maxWidth: 200 }}>
      <p style={{ margin: "0 0 4px", fontWeight: 500, color: "#111" }}>{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ margin: "2px 0", color: p.color, fontSize: 12 }}>
          {p.name}: <strong>{typeof p.value === "number" ? p.value.toFixed(1) : p.value}{unit}</strong>
        </p>
      ))}
    </div>
  );
};

const Pullquote = ({ text, source }) => (
  <blockquote className="s5-pullquote">
    <p>{text}</p>
    {source && <small>{source}</small>}
  </blockquote>
);

const SectionCard = ({ topColor, leftColor, children }) => (
  <section>
    <div className="s5-card" style={{ borderTop: topColor ? `4px solid ${topColor}` : undefined, borderLeft: leftColor ? `4px solid ${leftColor}` : undefined }}>
      {children}
    </div>
  </section>
);

const Legend2 = ({ items }) => (
  <div className="s5-legend">
    {items.map(({ color, label, dashed }) => (
      <span key={label} style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <span style={{ width: 16, height: 2, background: color, display: "inline-block", flexShrink: 0, ...(dashed ? { borderBottom: `2px dashed ${color}` } : {}) }} />
        {label}
      </span>
    ))}
  </div>
);

/* ─── Main component ──────────────────────────────────────────── */
export default function SectionFive() {
  const [expanded,      setExpanded]      = useState(null);
  const [activeRow,     setActiveRow]     = useState(null);
  const [rateChartData, setRateChartData] = useState([]);
  const scrollToTop = useScrollToTop(); // eslint-disable-line
  const width = useWindowWidth();

  const isMobile = width < 480;
  const isSmall  = width < 640;

  // Responsive chart heights
  const h = {
    sm:  isMobile ? 170 : isSmall ? 200 : 220,
    md:  isMobile ? 190 : isSmall ? 220 : 260,
    lg:  isMobile ? 210 : isSmall ? 260 : 310,
  };

  // Recharts axis props
  const tick   = { fontSize: isMobile ? 9 : 11, fill: C.text };
  const yLeft  = isMobile ? 0 : 8;
  const xRight = isMobile ? 6 : 20;
  const dotR   = isMobile ? 2 : 3;
  const refFs  = isMobile ? 9 : 11;
  const yWidth = isMobile ? 50 : 80;

  useEffect(() => {
    Reer().then(data => setRateChartData(data.formattedData.reverse()));
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <div id="measure-what-matters" className="s5-wrap">
        <div className="s5-inner">

          {/* Header */}
          <div className="s5-header-row">
            <div className="s5-header-line" />
            <span className="s5-header-num">05</span>
            <div className="s5-header-line" />
          </div>

          <article className="s5-article">

            {/* Intro */}
            <section>
              <small style={{ color: "#E89B3A", fontSize: "clamp(9px,2.5vw,11px)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Measure what matters
              </small>
              <h2 className="s5-page-title">
                The ruler was built for production.<br />
                <em style={{ color: "#D9534F" }}>...Nigeria needs one built for people.</em>
              </h2>
              <p className="s5-prose" style={{ marginTop: "0.75rem" }}>
                GDP per capita measures one thing: how much an economy produces, divided evenly across its population. But Nigeria's economy does not divide evenly. A handful of oil-rich elites, a booming Lagos tech class, and several hundred million people scraping by on under two dollars a day are all folded into that single number. The average, in this case, is a lie of arithmetic.
              </p>
            </section>

            {/* Sub-heading */}
            <section>
              <p className="s5-prose">
                Four metrics — <strong><em>the Gini coefficient, the Human Development Index, the Multidimensional Poverty Index, and median household income</em></strong> do what GDP cannot: they look at distribution, deprivation, and lived experience. Below, each is explained before the data is shown.
              </p>
            </section>

            {/* Metric cards */}
            <section>
              <div className="s5-metric-grid">
                {metricCards.map((c, i) => {
                  const open = expanded === i;
                  return (
                    <div
                      key={i}
                      className="s5-metric-card"
                      onClick={() => setExpanded(open ? null : i)}
                      style={{
                        border: `1px solid ${open ? c.color : "transparent"}`,
                        borderRight: `4px solid ${c.color}`,
                        outline: open ? `2px solid ${c.color}` : "none",
                        outlineOffset: 1,
                      }}
                    >
                      <p className="s5-metric-label">{c.label}</p>
                      <p className="s5-metric-value" style={{ color: c.color }}>{c.value}</p>
                      <p className="s5-metric-sub">{c.sub}</p>
                      {open && (
                        <p className="s5-metric-explain" style={{ borderTop: `0.5px solid ${c.color}40` }}>
                          {c.explain}
                        </p>
                      )}
                      <p className="s5-metric-hint">{open ? "Tap to collapse" : "Tap for explanation"}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Metrics table */}
            <SectionCard topColor="#22c55e">
              <h3 className="s5-section-title">Nine metrics. One country. A very different story.</h3>
              <p className="s5-prose" style={{ color: C.muted }}>
                The table below places GDP per capita alongside every metric that tells a fuller truth. The divergence between column three and four is where Nigeria's development challenge lives.
              </p>
              <div className="s5-table-wrap">
                <table className="s5-table">
                  <thead>
                    <tr style={{ borderBottom: "1.5px solid #22c55e" }}>
                      {["Metric", "What it measures", "Nigeria score", "What it reveals"].map(h => (
                        <th key={h} className="s5-th">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row, i) => (
                      <tr
                        key={i}
                        onMouseEnter={() => setActiveRow(i)}
                        onMouseLeave={() => setActiveRow(null)}
                        style={{
                          borderBottom: `0.5px solid ${C.muted}`,
                          background: activeRow === i ? "rgba(240,237,230,0.04)" : "transparent",
                          transition: "background 0.1s",
                        }}
                      >
                        <td className="s5-td" data-label="Metric" style={{ fontWeight: 500 }}>{row.metric}</td>
                        <td className="s5-td" data-label="What it measures">{row.measures}</td>
                        <td className="s5-td" data-label="Nigeria score">
                          <span style={{ display: "inline-block", fontSize: "clamp(9px,2.5vw,11px)", fontWeight: 500, padding: "2px 7px", borderRadius: 5, whiteSpace: "nowrap", ...badge[row.severity] }}>
                            {row.score}
                          </span>
                        </td>
                        <td className="s5-td" data-label="What it reveals">{row.reveals}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>

            {/* Rankings + Income gap */}
            <SectionCard topColor="#F59E0B">
              <h3 className="s5-section-title">Where Nigeria ranks — and where it should</h3>
              <p className="s5-prose">
                Nigeria ranks 178th by GDP per capita and 164th by human development. It does slightly better on health and education than income alone predicts, yet still sits near the bottom on both.
              </p>
              <ResponsiveContainer width="100%" height={h.sm}>
                <BarChart data={rankGapData} layout="vertical" margin={{ left: yLeft, right: xRight, top: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#333" />
                  <XAxis type="number" domain={[0, 200]} tick={tick} tickLine={false} axisLine={false} />
                  <YAxis type="category" dataKey="name" tick={tick} width={yWidth} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: "rgba(255,255,255,0.025)" }} content={<CustomTooltip unit=" / 193" />} />
                  <ReferenceLine x={100} stroke={C.blue} strokeDasharray="4 3" label={{ value: "Rank 100", fill: C.blue, fontSize: refFs, position: "top" }} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {rankGapData.map((e, i) => <rect key={i} fill={e.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="s5-source-note">
                Sources: IMF 2025 · UNDP HDR 2025 · World Bank HCI 2020 · OPHI MPI 2024 · Higher bar = lower ranking.
              </p>

              <h3 className="s5-section-title" style={{ marginTop: "1.75rem" }}>GDP per capita vs. what the typical family earns</h3>
              <p className="s5-prose">
                GDP divides total output equally across all citizens. Median income asks what the person in the middle actually earns. The 4.5× gap reveals who the "average" really describes.
              </p>
              <Pullquote
                text="If Bill Gates walks into a bar, everyone in the bar becomes a millionaire — on average."
                source="Classic statistics illustration of how averages mislead"
              />
              <div className="s5-income-labels">
                <span>$2,500 = ₦3.2M (GDP p.c.)</span>
                <span>$480 = ₦650k (Median)</span>
              </div>
              <ResponsiveContainer width="100%" height={h.sm}>
                <BarChart data={incomeGapData} margin={{ left: yLeft, right: xRight, top: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                  <XAxis dataKey="label" tick={tick} axisLine={false} tickLine={false} />
                  <YAxis tick={tick} axisLine={false} tickLine={false} tickFormatter={v => `$${(v / 1000).toFixed(0)}k`} />
                  <Tooltip cursor={{ fill: "rgba(255,255,255,0.025)" }} content={<CustomTooltip unit=" USD/yr" />} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {incomeGapData.map((e, i) => <rect key={i} fill={e.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </SectionCard>

            {/* Inflation */}
            <SectionCard topColor="#22c55e">
              <h3 className="s5-section-title">What inflation means — and how Nigerians feel it</h3>
              <p className="s5-prose">
                Inflation is the rate at which prices rise. At 10%, something that cost ₦1,000 last year costs ₦1,100 today. Nigeria's headline inflation reached 33% in 2024. Food inflation hit 40%. For families spending 60–70% of income on food, this is not a statistic — it is a daily crisis.
              </p>
              <p className="s5-prose">
                The REER (Real Effective Exchange Rate) adjusts the naira against trading-partner currencies, stripping out inflation differentials. A falling REER means imported goods — medicine, industrial equipment — grow more expensive even before raw devaluation.
              </p>

              <div className="s5-pill-row">
                {nigeriaEconomicHighlights.map((s, i) => (
                  <div key={i} className="s5-pill" style={{ background: s.bg }}>
                    <p className="s5-pill-label" style={{ color: s.color }}>{s.label}</p>
                    <p className="s5-pill-val"   style={{ color: s.color }}>{s.val}</p>
                  </div>
                ))}
              </div>

              <p className="s5-chart-label">Headline CPI vs. food inflation (2019–2024)</p>
              <ResponsiveContainer width="100%" height={h.md}>
                <LineChart data={nigeriaInflationData} margin={{ left: yLeft, right: xRight, top: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="year" tick={tick} axisLine={false} tickLine={false} interval={2} />
                  <YAxis tick={tick} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} domain={[0, 50]} />
                  <Tooltip content={<CustomTooltip unit="%" />} />
                  <ReferenceLine y={33} stroke={C.amber} strokeDasharray="4 3" label={{ value: "2025 CPI", fill: C.amber, fontSize: refFs }} />
                  <Line type="monotone" dataKey="cpi"  name="Headline CPI"   stroke={C.amberMd} strokeWidth={2} dot={{ r: dotR, fill: C.amberMd }} />
                  <Line type="monotone" dataKey="food" name="Food inflation" stroke={C.coral}   strokeWidth={2} dot={{ r: dotR, fill: C.coral }}   strokeDasharray="5 3" />
                </LineChart>
              </ResponsiveContainer>
              <Legend2 items={[
                { color: C.amberMd, label: "Headline CPI" },
                { color: C.coral,   label: "Food inflation", dashed: true },
              ]} />

              <h3 className="s5-section-title" style={{ marginTop: "1.75rem" }}>How currency collapse feels from the inside</h3>
              <p className="s5-prose">
                In June 2023, Nigeria floated the naira. Within months the rate collapsed from ~₦460 to over ₦1,500 per dollar — a direct import-price shock exceeding 200%.
              </p>
              <p className="s5-chart-label">Naira/USD official rate (₦ per $1)</p>
              <ResponsiveContainer width="100%" height={h.sm}>
                <LineChart data={nairaRateHistory} margin={{ left: yLeft, right: xRight, top: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="date" tick={tick} axisLine={false} tickLine={false} interval={isMobile ? 14 : 6} />
                  <YAxis tick={tick} axisLine={false} tickLine={false} tickFormatter={v => `₦${(v / 1000).toFixed(0)}k`} />
                  <Tooltip content={<CustomTooltip unit=" ₦/$1" />} />
                  <ReferenceLine x="Jun 2023" stroke={C.red} strokeDasharray="4 3" ifOverflow="extendDomain" label={{ value: "Float", fill: C.red, fontSize: refFs }}  />
                  <Line type="monotone" dataKey="rate" name="Naira/USD" stroke={C.red} dot={false} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>

              <p className="s5-prose" style={{ marginTop: "1.25rem" }}>
                The REER compounds this further. Even if the naira stabilises nominally, if Nigerian inflation remains higher than trading partners', purchasing power abroad keeps eroding even when headlines suggest a "recovery."
              </p>
              <ResponsiveContainer width="100%" height={h.sm}>
                <AreaChart data={rateChartData} margin={{ left: yLeft, right: xRight, top: 5, bottom: 5 }}>
                  <defs>
                    <linearGradient id="nairaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor={C.red} stopOpacity={0.7} />
                      <stop offset="100%" stopColor={C.red} stopOpacity={0.2} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="date" tick={tick} axisLine={false} tickLine={false} interval={isMobile ? 4 : 3} />
                  <YAxis tick={tick} axisLine={false} tickLine={false} tickFormatter={v => v.toFixed(1)} domain={["auto", "auto"]} />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine x="2023" stroke={C.red} strokeDasharray="4 3" label={{ value: "Float", fill: C.red, fontSize: refFs }} />
                  <Area type="monotone" dataKey="value" stroke={C.red} fill="url(#nairaGradient)" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </SectionCard>

            {/* Radar / Peers */}
            <SectionCard topColor="#F59E0B">
              <h3 className="s5-section-title">Nigeria vs. Comparable Economies: radar view</h3>
              <p className="s5-prose">
                Charted against a peer average (Ghana, Kenya, Côte d'Ivoire, Senegal), Nigeria's GDP Per Capita PPP looks competitive — but on every human metric it trails. Scored 0–100; higher is better.
              </p>
              <ResponsiveContainer width="100%" height={h.lg}>
                <RadarChart
                  data={radarData}
                  margin={{ top: 10, right: isMobile ? 16 : 40, bottom: 10, left: isMobile ? 16 : 40 }}
                >
                  <PolarGrid stroke="#444" />
                  <PolarAngleAxis dataKey="metric" tick={{ fontSize: isMobile ? 8 : 11, fill: C.text }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: isMobile ? 7 : 10, fill: C.muted }} axisLine={false} />
                  <Radar name="Nigeria"  dataKey="nigeria" stroke={C.coral}  fill={C.coral}  fillOpacity={0.18} strokeWidth={2} />
                  <Radar name="Peer avg" dataKey="peerAvg" stroke={C.tealMd} fill={C.tealMd} fillOpacity={0.12} strokeWidth={2} strokeDasharray="5 3" />
                  <Tooltip content={<CustomTooltip unit="/100" />} />
                </RadarChart>
              </ResponsiveContainer>
              <Legend2 items={[
                { color: C.coral,  label: "Nigeria" },
                { color: C.tealMd, label: "Peer avg (Ghana, Kenya, Côte d'Ivoire, Senegal)", dashed: true },
              ]} />

              <h3 className="s5-section-title" style={{ marginTop: "1.75rem", fontSize: "clamp(0.95rem, 4.5vw, 1.15rem)" }}>The number is not the country</h3>
              <p className="s5-prose">
                Nigeria's GDP Per Capita rank of 186th flatters. Its HDI rank of 164th, Gini score of 35.1, ~63% multidimensional poverty rate, and median income of ~$490/year — these are not footnotes to the GDP story. They are the story.
              </p>
              <Pullquote
                text="We were promised that growth would lift all boats. In Nigeria, it has lifted yachts and left the rest waiting on a broken jetty."
                source="— Composite of recurring commentary in Nigerian civil society reports, 2023–2024"
              />
              <p className="s5-prose">
                When the naira lost 70% of its value in a single year and food prices climbed 40%, what did GDP per capita actually measure? It measured transactions — oil revenues and Lagos real estate deals. Not hunger, school dropout rates, or families choosing between medicine and meals.
              </p>
              <p className="s5-prose">
                Any economy looks entirely different depending on which ruler you use. GDP per capita is calibrated for production. The Gini, HDI, MPI, median income, and real food inflation are calibrated for people. Until policymakers reach for all of them together, the people living in that gap will remain invisible.
              </p>
            </SectionCard>

            {/* Key takeaways */}
            <section>
              <div className="s5-card" style={{ borderLeft: "4px solid #D9534F" }}>
                <p style={{ fontSize: "clamp(9px,2.5vw,11px)", fontWeight: 500, color: C.muted, margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                  Key takeaways
                </p>
                {keyTakeaways.map((t, i) => (
                  <div key={i} className="s5-takeaway-row">
                    <span className="s5-badge-num">{i + 1}</span>
                    <p className="s5-takeaway-text">{t}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Sources */}
            <section>
              <div className="s5-card" style={{ borderTop: "4px solid #F59E0B" }}>
                <h3 style={{ fontSize: "clamp(9px,2.5vw,11px)", fontWeight: 600, color: C.muted, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Sources
                </h3>
                <div style={{ fontSize: "clamp(10px,2.5vw,11px)", color: C.muted, lineHeight: 1.7 }}>{sources}</div>
              </div>
            </section>

          </article>
        </div>
      </div>
    </>
  );
}