const C="nhankhau-v1",A=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png"],X="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(async c=>{await c.addAll(A);try{await c.put(X,await fetch(X,{mode:"no-cors"}))}catch(_){}}))});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)))});
