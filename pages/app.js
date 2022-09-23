import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Questions from '../components/App/Questions/Questions';
import Ln from '../components/App/Ln/Ln';
import Features from '../components/App/Features/Features';
import Benefits from '../components/App/Benefits/Benefits';
import Download from '../components/App/Download/Download';
import GenericHeader from '../components/Generic/Header/GenericHeader';
import Character from '../public/nft/char-with-iphone.png';
import Roadmap from '../components/Generic/Roadmap/Roadmap';

function app() {
  return (
    <div>
      <Head>
        <title>App</title>
        <meta name="description" content="Legacy Network Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GenericHeader
        rightObj={<img src={Character.src} alt="character" style={{scale: '1.4'}} />}
        title="The LEGACY NETWORK APP"
        subtitle={'The future of personal development'}
      />
      <Questions />
      <Features />
      <Roadmap showBackground={false} />
      <Ln />
      <Download />
      <Benefits />
    </div>
  );
}

export default app;
