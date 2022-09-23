/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './ln.module.scss';
import { lnfunctions } from '../../Constants/AppConstants';

function Ln() {
  const { isDarkMode } = useStore();

  return (
    <section
      className={`${styles.section} ${!isDarkMode ? `${styles.light}` : ''} spacing-x`}
    >
      <h2>LN APP</h2>
      <p>
      We provide the game and social features you need to take an entertaining core mechanic
and make it viable as a full-featured, blockchain-based game or social game at scale with token and NFT features.
      </p>
      <div className={`${styles.container}`}>
        {lnfunctions.map((lnfunction) => (
          <div key={lnfunction.id} className={`${styles.lnwrapper}`}>
            <h4>{lnfunction.title}</h4>
            <p>{lnfunction.description}</p>
            <div className={`${styles.imgwrapper}`}>
              <img src={'/' + lnfunction.img} alt="function 1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ln;
