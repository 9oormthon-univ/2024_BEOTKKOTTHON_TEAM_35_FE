"use client";

import Image from "next/image";
import Link from "next/link";

const AgreeButton = ({ num, text, agree, onClick, next }) => {
  console.log(num);
  return (
    <div className="w-full flex h-[36px] items-center">
      <div className="w-full flex items-center" onClick={onClick}>
        <Image
          src={
            agree
              ? "/assets/icons/check-circle.svg"
              : "/assets/icons/check-circle-disable.svg"
          }
          width={20}
          height={20}
          alt="check"
        />
        <div className="ml-[12px] text-xs">{text}</div>
      </div>
      {next && (
        <a href={`/agree${num}`}>
          <Image
            src="/assets/icons/next-arrow.svg"
            width={12}
            height={12}
            alt="next"
          />
        </a>
      )}
    </div>
  );
};

export default AgreeButton;
