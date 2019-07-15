import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
// Project Settings => Add Firebase to your web app
  messagingSenderId: "336076762981"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
// Project Settings => Cloud Messaging => Web Push certificates
  'BFBEu6L05fheuOEMf66pqAh2ozgnjy22J5P9L4WWg7_cmfz5Wzgp3QHarn8YA4wTw0b0CzC9wVCYiY-SwaBFT2o'
);
export { messaging };
