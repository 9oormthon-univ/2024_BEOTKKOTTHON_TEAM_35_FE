import Image from "next/image";

const KakaoButton = () => {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;

  const handelKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (

    <div class="cursor-pointer flex justify-between items-center w-full h-[54px] px-5 py-4 rounded-xl bg-[#FEE500]"
      onClick={handelKakaoLogin}
    >
      <Image src="/assets/icons/kakao.svg" width={18} height={16} alt="kakao" />
      <div>카카오 로그인</div>
      <div className="size-[16px]" />
    </div>
  );
};

export default KakaoButton;
