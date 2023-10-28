import s from './styles.module.scss';
import Img from 'next/image';

interface IImage {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}
export default function Image({ src, alt, width, height, priority }: IImage) {
  return (
    <Img
      className={`${s.image} ${width ? '' : s.fill}`}
      src={src ?? '/images/placeholder.webp'}
      alt={alt}
      fill={width ? false : true}
      width={width}
      height={height}
      priority={priority ? true : false}
    />
  );
}
