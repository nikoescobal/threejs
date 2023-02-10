import Head from 'next/head';
import GenericHeader from '../../components/Generic/Header/GenericHeader';
import WaveLines from '../../components/Generic/WaveLines/WaveLines';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import NetworkFeatures from '../../components/NetworkPage/NetworkFeatures/NetworkFeatures';
import EveryStepOfTheWay from '../../components/NetworkPage/EveryStepOfTheWay/EveryStepOfTheWay';
import DepthOfNetworking from '../../components/NetworkPage/DepthOfNetworking/DepthOfNetworking';
import Membership from '../../components/NetworkPage/Membership/Membership';
import HowItWorks from '../../components/NetworkPage/HowItWorks/HowItWorks';
import BoardFeatures from '../../components/NetworkPage/BoardFeatures/BoardFeatures';
import Events from '../../components/NetworkPage/Events/Events';
import GettingStarted from '../../components/NetworkPage/GettingStarted/GettingStarted';
import MemoryGame from '../../components/Generic/MemoryGame/MemoryGame';
import Tribes from '../../components/ProductsNFTPage/Tribes/Tribes';

const content = {
  en: {
    title: 'Legacy NFT',
    subtitle: 'Unleash Your Tribe, Upgrade Your Game'
  },
  de: {
    title: 'Legacy NFT',
    subtitle: 'Sinnvolle Veränderung'
  }
}

function LegacyNFT() {
  const { locale } = useRouter();
  
  return (
    <div>
      <Head>
        <title>Legacy NFT</title>
        <meta name="description" content="Legacy Network NFT Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GenericHeader
        waves={<WaveLines className={`${styles['waves-wrapper']}`} />}
        rightObj={
          <img
            className={styles.image}
            src={'/headers/legacy-nft.png'}
            alt="network illustration"
          />
        }
        title={content[locale].title}
        subtitle={content[locale].subtitle}
      />
      <MemoryGame />
      <Tribes />
    </div>
  );
}

export default LegacyNFT;
