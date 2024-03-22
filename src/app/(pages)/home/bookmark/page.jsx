import Image from "next/image";
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";
import Tab4 from "./tab4";
import TabsComponent from "@/app/_components/home/TabsComponent";


export default function Bookmark() {
    return (
      <div class="flex flex-col items-center">
        <div class="w-full max-w-[500px] pb-14">

            <div class="flex justify-between h-9 px-4 mb-4 items-center">

                <a href="javascript:window.history.back();">
                    <Image
                        src="/assets/images/b/home/images/back.svg"
                        width={24}
                        height={24}
                        alt="Back"
                    />
                </a>
            
                <span>북마크</span>

                <a href="/home">
                    <Image
                        src="/assets/images/b/home/images/close.svg"
                        width={20}
                        height={20}
                        alt="Close"
                    />
                </a>
                


            </div>

            <TabsComponent items={items}/>
  
        </div>
      </div>
  
    );
  }


// 탭 아이템
const items = [
    {title: "전체", content: (<Tab1 />)},
    {title: "장학금", content: (<Tab2 />)},
    {title: "청년정책", content: (<Tab3 />)},
    {title: "금융상품", content: (<Tab4 />)},
  ]