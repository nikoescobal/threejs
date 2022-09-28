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
            The Legacy Network app is divided in a health and an education area.
            The education area is where users learn how to achieve their
            individual goals by reprogramming their minds, developing effective
            characteristics and forming new, positive habits.
          </p>
        </ClearContainer>
      </div>
    </div>
  )
}

export default BlockChainBanner