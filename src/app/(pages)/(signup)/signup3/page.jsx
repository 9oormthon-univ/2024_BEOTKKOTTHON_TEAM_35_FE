"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import { useRecoilState } from "recoil";
// atom 추가

import Button from "@/app/_components/common/Button";
import DisabledButton from "@/app/_components/common/DisabledButton";
import Steps from "@/app/_components/common/Steps";
import InputBox from "@/app/_components/common/InputBox";

export default function SignUp3() {
  const [name, setName] = useState("");
  const router = useRouter();

  const validateName = (name) => {
    const koreanRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/;
    return koreanRegex.test(name) && name.length > 1;
  };

  const params = useSearchParams();
  const id = params.get("id");
  const password1 = params.get("password");
  const password2 = params.get("password2");

  const onSubmit = useCallback(() => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register`,
        {
          nickname: name,
          email: id,
          password1: password1,
          password2: password2,
          point: 0,
          flagNotification: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        localStorage.removeItem("key");
        localStorage.setItem("key", token);
        if (window.Android) {
          window.Android.showToastMessage(name + "님, 환영합니다!");
        }
        router.push("/signup4");
      })
      .catch((err) => {
        console.error(err);
        // handle error
      });
  }, [name]);

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
            placeholder="닉네임(2-5글자)"
            validate={validateName(name)}
            max={5}
          />
          {name && !validateName(name) && (
            <div>
              <div className="w-full pt-[8px] text-[#FF4B4B] text-[11px]">
                한글 닉네임만 가능해요. (2-5자)
              </div>
            </div>
          )}
        </div>
        <div className="w-full px-4 mb-[34px]">
          {validateName(name) ? (
            <Button text="확인" onClick={onSubmit} />
          ) : (
            <DisabledButton text="확인" />
          )}
        </div>
      </div>
    </div>
  );
}
