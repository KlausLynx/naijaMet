import { useEffect, useState, useCallback } from "react";
import { modalContent } from "../data/ModalData";
import {
  BarChart, Bar, CartesianGrid, XAxis, YAxis,
  ResponsiveContainer, Tooltip,
} from "recharts";
import { formattedIncomeData, formartFigures } from "../hooks/usemetrics";

/* ─── Custom Tooltip ──────────────────────────────────────────── */
function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  const colors = { gdpPerCapita: "#F59E0B", medianIncome: "#F0EDE6", top1Percent: "#22c55e" };
  const names  = { gdpPerCapita: "GDP / Capita", medianIncome: "Median Income", top1Percent: "Top 1%" };

  return (
    <div style={{
      backgroundColor: "#1a1a1a",
      border: "1px solid rgba(245,158,11,0.25)",
      borderRadius: 12,
      padding: "10px 14px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      minWidth: 160,
    }}>
      <p style={{ color: "#929292", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
        {label}
      </p>
      {payload.map(entry => (
        <div key={entry.dataKey} style={{ display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 4 }}>
          <span style={{ color: colors[entry.dataKey] || entry.fill, fontSize: 12 }}>
            {names[entry.dataKey] || entry.dataKey}
          </span>
          <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>
            {formartFigures ? formartFigures(entry.value) : `$${entry.value}`}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─── Chart Legend ────────────────────────────────────────────── */
function ChartLegend() {
  const items = [
    { color: "#F59E0B", label: "GDP Per Capita" },
    { color: "#F0EDE6", label: "Median Income" },
    { color: "#22c55e", label: "Top 1%" },
  ];
  return (
    <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 6 }}>
      {items.map(item => (
        <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: item.color, display: "inline-block", flexShrink: 0 }} />
          <span style={{ color: "#929292", fontSize: 11, letterSpacing: "0.05em" }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Modal ───────────────────────────────────────────────────── */
function Modal({ view, onClose }) {
  const content = modalContent[view];

  useEffect(() => {
    const handler = e => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

    if (!content) return null;
  return (
    <>
      <style>{`
        .modal-inner {
          border-radius: 20px 20px 0 0;
          align-self: flex-end;
        }
        @media (min-width: 640px) {
          .modal-outer {
            align-items: center !important;
          }
          .modal-inner {
            border-radius: 20px !important;
            align-self: auto !important;
            margin: auto;
          }
        }
        .modal-inner::-webkit-scrollbar { width: 4px; }
        .modal-inner::-webkit-scrollbar-track { background: transparent; }
        .modal-inner::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 99px; }
      `}</style>

      <div
        className="modal-outer"
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 50,
          display: "flex", alignItems: "flex-end", justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.82)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          className="modal-inner"
          onClick={e => e.stopPropagation()}
          style={{
            width: "100%",
            maxWidth: 560,
            backgroundColor: "#111",
            border: `1px solid ${content.accent}28`,
            boxShadow: `0 0 100px ${content.accent}14, 0 -2px 60px rgba(0,0,0,0.8)`,
            maxHeight: "92dvh",
            overflowY: "auto",
          }}
        >
          {/* Drag handle */}
          <div style={{ display: "flex", justifyContent: "center", paddingTop: 14, paddingBottom: 6 }}>
            <div style={{ width: 36, height: 4, borderRadius: 99, backgroundColor: "rgba(255,255,255,0.1)" }} />
          </div>

          {/* Accent rule */}
          <div style={{ height: 2, background: `linear-gradient(90deg, ${content.accent}, transparent)`, margin: "0 24px", borderRadius: 99 }} />

          <div style={{ padding: "18px 22px 32px" }}>

            {/* Top row: tag + close X */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                color: content.accent,
                backgroundColor: `${content.accent}18`,
                border: `1px solid ${content.accent}44`,
                borderRadius: 99, padding: "4px 12px",
              }}>
                {content.tag}
              </span>

              <button
                onClick={onClose}
                aria-label="Close"
                style={{
                  width: 32, height: 32, borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#aaa", fontSize: 14, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.14)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#aaa"; }}
              >
                ✕
              </button>
            </div>

            {/* Title */}
            <div style={{ marginBottom: 18 }}>
              <h2 style={{ fontSize: "clamp(1.35rem, 5vw, 1.85rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, margin: 0 }}>
                {content.title}
              </h2>
              <p style={{ color: "#929292", fontSize: 13, marginTop: 5, marginBottom: 0 }}>{content.subtitle}</p>
            </div>

            {/* Hero stat */}
            <div style={{
              borderRadius: 14, padding: "14px 18px", marginBottom: 20,
              display: "flex", alignItems: "center", gap: 16,
              backgroundColor: `${content.accent}0d`,
              border: `1px solid ${content.accent}22`,
            }}>
              <span style={{
                fontSize: "clamp(2rem, 9vw, 3rem)",
                fontWeight: 900, color: content.accent,
                fontVariantNumeric: "tabular-nums", lineHeight: 1, flexShrink: 0,
              }}>
                {content.stat}
              </span>
              <span style={{ fontSize: 13, color: "#c0bdb8", lineHeight: 1.5 }}>{content.statLabel}</span>
            </div>

            {/* Body */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {content.body.map((para, i) => (
                <p key={i} style={{ color: "#D4CFC8", fontSize: 14, lineHeight: 1.8, margin: 0 }}>{para}</p>
              ))}
            </div>

            {/* Bottom close CTA */}
            <button
              onClick={onClose}
              style={{
                marginTop: 26, width: "100%", padding: "13px 0",
                borderRadius: 12, fontSize: 13, fontWeight: 700, letterSpacing: "0.06em",
                color: content.accent,
                border: `1px solid ${content.accent}50`,
                backgroundColor: `${content.accent}0a`,
                cursor: "pointer", transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = `${content.accent}1a`}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = `${content.accent}0a`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Main Component ──────────────────────────────────────────── */
export default function SectionOne() {
  const [activeView, setActiveView] = useState(null);

  const AverageIndicatior = [
    { label: "Gdp Per Capita" },
    { label: "Top One Person" },
    { label: "Median Income" },
  ];

  const DATA         = formattedIncomeData;
  const GDP_FILL     = "#F59E0B";
  const MEDIAN_FILL  = "#F0EDE6";
  const TOP_ONE_FILL = "#22c55e";

  const closeModal = useCallback(() => setActiveView(null), []);

  useEffect(() => {
    document.body.style.overflow = activeView ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeView]);

  return (
    <div>
      <div className="mx-4 sm:mx-10 mt-10 pb-10 flex flex-col">

        {/* Section divider */}
        <div className="flex w-full items-center">
          <div className="w-full h-0.5 bg-[#F59E0B] rounded-t-lg" />
          <div className="text-2xl text-green-500 mx-6 sm:mx-10 shrink-0">01</div>
          <div className="w-full h-0.5 bg-[#F59E0B] rounded-t-lg" />
        </div>

        <article className="space-y-10 mt-8">

          {/* ── Intro ── */}
          <section>
            <small className="text-[#E89B3A] text-xs font-semibold tracking-widest uppercase">The Averages Problem</small>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 leading-tight">
              Why the number they give you is <em className="text-[#D9534F] not-italic">lying</em>
            </h2>
            <p className="text-[#F0EDE6] mt-3 text-sm sm:text-base leading-relaxed max-w-2xl">
              On GDP per capita, median income, and the statistical sleight-of-hand that makes Nigeria look richer than almost everyone living in it
            </p>
          </section>

          {/* ── Sub-heading ── */}
          <section>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              Nigeria earns $2,200 a year — except almost nobody does
            </h3>
            <p className="text-[#F0EDE6] leading-relaxed text-sm">
              <span className="underline decoration-dotted decoration-2 decoration-amber-400 underline-offset-8">
                GDP Per Capita: A Misleading Metric for Nigeria
              </span>
              <br /><br />
              Nigeria's GDP per capita of ~$2,200, cited by the World Bank and media. It is mathematically accurate
              but practically meaningless for most Nigerians. Because it divides total national income evenly across
              the population, it gets severely distorted by a small wealthy elite.{" "}
              <strong><em>The real picture: </em></strong>
              the median Nigerian earns closer to $490 a year — less than a quarter of the headline figure.
              For 200+ million people, the average tells almost none of their story.
            </p>
          </section>

          {/* ── Bar Chart ── */}
          <section>
            <p style={{ color: "#929292", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
              Income comparison by country
            </p>

            <ChartLegend />

            {/* Responsive height: shorter on mobile, taller on desktop */}
            <div style={{ width: "100%", height: "clamp(180px, 45vw, 280px)" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={DATA}
                  margin={{ top: 8, right: 10, left: -10, bottom: 0 }}
                  barCategoryGap="30%"
                  barGap={2}
                >
                  <defs>
                    <linearGradient id="gdpGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor={GDP_FILL}     stopOpacity={1} />
                      <stop offset="100%" stopColor={GDP_FILL}     stopOpacity={0.3} />
                    </linearGradient>
                    <linearGradient id="medianGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor={MEDIAN_FILL}  stopOpacity={1} />
                      <stop offset="100%" stopColor={MEDIAN_FILL}  stopOpacity={0.3} />
                    </linearGradient>
                    <linearGradient id="top1Gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%"   stopColor={TOP_ONE_FILL} stopOpacity={1} />
                      <stop offset="100%" stopColor={TOP_ONE_FILL} stopOpacity={0.3} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid stroke="#a0a0a0" strokeDasharray="4 2" strokeOpacity={0.12} vertical={false} />

                  <XAxis
                    dataKey="country"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#929292", fontSize: window.innerWidth < 640 ? 9 : 11 }}
                    tickFormatter={(value) =>
                      window.innerWidth < 640
                        ? value.length > 4 ? value.slice(0, 3) + "…" : value
                        : value
                    }
                    interval={0}
                  />

                  <YAxis
                    yAxisId="left"
                    orientation="left"
                    tickFormatter={formartFigures}
                    tick={{ fontSize: 10, fill: "#929292" }}
                    tickLine={false}
                    axisLine={false}
                    width={44}
                  />

                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tickFormatter={formartFigures}
                    domain={["auto", "auto"]}
                    tick={{ fontSize: 10, fill: TOP_ONE_FILL }}
                    tickLine={false}
                    axisLine={false}
                    width={44}
                  />

                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.025)" }} />

                  <Bar dataKey="gdpPerCapita" yAxisId="left"  radius={[5, 5, 0, 0]} fill="url(#gdpGradient)" />
                  <Bar dataKey="medianIncome" yAxisId="left"  radius={[5, 5, 0, 0]} fill="url(#medianGradient)" />
                  <Bar dataKey="top1Percent"  yAxisId="right" radius={[5, 5, 0, 0]} fill="url(#top1Gradient)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p style={{ color: "#929292", fontSize: 10, marginTop: 8, textAlign: "center", fontStyle: "italic" }}>
              Left axis: GDP &amp; Median (USD) · Right axis: Top 1% (USD)
            </p>
          </section>

          {/* ── Pull quote 1 ── */}
          <section>
            <div
              className="rounded-2xl p-5 sm:p-6"
              style={{
                borderLeft: "4px solid #F59E0B",
                background: "linear-gradient(135deg, rgba(245,158,11,0.06) 0%, transparent 70%)",
              }}
            >
              <span className="text-5xl sm:text-6xl leading-none text-[#F0EDE6] opacity-40 font-serif">&ldquo;</span>
              <p className="text-[#F0EDE6] text-sm sm:text-base italic leading-relaxed -mt-2">
                The median Nigerian earns far, far less than $2,200. The average is mathematically real — but economically meaningless.
              </p>
              <p className="text-[#929292] text-xs mt-3 tracking-widest uppercase">The Averages Problem — Section 1</p>
            </div>

            <div className="mt-6 space-y-4">
              <p className="text-[#F0EDE6] text-sm leading-relaxed">
                This gap exists because a thin layer of extremely high earners — oil executives, politicians, businesspeople — pull
                the national mean upward. The average pools the yacht and the canoe and reports that everyone owns a sailboat.
                The median, by contrast, finds the person exactly in the middle of the income ladder and asks what they earn.
                In Nigeria, that person earns roughly one-fifth of what GDP per capita suggests.
              </p>
              <div
                className="rounded-xl px-5 py-4 text-sm"
                style={{
                  backgroundColor: "rgba(245,158,11,0.07)",
                  border: "1px solid rgba(245,158,11,0.2)",
                  color: "#F0EDE6",
                }}
              >
                ✦ A tiny group of super-rich people inflate Nigeria's "average" income so much that it makes the country look{" "}
                <strong>5× wealthier</strong> than most Nigerians actually are.
              </div>
            </div>
          </section>

          {/* ── Pull quote 2 ── */}
          <section>
            <div
              className="rounded-2xl p-5 sm:p-6"
              style={{
                borderTop: "4px solid #D9534F",
                background: "linear-gradient(135deg, rgba(217,83,79,0.06) 0%, transparent 70%)",
              }}
            >
              <span className="text-5xl sm:text-6xl leading-none text-[#F0EDE6] opacity-40 font-serif">&ldquo;</span>
              <p className="text-white font-semibold text-sm sm:text-base -mt-2 mb-3">Why this matters beyond statistics</p>
              <p className="text-[#F0EDE6] text-sm leading-relaxed">
                A poverty programme calibrated to "$2,200 per person" is sized for a Nigeria that does not exist.
                Infrastructure investment justified by "average income growth" may be building for the 1%, not the 99%.
                Every policy decision that begins with the average is, silently, a decision that ignores the median.
              </p>
            </div>
          </section>

          {/* ── Indicator buttons ── */}
          <section>
            <p className="text-center text-xs text-[#929292] tracking-widest uppercase mb-5">Explore the data</p>

            {/* Stack on mobile, row on tablet+ */}
            <div className="flex flex-col sm:flex-row gap-3">
              {AverageIndicatior.map(av => {
                const accent = modalContent[av.label]?.accent || "#F59E0B";
                return (
                  <button
                    key={av.label}
                    onClick={() => setActiveView(av.label)}
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "14px 16px",
                      borderRadius: 14,
                      cursor: "pointer",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: `1px solid ${accent}33`,
                      boxShadow: "none",
                      transition: "transform 0.25s, background 0.25s, box-shadow 0.25s",
                      textAlign: "left",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = `${accent}12`;
                      e.currentTarget.style.boxShadow = `0 4px 24px ${accent}22`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Color pip */}
                    <div style={{ width: 4, height: 40, borderRadius: 99, backgroundColor: accent, flexShrink: 0 }} />

                    <div>
                      <p style={{ color: "#929292", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>
                        {av.label}
                      </p>
                      <p style={{ color: `${accent}99`, fontSize: 12, marginTop: 2, marginBottom: 0 }}>
                        Learn more →
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

        </article>
      </div>

      {activeView && <Modal view={activeView} onClose={closeModal} />}
    </div>
  );
}