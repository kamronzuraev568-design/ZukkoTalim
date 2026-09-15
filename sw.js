const CACHE_NAME='zukkotalim-v1';
self.addEventListener('install',function(e){
self.skipWaiting();
});
self.addEventListener('activate',function(e){
e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch',function(e){
// pass-through network fetch (no offline caching to avoid stale app versions)
});
self.addEventListener('notificationclick',function(e){
e.notification.close();
e.waitUntil(clients.matchAll({type:'window'}).then(function(list){
for(let i=0;i<list.length;i++){
if('focus' in list[i])return list[i].focus();
}
if(clients.openWindow)return clients.openWindow('/ZukkoTalim/');
}));
});
