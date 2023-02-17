import Head from 'next/head';
import GenericHeader from '../components/Generic/Header/GenericHeader';
import WaveLines from '../components/Generic/WaveLines/WaveLines';
import styles from '../components/NetworkPage/Network.module.scss';
import { useRouter } from 'next/router';
import NetworkFeatures from '../components/NetworkPage/NetworkFeatures/NetworkFeatures';
import EveryStepOfTheWay from '../components/NetworkPage/EveryStepOfTheWay/EveryStepOfTheWay';
import DepthOfNetworking from '../components/NetworkPage/DepthOfNetworking/DepthOfNetworking';
import Membership from '../components/NetworkPage/Membership/Membership';
import HowItWorks from '../components/NetworkPage/HowItWorks/HowItWorks';
import BoardFeatures from '../components/NetworkPage/BoardFeatures/BoardFeatures';
import Events from '../components/NetworkPage/Events/Events';
import GettingStarted from '../components/NetworkPage/GettingStarted/GettingStarted';

const content = {
  en: {
    title: 'LN Network',
    subtitle: 'Grow Beyond Your Limits',
  },
  de: {
    title: 'Das Netzwerk',
    subtitle: 'Sinnvolle Veränderung',
  },
};

function Network() {
  const { locale } = useRouter();

  return (
    <div>
      <Head>
        <title>Network</title>
        <meta name="description" content="Network Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GenericHeader
        waves={<WaveLines className={`${styles['waves-wrapper']}`} />}
        rightObj={
          <img
            className={styles.image}
            src={'/headers/network.svg'}
            alt="network illustration"
          />
        }
        title={content[locale].title}
        subtitle={content[locale].subtitle}
      />
      <EveryStepOfTheWay />
      <DepthOfNetworking />
      <Membership />
      <HowItWorks />
      <BoardFeatures />
      {/* <Events /> */}
      <GettingStarted />
      {/* <NetworkFeatures />       */}
    </div>
  );
}

export default Network;
