'use client';

import Link from 'next/link';
import s from './styles.module.scss';
import { mobileMenuAtom } from '@/store/mobileMenuAtom';
import { useRecoilState } from 'recoil';
import SVG from 'react-inlinesvg';
import { useEffect } from 'react';

export default function MobileMenu() {
  const [mobileMenuState, setMobileMenuState] = useRecoilState(mobileMenuAtom);

  useEffect(() => {
    if (mobileMenuState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuState]);

  return (
    <div className={s.mobile_menu + ' ' + (mobileMenuState && s.active)}>
      <div className={s.wrap}>
        <ul className={s.menu}>
          <li onClick={() => setMobileMenuState(false)}>
            <Link href='/'>Главная</Link>
          </li>
          <li onClick={() => setMobileMenuState(false)}>
            <Link href='/services'>Услуги</Link>
          </li>
          <li onClick={() => setMobileMenuState(false)}>
            <Link href='/about'>О компании</Link>
          </li>
          <li onClick={() => setMobileMenuState(false)}>
            <Link href='/job'>Работа в компании</Link>
          </li>
          <li onClick={() => setMobileMenuState(false)}>
            <Link href='/contacts'>Контакты</Link>
          </li>
        </ul>
        <div className={s.socials_wrap}>
          <Link href='https://t.me/sxmotive' target='_blank'>
            <SVG src='/assets/telegram.svg' />
            Написать в Telegram
          </Link>
          <Link href='https://t.me/sxmotive' target='_blank'>
            <SVG src='/assets/phone.svg' />
            Заказать звонок
          </Link>
        </div>
      </div>
    </div>
  );
}
