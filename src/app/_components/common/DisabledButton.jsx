"use client";

const DisabledButton = ({ text }) => {
  return (
    <div class="flex justify-center items-center w-full h-[54px] px-[16px] rounded-xl bg-[#F7F8F9] text-[#C9CDD2] text-lg font-bold">
      {text}
    </div>
  );
};

export default DisabledButton;
