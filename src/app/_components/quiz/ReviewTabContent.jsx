"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { answerStep } from "@/app/_state/quiz";

import AnswerButton from "./AnswerButton";
import CategoryGrid from "./CategoryGrid";
import ProcessGraph from "./ProcessGraph";

const ReviewTabContent = () => {
  const [answer, setAnswer] = useState(false); // 정답인지 아닌지 판별하는 변수
  const [last, setLast] = useRecoilState(answerStep);

  // 3개 중 하나만 선택 가능
  const [selectedValue, setSelectedValue] = useState(null);
  const handleClick = (value) => {
    if (value == question[0].correctAnswer) {
      setAnswer(true);
      setSelectedValue(value);
    } else {
      setAnswer(false);
      setSelectedValue(value);
    }
  };
  console.log(answer);

  const question = [
    {
      id: 0,
      question: "현재 우리나라 기준금리는 얼마일까?",
      correctAnswer: "연 3.25%",
      wrongAnswer1: "연 3.0%",
      wrongAnswer2: "연 3.5%",
      category: "카테고리",
      answerStatus: "false",
    },
  ];

  const clickOK = () => {
    setLast(true);
  };

  return (
    <div className="mt-[20px] mb-[50px] flex flex-col items-start w-full h-full pb-14 bg-[#ECF3FF]">
      <div className="mt-[39px] w-full bg-[#ECF3FF] shadow-ml border-tl-[20px] px-[16px] py-[18px]">
        <div className="text-[22px] text-[#4E60FF] font-bold mb-[17px]">
          <div className="mt-[25px] w-full rounded-xl bg-[#FFF] shadow-[0_1px_20px_0px_rgba(0,0,0,0.05)] px-[16px] py-[18px]">
            <div className="text-[#020D19] text-[18px] font-bold">
              학습 진도율
            </div>
            <ProcessGraph />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FFF] rounded-tl-[20px] rounded-tr-[20px] shadow-[0_1px_20px_0px_rgba(0,0,0,0.07)]">
        <div className="px-4 mt-[24px] text-[22px] font-bold ">복습하기</div>
        <div className="px-4 w-full">
          <CategoryGrid review={true} />
        </div>
      </div>
    </div>
  );
};

export default ReviewTabContent;
