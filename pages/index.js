import Head from 'next/head';
import Image from 'next/image';
import ClearContainer from '../components/Generic/ClearContainer/ClearContainer';
import WavesWrapper from '../components/Generic/WavesWrapper/WavesWrapper';
import NewsLetter from '../components/Home/NewsLetter/NewsLetter';
// import App from '../components/Home/App/App';
import Products from '../components/Home/Products/Products';
import Header from '../components/Home/Header';
import generics from '../styles/generics.module.scss';
import styles from '../styles/Home.module.scss';
import Roadmap from '../components/Generic/Roadmap/Roadmap';
import RoadmapNew from '../components/Generic/RoadmapNew/Roadmap';
import Partners from '../components/Generic/Partners/Partners';
import PartnersNew from '../components/Generic/PartnersNew/Partners';
import ProductsPage from '../components/Products/Products/Products';
import Map from '../components/Home/Map/Map';
import FollowUs from '../components/Generic/FollowUs/FollowUs';
import CardSection from '../components/Home/CardSection/CardSection';
import LegacyMethods from '../components/Home/LegacyMethods/LegacyMethodsList/LegacyMethods';
import { Parallax } from 'react-scroll-parallax';
import Hammer from '../public/weapons/hammer.webp';
import useStore from '../store/store';
import { useMediaQuery } from '@mui/material';
import { inProdEnvironment } from '../utils';
import { useRouter } from 'next/router';
import WhoAreWe from '../components/Home/WhoAreWe/WhoAreWe';
import WhatIsPersonalDevelopment from '../components/Home/WhatIsPersonalDevelopment/WhatIsPersonalDevelopment';
import MostInnovativeApp from '../components/Home/MostInnovativeApp/MostInnovativeApp';

const content = {
  en: {
    title: `The world's most innovative personal development app`,
    list: [
      'Connect with like-minded people and create your own legacy',
      'Receive individual quests for your personal growth',
      "Learn about the things school didn't teach you",
      'Playfully improve all areas of your life',
    ],
  },
  de: {
    title: 'Die weltweit innovativste App zur Persönlichkeitsentwicklung',
    list: [
      'Verbinden Sie sich mit Gleichgesinnten und schaffen Sie Ihr eigenes Vermächtnis',
      'Erhalte individuelle Aufgaben für dein persönliches Wachstum',
      'Erfahren Sie über die Dinge, die Ihnen die Schule nicht beigebracht hat',
      'Verbessern Sie spielerisch alle Bereiche Ihres Lebens',
    ],
  },
};

export default function Home() {
  const { isDarkMode } = useStore();
  const isTablet = useMediaQuery('(min-width: 768px');
  const { locale } = useRouter();
  const { uuid } = require('crypto');

  return (
    <div
      className={`${styles.content} ${!isDarkMode ? `${styles.light}` : ''}`}
    >
      <Head>
        <title>Legacy Network</title>
        <meta
          name="description"
          content="Gamified Personal Development Through AI And Blockchain Technology"
        />
        <meta
          name="keywords"
          content="legacy network, personal development, Gamified Personal Development"
        />
        <meta
          name="google-site-verification"
          content="DNRoawrY9aPMqVGq30qmpm0GPOhscX3PGfmWd2iJ22k"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles['hammer-wrapper']}`}>
        <div className="max-1920">
          {isTablet ? (
            <Parallax speed={60} className={styles['hammer']}>
              <Image className="" src={Hammer} alt="hammer" draggable="false" />
            </Parallax>
          ) : (
            <div className={styles['hammer']}>
              <Image className="" src={Hammer} alt="hammer" draggable="false" />
            </div>
          )}
        </div>
        <Header />
        <WhoAreWe />
        <MostInnovativeApp />
        <NewsLetter />
        <ProductsPage />
        {/* <div
          className={`${styles['clear-container-wrapper']} ${generics['spacing-x']}`}
        >
          <ClearContainer
            title={content[locale].title}
            style={{ maxWidth: '1024px' }}
            textAlign="center"
          >
            <ul
              className={styles['list-wrapper']}
              style={{
                margin: '0 auto',
                textAlign: 'center',
                padding: '0 1rem',
              }}
            >
              {content[locale].list.map((item) => (
                <li key={uuid}>
                  <span>&#183;</span>
                  {item}
                </li>
              ))}
            </ul>
          </ClearContainer>
        </div> */}
      </div>
      {/* <WavesWrapper hideBottom> */}
        <WhatIsPersonalDevelopment />
        <CardSection />
        {/* {!inProdEnvironment ? <LegacyMethods /> : null} */}
      {/* </WavesWrapper> */}
      {/* <App /> */}
      {/* <Products /> */}
      {!inProdEnvironment ? <RoadmapNew /> : <Roadmap />}
      {!inProdEnvironment ? <PartnersNew /> : <Partners />}
      {/* <Map /> */}
      <FollowUs />
    </div>
  );
}
