export const cache = {};
const LOCAL_STORAGE_KEY = "local_Data"; 
const TWO_WEEKS = 14 * 24 * 60 * 60 * 1000;
const WEB_CACHE_NAME = "web_cache";
const WEB_CACHE_KEY = "web_cache_key";

export function saveToCache(main_data) {
    if (Object.keys(cache).length === 0) {
        cache.data = {}             
        cache.savedAt = Date.now()  

        for (const key in main_data) {
            cache.data[key] = main_data[key]
        }
        return cache
    } else {
        return JSON.stringify(cache, null, 2)
    }
}

export function getFromCache(cache_data) {
    if (Object.keys(cache).length === 0) {
        return getFromLocalStorage(); 
    } else if (Date.now() - cache.savedAt < TWO_WEEKS) {
        return { data: cache.data, savedAt: cache.savedAt }  
    } else {
        for (const key in cache_data) {
            delete cache[key];
        }
        return "Cache has expired";
    }
}

export function saveToLocalStorage(local_Data) {
    const toSave = { value: local_Data, savedAt: Date.now() };
    const savedToLocalStorage = JSON.stringify(toSave);
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, savedToLocalStorage); 
        saveToCache(toSave);
        saveToWebCache(toSave);
        return savedToLocalStorage;
    } catch(err) {
        return err;
    }
}



export function getFromLocalStorage() {
    try {
        const item = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (!item) {
            getFromWebCache();
            return { status: "empty" };
        }
        const { savedAt, value } = JSON.parse(item);
        if (Date.now() - savedAt < TWO_WEEKS) {
            return { status: "ok", value, savedAt };
        } else {
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            return { status: "expired" };
        }
    } catch(err) {
        return { status: "error", error: err };
    }
}


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

async function getFromWebCache(){
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