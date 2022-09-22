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
      <p>We provide the storage for your earned tokens</p>
      <button className={`${styles.button}`}>
        More about mental health crisis
      </button>
    </section>
  );
}

export default Download;
