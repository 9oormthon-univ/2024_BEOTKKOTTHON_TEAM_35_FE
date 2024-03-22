"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import BottomNav from "@/app/_components/bottom_nav";
import TabsComponent from "@/app/_components/quiz/TabsComponent";
import StudyTabContent from "@/app/_components/quiz/StudyTabContent";
import ReviewTabContent from "@/app/_components/quiz/ReviewTabContent";

// 탭 아이템
const items = [
  {
    title: "학습하기",
    content: (
      <div>
        <StudyTabContent />
      </div>
    ),
  },
  {
    title: "복습하기",
    content: (
      <div>
        <ReviewTabContent />
      </div>
    ),
  },
];

export default function Quiz() {
  return (
    <div className="w-full max-w-[500px] pb-14">
      <div className="flex flex-col content-center items-center w-full h-full">
        <div className="flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#FCFCFF]">
          <div className="pt-[6px] fixed w-full bg-[#FCFCFF]">
            <div className="flex flex-col w-full justify-center items-center h-[36px] px-4">
              <div className="text-[16px]">퀴즈</div>
            </div>
          </div>
          <div className="w-full mt-[22px]">
            <TabsComponent items={items} />
          </div>
          {/* <div className="flex flex-col px-4 items-start w-full h-full">
        <div className="mt-[21px] w-full rounded-xl bg-[#FCFCFF] shadow-md">
          학습진도율
        </div>
        <div className="mt-[24px] text-[22px] font-bold">금융 퀴즈</div>
        <div className="w-full mt-[19px]">{`카테고리 박스 4개`}</div>
      </div> */}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
