"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { currentQuizProgress } from "@/app/_state/quiz-progress";
import { quizModal } from "@/app/_state/quiz-modal-open";
import { real_data } from "@/app/_state/category1";
import { stage2_c1 } from "@/app/_state/category1";

import ProgressBar from "@/app/_components/quiz/ProgressBar";
import QuizCard from "@/app/_components/quiz/QuizCard";
import Modal from "@/app/_components/common/Modal";

export default function QuizID() {
  const router = useRouter();
  //const [currentQuizIndex, setCurrentQuizIndex] = useState(0); // 현재 퀴즈 인덱스 상태
  const [quizProgress, setQuizProgress] = useRecoilState(currentQuizProgress);
  const [quizModalOpen, setQuizModalOpen] = useRecoilState(quizModal);

  const [questions, setQuestions] = useRecoilState(stage2_c1);
  console.log("qqq", questions);

  const handleNextQuiz = () => {
    //setCurrentQuizIndex((prevIndex) => prevIndex + 1); // 다음 퀴즈 인덱스로 업데이트
    setQuizProgress((prevIndex) => prevIndex + 1);
  };

  const handlePrevQuiz = () => {
    //setCurrentQuizIndex((prevIndex) => prevIndex - 1);
    setQuizProgress((prevIndex) => prevIndex - 1); // 이전 퀴즈 인덱스로 업데이트
  };

  console.log("Q", quizProgress);

  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const goToClear = () => {
    setIsOpen(false);
    setQuizProgress(1);
  };

  return (
    <div>
      <div className="flex flex-col content-center items-center w-full h-full">
        <div className="flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#4E60FF]">
          <div className="fixed w-full max-w-[500px]  bg-[#4E60FF]">
            <div className="mt-[6px] flex w-full justify-between items-center h-[36px] px-4">
              {quizProgress > 0 ? (
                <Image
                  src="/assets/icons/back-arrow-white.svg"
                  width={11}
                  height={11}
                  alt="back"
                  onClick={handlePrevQuiz}
                />
              ) : (
                <div className="size-[11px]" />
              )}
              <div className="ml-[7px] text-[16px] text-[#FCFCFF]">
                금융개념
              </div>
              <Image
                src="/assets/icons/close-white.svg"
                width={18}
                height={18}
                alt="close"
                onClick={() => router.back()}
              />
            </div>
          </div>
          <div className="w-full mt-[75px] px-4">
            <ProgressBar num={quizProgress} />
          </div>
          <div className="w-full max-w-[500px] mt-[25px]">
            <QuizCard
              index={quizProgress}
              questions={questions}
              next={handleNextQuiz}
              open={open}
            />
          </div>
        </div>
      </div>
      {quizModalOpen && (
        <Modal title="포인트 받기" close={close} confirm={goToClear} />
      )}
    </div>
  );
}
