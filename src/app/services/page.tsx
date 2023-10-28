import s from './styles.module.scss';

import Container from '@/components/container';
import Action from '@/sections/action';
import Hero from '@/sections/hero';
import Questions from '@/sections/questions';
import ServicesBlock from '@/sections/services';
import pb from '@/utils/pb';
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
import parse from 'html-react-parser';

const getData = async () => {
  const res = await fetch(`${backendUrl}/api/collections/services/records`);
  const data = await res.json();
  return data.items;
};

const getPageData = async () => {
  const res = await fetch(`${backendUrl}/api/collections/services_PAGE/records`);
  const data = await res.json();
  return data.items[0];
};

export default async function Services() {
  const data = await getData();
  const dataContent = await getPageData();

  const heroData = {
    breadcrumbs: [{ title: dataContent.title, slug: '/services' }],
    title: dataContent.title,
    description: dataContent.subtitle,
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
      <section className={s.services}>
        <Container>
          <ServicesBlock data={data} type='grid' mainOnly={false} />
        </Container>
      </section>
      <section className={s.content}>
        <Container>
          <div className={s.wrap}>{dataContent.content && parse(dataContent.content)}</div>
        </Container>
      </section>

      <Action />
      <Questions />
    </>
  );
}
