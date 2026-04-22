import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { loadNigeriaGeoJSON } from "../hooks/nigeriaStateLoader.js";
import data from "../data/state.json";
import { ResponsiveContainer, CartesianGrid, Area, AreaChart, XAxis, YAxis, Tooltip} from "recharts";
import { sectorsData } from "../hooks/transform_data.js";

const SECTOR_COLORS = {
  agriculturalAdded: "#4ade80",   
  industrialAdded:   "#fb923c",    
  servicesAdded:     "#60a5fa",
  manufacturingAdded: "#a78bfa"
};

const SECTOR_LABELS = {
  agriculturalAdded: "Agriculture",
  industrialAdded:   "Industry",
  servicesAdded:     "Services",
  manufacturingAdded: "Manufacturing"
};

const metrics = [
  "GDP Growth %",
  "Population Growth %",
  "Unemployment Rate %",
  "Infrastructure Score",
  "Inflation",
  "Investment flow",
];

// Colors
const METRICS_COLORS = {
  "GDP Growth %": "#f43f5e",
  "Population Growth %": "#fb923c",
  "Unemployment Rate %": "#facc15",
  "Infrastructure Score": "#22c55e",
  "Inflation": "#60a5fa",
  "Investment flow": "#a78bfa",
};

function getColor(metric) {
  return METRICS_COLORS[metric] || "#22c55e";
}

// ✅ get min & max correctly
function getMetricRange(states, metric) {
  const values = states
    .map((s) => s[metric])
    .filter((v) => v !== undefined && v !== null);

  return {
    min: Math.min(...values),
    max: Math.max(...values),
  };
}

