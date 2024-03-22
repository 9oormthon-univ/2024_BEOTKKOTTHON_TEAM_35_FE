import localFont from 'next/font/local'

import Link from 'next/link';
import Alarm from '../../(pages)/home/images/alarm.svg';
import Bookmark from '../../(pages)/home/images/bookmark_off.svg';
import Search from '../../(pages)/home/images/search.svg';


const JalnanFont = localFont({
  src: [
    {
      path: "../../../fonts/JalnanGothic.otf",
      weight: "normal",
      style: "normal",
    },
  ],
})

export default function Header() {
    return(
        <div class="flex flex-col content-center items-center w-full">

          <div class="flex flex-col px-4 pb-2.5 items-center w-full h-[94px]">
          {/* <div class="flex flex-col px-4 items-center w-full h-16 bg-[#4e60ff]"> */}
            <div class="flex justify-between w-full">
              <div>
                <p class={`${JalnanFont.className} mt-3 text-[#4E60FF] text-2xl font-bold`}>돈버니</p>
                {/* Jalnan Gothic 폰트 적용 필요 */}
              </div>

              <div class="flex items-center mt-3 gap-x-[15px]">
                <Link href="/home/bookmark">
                  <Bookmark />
                </Link>
                
                <Link href="/home/notification">
                  <Alarm />
                </Link>
              </div>
            </div>


            <div class="group w-full mt-[5px]">
              <div class="relative flex items-center">
                <input
                    type="text"
                    placeholder="2024 청년정부지원금"
                    class="peer relative h-10 w-full text-sm rounded-md bg-gray-50 pl-4 pr-10 outline-none drop-shadow-sm transition-all duration-200 ease-in-out" 
                />
                <span class="material-symbols-outlined absolute right-2 transition-all duration-200 ease-in-out">
                  <Search />
                </span>
              </div>
            </div>

          </div>

        </div>
    );
}