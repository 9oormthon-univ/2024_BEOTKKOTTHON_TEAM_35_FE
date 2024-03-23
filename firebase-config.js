// // src/firebaseConfig.js

// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', async () => {
//     try {
//       const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     } catch (err) {
//       console.error('ServiceWorker registration failed: ', err);
//     }
//   });
// }

// const firebaseConfig = {
//   apiKey: "AIzaSyDYLj_hBuwQJ1Y189MOsh3g6Rl-4_EqyA0",
//   authDomain: "donbunny-2a61f.firebaseapp.com",
//   projectId: "donbunny-2a61f",
//   storageBucket: "donbunny-2a61f.appspot.com",
//   messagingSenderId: "16323922929",
//   appId: "1:16323922929:web:0f424f6b8dbef0bfca9250",
//   measurementId: "G-KDEG7WEE5F"
// };

// // Firebase 앱 초기화
// const FBapp = initializeApp(firebaseConfig);
// const messaging = getMessaging(FBapp);

// // 클라이언트 토큰 발급 받기
// export const onGetToken = () => {
//   getToken(messaging, {
//     vapidKey: "BAZlwJx5qG2smmqoETNC_I7cldUsJRlnP04sE0ob9emlA-bN58fr8dXqDj_OvYbYtShJPI9uZPP4D7sbFxxSt54"
//   })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log("발급 받은 client 토큰 : " + currentToken);
//         localStorage.setItem('clientToken', currentToken);
//       } else {
//         console.log("토큰 발급 실패");
//       }
//     })
//     .catch((err) => {
//       console.log("토큰 발급 에러 발생 : ", err);
//     });
// };

// // 포그라운드 메시지 수신
// onMessage(messaging, (payload) => {
//   console.log("Message received. ", payload);
//   // ...
// });
