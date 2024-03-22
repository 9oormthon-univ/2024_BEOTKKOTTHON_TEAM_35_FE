"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import ProgressBar from "@/app/_components/quiz/ProgressBar";
import QuizCard from "@/app/_components/quiz/QuizCard";
import Modal from "@/app/_components/common/Modal";

export default function QuizID() {
  const router = useRouter();
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0); // 현재 퀴즈 인덱스 상태

  const handleNextQuiz = () => {
    setCurrentQuizIndex((prevIndex) => prevIndex + 1); // 다음 퀴즈 인덱스로 업데이트
  };

  const handlePrevQuiz = () => {
    setCurrentQuizIndex((prevIndex) => prevIndex - 1); // 이전 퀴즈 인덱스로 업데이트
  };

  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const goToClear = () => {
    setIsOpen(false);
  };

  const questions = [
    {
      num: 1,
      question: "현재 우리나라 기준금리는 얼마일까?",
      wrongAnswer1: "3%",
      wrongAnswer2: "2%",
      correctAnswer: "1.5%",
    },
    {
      num: 2,
      question: "어느 기업이 대한민국의 대표적인 IT 기업인가요?",
      wrongAnswer1: "LG전자",
      wrongAnswer2: "SK하이닉스",
      correctAnswer: "삼성전자",
    },
    {
      num: 3,
      question: "야식으로 뭐 먹을가요?",
      wrongAnswer1: "치킨",
      wrongAnswer2: "피자",
      correctAnswer: "떡볶이",
    },
    {
      num: 4,
      question: "현재 우리나라 기준금리는 얼마일까?",
      wrongAnswer1: "3%",
      wrongAnswer2: "2%",
      correctAnswer: "1.5%",
    },
    {
      num: 5,
      question: "어느 기업이 대한민국의 대표적인 IT 기업인가요?",
      wrongAnswer1: "LG전자",
      wrongAnswer2: "SK하이닉스",
      correctAnswer: "삼성전자",
    },
    {
      num: 6,
      question: "야식으로 뭐 먹을가요?",
      wrongAnswer1: "치킨",
      wrongAnswer2: "피자",
      correctAnswer: "떡볶이",
    },
    {
      num: 7,
      question: "현재 우리나라 기준금리는 얼마일까?",
      wrongAnswer1: "3%",
      wrongAnswer2: "2%",
      correctAnswer: "1.5%",
    },
    {
      num: 8,
      question: "어느 기업이 대한민국의 대표적인 IT 기업인가요?",
      wrongAnswer1: "LG전자",
      wrongAnswer2: "SK하이닉스",
      correctAnswer: "삼성전자",
    },
    {
      num: 9,
      question: "야식으로 뭐 먹을가요?",
      wrongAnswer1: "치킨",
      wrongAnswer2: "피자",
      correctAnswer: "떡볶이",
    },
    {
      num: 10,
      question: "FAVORITE FOOD?",
      wrongAnswer1: "치킨",
      wrongAnswer2: "피자",
      correctAnswer: "떡볶이",
    },
  ];

  return (
    <div>
      <div className="flex flex-col content-center items-center w-full h-full">
        <div className="flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#4E60FF]">
          <div className="fixed w-full bg-[#4E60FF]">
            <div className="mt-[28px] flex w-full justify-between items-center h-[36px] px-4">
              {currentQuizIndex > 0 ? (
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
          <div className="w-full mt-[99px] px-4">
            <ProgressBar num={questions[currentQuizIndex].num} />
          </div>
          <div className="w-full mt-[25px]">
            <QuizCard
              index={currentQuizIndex}
              questions={questions}
              next={handleNextQuiz}
              open={open}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal title="포인트 받기" close={close} confirm={goToClear} />
      )}
    </div>
  );
}
