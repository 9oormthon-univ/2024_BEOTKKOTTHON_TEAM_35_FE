"use client";

import Image from "next/image";
import { useState } from "react";

export default function Account() {
    const [showModal, setShowModal] = useState(false);
    const [clicked, setClicked] = useState(0);


    const caseOne = () => {
        return (
            <div class="flex flex-col w-full items-center">
                <p class="text-[#020D19] text-lg font-bold">포인트가 모자라요</p>

                <Image
                    src="/assets/images/b/mypage/images/coin.svg"
                    width={79}
                    height={60}
                    class="mt-[37px]"
                    alt="Back"
                />

                <div class="flex items-center h-8 mt-[33px] bg-[#ECF3FF] px-[18px] rounded-[5px]">
                    <p class="text-[#2528AE] text-sm">퀴즈 풀고 포인트를 더 모아보세요</p>
                </div>
            </div>
        );
    }

    const caseTwo = () => {
        return (
            <div class="flex flex-col w-full items-center">
                <p class="text-[#020D19] text-lg font-bold">당첨</p>

                <Image
                    src="/assets/images/b/mypage/images/yay.svg"
                    width={118}
                    height={118}
                    alt="Back"
                />


                <p class="font-bold text-lg">스타벅스 아메리카노 교환권</p>
            </div>
        );
    }

    const caseThree = () => {
        return (
            <div class="flex flex-col w-full items-center">
                <p class="text-[#020D19] text-lg font-bold">앗, 빈 카드를 뽑았어요</p>

                <Image
                    src="/assets/images/b/mypage/images/nooo.svg"
                    width={118}
                    height={118}
                    alt="Back"
                />

                <div class="flex items-center h-8 bg-[#ECF3FF] px-[18px] rounded-[5px]">
                    <p class="text-[#2528AE] text-sm">다시 한번 도전해보세요</p>
                </div>
            </div>
        );
    }
    return (
        <div class="flex flex-col items-center">
            <div class="w-full h-screen max-w-[500px]">

                <div class="flex justify-start px-4 h-9 items-center">
                    <a href="javascript:window.history.back();">
                        <Image
                            src="/assets/images/b/home/images/back.svg"
                            width={24}
                            height={24}
                            alt="Back"
                        />
                    </a>

                </div>

                <div class="flex flex-col items-center bg-gradient-to-b from-[#363AF5] to-[#758DFF]">
                <Image
                    src="/assets/images/b/mypage/images/point_0.svg"
                    width={252}
                    height={87}
                    alt="point 0"
                    class="mt-[20px]"
                />

                <Image
                    src="/assets/images/b/mypage/images/point_1.png"
                    width={402}
                    height={231}
                    alt="point 1"
                    class="mt-[40px]"
                />

                <Image
                    src="/assets/images/b/mypage/images/point_2.svg"
                    width={323}
                    height={311}
                    alt="point 2"
                    class="mt-[50px]"
                />

                <Image
                    src="/assets/images/b/mypage/images/point_3.svg"
                    width={349}
                    height={50}
                    alt="point 4"
                    class="my-[20px]"
                />

                    <div class="flex w-full px-4 gap-x-3">
                        <div onClick={() => {
                            setClicked(1);
                        }} class={`flex flex-col w-full h-[144px] ${clicked != 0 ? (clicked == 1 ? "bg-gradient-to-b from-[#FFFFFF] via-[#DDE8FF] to-[#9CB6FF]" : "bg-[#758DFF]") : "bg-gradient-to-b from-[#FFFFFF] via-[#DDE8FF] to-[#9CB6FF]"} justify-center items-center rounded-xl`}>
                            <Image
                                src="/assets/images/b/mypage/images/round_cube.svg"
                                width={61}
                                height={55}
                                alt="cube"
                            />
                        </div>
                        <div onClick={() => {
                            setClicked(2);
                        }} class={`flex flex-col w-full h-[144px] ${clicked != 0 ? (clicked == 2 ? "bg-gradient-to-b from-[#FFFFFF] via-[#DDE8FF] to-[#9CB6FF]" : "bg-[#758DFF]") : "bg-gradient-to-b from-[#FFFFFF] via-[#DDE8FF] to-[#9CB6FF]"} justify-center items-center rounded-xl`}>
                            <Image
                                src="/assets/images/b/mypage/images/cone.svg"
                                width={50}
                                height={60}
                                alt="cone"
                            />
                        </div>
                        <div onClick={() => {
                            setClicked(3);
                        }} class={`flex flex-col w-full h-[144px] ${clicked != 0 ? (clicked == 3 ? "bg-gradient-to-b from-[#FFFFFF] via-[#DDE8FF] to-[#9CB6FF]" : "bg-[#758DFF]") : "bg-gradient-to-b from-[#FFFFFF] via-[#DDE8FF] to-[#9CB6FF]"} justify-center items-center rounded-xl`}>
                            <Image
                                src="/assets/images/b/mypage/images/rock.svg"
                                width={62}
                                height={59}
                                alt="rock"
                            />
                        </div>
                    </div>

                    <div class="w-full px-4 mt-[101px] mb-[83px]">
                        <div onClick={() => {
                            console.log(clicked);
                            // setClicked(0);
                            clicked != 0 && setShowModal(true);
                        }} class={`flex justify-between items-center w-full h-[56px] px-4 ${clicked == 0 ? "bg-[#758DFF]" : "bg-[#ffffff] opacity-80"} rounded-xl`}>
                            <p class="font-bold text-[#4E60FF]">교환권 확인하기</p>

                            <Image
                                src="/assets/images/b/mypage/images/right_arrow.svg"
                                width={16}
                                height={16}
                                alt="arrow"
                            />
                        </div>
                    </div>



                    <div class="w-full bg-[#2528AE] pt-4 px-4 pb-[27px] rounded-t-[20px]">
                        <p class="text-[#ECF3FF] text-xs">포인트 사용 유의사항</p>

                        <p class="w-full mt-[15px] text-[#ECF3FF] text-xs whitespace-pre-line">
                            {`한번 사용한 포인트는 다시 복구할 수 없어요.
수령한 교환권은 이벤트성 상품으로 교환 및 환불이 불가능해요.
부정한 방법으로 포인트, 교환권 수령 시 서비스 이용 제한 및 상품 사용이 
불가능해요. 

`}
                        </p>

                    </div>
                </div>



            </div>

            {showModal &&
                <div class="w-full max-w-[500px] h-screen bg-[#020D1980] bg-opacity-50 fixed top-0 z-40">
                    <div class="flex items-center h-full px-4">
                        <div class="w-full bg-white rounded-[20px] shadow dark:bg-gray-700">
                            <div class="flex flex-col px-3">

                                <div class="flex justify-between items-center h-[44px] px-5">
                                    <div class="w-[17px]"></div>
                                    <p class="text-sm">교환권 확인</p>
                                    <Image
                                        onClick={() => {
                                            setShowModal(false);
                                            setClicked(0);
                                        }}
                                        src="/assets/images/b/mypage/images/x.svg"
                                        width={17}
                                        height={17}
                                        alt="Back"
                                    />
                                </div>

                                {
                                    clicked == 1 ? caseOne() : clicked == 2 ? caseTwo() : caseThree()
                                }


                                <div class="flex gap-x-1 mt-[34px] mb-3">
                                    {
                                        (clicked == 1 || clicked == 3) &&
                                        <div onClick={() => {
                                            setShowModal(false);
                                            setClicked(0);
                                        }} class="flex justify-center items-center w-full h-[44px] border border-[#4E60FF] rounded-lg">
                                            <p class="text-sm text-[#4E60FF] font-semibold">확인</p>
                                        </div>

                                    }

                                    {
                                        clicked == 1 ?
                                            <a href="/quiz" class="flex justify-center items-center w-full h-[44px] border border-[#4E60FF] rounded-lg bg-[#4E60FF]">
                                                <p class="text-sm text-[#ffffff] font-semibold">퀴즈 풀기</p>
                                            </a> :
                                            clicked == 2 ?
                                                <div onClick={() => {
                                                }} class="flex justify-center items-center w-full h-[44px] border border-[#4E60FF] rounded-lg bg-[#4E60FF]">
                                                    <p class="text-sm text-[#ffffff] font-semibold">교환권 저장하기</p>
                                                </div> :
                                                <div onClick={() => {

                                                }} class="flex justify-center items-center w-full h-[44px] border border-[#4E60FF] rounded-lg bg-[#4E60FF]">
                                                    <p class="text-sm text-[#ffffff] font-semibold">다시 뽑기</p>
                                                </div>

                                    }

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}