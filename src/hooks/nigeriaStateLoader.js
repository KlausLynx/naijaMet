const CACHE_KEY = "nigeria_geojson";
const CACHE_EXPIRY_KEY = "nigeria_geojson_expiry";
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

export async function loadNigeriaGeoJSON() {

  // 1. Check if we have cached data that hasn't expired
  const cached = localStorage.getItem(CACHE_KEY);
  const expiry = localStorage.getItem(CACHE_EXPIRY_KEY);

  if (cached && expiry && Date.now() < Number(expiry)) {
    console.log("✅ Loaded from cache");
    return JSON.parse(cached);  // return immediately, no fetch needed
  }

  // 2. No cache (or expired) — fetch from GitHub
  const res = await fetch(
    "https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/nigeria_state_boundaries.geojson"
  );

  if (!res.ok) throw new Error("Failed to load GeoJSON");

  const data = await res.json();

  function normalize(name) {
    return name.replace(" State", "").replace(".", "").trim();
  }

  data.features = data.features.map((f) => {
    const rawName =
      f.properties.shapeName ||
      f.properties.admin1Name ||
      f.properties.NAME_1 ||
      f.properties.NAME ||
      f.properties.name ||
      "";

    if (!rawName) console.log("⚠️ Missing name for feature:", f.properties);

    return {
      ...f,
      properties: {
        ...f.properties,
        name: normalize(rawName) || "Unknown",
      },
    };
  });

  // 3. Save to localStorage with an expiry timestamp
  localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  localStorage.setItem(CACHE_EXPIRY_KEY, String(Date.now() + CACHE_DURATION));
  console.log("📦 Fetched and cached");

  return data;
}