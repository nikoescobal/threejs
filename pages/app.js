import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Questions from '../components/App/Questions/Questions';
import Ln from '../components/App/Ln/Ln';
import { useMediaQuery } from '@mui/material';
import Features from '../components/App/Features/Features';
import Benefits from '../components/App/Benefits/Benefits';
import Download from '../components/App/Download/Download';
import GenericHeader from '../components/Generic/Header/GenericHeader';
import Character from '../public/nft/char-with-iphone.png';
import Roadmap from '../components/Generic/Roadmap/Roadmap';
import Waves from '../public/backgrounds/waves-5.png';

function App() {
  const isTablet = useMediaQuery('(min-width: 768px)');
  
  return (
    <div>
      <Head>
        <title>App</title>
        <meta name="description" content="Legacy Network Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GenericHeader
        waves={
          <div style={{
            position: 'absolute',
            top: '-20%',
            left: '-300px',
            rotate: '-90deg',
          }}>
            <Image
              src={Waves}
              alt=""
            />
          </div>
        }
        rightObj={
          <img src={Character.src} alt="character" style={{scale: isTablet ? '1.6' : '1.4'}} />
        }
        title="The LEGACY NETWORK APP"
        subtitle={'The future of personal development'}
      />
      <Questions />
      <Features />
      <Roadmap
        showBackground={false}
        style={{
          paddingBottom: '8rem',
          marginBottom: '0 !important',
        }}
      />
      <Ln />
      <Download />
      <Benefits />
    </div>
  );
}

export default App;
