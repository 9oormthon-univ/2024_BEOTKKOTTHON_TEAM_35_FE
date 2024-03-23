"use client";

import Image from "next/image";
import Link from "next/link";

import KakaoButton from "@/app/_components/common/KakaoButton";
import BorderButton from "@/app/_components/common/BorderButton";

export default function Login() {
  return (
    <div>
      <div className="flex flex-col content-center items-center w-full h-full">
        <div className="relative flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#FCFCFF]">
          <div className="object-cover flex flex-col px-4 items-center justify-center w-full h-full py-2">
            <Image
              src="/assets/icons/mainlogo_blue.svg"
              width={144}
              height={63}
              alt="logo"
            />
          </div>
          <div className="absolute bottom-0 grid px-4 w-full gap-3.5 mb-14">
            <KakaoButton />
            <Link href="/login">
              <BorderButton text="이메일 로그인" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
