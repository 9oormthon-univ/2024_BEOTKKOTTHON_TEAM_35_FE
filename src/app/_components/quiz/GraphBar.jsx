import React from "react";

const GraphBar = ({ text, num }) => {
  // num 값 비율 계산
  const progress = (num / 100) * 100;

  return (
    <div className="w-full flex items-center">
      <div className="w-[80px] text-[14px] text-[#161750] font-normal">
        {text}
      </div>

      <div className="w-full">
        <div className="mb-[2px] text-[#72787F] text-[11px]">{num}%</div>
        <div
          style={{ width: `100%` }}
          className="z-0 relative h-[8px] bg-[#E8EBED] rounded-r-xl"
        >
          <div
            style={{ width: `${progress}%` }}
            className="absolute h-[8px] bg-gradient-to-r from-[#758DFF] to-[#2A2BD8] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default GraphBar;
