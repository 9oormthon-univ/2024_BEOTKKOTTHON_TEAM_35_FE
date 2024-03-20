import Image from "next/image";
import { useState } from "react";

import AnswerButton from "./AnswerButton";
import DisabledButton from "../common/DisabledButton";
import Button from "../common/Button";

const QuizCard = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="bg-[#4E60FF] px-4">
        <div className="mb-[5px] text-[#FCFCFF] text-[22px] font-bold">Q.</div>
        <div className="mb-[28px] text-[18px] text-[#FCFCFF] font-bold">
          현재 우리나라 기준금리는 얼마일까?
        </div>
      </div>
      <div>
        <div className="z-0 absolute right-0 mt-[50px] mr-[10px]">
          <Image
            src={`/assets/images/main-character.svg`}
            width={150}
            height={176}
            alt="character"
          />
        </div>
        <div className="z-1 absolute bottom-0 w-full h-[430px] flex flex-col justify-between bottom-0 bg-[#FFF] rounded-t-2xl px-4">
          <div className="mt-[90px] grid gap-[8px]">
            <AnswerButton
              value={selectedValue === "예금"}
              onClick={() => handleClick("예금")}
              text="예금"
              real={true}
            />
            <AnswerButton
              value={selectedValue === "적금"}
              onClick={() => handleClick("적금")}
              text="적금"
              real={true}
            />
            <AnswerButton
              value={selectedValue === "복리"}
              onClick={() => handleClick("복리")}
              text="복리"
              real={true}
            />
          </div>
          <div className="mb-[50px]">
            {selectedValue ? (
              <Button text="정답 확인" />
            ) : (
              <DisabledButton text="정답 확인" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
