"use client";

import { useState } from "react";

const TabsComponent = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      {/* 탭 헤더 */}
      <div className="max-w-[500px] z-10 fixed w-full px-4 bg-[#FCFCFF]">
        <div class="inblock flex justify-center items-center h-[40px] w-full bg-[#FCFCFF]">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`cursor-pointer w-full font-bold text-[18px] text-center pt-[10px] pb-[5px] ${
                selectedTab === index
                  ? "mt-[1px] text-[#2528AE] border-b-2 border-[#2528AE]"
                  : "text-[#9EA4AA] border-b-[1px] border-[#9EA4AA]"
              }`}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

      {/* 탭 본문 */}
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${selectedTab === index ? "" : "hidden"}`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;
