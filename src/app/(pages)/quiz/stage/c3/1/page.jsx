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
      question: "국가의 경제 성장을 측정하는데 사용되는 지표는 무엇인가요?",
      wrongAnswer1: "CPI(소비자물가지수)",
      wrongAnswer2: "FDI(외국인직접투자)",
      correctAnswer: "GDP(국내총생산)",
    },
    {
      num: 2,
      question:
        "인플레이션의 주요 지표 중 하나로, 소비자가 구매하는 상품 및 서비스의 가격 변동을 측정하는 지표는 무엇인가요?",
      wrongAnswer1: "GDP(국내총생산)",
      wrongAnswer2: "PPI(생산자물가지수)",
      correctAnswer: "CPI(소비자물가지수)",
    },
    {
      num: 3,
      question:
        "‘해외 여러 나라와 각종 물건을 사고 파는 과정에서 발생한 수지타산’을 의미하는 단어는 무엇인가요?",
      wrongAnswer1: "생산수지",
      wrongAnswer2: "경상수지",
      correctAnswer: "무역수지",
    },
    {
      num: 4,
      question: "주식 시장에서 기업의 시장 가치를 나타내는 지표는 무엇인가요?",
      wrongAnswer1: "주가수익비율(P/E 비율)",
      wrongAnswer2: "주당 배당금(Dividend per share)",
      correctAnswer: "시가총액",
    },
    {
      num: 5,
      question:
        "세상에 있은 수많은 물건 중에서, 일반 소비자들이 가장 많이 사용하는 물건 가격을 평균한 금융 지표는?",
      wrongAnswer1: "무역수지",
      wrongAnswer2: "자본수지",
      correctAnswer: "소비자물가",
    },
    {
      num: 6,
      question: "한 국가의 신용등급을 평가하는 지표는 무엇인가요?",
      wrongAnswer1: "부채비율",
      wrongAnswer2: "유동성 비율",
      correctAnswer: "신용등급",
    },
    {
      num: 7,
      question:
        "주식이나 채권과 같은 금융자산의 수익성을 나타내는 지표는 무엇인가요?",
      wrongAnswer1: "거래량",
      wrongAnswer2: "변동성",
      correctAnswer: "수익률",
    },
    {
      num: 8,
      question:
        "국내에서 생산된 재화와 서비스의 총 가치에서 중간 소비를 제외한 순생산 가치를 나타내는 지표는 무엇인가요?",
      wrongAnswer1: "GDP(국내총생산)",
      wrongAnswer2: "순국내생산(NDP)",
      correctAnswer: "국민총소득(GNI)",
    },
    {
      num: 9,
      question:
        "일반적으로 수입이 지출을 초과하여 잉여가 발생한 상태 또는 잉여 그 자체를 의미하는 것은?",
      wrongAnswer1: "적자",
      wrongAnswer2: "복리",
      correctAnswer: "흑자",
    },
    {
      num: 10,
      question:
        "기업이 생산하는 상품과 서비스의 가격 변동을 측정하는 이 지표는 무엇인가요?",
      wrongAnswer1: "GDP(국내총생산)",
      wrongAnswer2: "CPI(소비자물가지수)",
      correctAnswer: "PPI(생산자물가지수)",
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
