import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import ClearContainer from '../components/Generic/ClearContainer/ClearContainer';
import GenericHeader from '../components/Generic/Header/GenericHeader';
import DataSecurity from '../public/illustrations/data-security.png';
import Waves from '../public/backgrounds/waves-5.png';
import WaveLines from '../components/Generic/WaveLines/WaveLines';
import styles from '../styles/policies.module.scss';
import Script from 'next/script';
import Link from 'next/link';
import useStore from '../store/store';
import { useMediaQuery } from '@mui/material';

function Policies() {
  const { isDarkMode } = useStore();
  const isTablet = useMediaQuery('(min-width: 768px)');

  return (
    <div
      className={`${styles.wrapper} ${
        isDarkMode ? '' : `${styles.light}`
      } max-1920`}
    >
      <Head>
        <title>Policies</title>
        <meta name="Legacy Network Policies" content="Policies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
      `}
      </Script>

      <GenericHeader
        waves={
          <WaveLines
            style={{
              top: '10%',
              scale: '1.4',
              left: '90px',
              'object-fit': 'cover',
            }}
          />
        }
        title={'Our policies'}
        // subtitle={'giving people back control of their data'}
        rightObj={
          <img
            style={{ transform: `translateX(${isTablet ? '30%' : '0'})` }}
            src="/headers/policies.png"
            alt="token"
            draggable="false"
          />
        }
      />
      {/* <div className={styles.intro}>
        <h1 className='title'>Our policies</h1>
      </div> */}
      <div className={`spacing-x`}>
        <ClearContainer>
          <p className="bold">DISCLAIMER Legacy Network AG:</p>
          <p>Disclaimer Website:</p>
          <p>
            The operator will undertake every effort to ensure the safe
            operation of the website. Defects including, but not limited to,
            loss or falsification of data, virus attack, interruption of
            operations cannot be excluded. The access to the website therefore
            lies at the user’s own risk and responsibility.
          </p>
          <p>
            The content of this website is general information of Legacy Network
            AG and provided for illustrative and descriptive purposes only and
            does not constitute a prospectus, an offer document, an offer of
            securities, a solicitation for investment, any offer to sell any
            product or an investment advice.
          </p>
          <p>
            We assume no liability for the topicality, correctness and
            completeness of the information provided on this website. Any
            content, documentation or functionalities are subject to
            modification by Legacy Network AG in its sole and absolute
            discretion.
          </p>
          <p>
            The same applies to the content of external pages to which reference
            is made direct or indirect. We reserve the right to make changes and
            additions to the content of the website without prior notice.
          </p>
          <p>
            Any liability for the content of the website or for damages
            resulting from or in connection with downloaded information or
            documents is excluded. This includes both material and immaterial
            damage.
          </p>
          <p>
            This website is maintained by Legacy Network AG, Äulestrasse 74,
            9490 Vaduz, Principality of Liechtenstein
          </p>
          <p>Imprint Website:</p>
          <p className="bold">Imprint</p>
          <p className="bold">Contact</p>
          <p className="bold">Legacy Network AG</p>
          <p>
            Äulestrasse 74
            <br />
            9490 Vaduz
            <br />
            Principality of Liechentstein Commercial Register: FL-0002.683.628-1
          </p>
          <a href="mailto:">legal@legacynetwork.io</a>
          <Link href="/">https://legacynetwork.io</Link>
        </ClearContainer>
      </div>
    </div>
  );
}

export default Policies;
