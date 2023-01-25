import styles from './blockchainbanner.module.scss';
import ClearContainer from '../../Generic/ClearContainer/ClearContainer';
import BlockChainImg from '../../../public/Blockchainv1.webp';
import Image from 'next/image';
import Circles from '../../Generic/Circles/Circles';
import useStore from '../../../store/store';
import { useRouter } from 'next/router';
import content from './content';

function BlockChainBanner() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();

  return (
    <div className={`${styles.wrapper} spacing-x max-1920`}>
      <div className={`alternating-rows`}>
        <Circles className={styles.circles} />
        <div>
          <Image src={BlockChainImg} alt="blockchain" />
        </div>
        <div className={styles['blockchain-wrapper']}>
          <ClearContainer title={content[locale].title} isTransparent reducedPadding>
            <p>
              {content[locale].description}
            </p>
            <div
              className={`${styles.logos} ${
                !isDarkMode ? `${styles.light}` : ''
              } `}
            >
              <div className={`${styles['logo']}`}>
                <img src="/logos/vechain.svg" alt="vechain logo" />
              </div>
              <div className={`${styles['logo']}`}>
                <img src="/logos/binance.svg" alt="binance logo" />
              </div>
              <div className={`${styles['logo']}`}>
                <img src="/logos/ethereum.svg" alt="ethereum logo" />
              </div>
              <div className={`${styles['logo']}`}>
                <img src="/logos/polygon.svg" alt="polygon logo" />
              </div>
            </div>
          </ClearContainer>
        </div>
      </div>
    </div>
  );
}

export default BlockChainBanner;
