"use client";

import CategoryGrid from "./CategoryGrid";
import ProcessGraph from "./ProcessGraph";

const StudyTabContent = () => {
  return (
    <div className="mt-[20px] mb-[50px] flex flex-col items-start w-full h-full px-4 pb-14">
      <div className="mt-[56px] w-full rounded-xl bg-[#FCFCFF] shadow-[0_1px_20px_0px_rgba(0,0,0,0.05)] px-[16px] py-[18px]">
        <div className="text-[18px] font-bold">학습 진도율</div>
        <ProcessGraph />
      </div>
      <div className="mt-[26px] text-[22px] font-bold">금융 퀴즈</div>
      <CategoryGrid review={false} />
    </div>
  );
};

export default StudyTabContent;
