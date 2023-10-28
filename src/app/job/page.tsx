import Container from '@/components/container';
import React from 'react';
import s from './styles.module.scss';
import Hero from '@/sections/hero';
import parse from 'html-react-parser';
import Image from '@/components/image';
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const getPageData = async () => {
  const res = await fetch(`${backendUrl}/api/collections/vacancies_PAGE/records`);
  const data = await res.json();
  return data.items[0];
};

export default async function About() {
  const dataContent = await getPageData();

  const heroData = {
    breadcrumbs: [{ title: dataContent.title, slug: '/job' }],
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
      <section className={s.content}>
        <Container>
          <div className={s.wrap}>
            <span className='image_wrap'>
              <Image
                src={
                  dataContent.image
                    ? `${backendUrl}/api/files/vacancies_PAGE/${dataContent.id}/${dataContent.image}`
                    : null
                }
                alt={dataContent.title}
              />
            </span>
            {parse(dataContent.content, {
              replace: (node: any) => {
                if (node.name === 'img') {
                  return (
                    <span className='image_wrap'>
                      <Image src={node.attribs.src} alt={node.attribs.alt} />
                    </span>
                  );
                }
              },
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
