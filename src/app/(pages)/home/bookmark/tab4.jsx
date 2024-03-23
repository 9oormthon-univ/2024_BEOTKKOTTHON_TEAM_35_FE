import RecommendCardThree from "@/app/_components/common/RecommendCardThree";

export default function Tab4() {
    return (
        <div class="w-full pt-[21px]">

            <div class="flex flex-col px-3 gap-y-2">

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