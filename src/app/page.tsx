import s from './styles.module.scss';

import Container from '@/components/container';
import Slider from '@/components/slider';

const slides = [
  {
    id: 1,
    subtitle: 'Услуги компании',
    title: 'Строительство  инженерных сооружений',
    desc: 'Строительство  инженерных сооружений в Череповце',
    bg: '#f7f7f7',
    color: 'black',
    image: '/images/01.png',
  },
  {
    id: 2,
    subtitle: 'Услуги компании',
    title: 'Строительно монтажные работы',
    desc: 'Строительно-монтажные работы в Череповце от профессионалов!',
    bg: '#493ee6',
    color: 'white',
    image: '/images/02.png',
  },
  {
    id: 3,
    subtitle: 'Скидка на услуги',
    title: 'Скидка на услуги ремонта 20%!',
    desc: 'Только до конца Ноября, скидка на все услуги ремонта в 20%, торопитесь!',
    bg: '#f7f7f7',
    color: 'black',
    image: '/images/03.png',
  },
];

export default function Home() {
  return (
    <section className={s.slider}>
      <Container>
        <Slider data={slides} speed={5000} />
      </Container>
    </section>
  );
}
