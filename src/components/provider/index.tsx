'use client';

import { RecoilRoot } from 'recoil';

function Root({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default Root;
