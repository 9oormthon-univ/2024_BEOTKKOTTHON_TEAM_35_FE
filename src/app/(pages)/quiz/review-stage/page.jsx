"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import StageBox from "@/app/_components/quiz/StageBox";
import LockStageBox from "@/app/_components/quiz/LockStageBox";
import ToggleButton from "@/app/_components/common/ToggleButton";

export default function QuizReviewStage() {
  const params = useSearchParams();
  const title = params.get("title");

  const [toggle, setToggle] = useState(true);

  return (
    <div className="flex flex-col content-center items-center w-full h-full">
      <div className="flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#FCFCFF]">
        <div className="fixed w-full bg-[#FCFCFF]">
          <div className="mt-[28px] flex w-full justify-between items-center h-[36px] px-4">
            <Link href="/quiz">
              <Image
                src="/assets/icons/back-arrow.svg"
                width={20}
                height={20}
                alt="back"
              />
            </Link>
            <div className="text-[16px] text-[#000]">복습하기</div>
            <div className="size-[20px]" />
          </div>
        </div>
        <div className="w-full mt-[99px] px-4 text-[22px] font-bold">
          {title}
        </div>
        <div className="flex w-full mt-[17px] px-4 justify-between items-center">
          <div className="text-[16px] text-[#454C53]">오답만 풀기</div>
          <div>
            <ToggleButton status={toggle} />
          </div>
        </div>
        <div className="mt-[30px] flex flex-col gap-[12px] w-full px-4">
          <StageBox num={1} />
          <LockStageBox num={2} />
          <LockStageBox num={3} />
        </div>
      </div>
    </div>
  );
}
