"use client";

import Ellipse from '../../(pages)/home/images/notification_ellipse.svg';

const NotificationCard = ({ data }) => {
    return (
        <div class={`flex flex-col border-[#E8EBED] border-b-[0.5px] ${!data.is_read && "bg-[#ECF3FF]"} `}>
            <div class="flex">

                <div class="flex justify-center items-center w-[30px] pl-[22px]">
                    {
                        !data.is_read && <Ellipse />
                    }



                </div>

                <div class="flex flex-col w-full ml-[27px] pt-[18px] pb-3.5">

                    <div class="flex flex-row">
                        <p class={`font-medium text-base ${data.is_read && "text-[#454C53]"}`}>스크랩한 공고가 마감 1일 전이에요!</p>
                        {
                            data.type == "ad" &&
                            <div class={`flex flex-col justify-center items-center w-[31px] h-[18px] mt-[3px] ml-[9px] rounded ${data.is_read ? "bg-[#C9CDD2]" : "bg-[#4E60FF]"}`}>
                                <p class="text-white text-[11px]">광고</p>
                            </div>
                        }

                    </div>
                    <p class={`text-sm mt-1.5 ${data.is_read && "text-[#454C53]"}`}>인문100년장학금</p>
                    <p class="mt-[5px] text-[11px] text-[#72787F]">1분전</p>

                </div>
            </div>
        </div>
    );
};

export default NotificationCard;
