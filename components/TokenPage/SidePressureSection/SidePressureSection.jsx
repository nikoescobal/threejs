import styles from './sidepressuresection.module.scss';
import generics from '../../../styles/generics.module.scss';
import MovingIcon from '@mui/icons-material/Moving';
import useStore from '../../../store/store';
import CloudIcon from '@mui/icons-material/Cloud';

function SidePressureSection() {
  const { isDarkMode } = useStore();

  return (
    <section
      className={`${styles.section} ${generics['spacing-x']} ${
        !isDarkMode ? `${styles.light}` : ''
      } max-1920`}
    >
      <div className={styles['text-wrapper']}>
        <h3>A real utility token depegged from the market</h3>
        <p>
          A defined real utility token is depegged from on-going market
          conditions and shouldn&apos;t necessarily crash in a bear market. For
          this reason we aim to create a token with constant, non-speculative
          buy side pressure. We achieve this by offering several attractive
          utilities which aren&apos;t directly related to the crypto industry.
          These utilities can only be accessed by using LGCN token and the
          demand for them stays the same or even grows within a bear market.
        </p>
      </div>
      <div className={`${styles['cards-wrapper']}`}>
        <div className={`${styles['card']}`}>
          <div className={styles['img-wrapper']}>
            <img src="/icons/bsp1.svg" alt="" />
          </div>
          <div>
            <h4>Subscriptions</h4>
            <span>All subscriptions are paid in LGCN token.</span>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div className={styles['img-wrapper']}>
            <img src="/icons/bsp2.svg" alt="" />
          </div>
          <div>
            <h4>In-app purchases</h4>
            <span>All in-app purchases are paid in LGCN token.</span>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div className={styles['img-wrapper']}>
            <img src="/icons/bsp3.svg" alt="" />
          </div>
          <div>
            <h4>Staking rewards</h4>
            <span>Exclusive benefits for long-term believers.</span>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div className={styles['img-wrapper']}>
            <img src="/icons/bsp4.svg" alt="" />
          </div>
          <div>
            <h4>Constant demand utility</h4>
            <span>
              The demand for our utility doesn&apos;t decrease in a bear-market.
            </span>
          </div>
        </div>
        <div className={`${styles['card']}`}>
          <div className={styles['img-wrapper']}>
            <img src="/icons/bsp5.svg" alt="" />
          </div>
          <div>
            <h4>More in future</h4>
            <span>
              More exciting features will be announced on a regular basis!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SidePressureSection;
