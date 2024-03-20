import Image from "next/image";

const LockStageBox = ({ num }) => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-[120px] border border-[#C9CDD2] bg-[#E8EBED] rounded-xl shadow-[0_1px_20px_0px_rgba(0,0,0,0.05)]">
      <Image src="/assets/icons/lock.svg" width={20} height={20} alt="next" />
      <div className="absolute bottom-0 mb-[17px] text-[#C9CDD2] text-[20px] font-bold">
        stage {num}
      </div>
    </div>
  );
};

export default LockStageBox;
