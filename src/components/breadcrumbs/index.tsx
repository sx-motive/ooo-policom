import s from './styles.module.scss';
import Link from 'next/link';

interface IBreadcrumbs {
  data: { title: string; slug: string }[] | undefined;
}

export default function Breadcrumbs({ data }: IBreadcrumbs) {
  if (data === undefined) return null;
  return (
    <ul className={s.breadcrumbs}>
      <li>
        <Link href='/'>Главная</Link>
      </li>
      {data.map((item) => {
        if (item.slug) {
          return (
            <>
              <span className={s.separator}>/</span>
              <li key={item.title}>
                <Link href={item.slug}>{item.title}</Link>
              </li>
            </>
          );
        }
      })}
    </ul>
  );
}
