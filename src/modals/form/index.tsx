import Link from 'next/link';
import s from './styles.module.scss';
import Button from '@/components/button';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useEffect, useState } from 'react';
import pb from '@/utils/pb';
import { IService, serviceAtom } from '@/store/serviceAtom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalAtom } from '@/store/modalAtom';
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Form() {
  const [services, setServices] = useState<{ value: string; label: string }[]>([]);
  const [serviceState, setServiceState] = useRecoilState(serviceAtom);

  const setModalState = useSetRecoilState(modalAtom);
  const [data, setData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [mode, setMode] = useState('');

  useEffect(() => {
    async function getData() {
      const data = await pb.collection('services').getFullList({
        sort: 'title',
      });
      const options = data.map((item) => ({ value: item.id, label: item.title }));
      setServices(options);
    }
    getData();
  }, []);

  async function submit() {
    const res = await fetch(`${backendUrl}/api/collections/requests/records`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        message: data.message,
        service: serviceState.label,
      }),
    });

    if (res.ok) {
      setMode('thanks');
    }
  }

  return (
    <div className={s.modal_item}>
      {mode == 'thanks' ? (
        <>
          {' '}
          <span className={s.thanks_message}>Спасибо за заявку! Мы свяжемся с вами в ближайшее время!</span>
          <div
            style={{ display: 'flex', justifyContent: 'center' }}
            onClick={() => setModalState({ active: false, type: '' })}>
            <Button type='outline'>Хорошо, спасибо</Button>
          </div>
        </>
      ) : (
        <>
          <div className={s.header}>
            <span className={s.title}>Заявка на консультацию</span>
            <span className={s.desc}>Опишите ваш запрос, с вами свяжется специалист и ответит на все вопросы.</span>
          </div>
          <div className={s.content}>
            <div className={s.form}>
              <div className={s.form_item}>
                <label>
                  Имя Фамилия <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type='text'
                  placeholder='Иван Иванов'
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div className={s.form_item}>
                <label>
                  Номер телефона <span style={{ color: 'red' }}>*</span>
                </label>
                <input
                  type='text'
                  placeholder='+7'
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
              </div>
              <div className={s.form_item}>
                <label>Если есть вопросы</label>
                <textarea
                  placeholder='Опишите вопрос'
                  value={data.message}
                  onChange={(e) => setData({ ...data, message: e.target.value })}
                />
              </div>
              <div className={s.form_item}>
                <label>Какой вид услуг вас интересует</label>
                <Dropdown
                  menuClassName={s.menu}
                  arrowClassName={s.arrow}
                  controlClassName={s.control}
                  className={s.services}
                  options={services}
                  onChange={(item) => setServiceState(item as IService)}
                  value={serviceState}
                  placeholder='Выберите услугу'
                />
              </div>
              <div onClick={() => submit()}>
                <Button href='#' type='solid'>
                  Отправить заявку
                </Button>
              </div>
              <span className={s.policy}>
                Нажимая кнопку &#34;Отправить заявку&#34;, вы принимаете условия передачи и обработки информации.{' '}
                <Link href='/policy' target='_blank'>
                  Политика обработки данных.
                </Link>
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
