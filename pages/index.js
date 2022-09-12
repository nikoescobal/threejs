import Head from 'next/head';
import Image from 'next/image';
import ClearContainer from '../components/Generic/ClearContainer/ClearContainer';
import WavesWrapper from '../components/Generic/WavesWrapper/WavesWrapper';
import NewsLetter from '../components/Home/NewsLetter/NewsLetter';
import App from '../components/Home/App/App';
import Header from '../components/Home/Header';
import PageSlider from '../components/Home/PageSlider/PageSlider';
import HomeNavbar from '../components/Navbar/Navbar';
import generics from '../styles/generics.module.scss';
import styles from '../styles/Home.module.scss';
import Roadmap from '../components/Generic/Roadmap/Roadmap';

export default function Home() {
  return (
    <div className={`${styles.content}`}>
      <Head>
        <title>Legacy Network</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={`${styles['clear-container-wrapper']} ${generics['spacing-x']}`}>
        <ClearContainer
            title={"The world's most innovative personal development app"}
            styles={{ background: 'url(assets/parallax/waves-layered.svg)' }}
            textAlign="center"
          >
            <p>
              Welcome to Legacy Network, one of the most effective personal development app
              which uses a play to earn technique to help you achieve the best of yourself.
              Thousands of people come here each day for inspiration and motivation.
            </p>
        </ClearContainer>
      </div>
      <WavesWrapper>
        <NewsLetter />
        <App />
      </WavesWrapper>
      <Roadmap />
    </div>
  );
}
