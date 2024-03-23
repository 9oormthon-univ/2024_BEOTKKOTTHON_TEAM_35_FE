import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { currentQuizProgress } from "@/app/_state/quiz-progress";
import { homeModal } from "@/app/_state/home-modal-open";

import Link from "next/link";
import Image from "next/image";

const AnswerModal = ({ title, close, confirm, question }) => {
  const router = useRouter();

  const [quizModalOpen, setQuizModalOpen] = useRecoilState(homeModal);

  const goToMyPage = () => {
    // setQuizProgress(0);
    // setQuizModalOpen(false);
    // router.push("/mypage/point");
    setQuizModalOpen(true);
    confirm && confirm();
    close && close();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
      <div className="fixed bg-white rounded-[20px] p-[12px] max-w-[343px] w-full">
        <div className="text-[#72787F] text-[14px]">
          Q. {question[0].question}
        </div>
        <div className="w-full mt-[20px]">
          <div className="w-full flex justify-between mt-[18px] mb-[41px]">
            <div className="flex">
              <div className="px-[6px] py-[3px] rounded-[8px] bg-[#ECF3FF] text-[#2528AE]">
                정답
              </div>
              <div className="ml-[8px] text-[18px] text-[#020D19] font-bold">
                {question[0].correctAnswer}
              </div>
            </div>
          </div>

          <div className="w-full p-[0] flex bottom-0 justify-center gap-2">
            <button
              className="flex justify-center items-center w-full h-[44px] px-[16px] rounded-lg bg-[#4E60FF] text-[#FCFCFF] text-[14px] font-semibold"
              onClick={goToMyPage}
            >
              포인트 받기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerModal;
