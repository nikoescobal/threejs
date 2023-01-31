import Image from "next/image";
import { useRouter } from "next/router";
import useStore from "../../../store/store";
import styles from './card.module.scss';

function Card({variant, card}) {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();

  return (
    <div
      className={`
        ${styles['wrapper']}
        ${styles[locale]}
        ${!isDarkMode ? `${styles['light']}` : ''}
      `}
    >
      <div className={styles['img-wrapper']}>
        <Image src={card.icon} objectFit={'fill'} height={100} width={100} alt={card.alt} />
      </div>
      <h3>{card.title}</h3>
      <p>
        {
          card.description
        }
      </p>
    </div>
  );
}

export default Card;
