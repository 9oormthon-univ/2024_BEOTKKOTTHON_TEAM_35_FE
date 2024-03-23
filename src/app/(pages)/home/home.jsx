"use client";

import Image from "next/image";
import AnswerButton from "@/app/_components/quiz/AnswerButton";
import RecommendCardOne from "@/app/_components/common/RecommendCardOne";
import RecommendCardTwo from "@/app/_components/common/RecommendCardTwo";
import Modal from "@/app/_components/common/Modal";
import { homeModal } from "@/app/_state/home-modal-open";
import { doingTodayQuiz } from "@/app/_state/doing-today-quiz";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { answerStep } from "@/app/_state/quiz";
import AnswerModal from "@/app/_components/common/AnswerModal";

export default function Tab1() {
  const [answer, setAnswer] = useState(false); // 정답인지 아닌지 판별하는 변수
  const [last, setLast] = useRecoilState(answerStep);
  const [quizModalOpen, setQuizModalOpen] = useRecoilState(homeModal);
  const [firstModalOpen, setFirstModalOpen] = useState(false);
  const [todayQuizz, setTodayQuizz] = useRecoilState(doingTodayQuiz);

  const question = [
    {
      id: 0,
      question:
        "금융 거래에서 재무 상태를 추적하고 기록하는 과정은 무엇인가요?",
      correctAnswer: "회계",
      wrongAnswer1: "신용 경색",
      wrongAnswer2: "무역",
      category: "카테고리",
      answerStatus: "false",
    },
  ];

  const close2 = () => {
    setQuizModalOpen(false);
    setTodayQuizz(true);
  };
  const close = () => {
    setFirstModalOpen(false);
  };
  const goToClear = () => {
    setQuizModalOpen(false);
    setTodayQuizz(true);
  };
  const goToNextModal = () => {
    setFirstModalOpen(false);
    setQuizModalOpen(true);
  };

  // 3개 중 하나만 선택 가능
  const [selectedValue, setSelectedValue] = useState(null);
  const handleClick = (value) => {
    if (value == question[0].correctAnswer) {
      setAnswer(true);
      setSelectedValue(value);
      setFirstModalOpen(true);
    } else {
      setAnswer(false);
      setSelectedValue(value);
    }
  };

  const clickOK = () => {
    setLast(true);
  };

  return (
    <div>
      <div class="flex flex-col">
        <div class="flex flex-col px-4 mt-[17px]">
          <div class="flex items-center">
            <span>
              <Image
                src="/assets/images/b/home/images/lightbulb.svg"
                width={24}
                height={24}
                alt="bulb"
              />
            </span>
            <span class="cursor-pointer text-lg font-bold ml-2">
              오늘의 금융 퀴즈
            </span>
          </div>

          <div className="cursor-pointer mt-[15px] w-full flex flex-col p-[12px] bg-[#FFF] rounded-xl border border-[#ECF3FF]">
            {todayQuizz ? (
              <div className="w-full h-[235px]">
                <div className="mt-[5px] text-[#020D19] text-[16px]">
                  Q. {question[0].question}
                </div>
                <div className="w-full mt-[20px]">
                  <div className="w-full flex justify-between mt-[18px]">
                    <div className="flex">
                      <div className="px-[6px] py-[3px] rounded-[8px] bg-[#ECF3FF] text-[#2528AE]">
                        정답
                      </div>
                      <div className="ml-[8px] text-[18px] text-[#2528AE] font-bold">
                        {question[0].correctAnswer}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-[-10px]">
                  <Image
                    src={`/assets/icons/home_success.svg`}
                    width={120}
                    height={121}
                    alt="radio"
                  />
                </div>
                <a href="/quiz">
                  <div className="text-[#9EA4AA] text-[11px] mt-[-20px]">
                    퀴즈 더 풀기
                  </div>
                </a>
              </div>
            ) : (
              <div className="flex flex-col w-full">
                <div className="text-[#4E60FF] text-[18px] font-bold">Q.</div>
                <div className="mt-[5px] mb-[23px] text-[#020D19] text-[16px]">
                  {question[0].question}
                </div>
                <div className="w-full mb-[2px] grid gap-[6px]">
                  <AnswerButton
                    value={selectedValue === question[0].wrongAnswer1}
                    onClick={() => handleClick(question[0].wrongAnswer1)}
                    text={question[0].wrongAnswer1}
                    answer={answer}
                  />
                  <AnswerButton
                    value={selectedValue === question[0].correctAnswer}
                    onClick={() => handleClick(question[0].correctAnswer)}
                    text={question[0].correctAnswer}
                    answer={answer}
                  />
                  <AnswerButton
                    value={selectedValue === question[0].wrongAnswer2}
                    onClick={() => handleClick(question[0].wrongAnswer2)}
                    text={question[0].wrongAnswer2}
                    answer={answer}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <Image
          src="/assets/images/b/home/images/home_banner.svg"
          width={390}
          height={100}
          class="cursor-pointer w-full mt-10 aspect-[39/10]"
          alt="banner"
        />

        <div class="cursor-pointer flex flex-col px-4 mt-9">
          <div class="flex items-center">
            <span>
              <Image
                src="/assets/images/b/home/images/bell.svg"
                width={24}
                height={24}
                alt="bell"
              />
            </span>
            <span class="text-lg font-bold ml-2">금융 상품 추천</span>
          </div>

          <div class="flex flex-row w-full mt-[13px] gap-x-2 overflow-auto">
            <RecommendCardOne
              data={{
                title: "토스뱅크 자유적금",
                desc1: "우대금리 5%",
                desc2: "상시모집",
                type: "pop", // pop, recommend, end
              }}
            />

            <RecommendCardOne
              data={{
                title: "KB금융 청년대로 톡톡카드",
                desc1: "할인혜택 제공",
                desc2: "상시모집",
                type: "recommend", // pop, recommend, end
              }}
            />

            <RecommendCardOne
              data={{
                title: "우리 퍼스트 정기적금",
                desc1: "우대금리 5%",
                desc2: "상시모집",
                type: "pop", // pop, recommend, end
              }}
            />
          </div>

          <div class="flex items-center mt-[29px]">
            <span>
              <Image
                src="/assets/images/b/home/images/clock.svg"
                width={24}
                height={24}
                alt="clock"
              />
            </span>
            <span class="text-lg font-bold ml-2">
              곧 모집 마감! 장학금 추천
            </span>
          </div>

          <div class="flex flex-row w-full mt-[13px] mb-[29px] gap-x-2 overflow-auto">
            <RecommendCardOne
              data={{
                title: "인문100년장학금",
                desc1: "한국장학재단",
                desc2: "~04.05(금)",
                type: "recommend", // pop, recommend, end
              }}
            />
            <RecommendCardOne
              data={{
                title: "지역인재장학금",
                desc1: "한국장학재단",
                desc2: "~03.14(목)",
                type: "end", // pop, recommend, end
              }}
            />
            <RecommendCardOne
              data={{
                title: "대통령과학장학금",
                desc1: "한국장학재단",
                desc2: "~03.20(월)",
                type: "end", // pop, recommend, end
              }}
            />
          </div>
        </div>

        {/* 섹션 나누기 바 추가 부분 */}
        <div class="w-100vw h-2 bg-[#F7F8F9]"></div>

        <div class="cursor-pointer flex flex-col px-4 mt-9">
          <div class="flex items-center mt-[26px]">
            <span>
              <Image
                src="/assets/images/b/home/images/fire.svg"
                width={24}
                height={24}
                alt="fire"
              />
            </span>
            <span class="text-lg font-bold ml-2">지금 핫한 청년 정책</span>
          </div>

          <div class="flex flex-col mt-[9px] gap-y-2 mb-[50px]">
            <RecommendCardTwo
              data={{
                title: "청년도약계좌",
                desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
                desc2: "만 19~34세 청년",
                type: "pop", // pop, recommend, end,
                view: 245,
                bookmark: 120,
              }}
            />

            <RecommendCardTwo
              data={{
                title: "햇살론유스",
                desc1: "대학생, 미취업 청년 대상 저리 대출 서비스",
                desc2: "만 19~34세 청년",
                type: "recommend", // pop, recommend, end,
                view: 245,
                bookmark: 120,
              }}
            />

            <RecommendCardTwo
              data={{
                title: "대학생/미취업청 채무조정",
                desc1:
                  "채무조정 지원, 최장 10년 원(리)금분할상환, 연체이자 전액 감면",
                desc2:
                  "소득구간 8분위 이하의 서울지역 대학생, 대학원생 및 졸업생",
                type: "pop", // pop, recommend, end,
                view: 245,
                bookmark: 120,
              }}
            />
          </div>
        </div>
      </div>
      {firstModalOpen && (
        <AnswerModal
          title="정답 확인"
          close={close}
          confirm={goToNextModal}
          question={question}
        />
      )}
      {quizModalOpen && (
        <Modal
          title="포인트 받기"
          close={close2}
          confirm={goToClear}
          home={true}
        />
      )}
    </div>
  );
}
