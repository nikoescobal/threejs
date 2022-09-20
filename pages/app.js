import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Questions from '../components/App/Questions/Questions';
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
        title="The LN APP"
        subtitle={'The future of personal development'}
      />
      <Questions />
    </div>
  );
}

export default app;
