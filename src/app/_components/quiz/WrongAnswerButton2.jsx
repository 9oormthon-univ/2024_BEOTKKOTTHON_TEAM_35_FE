import Image from "next/image";

const WrongAnswerButton2 = ({ value, text, onClick, real, status }) => {
  return (
    <div
      className={`cursor-pointer flex w-full shadow-[0_2px_15px_0px_rgba(0,0,0,0.03)] ${
        real ? "h-[54px]" : "h-[36px]"
      } justify-between items-center px-[15px] py-[9px] rounded-lg ${
        value && status == "wrong2"
          ? "bg-[#FFF0F0] border border-[#FF475D]"
          : value
          ? "bg-[#ECF3FF] border border-[#4E60FF]"
          : "bg-[#FCFCFF] border border-[#E8EBED]"
      }`}
      onClick={onClick}
    >
      {real ? <div className="size-[16px]" /> : ""}
      <div
        className={`${real ? "text-[18px]" : "text-[14px]"}  font-bold ${
          value && status == "wrong2"
            ? "text-[#FF475D]"
            : value
            ? "text-[#4E60FF]"
            : "text-[#020D19]"
        }`}
      >
        {text}
      </div>
      {value && status == null ? (
        <Image
          src={`/assets/icons/radio.svg`}
          width={16}
          height={16}
          alt="radio"
        />
      ) : status == "wrong2" ? (
        <Image src={`/assets/icons/x-red.svg`} width={16} height={16} alt="x" />
      ) : (
        <Image
          src={`/assets/icons/radio-disabled.svg`}
          width={16}
          height={16}
          alt="radio"
        />
      )}
    </div>
  );
};

export default WrongAnswerButton2;
