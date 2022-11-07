import RotatingChart from '../Graph/RotatingChart';
import styles from './chartsection.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';
import Gradient from '../../Generic/Gradient/Gradient';
import ComingSoon from '../../Generic/ComingSoon/ComingSoon';

function ChartSection() {
  const { isDarkMode } = useStore();

  return (
    <div
      className={`${styles.wrapper} ${
        !isDarkMode ? `${styles.light}` : ''
      } max-1920`}
    >
      <Gradient
        style={{
          top: '50%',
          right: '-100%',
        }}
      />
      <div className={`${styles['text-wrapper']} ${generics['spacing-x']}`}>
        <h3>Token allocation</h3>
        <p>
          Transparency, security and fairness are part of our core values. For
          this reason, all tokens will be vested in smart-contracts and the
          vesting-schedule will be publicly communicated. It’s in our best
          interest to make our token as decentral and stable as possible.
        </p>
        <p className={`${styles['total']}`}>
          Total supply: <span>720’000’000</span> LGCN
        </p>
      </div>
      <RotatingChart />
      <div className={styles['button-wrapper']}>
        {/* <button type='button' className='button-blue'>Read more</button>
        <button type='button' className='button-blue'>Our smart contract</button> */}
        {/* <ComingSoon className={styles.coming}>Read more</ComingSoon> */}
        <div>
          <a
            href="https://github.com/LegacyNetworkAG/LGCN_Token_Contracts"
            target="_blank"
            rel="noreferrer"
            className={`${styles['audit-report']}`}
          >
            <span>Our smart contract</span>
          </a>
        </div>
        <div>
          <a
            href="/pdf/audit_report.pdf"
            target="_blank"
            className={`${styles['audit-report']}`}
          >
            <span>Our audit report</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ChartSection;
