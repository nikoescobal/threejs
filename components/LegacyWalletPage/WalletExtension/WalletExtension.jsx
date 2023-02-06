import styles from './WalletExtension.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

function WalletExtension() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto')

  return (
    <section
      className={`
        ${styles['wrapper']}
        ${styles[locale]}
        ${!isDarkMode ? `${styles['light']}` : ''}
        spacing-x
        max-1920
      `}
    >
      <h2>{content[locale].title}</h2>
      <p>{content[locale].description}</p>
      <div className={styles['grid']}>
        {
          content.illustrations.map((illustration) => (
            <img key={uuid} src={illustration} alt="Wallet Illustration" />
          ))
        }
      </div>
    </section>
  );
}

export default WalletExtension;
