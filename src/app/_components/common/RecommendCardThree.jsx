"use client";

import View from '../../(pages)/home/images/card_two_view.svg';
import Bookmark from '../../(pages)/home/images/card_two_bookmark.svg';
import BookmarkBtn from '../../(pages)/home/images/bookmark_tab_on.svg';

// 북마크 탭, 탐색 탭 카드
const RecommendCardThree = ({ data }) => {
    return (
        <div class="flex flex-row justify-between min-w-[358px] h-[134px] border-[0.5px] border-[#ECF3FF] rounded-lg drop-shadow-sm">
            <div class="flex flex-col">
                <div class="flex flex-row ml-4 mt-3.5 w-[90%]">
                    <span class="max-w-[80%] text-[#020D19] font-medium truncate">{data.title ? data.title : ""}</span>
                    <div class={`w-[31px] h-[18px] mt-[3px] ml-2.5 rounded ${data.type == "pop" ? "bg-[#4E60FF]" : data.type == "recommend" ? "bg-[#FF475D]" : data.type == "end" ? "bg-[#C9CDD2]" : ""}`}>
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
                    <span class="mt-2 font-normal text-[#454C53] text-xs truncate">{data.desc1 ? data.desc1 : ""}</span>
                    <span class="mt-[17px] font-normal text-[#454C53] text-[11px] truncate">{data.desc2 ? data.desc2 : ""}</span>
                </div>

                <div class="flex items-center ml-4 mt-[11px]">
                    <View />
                    <span class="text-xs text-[#C9CDD2] ml-1.5">{data.view ? data.view : "0"}</span>
                    <Bookmark class="ml-2.5" />
                    <span class="text-xs text-[#C9CDD2] ml-1.5">{data.bookmark ? data.bookmark : "0"}</span>
                </div>
            </div>

            <div class="flex flex-col pt-4 pr-4">
                <BookmarkBtn />
            </div>
        </div>
    );
};

export default RecommendCardThree;
