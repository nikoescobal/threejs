import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Questions from '../components/App/Questions/Questions';
import Lgcn from '../components/App/Lgcn/Lgcn';
import Features from '../components/App/Features/Features';
import Benefits from '../components/App/Benefits/Benefits';
import Download from '../components/App/Download/Download';
import GenericHeader from '../components/Generic/Header/GenericHeader';
import Character from '../public/nft/char-with-iphone.png';

function app() {
  return (
    <div>
      <Head>
        <title>App</title>
        <meta name="description" content="Legacy Network Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GenericHeader
        rightObj={<Image src={Character} alt="character" />}
        title="LGCN TOKEN"
        subtitle={'The future of personal development'}
      />
      <Questions />
      <Lgcn />
      <Features />
      <Benefits />
      <Download />
    </div>
  );
}

export default app;
