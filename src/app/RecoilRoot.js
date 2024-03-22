'use client';

import { RecoilRoot } from 'recoil';
import React from 'react';

export default function RecoilRootWrapper({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
