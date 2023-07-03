```javascript
// Service Worker for H2OTracker

self.addEventListener('install', function(event) {
  console.log('Service Worker: Installed');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker: Activated');
});

self.addEventListener('push', function(event) {
  const title = 'H2OTracker';
  const options = {
    body: 'Reminder: Drink Water!',
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Send reminder every hour
setInterval(() => {
  self.registration.showNotification('H2OTracker', {
    body: 'Reminder: Drink Water!',
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  });
}, 3600000);
```