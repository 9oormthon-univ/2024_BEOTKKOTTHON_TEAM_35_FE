"use client";

const RecommendCardOne = ({ data }) => {
  return (
    <div class="flex flex-col justify-between min-w-[200px] h-[128px] pb-[13px] border-[0.5px] border-[#ECF3FF] rounded-lg drop-shadow-sm">
        <div class="flex flex-row justify-between ml-4 mt-[21px]">
            <span class="max-w-[135px] text-[#2528AE] font-medium">{data.title ? data.title : ""}</span>
            <div class={`w-[31px] h-[18px] mt-[3px] mr-[18px] rounded ${data.type == "pop" ? "bg-[#4E60FF]" : data.type == "recommend" ? "bg-[#FF475D]" : data.type == "end" ? "bg-[#C9CDD2]" : ""}`}>
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

        <div class="flex flex-col ml-4">
            <span class="font-normal text-[#454C53] text-sm">{data.desc1 ? data.desc1 : ""}</span>
            <span class="mt-1.5 font-normal text-[#454C53] text-[11px]">{data.desc2 ? data.desc2 : ""}</span>
        </div>
    </div>
  );
};

export default RecommendCardOne;
