"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react"; // Suspense 추가
import { useSearchParams } from "next/navigation";
import { useRecoilState } from "recoil";
import { stage1_c1, stage2_c1, stage3_c1 } from "@/app/_state/category1";
import { stage1_c2, stage2_c2, stage3_c2 } from "@/app/_state/category2";
import { stage1_c3, stage2_c3, stage3_c3 } from "@/app/_state/category3";
import { stage1_c4, stage2_c4, stage3_c4 } from "@/app/_state/category4";
import { tk } from "@/app/_state/token";

import StageBox from "@/app/_components/quiz/StageBox";
import LockStageBox from "@/app/_components/quiz/LockStageBox";

export default function QuizStage() {
  // const token = localStorage.getItem("token");
  const [token, setToken] = useRecoilState(tk);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {" "}
      {/* Suspense 추가 */}
      <QuizStageContent token={token} />
    </Suspense>
  );
}

function QuizStageContent({ token }) {
  console.log("ttttt", token);
  const params = useSearchParams();
  const title = params.get("title");
  const modifiedTitle = title.slice(0, 2) + " " + title.slice(2);

  const [data11, setData11] = useRecoilState(stage1_c1);
  const [data12, setData12] = useRecoilState(stage2_c1);
  const [data13, setData13] = useRecoilState(stage3_c1);
  const [data21, setData21] = useRecoilState(stage1_c2);
  const [data22, setData22] = useRecoilState(stage2_c2);
  const [data23, setData23] = useRecoilState(stage3_c2);
  const [data31, setData31] = useRecoilState(stage1_c3);
  const [data32, setData32] = useRecoilState(stage2_c3);
  const [data33, setData33] = useRecoilState(stage3_c3);
  const [data41, setData41] = useRecoilState(stage1_c4);
  const [data42, setData42] = useRecoilState(stage2_c4);
  const [data43, setData43] = useRecoilState(stage3_c4);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/quizzes?category=${modifiedTitle}`
      )
      .then((response) => {
        const slicedData = [];
        for (let i = 0; i < response.data.length; i += 10) {
          slicedData.push(response.data.slice(i, i + 10));
        }
        if (title == "금융개념") {
          setData11(slicedData[0] || []);
          setData12(slicedData[1] || []);
          setData13(slicedData[2] || []);
        } else if (title == "금융상품") {
          setData21(slicedData[0] || []);
          setData22(slicedData[1] || []);
          setData23(slicedData[2] || []);
        } else if (title == "금융기관") {
          setData31(slicedData[0] || []);
          setData32(slicedData[1] || []);
          setData33(slicedData[2] || []);
        } else {
          setData41(slicedData[0] || []);
          setData42(slicedData[1] || []);
          setData43(slicedData[2] || []);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, modifiedTitle]);

  console.log("slice", slicedData);

  console.log("ddd", setData22);

  return (
    <div className="flex flex-col content-center items-center w-full h-full">
      <div className="flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#FCFCFF]">
        <div className="fixed w-full max-w-[500px] bg-[#FCFCFF]">
          <div className="mt-[6px] flex w-full justify-between items-center h-[36px] px-4">
            <a href="/quiz">
              <Image
                src="/assets/icons/back-arrow.svg"
                width={20}
                height={20}
                alt="back"
              />
            </a>
            <div className="text-[16px] text-[#000]">학습하기</div>
            <div className="size-[20px]" />
          </div>
        </div>
        <div className="w-full mt-[99px] px-4 text-[22px] font-bold">
          {title}
        </div>
        <div className="w-full mt-[17px] px-4 text-[16px]">
          한 개의 스테이지를 완료할 때마다 포인트를 뽑을 수 있어요{" "}
        </div>
        <div className="mt-[30px] flex flex-col gap-[12px] w-full px-4">
          <StageBox num={1} />
          <StageBox num={2} />
          <LockStageBox num={3} />
        </div>
      </div>
    </div>
  );
}
