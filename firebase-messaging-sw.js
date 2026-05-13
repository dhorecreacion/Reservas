importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCpzP_bzoMafbdCa-rdal3s6u7W8mjxqTM",
  authDomain: "reservasum-ae0a2.firebaseapp.com",
  projectId: "reservasum-ae0a2",
  storageBucket: "reservasum-ae0a2.firebasestorage.app",
  messagingSenderId: "163440079653",
  appId: "1:163440079653:web:bd572e4b7c4db2889260cc",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/logo-dho.png'
  });
});
