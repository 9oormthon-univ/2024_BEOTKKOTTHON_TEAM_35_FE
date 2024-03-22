import Image from "next/image";

const CorrectAnswerButton = ({
  value,
  text,
  onClick,
  real,
  status,
  realAnswer,
}) => {
  return (
    <div
      className={`flex w-full shadow-[0_2px_15px_0px_rgba(0,0,0,0.03)] ${
        real ? "h-[54px]" : "h-[36px]"
      } justify-between items-center px-[15px] py-[9px] rounded-xl ${
        value || realAnswer == "correct"
          ? "bg-[#ECF3FF] border border-[#4E60FF]"
          : "bg-[#FCFCFF] border border-[#E8EBED]"
      }`}
      onClick={onClick}
    >
      {real ? <div className="size-[16px]" /> : ""}
      <div
        className={`${real ? "text-[18px]" : "text-[14px]"}  font-bold ${
          (value && status == "correct") || realAnswer == "correct"
            ? "text-[#2528AE]"
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
      ) : status == "correct" || realAnswer == "correct" ? (
        <Image
          src={`/assets/icons/check-blue.svg`}
          width={16}
          height={16}
          alt="x"
        />
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

export default CorrectAnswerButton;
