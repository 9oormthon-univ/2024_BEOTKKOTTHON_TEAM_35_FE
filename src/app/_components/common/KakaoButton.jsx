import Image from "next/image";

const KakaoButton = () => {
  return (
    <div class="flex justify-between items-center w-full h-[54px] px-5 py-4 rounded-xl bg-[#FEE500]">
      <Image src="/assets/icons/kakao.svg" width={18} height={16} alt="kakao" />
      <div>카카오 로그인</div>
      <div class="size-[16px]" />
    </div>
  );
};

export default KakaoButton;
