"use client";

import Image from "next/image";

const CategoryBox = ({ title, imgNum }) => {
  return (
    <div className="flex flex-col justify-between w-full rounded-xl bg-[#FCFCFF] shadow-[0_1px_20px_0px_rgba(0,0,0,0.05)] px-[16px] py-[18px] hover:shadow-[0_1px_20px_0px_rgba(0,0,0,0.1)]">
      <div className="w-full flex justify-between items-center">
        <div className="text-[18px] font-bold">{title}</div>
        <Image
          src="/assets/icons/next-arrow.svg"
          width={20}
          height={20}
          alt="next"
        />
      </div>
      <div className="flex justify-end mt-[17px] mb-[-8px]">
        <Image
          src={`/assets/images/category${imgNum}.svg`}
          width={100}
          height={100}
          alt="category"
        />
      </div>
    </div>
  );
};

export default CategoryBox;
