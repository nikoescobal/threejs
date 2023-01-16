import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Questions from '../components/Products/Questions/Questions';
import Ln from '../components/Products/Ln/Ln';
import Benefits from '../components/Products/Benefits/Benefits';
import { useMediaQuery } from '@mui/material';
import Features from '../components/Products/Features/Features';
import DataProtection from '../components/Products/DataProtection/DataProtection';
import Download from '../components/Products/Download/Download';
import GenericHeader from '../components/Generic/Header/GenericHeader';
import Character from '../public/nft/char-with-iphone.png';
import Roadmap from '../components/Generic/Roadmap/Roadmap';
import Waves from '../public/backgrounds/waves-5.png';
import WaveLines from '../components/Generic/WaveLines/WaveLines';
import styles from '../components/Home/Products/products.module.scss';
import Script from 'next/script';

function Products() {
  const isTablet = useMediaQuery('(min-width: 768px)');

  return (
    <div>
      <Head>
        <title>Products</title>
        <meta name="description" content="Legacy Network Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles['app-header']}>
        <GenericHeader
          waves={<WaveLines className={`${styles['waves-wrapper']}`} />}
          rightObj={
            <img
              className={styles.image}
              src={Character.src}
              draggable="false"
              alt="character"
              style={{
                scale: isTablet ? '1.6' : '1.4',
              }}
            />
          }
          title="LEGACY NETWORK PRODUCTS"
          subtitle={'The future of personal development'}
        />
      </div>

      <Questions />
      <Features />
      <Benefits />
      <Ln />
      {/* <Download /> */}
      <DataProtection />
    </div>
  );
}

export default Products;
