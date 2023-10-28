'use client';

import s from './styles.module.scss';
import Link from 'next/link';
import Button from '@/components/button';
import Container from '@/components/container';
import Announcement from '@/components/announcement';
import SVG from 'react-inlinesvg';
import { useSetRecoilState } from 'recoil';
import { mobileMenuAtom } from '@/store/mobileMenuAtom';
import { modalAtom } from '@/store/modalAtom';

export default function Header() {
  const setMobileState = useSetRecoilState(mobileMenuAtom);
  const setModalState = useSetRecoilState(modalAtom);
  return (
    <header className={s.header}>
      <Container width='layout'>
        <div className={s.wrap}>
          <div className={s.left_wrap}>
            <Link href='/' className={s.logo}>
              <SVG src='/assets/logo.svg' width={135} />
            </Link>
            <ul className={s.menu}>
              <li>
                <Button href='/' type='transparent'>
                  Главная
                </Button>
              </li>
              <li>
                <Button href='/services' type='transparent'>
                  Услуги
                </Button>
              </li>
              <li>
                <Button href='/about' type='transparent'>
                  О компании
                </Button>
              </li>
              <li>
                <Button href='/job' type='transparent'>
                  Вакансии
                </Button>
              </li>
              <li>
                <Button href='/contacts' type='transparent'>
                  Контакты
                </Button>
              </li>
            </ul>
          </div>
          <div className={s.contacts}>
            {/* <span className={s.quick_action}>
              <div className={s.icon}>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM4.988 6.608C4.95667 6.73411 4.87747 6.84306 4.76719 6.91178C4.65692 6.98051 4.52421 7.0036 4.3972 6.97617C4.27019 6.94874 4.15885 6.87294 4.08676 6.76483C4.01467 6.65672 3.9875 6.5248 4.011 6.397V6.392C4.07286 6.14468 4.18148 5.91149 4.331 5.705C4.49308 5.48025 4.70764 5.29853 4.95601 5.17565C5.20437 5.05278 5.47901 4.99248 5.756 5C6.308 5 6.757 5.215 7.064 5.561C7.362 5.898 7.502 6.333 7.502 6.75C7.502 7.099 7.433 7.398 7.297 7.656C7.17269 7.88565 6.99965 8.08532 6.79 8.241C6.6365 8.35497 6.4762 8.4595 6.31 8.554L6.254 8.588C6.086 8.688 5.948 8.775 5.829 8.878C5.435 9.219 5.177 9.58 5.065 10H7C7.13261 10 7.25979 10.0527 7.35355 10.1464C7.44732 10.2402 7.5 10.3674 7.5 10.5C7.5 10.6326 7.44732 10.7598 7.35355 10.8536C7.25979 10.9473 7.13261 11 7 11H4.5C4.36739 11 4.24021 10.9473 4.14645 10.8536C4.05268 10.7598 4 10.6326 4 10.5C4 9.49 4.475 8.726 5.173 8.122C5.363 7.956 5.569 7.832 5.74 7.729L5.798 7.694C5.92923 7.62053 6.0558 7.53904 6.177 7.45C6.27277 7.38145 6.35231 7.29269 6.41 7.19C6.47601 7.05306 6.50693 6.90186 6.5 6.75C6.50303 6.55787 6.43663 6.3711 6.313 6.224C6.203 6.1 6.03 6 5.753 6C5.423 6 5.248 6.146 5.139 6.295C5.07351 6.38604 5.02381 6.48746 4.992 6.595L4.988 6.608ZM9 5C9.13261 5 9.25979 5.05268 9.35355 5.14645C9.44732 5.24021 9.5 5.36739 9.5 5.5V8H11V5.5C11 5.36739 11.0527 5.24021 11.1464 5.14645C11.2402 5.05268 11.3674 5 11.5 5C11.6326 5 11.7598 5.05268 11.8536 5.14645C11.9473 5.24021 12 5.36739 12 5.5V10.5C12 10.6326 11.9473 10.7598 11.8536 10.8536C11.7598 10.9473 11.6326 11 11.5 11C11.3674 11 11.2402 10.9473 11.1464 10.8536C11.0527 10.7598 11 10.6326 11 10.5V9H9C8.86739 9 8.74021 8.94732 8.64645 8.85355C8.55268 8.75979 8.5 8.63261 8.5 8.5V5.5C8.5 5.36739 8.55268 5.24021 8.64645 5.14645C8.74021 5.05268 8.86739 5 9 5Z'
                    fill='#F6F6F6'
                  />
                </svg>
              </div>
              <div className={s.caption}>
                <span className={s.title}>Круглосуточная</span>
                <br />
                анонимная помощь
              </div>
            </span> */}
            <Link href='tel:+7 921 138-88-83'>
              <span className={s.quick_action}>
                <div className={s.icon}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    width='64'
                    height='64'
                    viewBox='0 0 64 64'
                    id='phone'>
                    <defs>
                      <path id='a' d='M.06 64V.04H64V64z' />
                    </defs>
                    <g fill='none' fillRule='evenodd'>
                      <mask id='b' fill='#fff'>
                        <use xlinkHref='#a' />
                      </mask>

                      <path
                        fill='#4C5665'
                        d='M47.996 41.011c-.831 5.224-4.231 6.825-4.375 6.891a1.087 1.087 0 0 1-.788.046c-.227-.075-.525-.155-.888-.256-4.704-1.302-19.016-5.263-25.903-26.629a1.081 1.081 0 0 1-.021-.589c.034-.14.903-3.5 6.677-4.458.214-.037.436-.009.635.085.211.096 5.212 2.448 5.629 7.242.029.305-.076.611-.283.836-1.639 1.776-3.064 3.96-2.988 4.582.131 1.106 3.603 6.939 9.82 9.978.927-.146 3.076-1.562 4.632-2.891.266-.227.62-.318.964-.229 4.932 1.196 6.71 4.58 6.784 4.724.105.205.142.441.105.668zM32 0C14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0z'
                        mask='url(#b)'
                      />
                    </g>
                  </svg>
                </div>
                <div className={s.caption}>
                  <span className={s.title}>+7 921 138-88-83</span>
                  <br />
                  Пн-Пт: с 10:00 до 17:00
                </div>
              </span>
            </Link>
            <div onClick={() => setModalState({ active: true, type: 'form' })}>
              <Button type='outline'>Обратный звонок</Button>
            </div>
          </div>
          <button className={s.menu_toggle} onClick={() => setMobileState((prev) => !prev)}>
            <svg width='384' height='224' viewBox='0 0 384 224' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M16 16H368M16 112H368M16 208H368'
                stroke='black'
                strokeWidth='32'
                strokeMiterlimit='10'
                strokeLinecap='round'
              />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}
