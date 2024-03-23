"use client";

const BorderButton = ({ text }) => {
  return (
    <div class="cursor-pointer flex justify-center items-center w-full h-[54px] px-[16px] rounded-xl border border-[#4E60FF] text-[#4E60FF]">
      {text}
    </div>
  );
};

export default BorderButton;
