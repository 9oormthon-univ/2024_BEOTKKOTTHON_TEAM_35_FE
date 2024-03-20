"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import ProgressBar from "@/app/_components/quiz/ProgressBar";
import QuizCard from "@/app/_components/quiz/QuizCard";

export default function QuizID() {
  const router = useRouter();

  return (
    <div className="flex flex-col content-center items-center w-full h-full">
      <div className="flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#4E60FF]">
        <div className="fixed w-full bg-[#4E60FF]">
          <div className="mt-[28px] flex w-full justify-between items-center h-[36px] px-4">
            <Image
              src="/assets/icons/back-arrow-white.svg"
              width={11}
              height={11}
              alt="back"
            />
            <div className="ml-[7px] text-[16px] text-[#FCFCFF]">금융개념</div>
            <Image
              src="/assets/icons/close-white.svg"
              width={18}
              height={18}
              alt="close"
              onClick={() => router.back()}
            />
          </div>
        </div>
        <div className="w-full mt-[99px] px-4">
          <ProgressBar />
        </div>
        <div className="w-full mt-[25px]">
          <QuizCard />
        </div>
      </div>
    </div>
  );
}
