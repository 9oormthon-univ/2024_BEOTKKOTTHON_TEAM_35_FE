import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { currentQuizProgress } from "@/app/_state/quiz-progress";
import { quizModal } from "@/app/_state/quiz-modal-open";
import { homeModal } from "@/app/_state/home-modal-open";
import { doingTodayQuiz } from "@/app/_state/doing-today-quiz";
import Image from "next/image";

const Modal = ({ home, title, close, confirm }) => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [quizProgress, setQuizProgress] = useRecoilState(currentQuizProgress);
  const [quizModalOpen, setQuizModalOpen] = useRecoilState(
    home ? homeModal : quizModal
  );
  const [doneQuiz, setDoneQuiz] = useRecoilState(doingTodayQuiz);

  const handleNext = () => {
    setIndex((prevIndex) => prevIndex + 1); // 이전 퀴즈 인덱스로 업데이트
  };

  const goToHome = () => {
    setQuizProgress(0);
    setQuizModalOpen(false);
    setDoneQuiz(true);
    router.push("/home");
    confirm && confirm();
    close && close();
  };
  const goToQuiz = () => {
    setQuizProgress(0);
    setQuizModalOpen(false);
    setDoneQuiz(true);
    router.push("/quiz");
    confirm && confirm();
    close && close();
  };
  const goToMyPage = () => {
    setQuizProgress(0);
    setQuizModalOpen(false);
    setDoneQuiz(true);
    router.push("/mypage/point");
    confirm && confirm();
    close && close();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
      <div className="fixed bg-white rounded-[20px] p-[12px] max-w-[343px] w-full">
        <div className="mt-[5px] px-[8px] flex items-center justify-between mb-[17px]">
          <div className="size-[16px]" />
          <div className="font-bold text-[16px]">{title}</div>
          <Image
            src="/assets/icons/close.svg"
            width={16}
            height={16}
            alt="close"
            onClick={close}
          />
        </div>
        <div className="w-full">
          {index == 1 && (
            <div className="w-full flex flex-col justify-center items-center">
              <div className="mt-[12px] flex items-center gap-[8px]">
                <Image
                  src="/assets/icons/coin.svg"
                  width={32}
                  height={32}
                  alt="present"
                  onClick={handleNext}
                />
                <div className="text-[#020D19] text-[22px] font-bold">200P</div>
              </div>
              <Image
                src="/assets/icons/present-box-opened.svg"
                width={180}
                height={180}
                alt="present"
                onClick={handleNext}
              />
              <div className="w-full p-[0] flex bottom-0 justify-center gap-2">
                <div className="w-full">
                  <button
                    className="flex justify-center items-center w-full h-[44px] px-[16px] rounded-lg border border-[#4E60FF] text-[#4E60FF] text-[14px] font-semibold"
                    onClick={home ? goToHome : goToQuiz}
                  >
                    {home ? "홈으로" : "퀴즈 홈으로"}
                  </button>
                </div>
                <div className="w-full">
                  <button
                    className="flex justify-center items-center w-full h-[44px] px-[16px] rounded-lg bg-[#4E60FF] text-[#FCFCFF] text-[14px] font-semibold"
                    onClick={goToMyPage}
                  >
                    포인트 사용하기
                  </button>
                </div>
              </div>
            </div>
          )}
          {index == 0 && (
            <div className="w-full flex flex-col justify-center gap-2">
              <div className="text-center px-[20px] py-[10px] text-[#4E60FF] text-[14px] bg-[#ECF3FF] rounded-xl">
                선물 상자를 눌러 랜덤 포인트를 확인해보세요
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src="/assets/icons/present-box.svg"
                  width={220}
                  height={220}
                  alt="present"
                  onClick={handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
