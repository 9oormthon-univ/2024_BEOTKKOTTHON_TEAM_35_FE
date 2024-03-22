import Image from "next/image";

const AnswerButton = ({ value, text, onClick, answer }) => {
  return (
    <div
      className={`flex w-full "h-[36px]"
      } justify-between items-center px-[15px] py-[9px] rounded-lg ${
        value ? "bg-[#ECF3FF] border border-[#4E60FF]" : "bg-[#F7F8F9]"
      }`}
      onClick={onClick}
    >
      <div
        className={`text-[14px] font-normal ${
          value ? "text-[#4E60FF]" : "text-[#020D19]"
        }`}
      >
        {text}
      </div>
      {value && answer ? (
        <Image
          src={`/assets/icons/check-blue.svg`}
          width={16}
          height={16}
          alt="radio"
        />
      ) : value ? (
        <Image
          src={`/assets/icons/radio.svg`}
          width={16}
          height={16}
          alt="radio"
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

export default AnswerButton;
