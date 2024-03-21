"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import StageBox from "@/app/_components/quiz/StageBox";
import LockStageBox from "@/app/_components/quiz/LockStageBox";

export default function QuizStage() {
  const params = useSearchParams();
  const title = params.get("title");

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
            <div className="text-[16px] text-[#000]">학습하기</div>
            <div className="size-[20px]" />
          </div>
        </div>
        <div className="w-full mt-[99px] px-4 text-[22px] font-bold">
          {title}
        </div>
        <div className="w-full mt-[17px] px-4 text-[16px]">
          한 개의 스테이지를 완료할 때마다 포인트를 뽑을 수 있어요{" "}
        </div>
        <div className="mt-[30px] flex flex-col gap-[12px] w-full px-4">
          <StageBox num={1} />
          <StageBox num={2} />
          <LockStageBox num={3} />
        </div>
      </div>
    </div>
  );
}
