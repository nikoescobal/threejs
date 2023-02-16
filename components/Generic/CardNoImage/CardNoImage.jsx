import { useRouter } from 'next/router';
import useStore from '../../../store/store';
import styles from './cardnoimage.module.scss';

function Card({ variant, card, className }) {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();

  return (
    <div
      className={`
        ${styles['wrapper']}
        ${styles[locale]}
        ${className}
        ${!isDarkMode ? `${styles['light']}` : ''}
      `}
    >
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );
}

export default Card;
