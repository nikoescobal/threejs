/* eslint-disable no-unused-vars */
import ClearContainer from '../../Generic/ClearContainer/ClearContainer';
import styles from './app.module.scss';
import generics from '../../../styles/generics.module.scss';
import iPhone from '../../../public/illustrations/iPhone.png';
import Waves from '../../../public/backgrounds/waves-2.png';
import Image from 'next/image';
import useStore from '../../../store/store';
import WaveLines from '../../Generic/WaveLines/WaveLines';
import { useRouter } from 'next/router';
import content from './content';
import translations from '../../../language';

function App() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();

  return (
    <section
      className={`
      ${styles['app-wrapper']}
      ${!isDarkMode ? `${styles.light}` : ''}
      ${generics['alternating-rows-wrapper']}
      ${generics['spacing-x']}`}
    >
      <WaveLines className={styles['waves-wrapper']} />
      <h4>
        {
          content[locale].main_title
        }
      </h4>
      <div
        className={`${styles['alternating-rows']} ${generics['alternating-rows']} max-1920`}
      >
        <div className={styles['mockup-wrapper']}>
          <Image
            width={256}
            height={482}
            layout="responsive"
            objectFit="cover"
            src="/mockups/profile.webp"
            alt="Mobile application illustration"
          />
        </div>
        <ClearContainer
          title={content[locale].card_1.title}
          to="/app"
          urlTitle={'Link to App page'}
          linkText={translations.read_more[locale]}
          reducedPadding
        >
          <p>
            {content[locale].card_1.description}
          </p>
        </ClearContainer>
      </div>

      <div
        className={`${styles['alternating-rows']} ${generics['alternating-rows']} max-1920`}
      >
        <div>
          <img
            loading="lazy"
            src="/illustrations/ai.webp"
            alt="Artifial Intelligence illustration"
          />
        </div>
        <ClearContainer
          title={content[locale].card_2.title}
          to="/app"
          urlTitle={'Link to App page'}
          linkText={translations.read_more[locale]}
          reducedPadding
        >
          <p>
            {content[locale].card_2.description}
          </p>
        </ClearContainer>
      </div>
    </section>
  );
}

export default App;
