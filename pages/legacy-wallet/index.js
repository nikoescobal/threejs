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
import AboutTheWallet from '../../components/LegacyWalletPage/AboutTheWallet/AboutTheWallet';
import WalletFunctions from '../../components/LegacyWalletPage/WalletFunctions/WalletFunctions';
import WalletHighlights from '../../components/LegacyWalletPage/WalletHighlights/WalletHighlights';
import WalletExtension from '../../components/LegacyWalletPage/WalletExtension/WalletExtension';

const content = {
  en: {
    title: 'Legacy Wallet',
    subtitle: 'A non-custodial multi-chain wallet',
  },
  de: {
    title: 'Legacy Wallet',
    subtitle: 'Sinnvolle Veränderung',
  },
};

function LegacyWallet() {
  const { locale } = useRouter();

  return (
    <div>
      <Head>
        <title>Legacy Wallet</title>
        <meta name="description" content="Legacy Network Wallet Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GenericHeader
        waves={<WaveLines className={`${styles['waves-wrapper']}`} />}
        rightObj={
          <img
            className={styles.image}
            src={'/headers/legacy-wallet-2.png'}
            alt="legacy wallet illustration"
          />
        }
        title={content[locale].title}
        subtitle={content[locale].subtitle}
      />
      <AboutTheWallet />
      <WalletFunctions />
      <WalletHighlights />
      <WalletExtension />
    </div>
  );
}

export default LegacyWallet;
