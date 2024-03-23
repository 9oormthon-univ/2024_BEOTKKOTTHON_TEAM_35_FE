"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userID } from "@/app/_state/user";
import { tk } from "@/app/_state/token";

import InputBox from "@/app/_components/common/InputBox";
import Button from "@/app/_components/common/Button";
import DisabledButton from "@/app/_components/common/DisabledButton";
import KakaoButton from "@/app/_components/common/KakaoButton";

export default function Login() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);
  const [noID, setNoID] = useState(false);
  const [userId, setUserId] = useRecoilState(userID);
  const [token, setToken] = useRecoilState(tk);

  const validateId = (id) => {
    // 이메일 정규식 확인
    const emailPattern =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    return emailPattern.test(id);
  };

  const validatePassword = (password) => {
    // 비밀번호 길이 확인
    const lengthCheck = password.length >= 8 && password.length <= 16;
    // 영어와 숫자 혼합 확인
    const alphanumericCheck = /[a-zA-Z]/.test(password) && /\d/.test(password);
    return lengthCheck && alphanumericCheck;
  };

  const clickAutoLogin = () => {
    setAutoLogin(!autoLogin);
  };

  const handleLogin = () => {
    if (validateId(id) && validatePassword(password)) {
      console.log("ID:", id);
      console.log("Password:", password);
      axios
        .post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`, {
          email: id,
          password: password,
        })
        .then((response) => {
          setToken(response.data.token);
          // localStorage.setItem("token", response.data.token);
          setUserId(response.data.userId);
          router.push("/home");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setNoID(true);
      console.error("존재하지 않는 아이디 입니다.");
    }
  };

  return (
    <div className="flex flex-col content-center items-center w-full h-full">
      <div className="flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#FCFCFF]">
        <div className="top-0 mt-[28px] flex flex-col w-full justify-center items-start h-[36px] px-4">
          <a href="/first">
            <Image
              src="/assets/icons/back-arrow.svg"
              width={24}
              height={24}
              alt="logo"
            />
          </a>
        </div>
        <div className="w-full mt-[26px] mb-[37px] px-4 text-[22px] font-bold">
          로그인
        </div>
        <div className="flex flex-col px-4 items-start w-full h-full">
          <div className="w-full">
            <div className="grid w-full gap-3">
              <InputBox
                value={id}
                setValue={setId}
                placeholder="아이디(이메일)"
                max={25}
                validate={validateId(id)}
              />
              <InputBox
                value={password}
                setValue={setPassword}
                placeholder="비밀번호"
                type="password"
                max={16}
                validate={validatePassword(password)}
              />
            </div>
            <div className="flex flex-col h-[64px] pt-[8px]">
              {noID && (
                <div className="text-[#FF4B4B] text-[11px] mb-[10px] pl-[3px]">
                  존재하지 않는 아이디 입니다.
                </div>
              )}
              <div className="flex items-center w-fit" onClick={clickAutoLogin}>
                <Image
                  src={
                    autoLogin
                      ? "/assets/icons/check-circle.svg"
                      : "/assets/icons/check-circle-disable.svg"
                  }
                  width={20}
                  height={20}
                  alt="check"
                />
                <p
                  className={`ml-[9px] text-sm font-normal ${
                    autoLogin ? "text-[#4e60ff]" : "text-[#9EA4AA]"
                  }`}
                >
                  자동로그인
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            {validateId(id) && validatePassword(password) ? (
              <Button text="로그인" onClick={handleLogin} />
            ) : (
              <DisabledButton text="로그인" />
            )}
            <div className="flex justify-between mt-5 text-xs text-[#72787F]">
              <div className="flex gap-5">
                <div>아이디 찾기</div>
                <div>비밀번호 찾기</div>
              </div>
              <a href="/signup">
                <div className="text-[#26282B]">회원가입</div>
              </a>
            </div>
          </div>
          <div className="relative w-full mt-[70px] h-px bg-[#C9CDD2] mb-[40px]">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/assets/icons/or.svg"
                width={53}
                height={20}
                alt="or"
              />
            </div>
          </div>
          <KakaoButton />
        </div>
      </div>
    </div>
  );
}
