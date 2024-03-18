"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Button from "@/app/_components/common/Button";
import DisabledButton from "@/app/_components/common/DisabledButton";
import Steps from "@/app/_components/common/Steps";
import InputBox from "@/app/_components/common/InputBox";

export default function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

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
          <Link href="/signup">
            <Image
              src="/assets/icons/back-arrow.svg"
              width={24}
              height={24}
              alt="logo"
            />
          </Link>
        </div>
        <div className="w-full mt-[20px] mb-[29px] px-4">
          <Steps step={3} num={2} />
        </div>
        <div className="flex flex-col px-4 items-start w-full h-full">
          <div className="text-[22px] font-bold">기본 정보를 입력해주세요</div>
          <div className="mt-[21px] mb-[8px]">이메일</div>
          <InputBox
            value={id}
            setValue={setId}
            placeholder="아이디(이메일)"
            validate={validateId(id)}
            max={25}
          />
          <div className="mt-[26px] mb-[8px]">비밀번호</div>
          <InputBox
            value={password}
            setValue={setPassword}
            placeholder="비밀번호"
            validate={validatePassword(password)}
            type="password"
            max={16}
          />
        </div>
        <div className="w-full px-4 mb-[34px]">
          {validateId(id) && validatePassword(password) ? (
            <Link href="/signup3">
              <Button text="다음" />
            </Link>
          ) : (
            <DisabledButton text="다음" />
          )}
        </div>
      </div>
    </div>
  );
}
