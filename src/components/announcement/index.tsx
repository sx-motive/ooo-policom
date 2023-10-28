'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import Marquee from 'react-fast-marquee';
import s from './styles.module.scss';

export default function Announcement({ children }: { children: React.ReactNode }) {
  const params = useSearchParams();
  const pathname = usePathname();

  const [announcementState, setAnnouncementState] = useState(false);
  useEffect(() => {
    if (params.has('announcement')) setAnnouncementState(true);
  }, []);

  if (announcementState) {
    return (
      <>
        <Marquee autoFill pauseOnHover speed={40} className={`${s.announcement} ${pathname !== '/' ? s.fixed : ''}`}>
          {children}
        </Marquee>
        {pathname !== '/' && (
          <button className={s.close_announcement} onClick={() => setAnnouncementState(false)}>
            <svg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M1 1L10 10M10 1L1 10' stroke='black' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </button>
        )}
      </>
    );
  }
  return null;
}
