import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import ClearContainer from '../components/Generic/ClearContainer/ClearContainer';
import GenericHeader from '../components/Generic/Header/GenericHeader';
import DataSecurity from '../public/illustrations/data-security.png';
import Waves from '../public/backgrounds/waves-5.png';
import WaveLines from '../components/Generic/WaveLines/WaveLines';
import Script from 'next/script';

function Security() {
  return (
    <div>
      <Head>
        <title>Token</title>
        <meta name="description" content="Legacy Network Token" />
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
        title={'Security'}
        subtitle={'giving people back control of their data'}
        rightObj={
          <img
            style={{ scale: '1.75' }}
            src={DataSecurity.src}
            alt="token"
            draggable="false"
          />
        }
      />
      <div className="security spacing-x">
        <ClearContainer>
          <h4 className="title__2">Data Protection</h4>
          <p>
            Part of our vision is to give people back control of their data.
            Legacy Network is the first technology company to use users&apos;
            data and psychology exclusively for them, not against them. Unlike
            various Big Data corporations, we will not monetize data and thus
            will not make our platforms available for serving ads. Although user
            profiles will be created, these cannot be assigned to a real person,
            as we will not collect any personal data such as name or address. In
            this way, users can interact with each other anonymously and without
            concern. Nevertheless, to ensure the security of the network, some
            Internet-related data such as the user&apos;s IP address will be
            collected. This offers the possibility, in an emergency (for
            example, in case of a crime or threat), to support the responsible
            investigating authorities and to exclude users from the network in
            the event of gross violations. A concrete data protection concept
            will be worked out during development together with experts.
          </p>
        </ClearContainer>
        <ClearContainer>
          <h4 className="title__2">Cyber Security</h4>
          <p>
            To ensure the security of our entire ecosystem, we will have several
            independent security audits performed. This concerns the token, or
            smart contract, as well as the app and all platforms. We will
            analyze past cyber-attacks on other systems and design our own
            systems to be immune to these as well as other attacks.
          </p>
        </ClearContainer>
      </div>
    </div>
  );
}

export default Security;
