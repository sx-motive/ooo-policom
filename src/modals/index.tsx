'use client';
import s from './styles.module.scss';
import { useRecoilState } from 'recoil';
import { modalAtom } from '@/store/modalAtom';
import dynamic from 'next/dynamic';
import SVG from 'react-inlinesvg';

const Form = dynamic(() => import('@/modals/form'), { loading: () => <span>Loading...</span> });

const ModalContent = () => {
  const [modalState, setModalState] = useRecoilState(modalAtom);
  if (modalState.type === 'form') return <Form />;
  return null;
};

export default function Modal() {
  const [modalState, setModalState] = useRecoilState(modalAtom);
  return (
    <div className={s.modal_wrap}>
      <div className={s.modal}>
        <button className={s.close} onClick={() => setModalState({ active: false, type: null })}>
          <SVG src='/assets/close.svg' />
        </button>
        <ModalContent />
      </div>

      <div className={s.close_frame} onClick={() => setModalState({ active: false, type: null })}></div>
    </div>
  );
}
