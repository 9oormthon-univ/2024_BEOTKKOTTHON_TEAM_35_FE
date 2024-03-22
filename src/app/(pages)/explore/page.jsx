import Header from "@/app/_components/home/Header";
import TabsComponent from "@/app/_components/home/TabsComponent";
import BottomNav from "@/app/_components/bottom_nav";

import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";
import Tab4 from "./tab4";

export default function Explore() {
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

  const items = [
    {title: "장학금", content: (<Tab1 />)},
    {title: "청년정책", content: (<Tab2 />)},
    {title: "금융상품", content: (<Tab3 />)},
    {title: "챌린지", content: (<Tab4 />)},
  ]