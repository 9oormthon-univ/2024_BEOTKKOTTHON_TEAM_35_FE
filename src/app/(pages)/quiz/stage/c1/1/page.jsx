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
        "금융 시장에서 기업이 자본을 조달하는 주요 방법 중 하나로, 주식이나 채권을 발행하여 투자자들로부터 자금을 모으는 것은 무엇인가요?",
      wrongAnswer1: "리스크 관리",
      wrongAnswer2: "금융 중개",
      correctAnswer: "자본시장",
    },
    {
      num: 2,
      question:
        "은행과 같이 개인 또는 기업 간에 금융 자산의 이동을 용이하게 하는 기관을 통칭하는 용어는 무엇인가요?",
      wrongAnswer1: "유동성",
      wrongAnswer2: "경제 발전",
      correctAnswer: "금융 중개기관",
    },
    {
      num: 3,
      question:
        "특정 상품의 가격 변동 위험으로부터 보호하기 위해 미래에 상품을 정해진 가격에 매매하기로 하는 계약은 무엇인가요?",
      wrongAnswer1: "채권",
      wrongAnswer2: "채무불이행스와프(CDS)",
      correctAnswer: "선물 계약",
    },
    {
      num: 4,
      question:
        "투자자가 주식이나 채권 등의 금융 자산을 구입할 때 기대하는 수익은 무엇인가요?",
      wrongAnswer1: "시장 분석",
      wrongAnswer2: "재무 계획",
      correctAnswer: "자본 이득",
    },
    {
      num: 5,
      question:
        "단기 자금을 조달하거나 투자하는 데 사용되는 금융 상품을 거래하는 시장은 무엇인가요?",
      wrongAnswer1: "자본 시장",
      wrongAnswer2: "선물 시장",
      correctAnswer: "머니 마켓 펀드",
    },
    {
      num: 6,
      question:
        "은행이 중앙은행으로부터 돈을 빌릴 때 제공하는 이자율을 무엇이라고 하는가 무엇인가요?",
      wrongAnswer1: "기준금리",
      wrongAnswer2: "예금 이자율",
      correctAnswer: "할인율",
    },
    {
      num: 7,
      question: "기업이나 개인의 신용도를 평가하는 등급은? 무엇인가요?",
      wrongAnswer1: "부채 비율",
      wrongAnswer2: "자본 비율",
      correctAnswer: "신용등급",
    },
    {
      num: 8,
      question: "‘돈의 융통’의 줄인 말은 무엇인가요?",
      wrongAnswer1: "신용",
      wrongAnswer2: "경제",
      correctAnswer: "금융",
    },
    {
      num: 9,
      question:
        "주식 시장에서 특정 주식의 가격이 상승할 것으로 예상하여 매입 후 가격 상승 시 판매하여 이익을 얻으려는 전략은 무엇인가요?",
      wrongAnswer1: "매도 포지션",
      wrongAnswer2: "헤지",
      correctAnswer: "매수 포지션",
    },
    {
      num: 10,
      question:
        "금융 기관이 대출 시 취하는 이익, 즉 대출 이자율과 차입 이자율 간의 차이는 무엇인가요?",
      wrongAnswer1: "부채 비율",
      wrongAnswer2: "유동성 비율",
      correctAnswer: "이자 마진",
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
