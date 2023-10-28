'use client';

import s from './styles.module.scss';

import Link from 'next/link';
import SVG from 'react-inlinesvg';

import Container from '@/components/container';
import Button from '@/components/button';
import Modal from '@/modals';
import { modalAtom } from '@/store/modalAtom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

export default function Footer() {
  const modalState = useRecoilValue(modalAtom);
  const setModalState = useSetRecoilState(modalAtom);
  return (
    <>
      <footer className={s.footer}>
        <Container>
          <div className={s.wrap}>
            <div className={s.footer_top}>
              <div className={s.col_left}>
                <Link href='/'>
                  <SVG src='/assets/logo.svg' width={135} />
                </Link>
                <span className={s.subtitle}>Строительная компания</span>
                <div className={s.socials_wrap}>
                  <Link href='https://t.me/sxmotive' target='_blank'>
                    <SVG src='/assets/telegram.svg' />
                    Написать в Telegram
                  </Link>
                  <span onClick={() => setModalState({ active: true, type: 'form' })}>
                    <SVG src='/assets/phone.svg' />
                    Заказать звонок
                  </span>
                </div>
              </div>
              <div className={s.col_right}>
                <div className={s.menu_wrap}>
                  <span className={s.menu_title}>Навигация</span>
                  <ul>
                    <li>
                      <Button href='/about' type='underline'>
                        О компании
                      </Button>
                    </li>
                    <li>
                      <Button href='/services' type='underline'>
                        Услуги
                      </Button>
                    </li>
                    <li>
                      <Button href='/job' type='underline'>
                        Работа в компании
                      </Button>
                    </li>
                    <li>
                      <Button href='/contacts' type='underline'>
                        Контакты
                      </Button>
                    </li>
                  </ul>
                </div>
                <div className={s.menu_wrap}>
                  <span className={s.menu_title}>Контакты</span>
                  <ul>
                    <li>162610, Вологодская область, г. Череповец, ул. Ленина, д. 130, офис 14</li>
                    <li>+7 999 098-11-00</li>
                    <li>+7 921 138-88-83</li>
                    <li>89990981100@mail.ru</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={s.footer_bottom}>
              <div className={s.col_left}>
                © 2020-2023 «ТД ПОЛИКОМ». Все права защищены.
                <br /> ООО «ТОРГОВЫЙ ДОМ ПОЛИКОМ», ИНН № 3528268996.
              </div>
              <div className={s.col_right}>
                <ul>
                  <li>
                    <Link href='/policy'>Политика конфиденциальности</Link>
                  </li>
                  <li>
                    <Link href='/policy'>Пользовательское соглашение</Link>
                  </li>
                  {/* <li>
                    <Link href='/legal-information'>Юридическая информация</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      {modalState.active && <Modal />}
    </>
  );
}
