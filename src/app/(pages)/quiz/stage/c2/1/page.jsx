"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { currentQuizProgress } from "@/app/_state/quiz-progress";
import { quizModal } from "@/app/_state/quiz-modal-open";

import ProgressBar from "@/app/_components/quiz/ProgressBar";
import QuizCard from "@/app/_components/quiz/QuizCard";
import Modal from "@/app/_components/common/Modal";

export default function QuizID() {
  const router = useRouter();
  //const [currentQuizIndex, setCurrentQuizIndex] = useState(0); // 현재 퀴즈 인덱스 상태
  const [quizProgress, setQuizProgress] = useRecoilState(currentQuizProgress);
  const [quizModalOpen, setQuizModalOpen] = useRecoilState(quizModal);

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

  const questions = [
    {
      num: 1,
      question:
        "기업이나 정부가 자금을 조달하기 위해 발행하는, 일정 기간 후 원금과 이자를 지급하기로 약속하는 금융 상품은 무엇인가요?",
      wrongAnswer1: "주식",
      wrongAnswer2: "펀드",
      correctAnswer: "채권",
    },
    {
      num: 2,
      question:
        "주식 시장에서 기업의 소유권을 나타내며, 주주에게 배당금 지급 및 회사 결정에 참여할 권리를 주는 금융 상품은 무엇인가요?",
      wrongAnswer1: "채권",
      wrongAnswer2: "정기예금",
      correctAnswer: "주식",
    },
    {
      num: 3,
      question:
        "투자자가 주식, 채권, 현금 등 다양한 자산에 분산 투자할 수 있도록 구성된, 관리되는 펀드는 무엇인가요?",
      wrongAnswer1: "주식",
      wrongAnswer2: "정기예금",
      correctAnswer: "투자 펀드",
    },
    {
      num: 4,
      question:
        "특정 기간 동안 고정된 이자를 제공하는 은행의 예금 상품은 무엇인가요 무엇인가요?",
      wrongAnswer1: "채권",
      wrongAnswer2: "펀드",
      correctAnswer: "정기예금",
    },
    {
      num: 5,
      question:
        "특정 자산의 가격 변동에 따라 수익이 결정되는 금융 상품은 무엇인가요 무엇인가요?",
      wrongAnswer1: "채권",
      wrongAnswer2: "정기예금",
      correctAnswer: "파생상품",
    },
    {
      num: 6,
      question:
        "이 금융 상품은 기업이 자금을 모집하기 위해 발행하는 채무증서입니다. 이 상품의 이름은 무엇인가요?",
      wrongAnswer1: "주식",
      wrongAnswer2: "정기예금",
      correctAnswer: "회사채",
    },
    {
      num: 7,
      question:
        "여러 투자자의 자금을 모아 다양한 자산에 투자하는 집합투자 기구는 무엇인가요?",
      wrongAnswer1: "주식",
      wrongAnswer2: "회사채",
      correctAnswer: "펀드",
    },
    {
      num: 8,
      question:
        "‘투자자가 미래에 특정 가격으로 자산을 사거나 팔 권리를 가지는 계약은 무엇인가요?",
      wrongAnswer1: "채권",
      wrongAnswer2: "주식 분할",
      correctAnswer: "옵션",
    },
    {
      num: 9,
      question:
        "중앙은행이나 정부가 발행하는, 가장 안정적인 투자로 여겨지는 금융 상품은 무엇인가요",
      wrongAnswer1: "기업채",
      wrongAnswer2: "주식",
      correctAnswer: "국채",
    },
    {
      num: 10,
      question:
        "은행에서 제공하는 이자가 붙는 서비스로, 언제든지 입출금이 가능한 것은 무엇인가요?",
      wrongAnswer1: "대출",
      wrongAnswer2: "주식",
      correctAnswer: "예금",
    },
  ];

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
              c={2}
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
