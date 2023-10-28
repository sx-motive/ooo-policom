import s from './styles.module.scss';

interface IContainer {
  children: React.ReactNode;
  width?: 'full' | 'layout' | 'left' | 'right';
}

export default function Container({ children, width }: IContainer) {
  return (
    <div className={`${s.container} ${s[width ?? 'default']}`}>
      {width == 'left' && <div className={s.left}>{children}</div>}
      {width == 'right' && <div className={s.right}>{children}</div>}
      {width !== 'right' && width !== 'left' && children}
    </div>
  );
}
