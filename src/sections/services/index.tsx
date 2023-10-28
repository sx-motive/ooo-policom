'use client';

import { useState } from 'react';

import Image from '@/components/image';
import s from './styles.module.scss';
import Link from 'next/link';
import Button from '@/components/button';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
export default function Services({ data, type, mainOnly }: { data: any; type: 'grid' | 'slider'; mainOnly: boolean }) {
  return (
    <div className={`${s.services} ${type && s[type]}`}>
      <ul className={s.services_list}>
        {data.map((item: any) => {
          return (
            <li className={s.service} key={item.id}>
              <Link href={`/services/${item.slug}`}>
                <div className={s.image_wrap}>
                  <Image
                    src={item.image ? `${backendUrl}/api/files/services/${item.id}/${item.image}` : null}
                    alt={item.title}
                  />
                </div>
                <h3 className={s.title}>
                  {item.title}
                  <span className={s.read_more}>Узнать подробнее</span>
                </h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
