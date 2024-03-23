"use client";

const SelectLocation = ({ text, onClick, isSelected }) => {
  return (
    <div
      class={`flex justify-center items-center w-[60px] h-[30px] rounded-[5px] ${isSelected ? "bg-[#ECF3FF] text-[#2528AE]" : "text-[#020D19]"}   font-medium`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default SelectLocation;
