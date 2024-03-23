import Image from "next/image";
import Link from "next/link";

const StageBox = ({ num }) => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-[120px] border border-[#4E60FF] bg-[#ECF3FF] rounded-xl shadow-[0_1px_20px_0px_rgba(0,0,0,0.03)]">
      <div className="flex text-[#4E60FF] text-[22px] font-bold">
        stage {num}
      </div>
      <div className="absolute right-0 bottom-0 mr-[11px] mb-[15px] pl-[13px] pr-[10px] py-[8px] rounded-[20px] bg-[#FCFCFF] flex items-center shadow-md">
        <a href="/quiz/stage/1">
          <div className="mr-[5px] text-[12px] text-[#4E60FF]">시작하기</div>
        </a>
        <Image
          src="/assets/icons/next-arrow-blue.svg"
          width={7}
          height={10}
          alt="next"
        />
      </div>
    </div>
  );
};

export default StageBox;
