"use client";

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

const useNavigation = () => {
  const pathname = usePathname();
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isExploreActive, setIsExploreActive] = useState(false);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isMyPageActive, setIsMyPageActive] = useState(false);

  useEffect(() => {
    setIsHomeActive(false);
    setIsExploreActive(false);
    setIsQuizActive(false);
    setIsMyPageActive(false);

    switch (pathname) {
      case '/home':
        setIsHomeActive(true);
        break;
      case '/explore':
        setIsExploreActive(true);
        break;
      case '/quiz':
        setIsQuizActive(true);
        break;
      case '/mypage':
        setIsMyPageActive(true);
        break;
      default:
        // Handle any other cases here
        break;
    }
  }, [pathname]);

  return {
    isHomeActive,
    isExploreActive,
    isQuizActive,
    isMyPageActive,
  };
};

export default useNavigation;