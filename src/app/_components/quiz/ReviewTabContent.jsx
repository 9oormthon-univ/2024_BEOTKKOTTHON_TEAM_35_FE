import React, { useState } from "react";
import Image from "next/image";
import AnswerButton from "./AnswerButton";
import CategoryGrid from "./CategoryGrid";

const ReviewTabContent = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleClick = (value) => {
    setSelectedValue(value);
  };

  const [answer, setAnswer] = useState(false);

  return (
    <div className="mt-[20px] mb-[50px] flex flex-col items-start w-full h-full pb-14">
      <div className="mt-[39px] w-full bg-[#ECF3FF] shadow-md px-[16px] py-[18px]">
        <div className="text-[22px] text-[#4E60FF] font-bold mb-[17px]">
          오늘의 오답노트
        </div>
        <div className="p-[12px] bg-[#FCFCFF] rounded-xl">
          <div className="mb-[5px] text-[#4E60FF] text-[18px] font-bold">
            Q.
          </div>
          <div className="mb-[28px] text-[16px]">
            현재 우리나라 기준금리는 얼마일까?
          </div>
          <div className="flex w-full">
            <div className="w-full mb-[2px] grid gap-[6px]">
              <AnswerButton
                value={selectedValue === "연 3.0%"}
                onClick={() => handleClick("연 3.0%")}
                text="연 3.0%"
              />
              <AnswerButton
                value={selectedValue === "연 3.25%"}
                onClick={() => handleClick("연 3.25%")}
                text="연 3.25%"
              />
              <AnswerButton
                value={selectedValue === "연 3.5%"}
                onClick={() => handleClick("연 3.5%")}
                text="연 3.5%"
              />
            </div>
          </div>
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
