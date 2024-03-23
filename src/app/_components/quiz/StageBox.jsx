import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";
import {
  real_data,
  stage1_c1,
  stage2_c1,
  stage3_c1,
} from "@/app/_state/category1";
import { stage1_c2, stage2_c2, stage3_c2 } from "@/app/_state/category2";
import { stage1_c3, stage2_c3, stage3_c3 } from "@/app/_state/category3";
import { stage1_c4, stage2_c4, stage3_c4 } from "@/app/_state/category4";
import { useState } from "react";

const StageBox = ({ num, c }) => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-[120px] border border-[#4E60FF] bg-[#ECF3FF] rounded-xl shadow-[0_1px_20px_0px_rgba(0,0,0,0.03)]">
      <div className="flex text-[#4E60FF] text-[22px] font-bold">
        stage {num}
      </div>
      <div className="absolute right-0 bottom-0 mr-[11px] mb-[15px] pl-[13px] pr-[10px] py-[8px] rounded-[20px] bg-[#FCFCFF] flex items-center shadow-md">
        <Link href={`/quiz/stage/${c}/${num}`}>
          <div className="mr-[5px] text-[12px] text-[#4E60FF]">시작하기</div>
        </Link>
        <Image
          src="/assets/icons/next-arrow-blue.svg"
          width={7}
          height={10}
          alt="next"
        />
      </div>
    </div>
  );
};

export default StageBox;
