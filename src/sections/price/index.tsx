'use client';

import React from 'react';
import s from './styles.module.scss';
import Container from '@/components/container';
import Button from '@/components/button';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { modalAtom } from '@/store/modalAtom';
import { serviceAtom } from '@/store/serviceAtom';

export default function Price({ categories, data }: { categories: string[]; data: any }) {
  const setModalState = useSetRecoilState(modalAtom);
  const setServiceState = useSetRecoilState(serviceAtom);
  return (
    <section className={s.list}>
      <Container>
        {categories.map((category: any) => {
          return (
            <div key={category}>
              <h2 className={s.category_title}>{category}</h2>
              {category == 'Кодирование' && (
                <p>
                  &#34;Кодирование&#34; является психотерапевтическим методом лечения алкоголизма, суть которого заключается в формировании в мозгу больного так называемой
                  доминанты трезвости. Ниже вы можете ознакомится с ценами на услуги кодирования в клинике Хорошо и Точка. А также получить консультацию и заказать услугу на месте.
                </p>
              )}

              <ul className={s.services_list}>
                {data.map((item: any) => {
                  if (item.category === category) {
                    return (
                      <li className={s.service} key={item.id}>
                        <Link href={`/services/${item.slug}`}>
                          <h3 className={s.title}>{item.title.length > 40 ? item.title.slice(0, 40) + '...' : item.title}</h3>
                        </Link>

                        <div className={s.info_wrap}>
                          <span className={s.price}>
                            {item.price} <span>₽</span>
                          </span>
                          <div className={s.buttons_wrap}>
                            <Button href={`/services/${item.slug}`} type='outline'>
                              Подробнее
                            </Button>
                            <span
                              onClick={() => {
                                setServiceState({ label: item.title, value: item.id });
                                setModalState({ active: true, type: 'form' });
                              }}
                            >
                              <Button type='solid' reverse>
                                Заказать услугу
                              </Button>
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
