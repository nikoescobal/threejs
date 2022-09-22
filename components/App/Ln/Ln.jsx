/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './ln.module.scss';
import WavesWrapper from '../../Generic/WavesWrapper/WavesWrapper';
import generics from '../../../styles/generics.module.scss';
import { lnfunctions } from '../../Constants/AppConstants';
import Image from 'next/image';

function Ln() {
  const { isDarkMode } = useStore();

  return (
    <section
      className={`${styles.section} ${!isDarkMode ? `${styles.light}` : ''}`}
    >
      <WavesWrapper hideBottom={true}>
        <h2>LN APP</h2>
        <div className={`${styles.container}`}>
          {lnfunctions.map((lnfunction) => (
            <div key={lnfunction.id} className={`${styles.lnwrapper}`}>
              <h3>{lnfunction.title}</h3>
              <h4>{lnfunction.description}</h4>
              <div className={`${styles.imgwrapper}`}>
                <img src={'/' + lnfunction.img} alt="function 1" />
              </div>
            </div>
          ))}
        </div>
      </WavesWrapper>
    </section>
  );
}

export default Ln;
