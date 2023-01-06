/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './download.module.scss';

function Download() {
  const { isDarkMode } = useStore();

  return (
    <section className={`${styles.section} spacing-x max-1920`}>
      <h3>Download our pre-launch app </h3>
      <p>
        For our early users we have carefully prepared a pre-launch app that
        allows early interaction with our ecosysyem to make your Legacy Token
        (LGCT) already work for you with the pre-launch app features - staking
        and vesting.
      </p>
      <div className={`${styles.container}`}>
        <div className={`${styles.imgwrapper}`}>
          <img src="/mockups/2.png" alt="app preview" />
        </div>
      </div>
      <h4>Coming soon</h4>
      <div className={`${styles.stores}`}>
        {/* <div className={`${styles.icons}`}>
          <img src="/logos/play-store.png" alt="play store logo" />
        </div>
        <div className={`${styles.icons}`}>
          <img src="/logos/app-store.png" alt="app store logo" />
        </div> */}
      </div>
    </section>
  );
}

export default Download;
