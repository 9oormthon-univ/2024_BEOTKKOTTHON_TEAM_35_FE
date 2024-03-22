import BottomNav from "@/app/_components/bottom_nav";
import Image from "next/image";
import Link from "next/link";

export default function MyPage() {
    const userName = "돈버니";

    return(
        <div class="flex flex-col items-center">
            <div class="w-full max-w-[500px] pb-14">
                <div class="flex justify-center items-center h-[36px]">
                    <p class="font-medium">MY</p>
                </div>

                <div class="flex flex-col w-full px-4">
                    <div class="flex mt-[38px]">
                        <p class="text-[22px] text-[#020D19]">안녕하세요!</p>
                        <p class="text-[22px] text-[#020D19] font-bold ml-[9px]">{userName}님</p>
                    </div>
                    
                    
                    <Link href="./mypage/account" class="flex mt-3 items-center">
                        <p class="text-[#72787F] text-xs">donbunny@bunny.com</p>
                        <Image
                            src="/assets/images/b/mypage/images/right_arrow.svg"
                            width={12}
                            height={12}
                            class="ml-[6px]"
                            alt="arrow"
                        />
                    </Link>


                    <div class="flex justify-between items-center h-[56px] mt-[37px] pl-[19px] pr-4 border border-[#ECF3FF] rounded-xl">
                        <p class="font-medium text-[#020D19]">내 포인트</p>

                        <div class="flex items-center">
                            <p class="font-bold text-[#2528AE] text-[22px]">3200</p>
                            <p class="font-medium text-lg text-[#020D19] ml-[4px]">P</p>
                        </div>
                    </div>


                    <Link href="./mypage/point" class="flex justify-between items-center h-[56px] mt-3 px-4 border border-[#ECF3FF] rounded-xl">
                        <p class="font-medium text-[#020D19]">포인트 교환소</p>

                        <Image
                            src="/assets/images/b/mypage/images/right_arrow.svg"
                            width={16}
                            height={16}
                            alt="arrow"
                        />
                    </Link>

                    <div class="flex justify-between h-[43px] mt-4 items-center">
                        <p class="text-[#454C53]">푸쉬 알림 설정</p>



                        <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>


                    </div>
                    
                </div>

                <Image
                    src="/assets/images/b/mypage/images/my_banner.svg"
                    width={390}
                    height={100}
                    class="w-full mt-10 aspect-[39/10]"
                    alt="banner"
                />
                
                <div class="flex flex-col w-full px-4 mb-[50px]">

                    <Link href="./mypage/terms">
                        <p class="mt-[28px] text-[#020D19] font-medium">이용약관</p>
                    </Link>
                    <Link href="./mypage/account">
                        <p class="mt-[28px] text-[#020D19] font-medium">계정관리</p>
                    </Link>
                    <p class="mt-[22px] text-[#020D19] font-medium">고객센터</p>
                    <p class="mt-[22px] text-[#020D19] font-medium">1:1 문의</p>
                </div>

                <BottomNav />
            </div>
        </div>
    );
}