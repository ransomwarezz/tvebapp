self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker: Active');
});

self.addEventListener('fetch', (e) => {
  console.log('Service Worker: Fetch');
});
