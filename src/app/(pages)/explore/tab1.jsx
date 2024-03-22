import RecommendCardThree from '@/app/_components/common/RecommendCardThree';
import FilterDown from '../../(pages)/explore/images/explore_filter_down.svg';
import FilterUp from '../../(pages)/explore/images/explore_filter_up.svg';

export default function Tab1() {
    return (
        <div class="w-full pb-5">

            {/* Filter */}
            {/* <div class="flex flex-row overflow-auto pt-5 px-4 gap-x-[8px]"> */}
            <div class="flex flex-row overflow-auto pt-4 px-4 gap-x-[8px]">
                <div class="flex flex-row justify-between items-center h-[30px] px-[15px] bg-[#ECF3FF] rounded-[20px]">
                    <p class="w-max text-[#2528AE] text-xs">나이</p>
                    <FilterDown class="ml-[11px]" />
                </div>

                <div class="flex flex-row justify-between items-center h-[30px] px-[15px] bg-[#ECF3FF] rounded-[20px]">
                    <p class="w-max text-[#2528AE] text-xs">활동지역</p>
                    <FilterDown class="ml-[11px]" />
                </div>

                <div class="flex flex-row justify-between items-center h-[30px] px-[15px] bg-[#ECF3FF] rounded-[20px]">
                    <p class="w-max text-[#2528AE] text-xs">관심 정책</p>
                    <FilterDown class="ml-[11px]" />
                </div>

                <div class="flex flex-row justify-between items-center h-[30px] px-[15px] bg-[#ECF3FF] rounded-[20px]">
                    <p class="w-max text-[#2528AE] text-xs">취업상태</p>
                    <FilterDown class="ml-[11px]" />
                </div>
            </div>


            {/* Result & Filter 2 */}
            <div class="flex flex-row justify-between items-center pl-4 pr-[7px]">
                <p class="mt-5 text-[#454C53] text-xs">검색 결과  54 건</p>

                <div class="flex items-center mt-[13px] pt-[5px] pl-[6px] pr-[7px]">
                    <p class="text-[#020D19] text-xs">최신순</p>
                    <FilterUp class="ml-2"/>
                </div>
            </div>


            {/* Result Card */}
            <div class="flex flex-col mt-[14px] px-4 gap-y-2">

                {
                    card_data.map((data, index) => (
                        <RecommendCardThree
                            key={index}
                            data={data}
                        />  
                    ))
                }
                
            </div>

        </div>
    );
}



const card_data = [
    {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    }, {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    }, {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    }, {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    }, {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    }, {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    }, {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    }, {
        title: "청년도약계좌",
        desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
        desc2: "만 19~34세 청년",
        type: "pop", // pop, recommend, end,
        view: 245,
        bookmark: 120
    },
];
