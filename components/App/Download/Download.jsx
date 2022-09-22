/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './download.module.scss';

function Download() {
  const { isDarkMode } = useStore();

  return (
    <section className={`${styles.section}`}>
      <h2>Download our pre-launch app </h2>
      <p>
        For our early users we have carefully prepared a pre-launch app that
        allows early interaction with our ecosysyem to make your LGCN Token
        already work for you with the pre-launch app features - staking and
        vesting.
      </p>
      <div className={`${styles.container}`}>
        <div className={`${styles.imgwrapper}`}>
          <img src="/downloads/download1.png" alt="download 1" />
        </div>
        <div className={`${styles.imgwrapper}`}>
          <img src="/downloads/download2.png" alt="download 2" />
        </div>
      </div>
      <div className={`${styles.stores}`}>
        <div className={`${styles.icons}`}>
          <img src="/logos/play-store.png" alt="play store logo" />
        </div>
        <div className={`${styles.icons}`}>
          <img src="/logos/app-store.png" alt="app store logo" />
        </div>
      </div>
    </section>
  );
}

export default Download;
