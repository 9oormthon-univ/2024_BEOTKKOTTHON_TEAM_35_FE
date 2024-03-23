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
        "예금을 받고 대출을 제공하는 기본적인 금융 서비스를 제공하는 금융 기관은 무엇인가요?",
      wrongAnswer1: "헤지 펀드",
      wrongAnswer2: "보험 회사",
      correctAnswer: "은행",
    },
    {
      num: 2,
      question:
        "개인이나 기업에 투자 조언을 제공하고 증권 거래를 대행하는 금융 기관은 무엇인가요?",
      wrongAnswer1: "저축은행",
      wrongAnswer2: "신용조합",
      correctAnswer: "증권사",
    },
    {
      num: 3,
      question: "금융 시스템을 감독하고 규제하는 기관은 무엇인가요?",
      wrongAnswer1: "신용 평가 회사",
      wrongAnswer2: "한국은행",
      correctAnswer: "금융감독원",
    },
    {
      num: 4,
      question:
        "회원들이 서로의 금융 필요를 충족하기 위해 만든 비영리 금융 기관은 무엇인가요?",
      wrongAnswer1: "증권사",
      wrongAnswer2: "투자신탁 회사",
      correctAnswer: "신용조합",
    },
    {
      num: 5,
      question:
        "고객에게 보험 상품을 판매하고 리스크 관리 서비스를 제공하는 금융 기관은 무엇인가요?",
      wrongAnswer1: "펀드 회사",
      wrongAnswer2: "결제 서비스 제공업체",
      correctAnswer: "보험 회사",
    },
    {
      num: 6,
      question:
        "개인의 저축을 모아 대출이나 투자에 사용하며, 일반 은행보다 더 높은 이자를 제공하는 기관은 무엇인가요?",
      wrongAnswer1: "신용카드 회사",
      wrongAnswer2: "전자지급 결제대행업체",
      correctAnswer: "저축은행",
    },
    {
      num: 7,
      question:
        "다양한 투자 상품을 관리하고, 개인 및 기관 투자자의 자산을 운용하는 금융 기관은 무엇인가요?",
      wrongAnswer1: "결제 서비스 제공업체",
      wrongAnswer2: "소비자 금융 회사",
      correctAnswer: "자산 관리 회사",
    },
    {
      num: 8,
      question: "금융 관련 각종 제도와 정책을 만드는 금융 기관은 무엇인가요?",
      wrongAnswer1: "예금 보험 공사",
      wrongAnswer2: "한국투자공사",
      correctAnswer: "금융위원회",
    },
    {
      num: 9,
      question: "미국의 중앙은행을 의미하는 단어는 무엇인가요?",
      wrongAnswer1: "미국중앙은행",
      wrongAnswer2: "중앙미국은행",
      correctAnswer: "연방준비제도",
    },
    {
      num: 10,
      question:
        "한국은행의 통화신용정책에 관한 주요 사항을 심의·의결하는 정책결정기구는 무엇인가요?",
      wrongAnswer1: "금융위원회",
      wrongAnswer2: "연방통화위원회",
      correctAnswer: "금융통화위원회",
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
