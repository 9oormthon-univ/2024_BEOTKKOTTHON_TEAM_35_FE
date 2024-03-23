"use client";

import axios from "axios";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { useRecoilState } from "recoil";
import { Scholarship, financialProduct } from "../_state/products";

export default function Splash() {
  const router = useRouter();

  const [getSData, setGetSData] = useRecoilState(Scholarship);
  const [getData, setGetData] = useRecoilState(financialProduct);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/explore");
    }, 2000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onMessageFCM = async () => {
    // 브라우저에 알림 권한을 요청합니다.
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return;

    // 이곳에도 아까 위에서 앱 등록할때 받은 'firebaseConfig' 값을 넣어주세요.
    const firebaseApp = initializeApp({
      apiKey: "AIzaSyDYLj_hBuwQJ1Y189MOsh3g6Rl-4_EqyA0",
      authDomain: "donbunny-2a61f.firebaseapp.com",
      projectId: "donbunny-2a61f",
      storageBucket: "donbunny-2a61f.appspot.com",
      messagingSenderId: "16323922929",
      appId: "1:16323922929:web:0f424f6b8dbef0bfca9250",
    });

    const messaging = getMessaging(firebaseApp);

    // 이곳 vapidKey 값으로 아까 토큰에서 사용한다고 했던 인증서 키 값을 넣어주세요.
    getToken(messaging, {
      vapidKey:
        "BAZlwJx5qG2smmqoETNC_I7cldUsJRlnP04sE0ob9emlA-bN58fr8dXqDj_OvYbYtShJPI9uZPP4D7sbFxxSt54",
    })
      .then((currentToken) => {
        if (currentToken) {
          console.log("발급 받은 client 토큰 : " + currentToken);
        } else {
          console.log("토큰 발급 실패");
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });

    // 메세지가 수신되면 역시 콘솔에 출력합니다.
    onMessage(messaging, (payload) => {
      console.log("토큰 발급 에러 발생 : ", payload);
    });
  };

  useEffect(() => {
    const result1 = async () => {
      axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/scholarship/search`, {
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
        params: {
          keyword: "",
        }
      })
        .then((response) => {
          console.log("scholarship success");
          console.log(response.data);
          setGetSData(response.data.sort(() => Math.random() - 0.5));
        })
        .catch((error) => {
          console.error("scholarship error");
        });
    };
    result1();


    const result3 = async () => {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/search`, {
          keyword: "",
        })
        .then((response) => {
          console.log("product success");
          console.log(response.data);
          setGetData(response.data.sort(() => Math.random() - 0.5));
        })
        .catch((error) => {
          console.error("product error");
        });
    };
    result3();



    onMessageFCM();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="flex flex-col content-center items-center w-full h-full">
        <div className="flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#4e60ff]">
          <div className="flex flex-col px-4 items-center justify-center w-full h-full py-2">
            <Image
              src="/assets/icons/mainlogo_white.svg"
              width={144}
              height={63}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
