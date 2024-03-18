"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/first");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="flex flex-col content-center items-center w-full h-full">
        <div className="flex flex-col content-center items-center w-full max-w-[500px] h-screen bg-[#4e60ff]">
          <div className="flex flex-col px-4 items-center justify-center w-full h-full py-2">
            <Image
              src="/assets/icons/mainlogo_white.svg"
              width={144}
              height={63}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
