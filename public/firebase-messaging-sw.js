importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.5.0/firebase-messaging-compat.js');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:"AIzaSyDo8n8Ec8MSWD88lq8qmXZ5U8i7mvAfDJU",
    authDomain:"osifyai-ffdce.firebaseapp.com",
    projectId:"osifyai-ffdce",
    storageBucket:"osifyai-ffdce.firebasestorage.app",
    messagingSenderId:"859732346003",
    appId:"1:859732346003:web:559e1fe03ce37f9a0f3966",
    measurementId:"G-W42RNZBTLQ",
    vapidKey:"BBHUYyWR1MS39jL2d3SW1Ihf8NV7THaKypFLodwW4m1i5m3vOMlnd217HR_BvegrCTEXovTXfbae_CSYmxejYxU",
};

firebase.initializeApp(firebaseConfig);

class CustomPushEvent extends Event {
    constructor(data) {
        super('push');

        Object.assign(this, data);
        this.custom = true;
    }
}

/*
 * Overrides push notification data, to avoid having 'notification' key and firebase blocking
 * the message handler from being called
 */
self.addEventListener('push', (e) => {
    // Skip if event is our own custom event
    if (e.custom) return;

    // Kep old event data to override
    const oldData = e.data;

    // Create a new event to dispatch, pull values from notification key and put it in data key,
    // and then remove notification key
    const newEvent = new CustomPushEvent({
        data: {
            ehheh: oldData.json(),
            json() {
                const newData = oldData.json();
                newData.data = {
                    ...newData.data,
                    ...newData.notification,
                };
                delete newData.notification;
                return newData;
            },
        },
        waitUntil: e.waitUntil.bind(e),
    });

    // Stop event propagation
    e.stopImmediatePropagation();

    // Dispatch the new wrapped event
    dispatchEvent(newEvent);
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    console.log('received');
    const { title, body,image, ...restPayload } = payload.data;
    const notificationOptions = {
        body,
        icon: image,
        data: restPayload,
    };
    return self.registration.showNotification(title, notificationOptions);
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    console.log('Notification clicked');
    const data = JSON.parse(event?.notification?.data?.data);
    if (!data) return;

    event.waitUntil(
        self.clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then(clients => {
                // Handle pathname navigation
                if (data?.pathname && data?.link) {
                    const absoluteUrl = new URL(data.pathname, self.location.origin).href;
                    const client = clients.find(c => c.url === absoluteUrl);
                    if (client) {
                        client.navigate(data?.pathname);
                        return client.focus();
                    } else {
                        return self.clients.openWindow(data?.link);
                    }
                }else{
                    // Fallback to opening the app root
                    return self.clients.openWindow(self.location.origin);
                }
            })
            .catch(error => {
                console.error('Error handling click:', error);
                self.clients.openWindow(self.location.origin);
            })
    );
});
