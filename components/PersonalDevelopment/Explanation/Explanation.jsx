import styles from './explanation.module.scss';
import generics from '../../../styles/generics.module.scss';
import Image from 'next/image';
import Shield from '../../../public/backgrounds/shield.png';
import useStore from '../../../store/store';
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from '@mui/material';
import content from './content';
import { useRouter } from 'next/router';

function Explanation() {
  const { isDarkMode } = useStore();
  const isTablet = useMediaQuery('(min-width: 768px');
  const { locale } = useRouter();

  const { uuid } = require('crypto')

  return (
    <div
      className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''} ${
        generics['spacing-x']
      }`}
    >
      {/* <div className={styles['image-wrapper']}>
        <Image src={Shield} alt="shield" />
      </div> */}
      <div className="max-1920">
        {isTablet ? (
          <Parallax speed={30} className={`${styles.shield} max-1920`}>
            <div>
              <Image src={Shield} alt="shield" draggable="false" />
            </div>
          </Parallax>
        ) : (
          <div className={styles['shield']}>
            <Image src={Shield} alt="shield" draggable="false" />
          </div>
        )}
      </div>

      {
        content[locale].map((htmlItem) => (
          <div key={uuid} className={`${styles.info} max-1920`} dangerouslySetInnerHTML={{__html: htmlItem}}>
            
          </div>
        ))
      }
    </div>
  );
}

export default Explanation;
