"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react"; // Suspense 추가
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { quizModal } from "@/app/_state/quiz-modal-open";

import RecommendCardFour from "@/app/_components/common/RecommendCardFour";
import Button from "@/app/_components/common/Button";

const card_data = [
  {
    title: "청년도약계좌 asd as dasd a",
    desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
    desc2: "만 19~34세 청년",
    type: "pop", // pop, recommend, end,
    view: 245,
    bookmark: 120,
  },
  {
    title: "청년도약계좌",
    desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
    desc2: "만 19~34세 청년",
    type: "pop", // pop, recommend, end,
    view: 245,
    bookmark: 120,
  },
  {
    title: "청년도약계좌",
    desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
    desc2: "만 19~34세 청년",
    type: "pop", // pop, recommend, end,
    view: 245,
    bookmark: 120,
  },
  {
    title: "청년도약계좌",
    desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
    desc2: "만 19~34세 청년",
    type: "pop", // pop, recommend, end,
    view: 245,
    bookmark: 120,
  },
  {
    title: "청년도약계좌",
    desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
    desc2: "만 19~34세 청년",
    type: "pop", // pop, recommend, end,
    view: 245,
    bookmark: 120,
  },
  {
    title: "청년도약계좌",
    desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
    desc2: "만 19~34세 청년",
    type: "pop", // pop, recommend, end,
    view: 245,
    bookmark: 120,
  },
  {
    title: "청년도약계좌",
    desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
    desc2: "만 19~34세 청년",
    type: "pop", // pop, recommend, end,
    view: 245,
    bookmark: 120,
  },
  {
    title: "청년도약계좌",
    desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
    desc2: "만 19~34세 청년",
    type: "pop", // pop, recommend, end,
    view: 245,
    bookmark: 120,
  },
];

export default function Recommend() {
  const router = useRouter();
  const [card, setCard] = useState();
  const [showModal2, setShowModal2] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [quizModalOpen, setQuizModalOpen] = useRecoilState(quizModal);

  useEffect(() => {
    function handleScroll() {
      // Calculate the distance to the bottom of the page
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const bottomOffset = documentHeight - (scrollPosition + windowHeight);

      // If the user has scrolled to the bottom, show the button
      if (bottomOffset < 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButton = () => {
    setQuizModalOpen(true);
    router.back();
  };

  return (
    <div className="flex flex-col content-center items-center w-full h-full">
      <div className="flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#fff]">
        <div className="z-10 top-0 fixed w-full max-w-[500px] bg-[#fff]">
          <div className="z-10 mt-[6px] flex w-full justify-between items-center h-[36px] px-4 bg-[#fff]">
            <Image
              src="/assets/icons/back-arrow.svg"
              width={20}
              height={20}
              alt="back"
              onClick={() => router.back()}
            />
            <div className="text-[16px] text-[#000]">추천</div>
            <div className="size-[20px]" />
          </div>
        </div>
        <div className="z-1 w-full max-w-[500px] pb-[93px]">
          <div className="w-full mt-[79px] px-4 text-[22px] font-bold">
            추천 금융상품 둘러보고 포인트 받기
          </div>
          <div class="w-full mt-[20px] flex flex-col px-4 gap-y-2">
            {card_data.map((data, index) => (
              <RecommendCardFour
                key={index}
                data={data}
                onClick={() => {
                  setShowModal2(true);
                  setCard(data);
                }}
              />
            ))}
          </div>
        </div>
        <div className="z-10 bottom-[30px] fixed w-full max-w-[500px] px-4">
          {showButton && <Button text="포인트 받기" onClick={handleButton} />}
        </div>
      </div>
      {showModal2 ? (
        <div class="w-full max-w-[500px] h-screen bg-[#020D1980] bg-opacity-50 fixed top-0 z-40">
          <div class="flex items-end h-full">
            <div class="w-full bg-white rounded-t-[20px] shadow">
              <div class="flex flex-col">
                <div class="flex flex-row justify-between w-full p-4">
                  <div class="w-[20px]"></div>
                  <p>img</p>

                  <button
                    type="button"
                    onClick={() => {
                      setShowModal2(false);
                    }}
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 items-center"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">close</span>
                  </button>
                </div>

                <div class="mx-4">
                  <p class="font-bold text-[22px] text-[#020D19]">
                    {card.title}
                  </p>

                  <div class="flex justify-between mt-[17px]">
                    <p class="text-sm text-[#020D19]">토스뱅크</p>
                    <p class="text-sm text-[#9EA4AA]">2024.03.01</p>
                  </div>

                  <div class="w-full mt-5 border-b border-[#E8EBED]"></div>

                  <div class="flex justify-between mt-[17px]">
                    <p class="text-sm text-[#72787F] font-medium">신청마감일</p>
                    <p class="text-sm text-[#020D19] font-medium">2024.04.01</p>
                  </div>

                  <div class="w-full mt-5 border-b border-[#E8EBED]"></div>

                  <p class="text-[#2528AE] font-bold mt-[14px]">상세정보</p>
                  <p class="text-[#020D19] text-sm mt-4 mb-[47px]">
                    {card.desc1}
                  </p>
                </div>

                <div class="flex w-full h-20 border-t-[0.3px] border-[#9CB6FF]">
                  <div class="flex flex-col mt-2 items-center ml-4 text-center">
                    <p>img</p>
                    <p class="w-[30px] text-[#4E60FF] text-[11px]">스크랩</p>
                  </div>

                  <div class="h-[37px] mt-2 mx-4 border-r-[0.5px] border-[#E8EBED]"></div>

                  <div class="flex flex-col mt-2 items-center text-center">
                    <p>img</p>
                    <p class="w-[30px] text-[#4E60FF] text-[11px]">공유</p>
                  </div>

                  <div class="flex justify-center items-center w-full h-12 mt-2 ml-[26px] mr-4 bg-[#4E60FF] rounded-lg">
                    <p class="text-[#FCFCFF] font-semibold text-sm">
                      홈페이지 바로가기
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
