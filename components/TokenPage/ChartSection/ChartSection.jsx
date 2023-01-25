import RotatingChart from '../Graph/RotatingChart';
import styles from './chartsection.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';
import Gradient from '../../Generic/Gradient/Gradient';
import { useRouter } from 'next/router';
import content from './content';
// import ComingSoon from '../../Generic/ComingSoon/ComingSoon';

function ChartSection() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();

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
        <h3>{content[locale].title_1}</h3>
        <p>
          {content[locale].description_1}
        </p>
        <p className={`${styles['total']}`}>
          {content[locale].total_supply}{' '}<span>{content[locale].total_amount}</span> Legacy Token (LGCT)
        </p>
      </div>
      <RotatingChart />
      <div
        className={`${generics['alternating-rows']} ${styles['cyber-security']} max-1920 spacing-x`}
      >
        <div className={styles['img-wrapper']}>
          <img
            src="/illustrations/data-protection.png"
            alt="data protection illustration"
          />
        </div>
        <div>
          <h3>{content[locale].title_2}</h3>
          <p>
            {content[locale].description_2}
          </p>
          <div className={styles['button-wrapper']}>
            {/* <button type='button' className='button-blue'>Read more</button>
            <button type='button' className='button-blue'>Our smart contract</button> */}
            {/* <ComingSoon className={styles.coming}>Read more</ComingSoon> */}
            <div>
              <a
                href="https://github.com/LegacyNetworkAG/LGCT-CONTRACTS"
                target="_blank"
                rel="noreferrer"
                className={`${styles['audit-report']}`}
              >
                <span>{content[locale].smart_contract}</span>
              </a>
            </div>
            <div>
              <a
                href="/pdf/audit_report.pdf"
                target="_blank"
                className={`${styles['audit-report']} outlined`}
              >
                <span>{content[locale].audit_report}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartSection;
