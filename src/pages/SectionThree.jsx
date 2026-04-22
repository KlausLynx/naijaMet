import { useState, useEffect } from "react";
import { useScrollToTop } from "../utils/ScrolltoTop";
import  { STATS, OUTER_DATA, INNER_DATA, EXPLAINERS}  from "../data/Section3Data"
import Section3Cards from "../components/cards/Section3Cards"
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts"

// ─── CUSTOM TOOLTIP ───────────────────────────────────────────────────────────

const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    const d = payload[0].payload;
    if (!d.description) return null;
    return (
        <div
        style={{
            background: "#fff",
            border: "0.5px solid #ccc",
            borderRadius: 8,
            padding: "10px 14px",
            maxWidth: 220,
            fontSize: 12,
            lineHeight: 1.6,
            color: "#555",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
        >
        <div
            style={{
            fontWeight: 600,
            fontSize: 13,
            color: "#111",
            marginBottom: 4,
            }}
        >
            {d.name}
        </div>
        <div style={{ marginBottom: 6 }}>{d.description}</div>
        {d.keyFact && (
            <div
            style={{
                fontSize: 11,
                fontWeight: 600,
                color: d.fill,
                borderTop: "0.5px solid #eee",
                paddingTop: 6,
                marginTop: 4,
            }}
            >
            {d.keyFact}
            </div>
        )}
        </div>
    );
};

// ─── RESPONSIVE PIE RADII HOOK ────────────────────────────────────────────────

function useChartDimensions() {
    const [dims, setDims] = useState({ outer: [105, 150], inner: [52, 95], height: 380 });

    useEffect(() => {
        function update() {
            const w = window.innerWidth;
            if (w < 400) {
                setDims({ outer: [55, 82], inner: [22, 46], height: 260 });
            } else if (w < 640) {
                setDims({ outer: [68, 100], inner: [28, 58], height: 300 });
            } else if (w < 768) {
                setDims({ outer: [85, 120], inner: [38, 72], height: 340 });
            } else {
                setDims({ outer: [105, 150], inner: [52, 95], height: 400 });
            }
        }
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return dims;
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function SectionThree() {
    const [loading, setLoading] = useState(false); //eslint-disable-line
    const { outer, inner, height } = useChartDimensions();

    const scrollTOTop = useScrollToTop();

    if (loading) scrollTOTop();

    const combined = [...STATS.map(s => s.source), ...OUTER_DATA.map(d => d.source), ...INNER_DATA.map(d => d.source)];

    return (
        <div id="the-hidden-half">
            <div className="mx-3 sm:mx-6 lg:mx-10 mt-8 sm:mt-10 pb-10 flex flex-col">

                {/* ── Header ── */}
                <div className="flex w-full items-center">
                    <div className="w-full h-0.5 bg-[#F59E0B]" />
                    <div className="text-xl sm:text-2xl text-green-500 mx-4 sm:mx-6 shrink-0">03</div>
                    <div className="w-full h-0.5 bg-[#F59E0B]" />
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-4 mb-2 text-center leading-tight" style={{ color: "#c0bdb8" }}>
                    The Hidden Half:{" "}
                    <span className="text-[#F59E0B]">
                        <i>The Invinsible Economy</i>
                    </span>
                </h1>
                <p className="text-xs sm:text-sm text-gray-400 mb-8 sm:mb-10 text-center px-2">
                    Exploring the Unseen Economic Landscape of Nigeria
                </p>

                {/* ── Content ── */}
                <article className="text-gray-300 text-base sm:text-lg leading-relaxed mx-auto w-full">

                    <blockquote className="mb-8 sm:mb-10 border-l-4 border-[#F59E0B] pl-3 sm:pl-4 italic text-gray-400 rounded-l-lg text-base sm:text-xl">
                        "The formal, priced, counted economy is mostly occupied by the rich and corporations. The informal economy belongs to everyone else."
                    </blockquote>

                    {/* ── Stat Cards ── */}
                    <section className="mb-8 sm:mb-10">
                        <Section3Cards data={STATS} />
                    </section>

                    {/* ── Chart Panel ── */}
                    <section className="mb-8 sm:mb-10">
                        <div
                            className="rounded-2xl p-4 sm:p-5 lg:p-6"
                            style={{
                                borderTop: "4px solid #22c55e",
                                background: "linear-gradient(135deg, rgba(217,83,79,0.06) 0%, transparent 70%)",
                            }}
                        >
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold mb-2 sm:mb-3 text-center leading-snug" style={{ color: "#c0bdb8" }}>
                                The Invisible Economy: Informality's Massive Share of Nigeria's Economic Activity
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-400 lg:text-center mb-4 sm:mb-6 px-1">
                                Estimates suggest that 57.4% of Nigeria's economic activity is informal and uncounted in official GDP figures. This includes everything from street vending and subsistence farming to unpaid care work.
                            </p>

                            {/* Chart */}
                            <div className="w-full" style={{ height }}>
                                <small className="block text-gray-500 text-xs mb-1">
                                    Share of economic activity — Nigeria (est. composite, 2024)
                                </small>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                                        {/* OUTER RING */}
                                        <Pie
                                            data={OUTER_DATA}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={outer[0]}
                                            outerRadius={outer[1]}
                                            startAngle={90}
                                            endAngle={-270}
                                            dataKey="value"
                                            stroke="none"
                                        />
                                        {/* INNER RING */}
                                        <Pie
                                            data={INNER_DATA}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={inner[0]}
                                            outerRadius={inner[1]}
                                            startAngle={90}
                                            endAngle={-270}
                                            dataKey="value"
                                            stroke="none"
                                        />
                                        <Tooltip content={<CustomTooltip />} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Hint + Ring labels */}
                            <div className="mt-2 text-center font-extrabold text-xs text-gray-500">
                                Hover each ring segment for full detail
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 mt-3">
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <span
                                        style={{
                                            width: 24,
                                            height: 8,
                                            borderRadius: 2,
                                            background: "#3C3489",
                                            display: "inline-block",
                                            flexShrink: 0,
                                        }}
                                    />
                                    Outer ring = formal GDP
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <span
                                        style={{
                                            width: 24,
                                            height: 8,
                                            borderRadius: 2,
                                            background: "#1D9E75",
                                            display: "inline-block",
                                            flexShrink: 0,
                                        }}
                                    />
                                    Inner ring = uncounted economy
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Explainer Cards ── */}
                    <section>
                        <div
                            className="rounded-2xl p-4 sm:p-5 lg:p-6"
                            style={{
                                borderTop: "4px solid #D9534F",
                                background: "linear-gradient(135deg, rgba(60,52,137,0.06) 0%, transparent 70%)",
                            }}
                        >
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold mb-2 sm:mb-3 text-center leading-snug" style={{ color: "#c0bdb8" }}>
                                Why the Invisible Economy Matters: The Human Stories Behind the Numbers
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-400 lg:text-center mb-4 sm:mb-6 px-1">
                                The invisible economy is not just a statistical gap — it's the lived reality of millions of Nigerians. From market traders and artisans to unpaid caregivers and subsistence farmers, this hidden half sustains livelihoods, communities, and the broader economy, yet remains unrecognized in policy and measurement.
                            </p>

                            <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                {EXPLAINERS.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col text-[#F0EDE6] border-b-4 rounded-b-lg gap-2 sm:gap-3 p-3 sm:p-4"
                                        style={{ borderBottomColor: item.accentColor }}
                                    >
                                        <h3 className="text-xs sm:text-sm font-bold mb-1" style={{ color: item.color }}>
                                            {item.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-[#F0EDE6]">
                                            {item.body}
                                        </p>
                                        <small className="text-xs text-[#F0EDE6] opacity-70">
                                            {item.source}
                                        </small>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── Sources ── */}
                    <section className="mt-4 sm:mt-6">
                        <div
                            className="rounded-2xl p-4 sm:p-5 lg:p-6"
                            style={{
                                borderTop: "4px solid #F59E0B",
                                background: "linear-gradient(135deg, rgba(217,83,79,0.06) 0%, transparent 70%)",
                            }}
                        >
                            <h3 className="text-xs sm:text-sm font-semibold text-gray-500 mt-2 mb-1">Sources</h3>
                            <div className="text-xs text-gray-400 space-y-1">
                                {/* {combined.map((source, index) => (
                                    <p className="leading-snug" key={index}>{source}</p>
                                ))} */}
                                    {combined}
                            </div>
                        </div>                       
                    </section>
                </article>
            </div>
        </div>
    );
}