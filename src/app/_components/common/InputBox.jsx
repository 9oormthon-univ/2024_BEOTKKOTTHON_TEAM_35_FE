"use client";

import Image from "next/image";
import { useState } from "react";

const InputBox = ({
  value,
  setValue,
  placeholder,
  validate,
  max,
  type,
  onBlur,
}) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClearInput = () => {
    setValue("");
  };

  console.log("Vv", validate);

  return (
    <div className="w-full relative">
      <input
        className={`w-full h-[54px] px-[24px] py-[16px] rounded-xl border focus:border-[#4E60FF] border-${
          value ? (validate ? "[#4E60FF]" : "[#FF4B4B]") : "[#C9CDD2]"
        } text-[#020D19] placeholder:text-[#9EA4AA] focus:outline-none`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        maxLength={max}
        type={type}
        onBlur={onBlur}
      />
      {value && (
        <div
          className="absolute right-[24px] top-[50%] transform -translate-y-1/2 cursor-pointer"
          onClick={handleClearInput}
        >
          <Image
            src="/assets/icons/x-circle.svg"
            width={20}
            height={20}
            alt="Clear input"
          />
        </div>
      )}
    </div>
  );
};

export default InputBox;
