"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { apiRequest } from "@/api/axios";
import { API_URL } from "@/api/urls";

const KakaoCallback = () => {
  const searchParams = useSearchParams();
  const kakaoAuthCode = searchParams.get("code");

  console.log("code", kakaoAuthCode);

  const [nickname, setNickName] = useState("");
  const [profile, setProfile] = useState("");
  const [jwtToken, setJwtToken] = useState("");
  const [oauthProvider, setOauthProvider] = useState("");

  const data = { code: kakaoAuthCode };

  const handleGetToken = async () => {
    //
    axios
      .post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/kakao/login`, null, {
        params: data,
        headers: "application/json",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // .then((response) => {
    //   setUser(response.data.result);
    //   if (response.data.result.isFirst) {
    //     console.log("kakao");
    //     // navigate("/signup");
    //   } else {
    //     localStorage.setItem("key", token);
    //     navigate("/home");
    //   }
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  };

  useEffect(() => {
    if (kakaoAuthCode) {
      handleGetToken();
    }
  }, [kakaoAuthCode]);

  return <div>Loading</div>;
};

export default KakaoCallback;
