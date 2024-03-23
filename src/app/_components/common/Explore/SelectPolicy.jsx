"use client";

const SelectPolicy = ({ text, onClick, isSelected }) => {
  return (
    <div
      class={`cursor-pointer flex justify-center items-center px-4 h-[30px] rounded-[5px] ${isSelected ? "bg-[#ECF3FF] text-[#2528AE]" : "text-[#020D19]"}   font-medium`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default SelectPolicy;
