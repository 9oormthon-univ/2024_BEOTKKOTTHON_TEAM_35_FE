"use client";

import Image from "next/image";
import CategoryGrid from "./CategoryGrid";
import { useRecoilState } from "recoil";
import { doingTodayQuiz } from "@/app/_state/doing-today-quiz";

const StudyTabContent = () => {
  const [doneQuiz, setDoneQuiz] = useRecoilState(doingTodayQuiz);

  return (
    <div className="cursor-pointer mt-[20px] mb-[50px] flex flex-col items-start w-full h-full px-4 pb-14">
      <div className="mt-[56px] w-full rounded-xl bg-[#FCFCFF] shadow-[0_1px_20px_0px_rgba(0,0,0,0.05)] py-[16px] border border-[#ECF3FF]">
        <div>
          <div className="flex w-full pt-[3px] px-[16px] items-center">
            <Image
              src="/assets/icons/calendar.svg"
              width={30}
              height={30}
              alt="next"
            />
            <div className="ml-[6px] text-[18px] font-bold">
              이번주 학습한 날짜
            </div>
          </div>
          <div className="mt-[20px] flex w-full text-[12px] px-[16px]">
            <div className="w-full grid grid-cols-7 gap-2 text-center">
              <div className="min-w-[30px] rounded-full p-[6px] text-[#72787F]">
                월
              </div>
              <div className="min-w-[30px] rounded-full p-[6px] text-[#72787F]">
                화
              </div>
              <div className="min-w-[30px] rounded-full p-[6px] text-[#72787F]">
                수
              </div>
              <div className="min-w-[30px] rounded-full p-[6px] text-[#72787F]">
                목
              </div>
              <div className="min-w-[30px] rounded-full p-[6px] text-[#72787F]">
                금
              </div>
              <div className="min-w-[30px] rounded-full p-[6px] text-[#72787F]">
                토
              </div>
              <div className="min-w-[30px] rounded-full p-[6px] text-[#2528AE]">
                일
              </div>
            </div>
          </div>
          <div className="mt-[12px] w-full text-[12px] text-[#2528AE] px-[12px]">
            <div className="w-full grid grid-cols-7 gap-2 text-center text-[#26282B] text-[16px]">
              <div className="min-w-[30px] bg-[#fff] rounded-full py-[10px]">
                18
              </div>
              <div className="min-w-[30px] bg-[#fff] rounded-full py-[10px]">
                19
              </div>
              <div className="min-w-[30px] bg-[#fff] rounded-full py-[10px]">
                20
              </div>
              <div className="min-w-[30px] bg-[#fff] rounded-full py-[10px]">
                21
              </div>
              <div className="min-w-[30px] bg-[#fff] rounded-full py-[10px]">
                22
              </div>
              <div className="min-w-[30px] bg-[#fff] rounded-full py-[10px]">
                23
              </div>
              {doneQuiz ? (
                <div className="min-w-[30px] bg-[#4E60FF] rounded-full py-[10px] text-[#fff]">
                  24
                </div>
              ) : (
                <div className="min-w-[30px] rounded-full py-[10px] text-[#2528AE]">
                  24
                </div>
              )}
            </div>
          </div>
          <div className="mt-[32px] text-[#9EA4AA] text-[11px] px-[16px]">
            일주일 연속으로 퀴즈 학습 시 포인트를 받을 수 있어요
          </div>
        </div>
      </div>
      <div className="mt-[26px] text-[22px] font-bold">금융 퀴즈</div>
      <CategoryGrid review={false} />
    </div>
  );
};

export default StudyTabContent;
