import Image from "next/image";
import { useState } from "react";

const WrongAnswerButton = ({
  value,
  text,
  onClick,
  real,
  status,
  blockClick,
}) => {
  const [clicked, setClicked] = useState(false); // 클릭 여부 상태 관리

  const handleClick = () => {
    if (!blockClick) {
      onClick(); // 클릭 이벤트가 허용되면 onClick 함수 호출
      setClicked(true); // 클릭 여부 상태 업데이트
    }
  };

  return (
    <div
      className={`flex w-full shadow-[0_2px_15px_0px_rgba(0,0,0,0.03)] ${
        real ? "h-[54px]" : "h-[36px]"
      } cursor-pointer justify-between items-center px-[15px] py-[9px] rounded-lg ${
        value && status == "wrong1"
          ? "bg-[#FFF0F0] border border-[#FF475D]"
          : value
          ? "bg-[#ECF3FF] border border-[#4E60FF]"
          : "bg-[#FCFCFF] border border-[#E8EBED]"
      }`}
      onClick={handleClick}
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
