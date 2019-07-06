import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
// Project Settings => Add Firebase to your web app
  messagingSenderId: "73231601114"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
// Project Settings => Cloud Messaging => Web Push certificates
  'BF7jpLgm3_1rnsxpjrPHvopV2B2A-txDd1Is909Sf3MQRJHoqDz3AnllWIXelFI9gSSVSTzYeX1voKFizu580kY'
);
export { messaging };
