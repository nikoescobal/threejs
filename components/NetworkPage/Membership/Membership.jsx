import styles from './Membership.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import LockOpen from '../../Icons/LockOpen/LockOpen';

function Membership() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto');

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
      <div className={styles['list-wrapper']}>
        {
          content[locale].list.map((item, index) => (
            <div key={uuid} className={styles['item']}>
              <div>
                <LockOpen />
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Membership;
