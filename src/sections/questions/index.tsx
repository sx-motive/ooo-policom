'use client';

import React from 'react';
import s from './styles.module.scss';
import Container from '@/components/container';
import Button from '@/components/button';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { modalAtom } from '@/store/modalAtom';
import { useSetRecoilState } from 'recoil';

export default function Questions() {
  const setModalState = useSetRecoilState(modalAtom);
  return (
    <section className={s.questions}>
      <Container>
        <div className={s.questions_wrap}>
          <h2>Вопросы и ответы</h2>
          <Accordion className={s.accordion} allowMultipleExpanded allowZeroExpanded>
            <AccordionItem className={s.item}>
              <AccordionItemHeading>
                <AccordionItemButton className={s.item_title}>
                  Строит ли Ваша компания зимой?
                  <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82322 13.2374C7.53033 12.9445 7.53033 12.4697 7.82322 12.1768L8.17678 11.8232C8.46967 11.5303 8.94454 11.5303 9.23744 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z'
                      fill='black'
                    />
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={s.item_content}>
                <p>
                  Да, наша фирма производит строительные работы в зимний период. Строительство фундаментов мы производим
                  при окружающей температуре до -5 градусов.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={s.item}>
              <AccordionItemHeading>
                <AccordionItemButton className={s.item_title}>
                  Сколько стоит построить дом под ключ?
                  <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82322 13.2374C7.53033 12.9445 7.53033 12.4697 7.82322 12.1768L8.17678 11.8232C8.46967 11.5303 8.94454 11.5303 9.23744 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z'
                      fill='black'
                    />
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={s.item_content}>
                <p>
                  Уверены, что этот, наверное самый распространенный вопрос, приводит в замешательство менеджера любой
                  строительной компании. Ответить на такой вопрос однозначно можно только после детального изучения
                  Ваших пожеланий и возможностей — разброс цен на применяемые строительные материалы огромен. Особенно
                  это касается отделочных материалов.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={s.item}>
              <AccordionItemHeading>
                <AccordionItemButton className={s.item_title}>
                  В подготовленной вами смете на строительство есть графа «накладные расходы». Что это такое?
                  <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82322 13.2374C7.53033 12.9445 7.53033 12.4697 7.82322 12.1768L8.17678 11.8232C8.46967 11.5303 8.94454 11.5303 9.23744 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z'
                      fill='black'
                    />
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={s.item_content}>
                <p>
                  Любая строительная компания несет определенные затраты по сопровождению объекта. Это выезд прораба и
                  контроль за объектом, связь, составление чертежей, амортизация инструмента, частичная зарплата
                  административного персонала, сопровождение проекта, привоз и вывоз оборудования, привоз и вывоз
                  рабочих, определенные расходные материалы (перчатки, кисти, пр.).
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={s.item}>
              <AccordionItemHeading>
                <AccordionItemButton className={s.item_title}>
                  Даете ли вы гарантию на выполненные работы?
                  <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82322 13.2374C7.53033 12.9445 7.53033 12.4697 7.82322 12.1768L8.17678 11.8232C8.46967 11.5303 8.94454 11.5303 9.23744 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z'
                      fill='black'
                    />
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={s.item_content}>
                <p>По договору подряда мы предоставляем гарантию на 5 лет на все выполненные работы.</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={s.item}>
              <AccordionItemHeading>
                <AccordionItemButton className={s.item_title}>
                  Можно ли заливать фундамент зимой?
                  <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82322 13.2374C7.53033 12.9445 7.53033 12.4697 7.82322 12.1768L8.17678 11.8232C8.46967 11.5303 8.94454 11.5303 9.23744 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z'
                      fill='black'
                    />
                  </svg>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={s.item_content}>
                <p>
                  Наша фирма производит укладку бетона при температуре окружающего воздуха до минус 5 градусов. При этом
                  мы используем противоморозные добавки, которые препятствуют кристаллизации воды во время «схватывания»
                  бетона.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className={s.ask_wrap}>
          <h3>Остались вопросы?</h3>
          <p>Не стесняйтесь их задать — на все ответим</p>
          <div onClick={() => setModalState({ active: true, type: 'form' })}>
            <Button type='outline'>Задать вопрос менеджеру</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
