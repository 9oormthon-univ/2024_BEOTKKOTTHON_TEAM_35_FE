import Header from "@/app/_components/home/Header";
import BottomNav from "@/app/_components/bottom_nav";
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";
import Tab4 from "./tab4";
import Tab5 from "./tab5";
import TabsComponent from "@/app/_components/home/TabsComponent";

export default function Home() {
  return (
    <div class="flex flex-col items-center">
      <div class="w-full max-w-[500px] pb-14">
        
        <Header />

        <TabsComponent items={items}/>

        <BottomNav />
      </div>

      
    </div>

  );
}

// 탭 아이템
const items = [
  {title: "홈", content: (<Tab1 />)},
  {title: "장학금", content: (<Tab2 />)},
  {title: "청년정책", content: (<Tab3 />)},
  {title: "금융상품", content: (<Tab4 />)},
  {title: "챌린지", content: (<Tab5 />)},
]