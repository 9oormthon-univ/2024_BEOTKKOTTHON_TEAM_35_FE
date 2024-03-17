"use client";

import React from 'react';
import Link from 'next/link';
import useNavigation from '@/hook/use-navigation';


const BottomNav = () => {
  const {
    isHomeActive,
    isTab1Active,
    isTab2Active,
    isMyPageActive,
  } = useNavigation();

  return (
    <div class={`flex flex-col justify-center items-center fixed bottom-0 w-full h-14 z-10 bg-zinc-100 dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg sm:hidden`}>

      <div class="flex flex-row justify-around items-center bg-transparent w-full">

        {isHomeActive ? (
          <span class="font-bold">Home</span>
        ) : (
          <Link href="/home" class="flex items-center relative">
            <span>Home</span>
          </Link>
        )}

        {isTab1Active ? (
          <span class="font-bold">Tab1</span>
        ) : (
        <Link href="/tab1" class="flex items-center">
          <span>Tab1</span>
        </Link>
        )}

        {isTab2Active ? (
          <span class="font-bold">Tab2</span>
        ) : (
        <Link href="/tab2" class="flex items-center">
          <span>Tab2</span>
        </Link>
        )}

        {isMyPageActive ? (
          <span class="font-bold">MyPage</span>
        ) : (
        <Link href="/mypage" class="flex items-center">
          <span>MyPage</span>
        </Link>
        )}

      </div>
    </div>
  );
};

export default BottomNav;