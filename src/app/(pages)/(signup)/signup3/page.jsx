"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import { userEmail, userPassword1, userPassword2 } from "@/app/_state/user";

import Button from "@/app/_components/common/Button";
import DisabledButton from "@/app/_components/common/DisabledButton";
import Steps from "@/app/_components/common/Steps";
import InputBox from "@/app/_components/common/InputBox";

export default function SignUp3() {
  const [name, setName] = useState("");
  const router = useRouter();

  const [idr, setIdr] = useRecoilState(userEmail);
  const [passwordr, setPasswordr] = useRecoilState(userPassword1);
  const [password2r, setPassword2r] = useRecoilState(userPassword2);

  console.log("id", idr);
  console.log("password", passwordr);
  console.log("password2", password2r);

  const validateName = (name) => {
    const koreanRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/;
    return koreanRegex.test(name) && name.length > 1;
  };

  const onSubmit = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register`, {
        nickname: name,
        email: idr,
        password: passwordr,
        point: 0,
        flagNotification: true,
        oauthProvider: "email",
      })
      .then((response) => {
        console.log("success!!!!", response);
        router.push("/signup4");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const onSubmit = async () => {
  //   try {
  //     // 서버로 사용자 정보를 등록하기 위해 API를 호출합니다.
  //     const response = await axios.post(
  //       `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register`,
  //       {
  //         nickname: name,
  //         email: idr,
  //         password: passwordr,
  //         point: 0,
  //         flagNotification: true,
  //         oauthProvider: "email",
  //       }
  //       {
  //         headers: {
  //           "Cache-Control": "no-store",
  //           Pragma: "no-store",
  //           Expires: "0",
  //         },
  //       }
  //     );
  //     // API 호출이 성공하면 사용자를 다음 단계로 안내합니다.
  //     console.log(response);
  //     router.push("/signup4");
  //   } catch (error) {
  //     // API 호출 중에 오류가 발생한 경우, 콘솔에 오류를 기록하고 사용자에게 적절한 메시지를 표시합니다.
  //     console.error("등록 중 오류 발생:", error);
  //     // 여기서 오류를 처리하여 사용자에게 적절한 메시지를 표시할 수 있습니다.
  //   }
  // };

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
