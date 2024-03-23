"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Button from "@/app/_components/common/Button";
import DisabledButton from "@/app/_components/common/DisabledButton";
import Steps from "@/app/_components/common/Steps";
import AgreeButton from "@/app/_components/common/AgreeButton";

export default function SignUp() {
  const [agreeAll, setAgreeAll] = useState(false);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);
  const [agree4, setAgree4] = useState(false);
  const [agree5, setAgree5] = useState(false);

  const clickAgreeAll = () => {
    if (agreeAll) {
      setAgreeAll(false);
      setAgree1(false);
      setAgree2(false);
      setAgree3(false);
      setAgree4(false);
      setAgree5(false);
    } else {
      setAgreeAll(true);
      setAgree1(true);
      setAgree2(true);
      setAgree3(true);
      setAgree4(true);
      setAgree5(true);
    }
  };

  const clickAgree1 = () => {
    setAgree1(!agree1);
  };
  const clickAgree2 = () => {
    setAgree2(!agree2);
  };
  const clickAgree3 = () => {
    setAgree3(!agree3);
  };
  const clickAgree4 = () => {
    setAgree4(!agree4);
  };
  const clickAgree5 = () => {
    setAgree5(!agree5);
  };

  return (
    <div className="flex flex-col content-center items-center w-full h-full">
      <div className="flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#FCFCFF]">
        <div className="top-0 mt-[28px] flex flex-col w-full justify-center items-start h-[36px] px-4">
          <a href="/login">
            <Image
              src="/assets/icons/back-arrow.svg"
              width={24}
              height={24}
              alt="logo"
            />
          </a>
        </div>
        <div className="w-full mt-[20px] mb-[29px] px-4">
          <Steps step={3} num={1} />
        </div>
        <div className="flex flex-col px-4 items-start w-full h-full">
          <div className="text-[22px] font-bold">약관 동의</div>
          <div className="mt-[18px] text-[14px] font-bold text-[#72787F]">
            돈버니 서비스를 이용하려면 필수 이용약관 동의가 필요해요
          </div>
          <div className="w-full mt-[78px]">
            <div
              className="w-full flex h-[44px] items-center mb-[8px]"
              onClick={clickAgreeAll}
            >
              <Image
                src={
                  agreeAll
                    ? "/assets/icons/check-circle.svg"
                    : "/assets/icons/check-circle-disable.svg"
                }
                width={20}
                height={20}
                alt="check"
              />
              <div className="ml-[12px] text-base">
                모두 동의(선택 이용약관 포함)
              </div>
            </div>
            <AgreeButton
              text="[필수] 만 14세 이상"
              agree={agree1}
              onClick={clickAgree1}
            />
            <AgreeButton
              num={1}
              text="[필수] 이용약관 동의"
              agree={agree2}
              onClick={clickAgree2}
              next={true}
            />
            <AgreeButton
              num={2}
              text="[필수] 개인정보 처리방침 동의"
              agree={agree3}
              onClick={clickAgree3}
              next={true}
            />
            <AgreeButton
              num={3}
              text="[선택] 광고성 정보 및 마케팅 활용 동의"
              agree={agree4}
              onClick={clickAgree4}
              next={true}
            />
            <AgreeButton
              text="[선택] 광고성 및 마케팅 정보 수신동의"
              agree={agree5}
              onClick={clickAgree5}
            />
          </div>
        </div>
        <div className="w-full px-4 mb-[34px]">
          {agree1 && agree2 && agree3 ? (
            <a href="/signup2">
              <Button text="동의하고 시작하기" />
            </a>
          ) : (
            <DisabledButton text="동의하고 시작하기" />
          )}
        </div>
      </div>
    </div>
  );
}
