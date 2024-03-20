import React from "react";

const GraphBar = ({ text, num }) => {
  // num 값 비율 계산
  const rate = `${(num / 80) * 60}%`;

  return (
    <div className="flex items-center">
      <div className="mr-[19px] text-[14px] text-[#72787F] font-normal">
        {text}
      </div>
      <div
        style={{ width: rate }}
        className="h-[16px] bg-gradient-to-r from-[#4e60ff] to-[#2A2BD8] rounded-r-xl"
      />
    </div>
  );
};

export default GraphBar;
