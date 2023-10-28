import Container from '@/components/container';
import React from 'react';
import s from './styles.module.scss';
import Hero from '@/sections/hero';
import parse from 'html-react-parser';
import Image from '@/components/image';
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
const getData = async () => {
  const res = await fetch(`${backendUrl}/api/collections/about_PAGE/records`);
  const data = await res.json();
  return data.items[0];
};

export default async function About() {
  const data = await getData();
  const heroData = {
    breadcrumbs: [{ title: data.title, slug: '/about' }],
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
            <span className='image_wrap'>
              <Image
                src={data.image ? `${backendUrl}/api/files/about_PAGE/${data.id}/${data.image}` : null}
                alt={data.title}
              />
            </span>
            {parse(data.content, {
              replace: (node: any) => {
                console.log(node.name);
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
