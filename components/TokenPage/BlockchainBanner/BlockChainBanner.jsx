import styles from './blockchainbanner.module.scss';
import ClearContainer from '../../Generic/ClearContainer/ClearContainer';
import BlockChainImg from '../../../public/Blockchainv1.png';
import Image from 'next/image';
import Circles from '../../Generic/Circles/Circles';

function BlockChainBanner() {
  return (
    <div className={`${styles.wrapper} spacing-x max-1920`}>
      <div className={`alternating-rows`}>
        <Circles className={styles.circles} />
        <div>
          <Image src={BlockChainImg} alt="" />
        </div>
        <div className={styles['blockchain-wrapper']}>
          <ClearContainer title="Blockchain" isTransparent reducedPadding>
            <p>
              The Legacy Network Token will be available on multiple
              blockchains. VeChain as native blockchain, as well as Binance
              smart chain, Ethereum and Polygon. The goal of multiple
              blockchains is to address a target group as broad as possible, and
              to use the individual advantages of the respective blockchains.
              The circulation supply of the respective tokens is balanced by
              means of atomic swap, so that the statistics of the tokens cannot
              change independently of each other. For transferring tokens
              between the different blockchains, the new cross-chain bridge of
              safeswap is used.
            </p>
            <div className={styles.logos}>
              <div>
                <img src="/logos/vechain.png" alt="vechain logo" />
              </div>
              <div>
                <img src="/logos/binance.png" alt="binance logo" />
              </div>
              <div>
                <img src="/logos/ethereum.png" alt="ethereum logo" />
              </div>
              <div>
                <img src="/logos/polygon.png" alt="polygon logo" />
              </div>
            </div>
          </ClearContainer>
        </div>
      </div>
    </div>
  );
}

export default BlockChainBanner;
