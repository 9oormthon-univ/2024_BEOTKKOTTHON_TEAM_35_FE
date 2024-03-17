import BottomNav from "@/app/_components/bottom_nav";
import TabsComponent from "@/app/_components/home/TabsComponent";

export default function Home() {
  return (
    <div>
      <div class="flex flex-col content-center items-center w-full mb-14">
        <div class="flex flex-col content-center items-center w-full max-w-[500px] h-screen">

          <div class="flex flex-col px-4 items-center w-full py-2 bg-[#4e60ff]">
          {/* <div class="flex flex-col px-4 items-center w-full h-16 bg-[#4e60ff]"> */}
            <div class="flex justify-between w-full">
              <div>
                <p class="text-white text-xl font-bold">돈버니</p>
              </div>

              <div>
                <span>icon 1</span>
                <span>icon 2</span>
              </div>
            </div>


            <div class="group w-full">
              <div class="relative flex items-center">
                <input id="5" type="text" class="peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-10 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg" />
                <span class="material-symbols-outlined absolute right-2 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">icon</span>
              </div>
            </div>

          </div>

          <div class="w-full">
            <TabsComponent items={items}/>
          </div>


        </div>

        <BottomNav />
      </div>

      
    </div>

  );
}

// 탭 아이템
const items = [
  {title: "홈", content: (<div>홈 content</div>)},
  {title: "장학금", content: (<div>장학금 content</div>)},
  {title: "청년정책", content: (<div>청년정책 content</div>)},
  {title: "금융상품", content: (<div>금융상품 content</div>)},
  {title: "챌린지", content: (<div>챌린지 content</div>)},
]