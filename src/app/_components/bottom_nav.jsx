"use client";

import React from "react";
import Link from "next/link";
import useNavigation from "@/hook/use-navigation";

const BottomNav = () => {
  const { isHomeActive, isTab1Active, isTab2Active, isMyPageActive } =
    useNavigation();

  return (
    <div
      class={`flex flex-col justify-center items-center fixed bottom-0 w-full max-w-[500px] h-14 z-10 bg-[#FCFCFF] shadow-lg drop-shadow-md rounded-t-[20px]`}
    >
      <div class="flex flex-row justify-around items-center bg-transparent w-full">
        {isHomeActive ? (
          <span class="font-bold">Home</span>
        ) : (
          <Link href="/home" class="flex items-center relative">
            <span>홈</span>
          </Link>
        )}

        {isTab1Active ? (
          <span class="font-bold">Tab1</span>
        ) : (
          <Link href="/quiz" class="flex items-center">
            <span>퀴즈</span>
          </Link>
        )}

        {isTab2Active ? (
          <span class="font-bold">Tab2</span>
        ) : (
          <Link href="/tab2" class="flex items-center">
            <span>탐색</span>
          </Link>
        )}

        {isMyPageActive ? (
          <span class="font-bold">MyPage</span>
        ) : (
          <Link href="/mypage" class="flex items-center">
            <span>My</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BottomNav;
