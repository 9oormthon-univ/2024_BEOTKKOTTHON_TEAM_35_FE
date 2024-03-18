"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Button from "@/app/_components/common/Button";
import DisabledButton from "@/app/_components/common/DisabledButton";
import Steps from "@/app/_components/common/Steps";
import InputBox from "@/app/_components/common/InputBox";

export default function SignUp3() {
  const [name, setName] = useState("");

  const validateName = (name) => {
    const koreanRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/;
    return koreanRegex.test(name) && name.length > 1;
  };

  return (
    <div className="flex flex-col content-center items-center w-full h-full">
      <div className="flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#FCFCFF]">
        <div className="top-0 mt-[28px] flex flex-col w-full justify-center items-start h-[36px] px-4">
          <Link href="/signup2">
            <Image
              src="/assets/icons/back-arrow.svg"
              width={24}
              height={24}
              alt="logo"
            />
          </Link>
        </div>
        <div className="w-full mt-[20px] mb-[29px] px-4">
          <Steps step={3} num={3} />
        </div>
        <div className="flex flex-col px-4 items-start w-full h-full">
          <div className="text-[22px] font-bold">닉네임을 설정해주세요</div>
          <div className="mt-[40px] mb-[89px] text-[14px]">
            서비스에서 사용할 닉네임을 설정해주세요
          </div>
          <InputBox
            value={name}
            setValue={setName}
            placeholder="닉네임(최대 5글자)"
            max={5}
          />
        </div>
        <div className="w-full px-4 mb-[34px]">
          {validateName(name) ? (
            <Link href="/signup4">
              <Button text="확인" />
            </Link>
          ) : (
            <DisabledButton text="확인" />
          )}
        </div>
      </div>
    </div>
  );
}
