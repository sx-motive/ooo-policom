import Container from '@/components/container';
import Hero from '@/sections/hero';
import s from './styles.module.scss';
import Link from 'next/link';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const getData = async () => {
  const res = await fetch(`${backendUrl}/api/collections/contacts_PAGE/records`);
  const data = await res.json();

  return data.items[0];
};

export default async function Contacts() {
  const data = await getData();

  const heroData = {
    breadcrumbs: [{ title: data.title, slug: '/contacts' }],
    title: data.title,
    description: data.subtitle,
  };

  return (
    <>
      <section className={s.hero}>
        <Container>
          <div className={s.wrap}>
            <Hero {...heroData} />
          </div>
        </Container>
      </section>
      <section className={s.content}>
        <Container>
          <div className={s.wrap}>
            <ul>
              <li>
                <span className={s.caption}>Адрес:</span>
                <Link href='/'>{data.address}</Link>
              </li>
              <li>
                <span className={s.caption}>Телефон и почта:</span>
                <Link href={`tel:${data.phone}`}>{data.phone}</Link>
                <Link href={`mailto:${data.email}`}>{data.email}</Link>
              </li>
            </ul>
            <iframe
              src='https://yandex.ru/map-widget/v1/?um=constructor%3A19b3f589864b934220d5079bb8260d2e5ef96ded073235ddb6a32ea2a5724a4b&amp;source=constructor'
              width='100%'
              height='400'
              frameBorder='0'></iframe>
          </div>
        </Container>
      </section>
    </>
  );
}
