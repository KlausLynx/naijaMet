
const cache = {};
const LOCAL_STORAGE_KEY = "local_Data"; 
const TWO_WEEKS = 14 * 24 * 60 * 60 * 1000;
const WEB_CACHE_NAME = "web_cache";
const WEB_CACHE_KEY = "web_cache_key";

const data = {
    api1: { name: "John Doe", age: 30 },
    api2: { name: "Jane Doe", age: 25 }
}

function saveToCache(main_data) {
    if (Object.keys(cache).length === 0) {
        for (const key in main_data) {
            cache[key] = main_data[key];
        }
        cache.savedAt = Date.now();
        return cache;
    } else {
        return JSON.stringify(cache, null, 2); 
    }
}

console.log(saveToCache(data));

function getFromCache(cache_data) {
    if (Object.keys(cache_data).length === 0) {
        return getFromLocalStorage(); 
    } else if (Date.now() - cache_data.savedAt < TWO_WEEKS) {
        return JSON.stringify(cache_data, null, 2);
    } else {
        for (const key in cache) {
            delete cache[key];
        }
        return "Cache has expired";
    }
}

console.log(getFromCache(cache));

function saveToLocalStorage(local_Data) {
    const toSave = { value: local_Data, savedAt: Date.now() };
    const savedToLocalStorage = JSON.stringify(toSave);
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, savedToLocalStorage); 
        return "Saved to Local Storage";
    } catch(err) {
        return err;
    }
}

console.log(saveToLocalStorage(data));

function getFromLocalStorage() {
    try {
        const item = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (!item) {
            return "Local Storage is Empty — try WebCache";
        }
        const { savedAt, ...value } = JSON.parse(item);
        if (Date.now() - savedAt < TWO_WEEKS) {
            return value;    
        } else {
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            return "Cache has expired";
        }
    } catch(err) {
        return err;
    }
}

console.log(getFromLocalStorage());

async function saveToWebCache(data) {
    try {
        const webcache = await caches.open(WEB_CACHE_NAME);
        const toSave = {value: data, savedAt: Date.now()};
        const savedToWebCache = JSON.stringify(toSave);
        await webcache.put(WEB_CACHE_KEY, new Response(savedToWebCache));
        return "Saved to Web Cache";
    } catch(err) {
        return err;
    }

}

async function getFromWebCachr(data){
    try {
        const webCache = await caches.open(WEB_CACHE_NAME);
        if(webCache.has(WEB_CACHE_KEY)) {
            const response = await webCache.get(WEB_CACHE_KEY);
            const { savedAt, ...value } = JSON.parse(await response.text());
            if (Date.now() - savedAt < TWO_WEEKS) {
                return value;
            } else {
                webCache.delete(WEB_CACHE_KEY);
                return "Cache has expired";
            }
        }
    } catch(err) {
        return err; 
    }
}