import styles from './blockchainbanner.module.scss';
import ClearContainer from '../../Generic/ClearContainer/ClearContainer'

function BlockChainBanner() {
  return (
    <div className={`${styles.wrapper} spacing-x`}>
      <div className={`alternating-rows`}>
        <div>
          <img src="/illustrations/blockchain.png" alt="" />
        </div>
        <ClearContainer
          title="Blockchain"
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