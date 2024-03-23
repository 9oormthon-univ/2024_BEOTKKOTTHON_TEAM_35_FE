import Header from "@/app/_components/home/Header";
import BottomNav from "@/app/_components/bottom_nav";
import HomeTab from "./home";

export default function Home() {
  return (
    <div class="flex flex-col items-center">
      <div class="w-full max-w-[500px] pb-14">
        
        <Header />

        {/* <TabsComponent items={items}/> */}

        <HomeTab />

        <BottomNav />
      </div>

      
    </div>

  );
}