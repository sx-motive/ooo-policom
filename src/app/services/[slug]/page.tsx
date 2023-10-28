'use client';
import s from './styles.module.scss';

import Image from '@/components/image';
import Button from '@/components/button';
import Container from '@/components/container';
import Hero from '@/sections/hero';
import Questions from '@/sections/questions';
import { useSetRecoilState } from 'recoil';
import { serviceAtom } from '@/store/serviceAtom';
import { modalAtom } from '@/store/modalAtom';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const getData = async (slug: string) => {
  const res = await fetch(`${backendUrl}/api/collections/services/records?filter=(slug='${slug}')`);
  const data = await res.json();
  return data.items[0];
};

export default async function Service({ params }: { params: { slug: string } }) {
  const setServiceState = useSetRecoilState(serviceAtom);
  const setModalState = useSetRecoilState(modalAtom);
  const data = await getData(params.slug);
  const heroData = {
    breadcrumbs: [
      { title: 'Услуги компании', slug: '/services' },
      { title: data.title, slug: data.slug },
    ],
    title: data.title,
    description: data.content,
  };

  return (
    <>
      <section className={s.service}>
        <Container>
          <div className={s.wrap}>
            <div className={s.right}>
              <Hero {...heroData} />
              <div className={s.content_footer}>
                <span className={s.title}>Остались вопросы? Позвоните нам!</span>
              </div>
            </div>
            <div className={s.left}>
              <div className={s.sticky_wrap}>
                <div className={s.image_wrap}>
                  <Image
                    src={data.image ? `${backendUrl}/api/files/services/${data.id}/${data.image}` : null}
                    alt={data.title}
                  />
                </div>
                <div
                  className={s.action}
                  onClick={() => {
                    setServiceState({ label: data.title, value: data.id });
                    setModalState({ active: true, type: 'form' });
                  }}>
                  <Button type='solid' reverse>
                    Получить консультацию
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Questions />
    </>
  );
}
