"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/app/_components/common/Button";

export default function SignUp4() {
  return (
    <div className="flex flex-col content-center items-center w-full h-full">
      <div className="flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#FCFCFF]">
        <div className="flex flex-col px-4 items-start w-full h-full">
          <div className="mt-[36px] text-[28px] font-bold">
            대학생,
            <br /> 사회 초년생의
            <br /> 첫번째 금융 가이드
            <br />
            <br /> 돈버니에 오신 것을
            <br />
            환영해요!
          </div>
          <div className="flex w-full h-full justify-end items-end mb-8 ml-[15px]">
            <Image
              src="/assets/images/main-character.svg"
              width={250}
              height={250}
              alt="character"
            />
          </div>
        </div>
        <div className="w-full px-4 mb-[34px]">
          <a href="/home">
            <Button text="시작하기" />
          </a>
        </div>
      </div>
    </div>
  );
}