function getColorWithOpacity(metric, value, states) {
  const baseColor = getColor(metric);
  const { min, max } = getMetricRange(states, metric);

  if (value == null || isNaN(value)) return "#ccc";

  // Use log scale for metrics with extreme outliers
  const useLog = metric === "Investment flow";

  let normalized;
  if (useLog) {
    // log scale: compress the huge Lagos outlier
    const logMin = Math.log1p(min);   // log1p = log(1 + x), safe for 0
    const logMax = Math.log1p(max);
    normalized = (Math.log1p(value) - logMin) / (logMax - logMin);
  } else {
    // sqrt for everything else — lifts low values visibly
    normalized = max === min ? 0.5 : (value - min) / (max - min);
    normalized = Math.sqrt(normalized);
  }

  const opacity = 0.15 + normalized * 0.85;

  const r = parseInt(baseColor.slice(1, 3), 16);
  const g = parseInt(baseColor.slice(3, 5), 16);
  const b = parseInt(baseColor.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
export default function SectionTwo() {
  const [geo, setGeo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sector, setSector] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [tooltip, setTooltip] = useState("");
  const [selectedMetric, setSelectedMetric] = useState({
    metric: metrics[0],
    color: getColor(metrics[0]),
  });

  const { pathname } = useLocation();

    useEffect(() => {
      const fetchsectors = async () => {
        const result = await sectorsData()
        console.log(result)
        setSector(result.formattedData.reverse());
      };
      fetchsectors();
    }, [])
    

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await loadNigeriaGeoJSON();
        setGeo(data);
      } catch {
        setError("Failed to load map data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      const id = pathname.replace("/", "");
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [loading, pathname]);

  const state = selectedState
    ? data.states.find((d) => d.state === selectedState)
    : null;

  useEffect(() => {
    console.log("State data updated:", state);
  }, [state]);

  if (loading) return <p>Loading map...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div id="inside-nigeria" className="relative">
      <div className="mx-4 sm:mx-10 mt-10 pb-10 flex flex-col">

        {/* Header */}
        <div className="flex w-full items-center">
          <div className="w-full h-0.5 bg-[#F59E0B]" />
          <div className="text-2xl text-green-500 mx-6">02</div>
          <div className="w-full h-0.5 bg-[#F59E0B]" />
        </div>

        <div
          className={`mt-8 ${
            selectedState ? "grid grid-cols-2 gap-4 sm:gap-10" : ""
          }`}
        >
          <article>
            <section className="mb-4">
              <small className="text-[#E89B3A] text-xs font-semibold uppercase">
                Inside Nigeria
              </small>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                The <em className="text-[#D9534F] not-italic">Map</em>
              </h2>
            </section>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 mb-4">
              {metrics.map((metric) => (
                <button
                  key={metric}
                  style={{ backgroundColor: getColor(metric) }}
                  className="text-white px-3 py-1 rounded text-sm"
                  onClick={() =>
                    setSelectedMetric({
                      metric,
                      color: getColor(metric),
                    })
                  }
                >
                  {metric}
                </button>
              ))}
            </div>

            {/* Map */}
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 3000, center: [8, 9] }}
              style={{ width: "100%", maxHeight: "400px" }}
            >
              <Geographies geography={geo}>
                {({ geographies }) =>
                  geographies.map((g) => {
                    const stateData = data.states.find(
                      (s) => s.state === g.properties.name
                    );

                    const value = stateData
                      ? stateData[selectedMetric.metric]
                      : null;

                    return (
                      <Geography
                        key={g.rsmKey}
                        geography={g}
                        fill={
                          selectedState === g.properties.name
                            ? "#FFFFFF"
                            : getColorWithOpacity(
                                selectedMetric.metric,
                                value,
                                data.states
                              )
                        }
                        onMouseEnter={() => setTooltip(g.properties.name)}
                        onMouseLeave={() => setTooltip("")}
                        onClick={() =>
                          setSelectedState((prev) =>
                            prev === g.properties.name
                              ? null
                              : g.properties.name
                          )
                        }
                        style={{
                          default: { outline: "none" },
                          hover: { fill: "#FFFFFF", outline: "none" },
                          pressed: { fill: "#FFFFFF", outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>

            {/* Legend */}
            <div className="bg-neutral-100 p-2 mt-3 inline-block rounded">
              <span className="text-sm font-semibold text-gray-700">
                {selectedMetric.metric}
              </span>
              <div className="flex mt-1 items-end gap-1">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs text-gray-500">
                    
                  </span>
                  <span
                    className="w-8 h-4 rounded"
                    style={{}}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-400">low</span>
                <span className="text-xs text-gray-400">high</span>
              </div>
            </div>
          </article>

          {/* Side Panel */}
          {selectedState && state && (
            <section className="lg:pt-16 text-white">

              {/* Header */}
              <div className="pb-4 mb-4 border-b border-white/10">
                <div className=" flex justify-between">
                  <h3 className="text-xl font-medium mb-0.5">{selectedState}</h3>
                  
                  {/* Close */}
                  <button onClick={() => setSelectedState(null)}
                    className="px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded transition">
                    ✕ Close
                  </button>
                </div>
                
                <p className="text-xs text-white/50 uppercase tracking-wider">Capital: {state.capital}</p>
                <span className="inline-block mt-2 text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
                  {state.geopolitical_zone}
                </span>
              </div>

              {/* Metric grid */}
              <div className="grid grid-cols-2 gap-px bg-white/10 rounded-lg overflow-hidden mb-4">
                {[
                  { label: "GDP", value: `₦${state.gdp_naira_tn}tn`, sub: `↑ ${state["GDP Growth %"]}% growth`, subColor: "text-emerald-400" },
                  { label: "National Share", value: `${state.pct_nationally}%` },
                  { label: "Population", value: `${state.population_est_mn}mn`, sub: `↑ ${state["Population Growth %"]}% growth`, subColor: "text-emerald-400" },
                  { label: "Unemployment", value: `${state["Unemployment Rate %"]}%`, sub: "Above average", subColor: "text-amber-400" },
                  { label: "Inflation", value: `${state["Inflation"]}%`, sub: "Est. 2024 avg", subColor: "text-amber-400" },
                  { label: "Food Inflation", value: `${state.food_inflation_pct}%`, sub: "High pressure", subColor: "text-red-400" },
                  { label: "Electricity Access", value: `${state.electricity_access_pct}%` },
                  { label: "Infrastructure Score", value: `${state["Infrastructure Score"]}/100`, sub: "Below target", subColor: "text-amber-400" },
                  { label: "Investment flow", value: `$${state["Investment flow"]}mn`, sub: "2024 FDI inflow", subColor: "text-emerald-400" },
                ].map(({ label, value, sub, subColor }) => (
                  <div key={label} className="bg-white/5 p-3" style={{
                    backgroundColor: selectedMetric?.metric?.includes(label)
                      ? selectedMetric.color
                      : "transparent"
                  }}>
                    <p className="text-[10px] text-black font-extrabold uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-lg font-medium leading-tight">{value}</p>
                    {sub && <p className={`text-[11px] mt-0.5 ${subColor}`}>{sub}</p>}
                  </div>
                ))}
              </div>

              {/* Sector breakdown */}
              <div className="mb-4">
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-3">Sector Breakdown (IGR)</p>
                {[
                  { label: "Industry", pct: state.igr_sector.industry_pct, color: "bg-emerald-500" },
                  { label: "Services", pct: state.igr_sector.services_pct, color: "bg-blue-400" },
                  { label: "Agriculture", pct: state.igr_sector.agriculture_pct, color: "bg-green-600" },
                ].map(({ label, pct, color }) => (
                  <div key={label} className="mb-2.5">
                    <div className="flex justify-between text-xs text-white/70 mb-1">
                      <span>{label}</span><span>{pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Debt */}
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-3">Total Debt Position</p>
                {[
                  { label: "Domestic", value: `₦${state.total_debt.domestic_bn_naira}bn`, verified: true },
                  { label: "External", value: `$${state.total_debt.external_mn_usd}mn` },
                  { label: "Total (₦)", value: `₦${state.total_debt.total_naira_bn}bn`, bold: true },
                ].map(({ label, value, verified, bold }) => (
                  <div key={label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0 text-sm">
                    <span className="text-white/50">{label}</span>
                    <span className={bold ? "font-medium text-base" : ""}>
                      {value}
                      {verified && <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Verified</span>}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <p className="mt-4 text-[10px] text-white/30 text-right">Sources: NBS · DMO · NIPC · OPHI · 2024 / Q2</p>

            </section>
          )}
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div className="absolute top-56 left-4 bg-black text-white px-3 py-1 rounded text-sm">
          {tooltip}
        </div>
      )}
      <article className="mx-4 sm:mx-10 pb-10">
        
        <section className="mb-4">
          <div className="rounded-2xl p-5 sm:p-6"style={{
                borderTop: "4px solid #22c55e",
                background: "linear-gradient(135deg, rgba(217,83,79,0.06) 0%, transparent 70%)",
              }}>
            <h2 className="text-2xl font-extrabold mb-3 text-center" style={{ color: "#c0bdb8" }}>
              Nigeria's GDP Composition Breakdown based on Sectors
            </h2>
            <p className="text-sm text-gray-400 lg:text-center">% share of GDP · 1981–2024</p>
          </div>
        </section>

        {/* Legend */}
        <div className="flex gap-4 px-4 mb-2 flex-wrap">
          {Object.entries(SECTOR_LABELS).map(([key, label]) => (
            <div key={key} className="flex items-center gap-1.5">
              <span
                className="w-3 h-3 rounded-full inline-block"
                style={{ backgroundColor: SECTOR_COLORS[key] }}
              />
              <span className="text-xs text-gray-400">{label}</span>
            </div>
          ))}
        </div>

        <section>
          <div style={{ width: "100%", height: "380px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sector} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSector" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={SECTOR_COLORS.agriculturalAdded} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={SECTOR_COLORS.agriculturalAdded} stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorIndustry" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={SECTOR_COLORS.industrialAdded} stopOpacity={0.8}/>
                    <stop offset="5%" stopColor={SECTOR_COLORS.industrialAdded} stopOpacity={0.5}/>
                    <stop offset="95%" stopColor={SECTOR_COLORS.industrialAdded} stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorServices" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={SECTOR_COLORS.servicesAdded} stopOpacity={0.8}/>
                    <stop offset="5%" stopColor={SECTOR_COLORS.servicesAdded} stopOpacity={0.5}/>
                    <stop offset="95%" stopColor={SECTOR_COLORS.servicesAdded} stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorManufacturing" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={SECTOR_COLORS.manufacturingAdded} stopOpacity={0.8}/>
                    <stop offset="5%" stopColor={SECTOR_COLORS.manufacturingAdded} stopOpacity={0.5}/>
                    <stop offset="95%" stopColor={SECTOR_COLORS.manufacturingAdded} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.07)" />
                <XAxis dataKey="date" tick={{ fill: "#888", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#888", fontSize: 12 }} tickLine={false} />
                <Area type="monotone" dataKey="agriculturalAdded" stackId="1" stroke={SECTOR_COLORS.agriculturalAdded} fillOpacity={1} fill="url(#colorSector)" />
                <Area type="monotone" dataKey="industrialAdded" stackId="1" stroke={SECTOR_COLORS.industrialAdded} fillOpacity={1} fill="url(#colorIndustry)" />
                <Area type="monotone" dataKey="servicesAdded" stackId="1" stroke={SECTOR_COLORS.servicesAdded} fillOpacity={1} fill="url(#colorServices)" />
                <Area type="monotone" dataKey="manufacturingAdded" stackId="1" stroke={SECTOR_COLORS.manufacturingAdded} fillOpacity={1} fill="url(#colorManufacturing)" />
                <Tooltip/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Sources */}
        <section className="mt-6">
          <div
              className="rounded-2xl p-5 sm:p-6"
              style={{
                borderTop: "4px solid #F59E0B",
                background: "linear-gradient(135deg, rgba(217,83,79,0.06) 0%, transparent 70%)",
              }}
            >
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mt-4 mb-1">
                Sources
              </h3>
            </div>
            <div className="text-xs text-gray-400 space-y-1">
              {/* {Object.entries(data?._metadata?.sources || {}).map(([key, txt]) => (
                <p className="leading-snug" key={key}>{txt}</p>
              ))} */}
              { Object.entries(data?._metadata.sources) }
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}