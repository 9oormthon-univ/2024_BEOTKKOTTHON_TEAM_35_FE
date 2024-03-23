"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense } from "react"; // Suspense import 추가


  export default function KakaoLogin() {

  
    return (<Suspense fallback={<div>Loading...</div>}>
        <KakaoCallback />
    </Suspense>);
  };


const KakaoCallback = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const kakaoAuthCode = searchParams.get("code");

  const [accessToken, setAccessToken] = useState();
  const [userData, setUserData] = useState();

  // console.log("code", kakaoAuthCode);

  const [nickname, setNickName] = useState("");
  const [profile, setProfile] = useState("");
  const [jwtToken, setJwtToken] = useState("");
  const [oauthProvider, setOauthProvider] = useState("");

  const data = { code: kakaoAuthCode };

  const handleGetToken = async () => {

    var check = 0;

    axios
      .post(`https://kauth.kakao.com/oauth/token`, null, {
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
        params: {
          grant_type: "authorization_code",
          client_id: "81f5b25088e795a87ccb0b836d0a1298",
          redirect_uri: `${process.env.NEXT_PUBLIC_REDIRECT_URI}`,
          code: kakaoAuthCode
        }
      })
      .then(function (response) {
        console.log("response11");
        // console.log(response.data.access_token);
        setAccessToken(response.data.access_token);
        axios.post('https://kapi.kakao.com/v2/user/me', null, {
          headers: { "Authorization": `Bearer ${response.data.access_token}` },
        }).then(function (response) {
          console.log("check")
          console.log(check)
          console.log(response);

          axios
            .post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register`, {
              nickname: response.data.kakao_account.profile.nickname,
              email: "",
              password: "",
              point: 0,
              flagNotification: true,
              oauthProvider: "kakao"
            })
            .then((response) => {
              console.log("success!!!!", response);
              router.push("/signup4");
            })
            .catch((error) => {
              console.error(error);
            });
        }).catch(function (error) {
          console.log("error222")
          console.log(error);
        });
      })
      .catch(function (error) {
        console.log("error11");
      });
  };


  useEffect(() => {
    if (kakaoAuthCode) {
      handleGetToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (<div className="flex flex-col content-center items-center w-full h-full">
    <div className="flex flex-col justify-center content-center items-center w-full max-w-[500px] h-screen bg-[#FCFCFF]">

      <div className="flex flex-row mx-auto h-[50vh] md:h-[60vh] justify-center items-center">
        <div className="w-40 h-40 rounded-full animate-spin 
                                    border-2 border-solid border-blue-500 border-t-transparent"></div>
      </div>

    </div>

  </div>)
}


