"use client";

import Image from "next/image";

// 북마크 탭, 탐색 탭 카드
const RecommendCardFour = ({ data, onClick }) => {
    return (
        <div class="flex flex-row justify-between min-w-[358px] h-[134px] border-[0.5px] border-[#ECF3FF] rounded-lg drop-shadow-sm"
            onClick={onClick}
        >
            <div class="flex">
                <div class="flex flex-col justify-center w-[100px]">
                    <Image
                        src="/assets/icons/back-arrow.svg"
                        width={100}
                        height={100}
                        alt="back"
                    />
                </div>

                <div class="flex flex-col justify-between max-w-[220px]">
                    <div>
                        <div class="flex flex-row ml-4 mt-3 w-[80%]">
                            <span class="max-w-[90%] text-[#020D19] font-medium truncate">{data.title ? data.title : ""}</span>
                            <div class={`w-[31px] h-[18px] min-w-[31px] min-h-[18px] mt-[3px] ml-2.5 rounded ${data.type == "pop" ? "bg-[#4E60FF]" : data.type == "recommend" ? "bg-[#FF475D]" : data.type == "end" ? "bg-[#C9CDD2]" : ""}`}>
                                <p class="text-[11px] text-[#FCFCFF] text-center">
                                    {
                                        data.type == "pop" ? "인기"
                                            : data.type == "recommend" ? "추천"
                                                : data.type == "end" ? "마감"
                                                    : ""
                                    }
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col ml-4 w-full">
                            <span class="mt-1 font-normal text-[#454C53] text-xs truncate">{data.desc1 ? data.desc1 : ""}</span>
                            <span class="mt-[9px] font-normal text-[#020D19] text-[11px] truncate">{data.desc2 ? data.desc2 : ""}</span>
                        </div>
                    </div>
                    


                    <div class="flex items-center ml-4 mb-[10px]">
                        <Image
                            src="/assets/images/b/home/images/card_two_view.svg"
                            width={16}
                            height={16}
                            alt="view"
                        />

                        <span class="text-xs text-[#C9CDD2] ml-1.5">{data.view ? data.view : "0"}</span>
                        <Image
                            src="/assets/images/b/home/images/card_two_bookmark.svg"
                            width={12}
                            height={12}
                            class="ml-2.5"
                            alt="bookmark"
                        />
                        <span class="text-xs text-[#C9CDD2] ml-1.5">{data.bookmark ? data.bookmark : "0"}</span>
                    </div>
                </div>

            </div>


            <div class="flex flex-col pt-4 pr-4">
                <Image
                    src="/assets/images/b/home/images/bookmark_tab_on.svg"
                    width={14}
                    height={16}
                    alt="BookmarkBtn"
                />

            </div>
        </div>
    );
};

export default RecommendCardFour;
