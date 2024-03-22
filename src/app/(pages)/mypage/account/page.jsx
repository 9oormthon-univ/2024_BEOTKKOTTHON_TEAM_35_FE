"use client";

import Image from "next/image";
import { useState } from "react";

export default function Account() {
    const [showModal, setShowModal] = useState(false);
    const [clicked, setClicked] = useState(0);

    return (
        <div class="flex flex-col items-center">
            <div class="w-full max-w-[500px] px-4">

                <div class="flex justify-between h-9 items-center">
                    <a href="javascript:window.history.back();">
                        <Image
                            src="/assets/images/b/home/images/back.svg"
                            width={24}
                            height={24}
                            alt="Back"
                        />
                    </a>

                    <div class="flex justify-between items-center h-[36px]">
                        <p class="font-medium">계정관리</p>
                    </div>

                    <div class="w-[24px]"></div>
                </div>

                <div class="flex flex-col items-center">
                    <p class="mt-16 font-bold text-[22px] text-[#020D19]">{"돈버니"}님</p>

                    <p class="mt-[18px] text-[#454C53] text-sm">{"donbunny@bunny.com"}</p>

                    <Image
                        src="/assets/images/b/mypage/images/kakao_circle.svg"
                        width={48}
                        height={48}
                        class="mt-[41px]"
                        alt="kakao"
                    />

                    <p class="mt-[17px] text-[#191600] text-sm">카카오 로그아웃</p>

                    <div class="w-full mt-[52px] border-b border-[#E8EBED]"></div>

                    <div onClick={() => {
                        setShowModal(true);
                        setClicked(1);
                    }} class="flex mt-[31px] items-center justify-center w-full h-[54px] bg-[#F7F8F9] rounded-xl">
                        <p class="text-[#C9CDD2] text-lg font-bold">로그아웃</p>
                    </div>

                    <div onClick={() => {
                        setShowModal(true);
                        setClicked(2);
                    }} class="flex mt-3 items-center justify-center w-full h-[54px] bg-[#F7F8F9] rounded-xl">
                        <p class="text-[#C9CDD2] text-lg font-bold">회원탈퇴</p>
                    </div>
                </div>

            </div>

            {showModal &&
                <div class="w-full max-w-[500px] h-screen bg-[#020D1980] bg-opacity-50 fixed top-0 z-40">
                    <div class="flex items-center h-full px-4">
                        <div class="w-full bg-white rounded-[20px] shadow dark:bg-gray-700">
                            <div class="flex flex-col px-3">
                                <p class="mt-9 text-lg font-bold">정말 {clicked == 1 ? "로그아웃하실 " : "회원탈퇴 하실 "}건가요?</p>
                                <p class="mt-[19px] ml-[2px] text-sm">{clicked == 1 ?"로그아웃할 경우 돈버니 서비스 이용에 제한이 생겨요." : "회원탈퇴를 할 경우 돈버니에 저장된 기록이 모두 삭제돼요."}</p>

                                <div class="flex gap-x-1 mt-[34px] mb-3">
                                    <div onClick={() => setShowModal(false)} class="flex justify-center items-center w-full h-[44px] border border-[#4E60FF] rounded-lg">
                                        <p class="text-sm text-[#4E60FF] font-semibold">취소</p>
                                    </div>

                                    <div class="flex justify-center items-center w-full h-[44px] border border-[#4E60FF] rounded-lg bg-[#4E60FF]">
                                        <p class="text-sm text-[#ffffff] font-semibold">{clicked == 1 ? "로그아웃" : "회원탈퇴"}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}