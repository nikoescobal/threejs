import Head from 'next/head';
import GenericHeader from '../../components/Generic/Header/GenericHeader';
import WaveLines from '../../components/Generic/WaveLines/WaveLines';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import Questions from '../../components/LegacyPage/Questions/Questions';
import Functionality from '../../components/LegacyPage/Functionality/Functionality';

const content = {
  en: {
    title: 'Legacy',
    subtitle: 'The future of education'
  },
  de: {
    title: 'Legacy',
    subtitle: 'Sinnvolle Veränderung'
  }
}

function Legacy() {
  const { locale } = useRouter();
  
  return (
    <div>
      <Head>
        <title>Legacy</title>
        <meta name="description" content="Legacy Application Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GenericHeader
        waves={<WaveLines className={`${styles['waves-wrapper']}`} />}
        rightObj={
          <img
            className={styles.image}
            src={'/headers/legacy.png'}
            alt="legacy application illustration"
          />
        }
        title={content[locale].title}
        subtitle={content[locale].subtitle}
      />
      <Questions />
      <Functionality />
    </div>
  );
}

export default Legacy;
