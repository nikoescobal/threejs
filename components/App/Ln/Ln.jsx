/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './ln.module.scss';
import WavesWrapper from '../../Generic/WavesWrapper/WavesWrapper';
import generics from '../../../styles/generics.module.scss';
import { ln } from '../../Constants/AppConstants';
import Image from 'next/image';

function Ln() {
  const { isDarkMode } = useStore();

  return (
    <section
      className={`${styles.section} ${!isDarkMode ? `${styles.light}` : ''}`}
    >
      <WavesWrapper hideBottom={true}>
        <h2>LN APP</h2>
        {ln.map((ln, index) => (
          <div key={index}>
            <h3>{ln.title}</h3>
            <h4>{ln.description}</h4>
            {<Image src={ln.img.src} alt="character" />}
          </div>
        ))}
      </WavesWrapper>
    </section>
  );
}

export default Ln;
