import styles from '../Benefits/benefits.module.scss';
import useStore from '../../../store/store';
import { useRouter } from 'next/router';
import content from './content';

function Benefits() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();

  return (
    <section
      className={`
        ${styles.wrapper}
        ${!isDarkMode ? `${styles.light}` : ''}
        spacing-y
        spacing-x
        max-1920`}
    >
      <div className={`${styles.title}`}>
        <h2>{content[locale].title}</h2>
        {/* <p>
          {content[locale].description}
        </p> */}
      </div>
      <div className={`${styles.layout}`}>
        {content[locale].benefits.map((benefit) => (
          <div key={benefit.title} className={styles['bullet-wrapper']}>
            <div className={styles['header']}>
              <div className={styles['img-wrapper']}>
                <img src={benefit.icon} alt={benefit.alt} />
              </div>
              <h4>{benefit.title}</h4>
            </div>
            <ul className={styles['list-wrapper']}>
              {benefit.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
