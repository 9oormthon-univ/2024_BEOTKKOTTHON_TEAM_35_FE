// /public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');

// 이곳에 아까 위에서 앱 등록할때 받은 'firebaseConfig' 값을 넣어주세요.
const config = {
  apiKey: "AIzaSyDYLj_hBuwQJ1Y189MOsh3g6Rl-4_EqyA0",
  authDomain: "donbunny-2a61f.firebaseapp.com",
  projectId: "donbunny-2a61f",
  storageBucket: "donbunny-2a61f.appspot.com",
  messagingSenderId: "16323922929",
  appId: "1:16323922929:web:0f424f6b8dbef0bfca9250",
  measurementId: "G-KDEG7WEE5F",
};

// Initialize Firebase
firebase.initializeApp(config);

const messaging = firebase.messaging();