/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './lgcn.module.scss';
import WavesWrapper from '../../Generic/WavesWrapper/WavesWrapper';
import generics from '../../../styles/generics.module.scss';
import { lgcnfunctions } from '../../Constants/Constants';

function LGCN() {
  const { isDarkMode } = useStore();

  return (
    <section
      className={`${styles.section} ${!isDarkMode ? `${styles.light}` : ''}`}
    >
      <WavesWrapper hideBottom={true}>
        <h2>LGCN APP</h2>
        {lgcnfunctions.map((lgcnfunction, index) => (
          <div
            key={index}
            className={`${styles['questions-wrapper']} ${generics['spacing-x']}`}
          >
            <h3>{lgcnfunction.title}</h3>
            <p>{lgcnfunction.text}</p>
          </div>
        ))}
      </WavesWrapper>
    </section>
  );
}

export default LGCN;
