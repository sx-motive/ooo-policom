import s from './styles.module.scss';

import Breadcrumbs from '@/components/breadcrumbs';
import parser from 'html-react-parser';

interface IHero {
  breadcrumbs?: { title: string; slug: string }[] | undefined;
  title?: string;
  description?: string;
}

export default function Hero({ breadcrumbs, title, description }: IHero) {
  return (
    <div className={s.hero_wrap}>
      {breadcrumbs && <Breadcrumbs data={breadcrumbs} />}
      {title && <h1>{title}</h1>}
      {description && <div className={s.desc}>{parser(description)}</div>}
    </div>
  );
}
