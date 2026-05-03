importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDUOiMyesZVf67UaPOZGTRudpsMaQ07CKI",
  authDomain: "joudapp-5687c.firebaseapp.com",
  databaseURL: "https://joudapp-5687c-default-rtdb.firebaseio.com",
  projectId: "joudapp-5687c",
  storageBucket: "joudapp-5687c.firebasestorage.app",
  messagingSenderId: "811463495565",
  appId: "1:811463495565:web:70fb8c8f722d777586b7c4",
  measurementId: "G-06EK1YCBKQ"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('وصل إشعار وأنت برا التطبيق:', payload);
});