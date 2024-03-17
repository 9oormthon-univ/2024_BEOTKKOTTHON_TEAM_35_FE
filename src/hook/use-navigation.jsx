"use client";

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

const useNavigation = () => {
  const pathname = usePathname();
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isTab1Active, setIsTab1Active] = useState(false);
  const [isTab2Active, setIsTab2Active] = useState(false);
  const [isMyPageActive, setIsMyPageActive] = useState(false);

  useEffect(() => {
    setIsHomeActive(false);
    setIsTab1Active(false);
    setIsTab2Active(false);
    setIsMyPageActive(false);

    switch (pathname) {
      case '/home':
        setIsHomeActive(true);
        break;
      case '/tab1':
        setIsTab1Active(true);
        break;
      case '/home':
        setIsTab2Active(true);
        break;
      case '/tab1':
        setIsMyPageActive(true);
        break;
      default:
        // Handle any other cases here
        break;
    }
  }, [pathname]);

  return {
    isHomeActive,
    isTab1Active,
    isTab2Active,
    isMyPageActive,
  };
};

export default useNavigation;