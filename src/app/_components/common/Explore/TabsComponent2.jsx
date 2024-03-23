"use client";

import { useState } from "react";

const TabsComponent2 = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div class="w-full">
      {/* 탭 헤더 */}
      <div class="flex justify-start gap-x-[47px] pl-[15px] items-center h-[44px] ml-[16px]">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            class={`font-bold ${
              selectedTab === index
                ? "text-[#2528AE] underline underline-offset-8"
                : ""
            }`}
          >
            {item.title}
          </button>
        ))}
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

export default TabsComponent2;
