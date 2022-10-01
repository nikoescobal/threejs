import styles from './blockchainbanner.module.scss';
import ClearContainer from '../../Generic/ClearContainer/ClearContainer'
import BlockChainImg from '../../../public/Blockchainv1.png';
import Image from 'next/image';

function BlockChainBanner() {
  return (
    <div className={`${styles.wrapper} spacing-x`}>
      <div className={`alternating-rows`}>
        <div>
          <Image src={BlockChainImg} alt="" />
        </div>
        <ClearContainer
          title="Blockchain"
          isTransparent
          reducedPadding
        >
          <p>
            The Legacy Network Token will be available on multiple blockchains. VeChain as native blockchain, as well as Binance smart chain, Ethereum and Polygon. The goal of multiple blockchains is to address a target group as broad as possible, and to use the individual advantages of the respective blockchains. The circulation supply of the respective tokens is balanced by means of atomic swap, so that the statistics of the tokens cannot change independently of each other. For transferring tokens between the different blockchains, the new cross-chain bridge of safeswap is used. 
          </p>
        </ClearContainer>
      </div>
    </div>
  )
}

export default BlockChainBanner