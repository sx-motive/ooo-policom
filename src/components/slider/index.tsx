'use client';

import { useState, useEffect } from 'react';
import s from './styles.module.scss';
import Image from '@/components/image';
import SVG from 'react-inlinesvg';

interface ISlide {
  id: number;
  subtitle: string;
  title: string;
  desc?: string;
  bg: string;
  color: string;
  image?: string;
}

export default function Slider({ data, speed }: { data: ISlide[]; speed: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ul className={s.slider}>
        {data.map((item, index) => {
          return (
            <li key={item.id} className={`${s.slide} ${current === index ? s.active : ''}`}>
              <div className={`${item.color == 'white' ? s.white : s.black} ${s.content}`}>
                <div className={s.subtitle}>{item.subtitle && item.subtitle}</div>
                <div className={s.title}>{item.title && item.title}</div>
                <div className={s.desc}>{item.desc && item.desc}</div>
              </div>
              {item.image && (
                <div className={s.image_wrap}>
                  <Image src={item.image} alt={item.title} />
                </div>
              )}
              <div className={s.bg} style={{ backgroundColor: `${item.bg ? item.bg : '#f8f8f8'}` }}></div>
            </li>
          );
        })}
      </ul>

      <SVG src='/assets/angle-left.svg' className={s.prev} onClick={() => setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1))} />
      <SVG src='/assets/angle-right.svg' className={s.next} onClick={() => setCurrent((prev) => (data.length - 1 === prev ? 0 : prev + 1))} />
    </>
  );
}
