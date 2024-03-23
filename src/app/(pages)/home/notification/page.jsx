import NotificationCard from '@/app/_components/common/NotificationCard';
import Image from 'next/image';

export default function Norification() {
  return (
    <div class="flex flex-col items-center">
      <div class="w-full max-w-[500px] pb-14">

        <div class="flex justify-between h-9 px-4 items-center">
          <a href="javascript:window.history.back();">
            <Image
              src="/assets/images/b/home/images/back.svg"
              width={24}
              height={24}
              alt="Back"
            />
          </a>

          <span>알림</span>

          <a href="/home">
            <Image
              src="/assets/images/b/home/images/close.svg"
              width={20}
              height={20}
              alt="Close"
            />
          </a>
        </div>

        <div class="flex justify-end pr-5">
          <p class="text-[11px]">전체삭제</p>
        </div>

        <div class="mt-3.5">

          {
            noti_data.map((data, index) => (
              <NotificationCard
                key={index}
                data={data}
              />
            ))
          }

        </div>


      </div>
    </div>

  );
}


const noti_data = [
  {
    title: "스크랩한 공고가 마감 1일 전이에요!",
    desc1: "인문100년장학금",
    desc2: "1분전",
    type: "", // "" or "ad"
    is_read: false
  },
  {
    title: "토스뱅크 자유적금 지금 가입하기",
    desc1: "토스뱅크",
    desc2: "바로가기",
    type: "ad", is_read: false
  },
  {
    title: "스크랩한 공고가 마감 1일 전이에요!",
    desc1: "대통령과학장학금",
    desc2: "03.19",
    type: "",
    is_read: true
  },
  {
    title: "스크랩한 공고가 마감 1일 전이에요!",
    desc1: "대통령과학장학금",
    desc2: "03.19",
    type: "ad",
    is_read: true
  }
];