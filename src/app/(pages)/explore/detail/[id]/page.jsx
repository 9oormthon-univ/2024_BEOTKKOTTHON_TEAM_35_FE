import RecommendCardThree from "@/app/_components/common/RecommendCardThree";
import Image from "next/image";

export default function DetailID() {
  return (
    <div class="flex flex-col items-center">
      <div class="w-full max-w-[500px]">
        <div class="flex justify-between h-9 pl-4 items-center">
          <a href="javascript:window.history.back();">
            <Image
              src="/assets/images/b/home/images/back.svg"
              width={24}
              height={24}
              class="mt-[6px]"
              alt="Back"
            />
          </a>

          <span class="mt-2">title</span>

          <div class="w-5"></div>
          {/* <a href="/home">
                        <Image
                            src="/assets/images/b/home/images/close.svg"
                            width={20}
                            height={20}
                            class="mt-[7px]"
                            alt="Close"
                        />
                    </a> */}
        </div>

        <div class="w-full px-4 mt-[22px]">
          <p class="font-bold text-[22px] text-[#2528AE]">인문100년장학금</p>

          <div class="flex justify-between mt-[11px]">
            <p class="text-[#9EA4AA] text-xs">2024.03.23</p>

            <div class="flex">
              <Image
                src="/assets/images/b/home/images/card_two_view.svg"
                width={16}
                height={16}
                alt="view"
              />
              <p class="text-xs text-[#C9CDD2]">245</p>

              <Image
                src="/assets/images/b/home/images/card_two_bookmark.svg"
                width={12}
                height={12}
                class="ml-2.5"
                alt="bookmark"
              />
              <p class="text-xs text-[#C9CDD2]">120</p>
            </div>
          </div>

          <div class="w-full mt-4 p-4 border border-[#ECF3FF] rounded-xl">
            <p class="text-lg text-[#020D19] font-bold">한국장학재단</p>
            <div class="flex mt-[23px]">
              <p class="w-[65px] text-sm text-[#72787F]">모집 시작일</p>
              <p class="ml-[19px] text-sm text-[#020D19]">2024.03</p>
            </div>

            <div class="flex mt-[18px]">
              <p class="w-[65px] text-sm text-[#72787F]">모집 종료일</p>
              <p class="ml-[19px] text-sm text-[#020D19]">2024.04</p>
            </div>

            <div class="flex mt-[18px]">
              <p class="w-[65px] text-sm text-[#72787F]">선발인원</p>
              <p class="ml-[19px] text-sm text-[#020D19]">100명이내</p>
            </div>

            <div class="flex mt-[18px]">
              <p class="w-[65px] text-sm text-[#72787F]">지원내역</p>
              <p class="ml-[19px] text-sm text-[#020D19]">
                등록금 전액, 학기당 생활비 150만원 지원
              </p>
            </div>

            <div class="flex mt-[18px]">
              <p class="w-[65px] text-sm text-[#72787F]">홈페이지</p>
              <p class="ml-[19px] text-sm text-[#020D19]">
                www.fdjksdlfklds.com
              </p>
            </div>
          </div>

          <div class="flex items-start my-[21px]">
            <Image
              src="/assets/images/b/explore/images/error.svg"
              width={12}
              height={12}
              alt="!"
              class="mt-0.5"
            />
            <div class="ml-2.5">
              <p class="text-[#9EA4AA] text-[11px]">
                상기 내용이 선발 정보와 다를 경우 홈페이지 안내사항을
                우선합니다.
              </p>
              <p class="text-[#9EA4AA] text-[11px]">
                보다 자세한 내용은 홈페이지 안내사항을 참고해주시길 바랍니다.
              </p>
            </div>
          </div>
        </div>

        <div class="w-full h-2 bg-[#F7F8F9]"></div>

        <div class="flex flex-col justify-between items-center h-[48px] px-4">
          <div></div>
          <p class="text-[#2528AE] font-bold">상세정보</p>
          <div class="w-full border-b-[0.5px] border-[#C9CDD2]"></div>
        </div>

        <div class="w-full px-4 mt-[25px] mb-[52px]">
          <p className="mt-[29px] text-sm w-full whitespace-pre-line">
            {`한국전통문화대학교, 한국농수산대학도 대상 포함

인문100년장학금
신청기간: 2024. 3. 19.(화) ~ 2024. 4. 5.(금)
지원대상: 대한민국 국적 소지자로서 국내 4년제 대학 인문·사회계열 학과(부)에 재학 중인 1학년 또는 3학년
※ 계열구분은 선발년도 대학별 학과계열 분류체계에 따름
지원유형
전공탐색 I · II유형(최대 4년 지원) : 1학년 신입생
전공확립 I · II유형(최대 2년 지원) : 3학년 재학생
※ I유형: 등록금 + 생활비 지원, II유형: 등록금 지원
기본자격
전공확립유형(3학년)은 직전학기까지 총 평균성적 및 이수학점 기준 충족 필수
직전학기까지 총 평균 백분위점수 90점 이상 또는 평점 3.6이상/4.5만점(3.4이상/4.3만점), 취득 이수학점이 소속대학 졸업이수학점의 40% 이상`}
          </p>
        </div>

        <div class="w-full h-2 bg-[#F7F8F9]"></div>

        <div class="mx-4">
          <p class="mt-[22px] text-lg font-bold">추천 장학금 더 둘러보기</p>

          <div class="flex flex-col mt-[27px] gap-y-2">
            {card_data.map((data, index) => (
              <RecommendCardThree key={index} data={data} />
            ))}
          </div>
        </div>

        <div class="flex w-full h-20 mt-[41px] border-t-[0.3px] border-[#9CB6FF]">
          <div class="flex flex-col mt-2 items-center ml-4 text-center">
            <Image
              src="/assets/images/b/explore/images/bookmark_outline.svg"
              width={20}
              height={20}
              alt="bookmark"
            />
            <p class="w-[30px] text-[#4E60FF] text-[11px] mt-3">스크랩</p>
          </div>

          <div class="h-[37px] mt-[11px] mx-4 border-r-[0.5px] border-[#E8EBED]"></div>

          <div class="flex flex-col mt-2 items-center text-center">
            <Image
              src="/assets/images/b/explore/images/share.svg"
              width={20}
              height={20}
              alt="bookmark"
            />
            <p class="w-[30px] mt-[11px] text-[#4E60FF] text-[11px]">공유</p>
          </div>

          <div class="flex justify-center items-center w-full h-12 mt-2 ml-[26px] mr-4 bg-[#4E60FF] rounded-lg">
            <p class="text-[#FCFCFF] font-semibold text-sm">
              홈페이지 바로가기
            </p>
          </div>
        </div>
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
    bookmark: 120,
  },
  {
    title: "청년도약계좌",
    desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
    desc2: "만 19~34세 청년",
    type: "pop", // pop, recommend, end,
    view: 245,
    bookmark: 120,
  },
  {
    title: "청년도약계좌",
    desc1: "5년 만기 시 최대 5천만원 목돈 마련 가능",
    desc2: "만 19~34세 청년",
    type: "pop", // pop, recommend, end,
    view: 245,
    bookmark: 120,
  },
];
