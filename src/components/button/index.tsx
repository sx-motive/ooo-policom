'use client';

import s from './styles.module.scss';
import Link from 'next/link';

interface IButton {
  children: React.ReactNode | string;
  href?: string | null | undefined;
  type: 'outline' | 'solid' | 'underline' | 'transparent';
  reverse?: boolean;
}

export default function Button({ children, href, type, reverse }: IButton) {
  if (!href)
    return (
      <div className={`${s.button} ${type == 'solid' || type == 'outline' ? s.skew : ''} ${reverse && s.reverse} ${s[type]}`}>
        <span data-text={children}>{children}</span>
        {type == 'outline' ||
          (type == 'solid' && (
            <div className={s.ripple}>
              <div className={s.ripple_span}></div>
            </div>
          ))}
      </div>
    );
  return (
    <Link href={href} className={`${s.button} ${type == 'solid' || type == 'outline' ? s.skew : ''} ${reverse && s.reverse} ${s[type]}`}>
      <span data-text={children}>{children}</span>
      {type == 'outline' ||
        (type == 'solid' && (
          <div className={s.ripple}>
            <div className={s.ripple_span}></div>
          </div>
        ))}
    </Link>
  );
}
