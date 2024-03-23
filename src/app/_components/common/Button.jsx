"use client";

const Button = ({ text, onClick }) => {
  return (
    <div
      class="cursor-pointer flex justify-center items-center w-full h-[54px] px-[16px] rounded-xl bg-[#4E60FF] text-[#FCFCFF] text-lg font-bold"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
