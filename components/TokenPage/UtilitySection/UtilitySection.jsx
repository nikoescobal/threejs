import { useRouter } from 'next/router';
import translations from '../../../language';
import useStore from '../../../store/store';
import ComingSoon from '../../Generic/ComingSoon/ComingSoon';
import content from './content';
import styles from './utilitysection.module.scss';

function UtilitySection() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();
  const data = content[locale].cards

  return (
    <section
      className={`${styles.wrapper}  ${
        !isDarkMode ? `${styles.light}` : ''
      } spacing-x max-1920`}
    >
      <h3>{content[locale].title}</h3>

      <div className={`${styles.grid} grid three-col`}>
        {data.map((item) => (
          <div key={item.text}>
            <div>
              <img src={item.img} alt="utility illustration" />
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <a href="https://blog.legacynetwork.io/blogs/Q3dj2EaBUPuizZVFQpye" rel='noreferrer' target="_blank" className='button-blue'>{translations.read_more[locale]}</a>
    </section>
  );
}

export default UtilitySection;
