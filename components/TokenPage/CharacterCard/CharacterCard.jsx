import { style } from '@mui/system';
import Image from 'next/image';
import useStore from '../../../store/store';
import styles from './charactercard.module.scss';

function CharacterCard({children, srcOne, altOne, srcTwo, altTwo}) {
  const { isDarkMode } = useStore();
  
  return (
    <div className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''}`}>
      <div className={styles.card}>
        <h4>{children}</h4>
        <div>
          <Image src={srcOne} alt={altOne} layout="fill"
    objectFit="contain" />
        </div>
        {/* <div>
          <Image src={srcTwo} alt={altTwo} layout="fill"
  objectFit="contain" />
        </div> */}
      </div>
    </div>
  )
}

export default CharacterCard