"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { answerStep } from "@/app/_state/quiz";

import AnswerButton from "./AnswerButton";
import CategoryGrid from "./CategoryGrid";

const ReviewTabContent = () => {
  const [answer, setAnswer] = useState(false); // 정답인지 아닌지 판별하는 변수
  const [last, setLast] = useRecoilState(answerStep);

  console.log("last", last);

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
    <div className="mt-[20px] mb-[50px] flex flex-col items-start w-full h-full pb-14">
      <div className="mt-[39px] w-full bg-[#ECF3FF] shadow-md px-[16px] py-[18px]">
        <div className="text-[22px] text-[#4E60FF] font-bold mb-[17px]">
          오늘의 오답노트
        </div>
        <div className="w-full flex flex-col h-[235px] p-[12px] bg-[#FCFCFF] rounded-xl">
          {last ? (
            <div>오늘의 퀴즈 완료!</div>
          ) : (
            <>
              <div>
                {answer ? (
                  <div className="w-full flex justify-between mt-[8px] mb-[41px]">
                    <div className="flex">
                      <div className="px-[6px] py-[3px] rounded-[8px] bg-[#ECF3FF] text-[#2528AE]">
                        정답
                      </div>
                      <div className="ml-[8px] text-[18px] text-[#2528AE] font-bold">
                        {question[0].correctAnswer}
                      </div>
                    </div>
                    <div
                      className="px-[6px] py-[3px] rounded-[8px] bg-[#F7F8F9] text-[#72787F]"
                      onClick={clickOK}
                    >
                      확인
                    </div>
                  </div>
                ) : (
                  <div className="w-full">
                    <div className="mb-[5px] text-[#4E60FF] text-[18px] font-bold">
                      Q.
                    </div>
                    <div className="mb-[23px] text-[16px]">
                      {question[0].question}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex w-full">
                <div className="w-full mb-[2px] grid gap-[6px]">
                  <AnswerButton
                    value={selectedValue === question[0].wrongAnswer1}
                    onClick={() => handleClick(question[0].wrongAnswer1)}
                    text={question[0].wrongAnswer1}
                    answer={answer}
                  />
                  <AnswerButton
                    value={selectedValue === question[0].correctAnswer}
                    onClick={() => handleClick(question[0].correctAnswer)}
                    text={question[0].correctAnswer}
                    answer={answer}
                  />
                  <AnswerButton
                    value={selectedValue === question[0].wrongAnswer2}
                    onClick={() => handleClick(question[0].wrongAnswer2)}
                    text={question[0].wrongAnswer2}
                    answer={answer}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="px-4 mt-[24px] text-[22px] font-bold">복습하기</div>
      <div className="px-4 w-full">
        <CategoryGrid review={true} />
      </div>
    </div>
  );
};

export default ReviewTabContent;
