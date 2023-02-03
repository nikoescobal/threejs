import styles from '../UtilitySectionNew/utilitysection.module.scss';
import useStore from '../../../store/store';
import { useRouter } from 'next/router';
import content from './content';

function UtilitySection() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();

  return (
    <section
      className={`${styles.wrapper} ${
        !isDarkMode ? `${styles.light}` : ''
      } spacing-x max-1920`}
    >
      <div className={`${styles.title}`}>
        <h2>{content[locale].title}</h2>
        {/* <p>
          {content[locale].description}
        </p> */}
      </div>
      <div className={`${styles.layout}`}>
        {content[locale].utilities.map((utility) => (
          <div key={utility.title} className={styles['wapper']}>
            <div className={styles['header-wrapper']}>
              <div className={styles['img-wrapper']}>
                <img src={utility.icon} alt={utility.alt} />
              </div>
              <h4 className={styles['token-title']}>{utility.title}</h4>
            </div>

            <div className={styles['header']}>
              <div>
                <p>{utility.text}</p>
              </div>
            </div>
            {/* <div className={styles['list-wrapper']}>
                <p key={item}>{item}</p>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default UtilitySection;
