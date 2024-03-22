
import Image from 'next/image';

import RecommendCardOne from '@/app/_components/common/RecommendCardOne';
import RecommendCardTwo from '@/app/_components/common/RecommendCardTwo';

export default function Tab1() {
    return (
        <div>

            <div class="flex flex-col">
                <div class="flex flex-col px-4 mt-[17px]">
                    <div class="flex items-center">
                        <span>
                        <Image
                            src="/assets/images/b/home/images/lightbulb.svg"
                            width={24}
                            height={24}
                            alt="bulb"
                        />
                    </span>
                        <span class="text-lg font-bold ml-2">오늘의 금융 퀴즈</span>
                    </div>

                    <div class="w-full mt-[15px] shadow rounded-lg">
                        <p class="ml-3 mt-5">Q. 현재 우리나라 기준금리는 얼마일까?</p>

                        <div class="flex w-full pt-[43px] z-40 overflow-clip">
                            <div class="flex flex-col w-full">
                                <div class="flex justify-between items-center mx-3 h-9 bg-[#F7F8F9] rounded-lg">
                                    <span class="ml-[15px]">연 3.0%</span>
                                    <Image
                                        src="/assets/images/b/home/images/icon_choose.svg"
                                        width={16}
                                        height={16}
                                        class="mr-[9px]"
                                        alt="choose"
                                    />
                                </div>

                                <div class="flex justify-between items-center mx-3 mt-1.5 h-9 bg-[#F7F8F9] rounded-lg">
                                    <span class="ml-[15px]">연 3.25%</span>
                                    <Image
                                        src="/assets/images/b/home/images/icon_choose.svg"
                                        width={16}
                                        height={16}
                                        class="mr-[9px]"
                                        alt="choose"
                                    />
                               </div>

                                <div class="flex justify-between items-center mx-3 mt-1.5 mb-3 h-9 bg-[#F7F8F9] rounded-lg">
                                    <span class="ml-[15px]">연 3.5%</span>
                                    <Image
                                        src="/assets/images/b/home/images/icon_choose.svg"
                                        width={16}
                                        height={16}
                                        class="mr-[9px]"
                                        alt="choose"
                                    />
                                </div>
                            </div>
                            <div class="relative w-[30%] ">
                                <Image
                                    src="/assets/images/b/home/images/bunny_char_2.svg"
                                    width={111}
                                    height={108}
                                    class="w-full overflow-visible z-0 absolute bottom-0 right-7"
                                    alt="bunny"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <Image
                    src="/assets/images/b/home/images/home_banner.svg"
                    width={390}
                    height={100}
                    class="w-full mt-10 aspect-[39/10]"
                    alt="banner"
                />

                <div class="flex flex-col px-4 mt-9">
                    <div class="flex items-center">
                        <span>
                        <Image
                            src="/assets/images/b/home/images/bell.svg"
                            width={24}
                            height={24}
                            alt="bell"
                        />
                        </span>
                        <span class="text-lg font-bold ml-2">금융 상품 추천</span>
                    </div>

                    <div class="flex flex-row w-full mt-[13px] gap-x-2 overflow-auto">
                        
                        <RecommendCardOne 
                            data={{
                                title: "토스뱅크 자유적금",
                                desc1: "우대금리 5%",
                                desc2: "상시모집",
                                type: "pop" // pop, recommend, end
                            }}
                        />

                        <RecommendCardOne 
                            data={{
                                title: "KB금융 청년대로 톡톡카드",
                                desc1: "할인혜택 제공",
                                desc2: "상시모집",
                                type: "recommend" // pop, recommend, end
                            }}
                        />

                        <RecommendCardOne 
                            data={{
                                title: "우리 퍼스트 정기적금",
                                desc1: "우대금리 5%",
                                desc2: "상시모집",
                                type: "pop" // pop, recommend, end
                            }}
                        />
                    </div>

                    

                    <div class="flex items-center mt-[29px]">
                        <span>
                        <Image
                            src="/assets/images/b/home/images/clock.svg"
                            width={24}
                            height={24}
                            alt="clock"
                        />
                        </span>
                        <span class="text-lg font-bold ml-2">곧 모집 마감! 장학금 추천</span>
                    </div>

                    <div class="flex flex-row w-full mt-[13px] mb-[29px] gap-x-2 overflow-auto">
                        <RecommendCardOne 
                            data={{
                                title: "인문100년장학금",
                                desc1: "한국장학재단",
                                desc2: "~04.05(금)",
                                type: "recommend" // pop, recommend, end
                            }}
                        />
                        <RecommendCardOne 
                            data={{
                                title: "지역인재장학금",
                                desc1: "한국장학재단",
                                desc2: "~03.14(목)",
                                type: "end" // pop, recommend, end
                            }}
                        />
                        <RecommendCardOne 
                            data={{
                                title: "대통령과학장학금",
                                desc1: "한국장학재단",
                                desc2: "~03.20(월)",
                                type: "end" // pop, recommend, end
                            }}
                        />
                    </div>

                </div>


                {/* 섹션 나누기 바 추가 부분 */}
                <div class="w-100vw h-2 bg-[#F7F8F9]"></div>

                <div class="flex flex-col px-4 mt-9">
                    <div class="flex items-center mt-[26px]">
                        <span>
                        <Image
                            src="/assets/images/b/home/images/fire.svg"
                            width={24}
                            height={24}
                            alt="fire"
                        />
                        </span>
                        <span class="text-lg font-bold ml-2">지금 핫한 청년 정책</span>
                    </div>

                    <div class="flex flex-col mt-[9px] gap-y-2 mb-[50px]">
                        <RecommendCardTwo
                            data={{
                                title: "청년도약계좌",
                                desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
                                desc2: "만 19~34세 청년",
                                type: "pop", // pop, recommend, end,
                                view: 245,
                                bookmark: 120
                            }}
                        />

                        <RecommendCardTwo
                            data={{
                                title: "햇살론유스",
                                desc1: "대학생, 미취업 청년 대상 저리 대출 서비스",
                                desc2: "만 19~34세 청년",
                                type: "recommend", // pop, recommend, end,
                                view: 245,
                                bookmark: 120
                            }}
                        />

                        <RecommendCardTwo
                            data={{
                                title: "대학생/미취업청 채무조정",
                                desc1: "채무조정 지원, 최장 10년 원(리)금분할상환, 연체이자 전액 감면",
                                desc2: "소득구간 8분위 이하의 서울지역 대학생, 대학원생 및 졸업생",
                                type: "pop", // pop, recommend, end,
                                view: 245,
                                bookmark: 120
                            }}
                        />
                    </div>

                </div>

            </div>

        </div>
    );
}
