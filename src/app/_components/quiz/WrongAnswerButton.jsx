import Image from "next/image";

const WrongAnswerButton = ({ value, text, onClick, real, status }) => {
  return (
    <div
      className={`flex w-full ${
        real ? "h-[54px]" : "h-[36px]"
      } justify-between items-center px-[15px] py-[9px] rounded-lg ${
        value && status == "wrong1"
          ? "bg-[#FFF0F0] border border-[#FF475D]"
          : value
          ? "bg-[#ECF3FF] border border-[#4E60FF]"
          : "bg-[#F7F8F9]"
      }`}
      onClick={onClick}
    >
      {real ? <div className="size-[16px]" /> : ""}
      <div
        className={`${real ? "text-[18px]" : "text-[14px]"}  font-bold ${
          value && status == "wrong1"
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
      ) : status == "wrong1" ? (
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

export default WrongAnswerButton;
