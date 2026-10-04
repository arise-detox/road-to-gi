const CACHE='road-to-gi-v6';
const ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
const NETWORK_TIMEOUT=3500;
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('road-to-gi-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
// Réseau d'abord pour la page (nouvelle version dès qu'elle est publiée), mais bascule sur le cache
// après 3,5 s : la salle de sport a souvent un réseau faible, l'appli doit s'ouvrir tout de suite.
function networkWithTimeout(request){
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>reject(new Error('timeout')),NETWORK_TIMEOUT);
    fetch(request).then(res=>{clearTimeout(timer);resolve(res)},err=>{clearTimeout(timer);reject(err)});
  });
}
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
  if(req.mode==='navigate'){
    e.respondWith(networkWithTimeout(req).then(res=>{
      if(res.ok){const copy=res.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put('./index.html',copy)));}
      return res;
    }).catch(()=>caches.match('./index.html',{ignoreSearch:true})));
    return;
  }
  e.respondWith(caches.match(req,{ignoreSearch:true}).then(r=>r||fetch(req).then(res=>{
    if(res.ok){const copy=res.clone();e.waitUntil(caches.open(CACHE).then(c=>c.put(req,copy)));}
    return res;
  })));
});
