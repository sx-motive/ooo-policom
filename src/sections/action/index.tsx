'use client';

import { modalAtom } from '@/store/modalAtom';
import s from './styles.module.scss';
import Container from '@/components/container';
import Link from 'next/link';
import SVG from 'react-inlinesvg';
import { useSetRecoilState } from 'recoil';

export default function Action() {
  const setModalState = useSetRecoilState(modalAtom);
  return (
    <section className={s.call}>
      <Container>
        <div className={s.wrap}>
          <div className={s.feedback} onClick={() => setModalState({ active: true, type: 'form' })}>
            <div className={s.icon}>
              <SVG src='/assets/phone.svg' />
            </div>
            <div className={s.caption}>
              <span className={s.title}>Позвонить сейчас</span>
              <span className={s.desc}>Позвоните нам сейчас и мы ответим на все вопросы!</span>
            </div>{' '}
          </div>
          <div className={`${s.feedback} ${s.call_back}`} onClick={() => setModalState({ active: true, type: 'form' })}>
            <div className={s.icon}>
              <SVG src='/assets/feedback.svg' />
            </div>
            <div className={s.caption}>
              <span className={s.title}>Заявка на обратный звонок</span>
              <span className={s.desc}>
                Оставьте заявку на звонок и мы перезвоним, ответим на все вопросы в самое ближайшее время.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
