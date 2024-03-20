"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import InputBox from "@/app/_components/common/InputBox";
import Button from "@/app/_components/common/Button";
import DisabledButton from "@/app/_components/common/DisabledButton";
import KakaoButton from "@/app/_components/common/KakaoButton";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);

  const validateId = (id) => {
    // 이메일 정규식 확인
    const emailPattern =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    return emailPattern.test(id);
  };

  const validatePassword = (password) => {
    // 비밀번호 길이 확인
    return password.length >= 8 && password.length <= 16;
  };

  const clickAutoLogin = () => {
    setAutoLogin(!autoLogin);
  };

  const handleLogin = () => {
    if (validateId(id) && validatePassword(password)) {
      console.log("ID:", id);
      console.log("Password:", password);
    } else {
      console.error("아이디/ 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="flex flex-col content-center items-center w-full h-full">
      <div className="flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#FCFCFF]">
        <div className="top-0 mt-[28px] flex flex-col w-full justify-center items-start h-[36px] px-4">
          <Link href="/first">
            <Image
              src="/assets/icons/back-arrow.svg"
              width={24}
              height={24}
              alt="logo"
            />
          </Link>
        </div>
        <div className="w-full mt-[26px] mb-[37px] px-4 text-[22px] font-bold">
          로그인
        </div>
        <div className="flex flex-col px-4 items-start w-full h-full">
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
          <div className="w-full mt-[33px]">
            {validateId(id) && validatePassword(password) ? (
              <Link href="/home">
                <Button text="로그인" onClick={handleLogin} />
              </Link>
            ) : (
              <DisabledButton text="로그인" />
            )}
            <div className="flex justify-between mt-5 text-xs text-[#72787F]">
              <div className="flex gap-5">
                <div>아이디 찾기</div>
                <div>비밀번호 찾기</div>
              </div>
              <Link href="/signup">
                <div className="text-[#26282B]">회원가입</div>
              </Link>
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