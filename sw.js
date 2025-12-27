self.addEventListener("push", function (event) {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "icon-192.png",
    tag: "delivery-update",
    renotify: true,
  });
});

// Questo serve per gestire le notifiche inviate dall'app stessa
self.addEventListener("message", function (event) {
  if (event.data && event.data.type === "SHOW_NOTIFICATION") {
    self.registration.showNotification(event.data.title, {
      body: event.data.body,
      icon: "icon-192.png",
      tag: "delivery-update",
      renotify: true,
      badge: "icon-192.png",
    });
  }
});
