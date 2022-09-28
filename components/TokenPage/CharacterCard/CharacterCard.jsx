import { style } from '@mui/system';
import Image from 'next/image';
import useStore from '../../../store/store';
import styles from './charactercard.module.scss';

function CharacterCard({children, srcOne, altOne, srcTwo, altTwo, isQuestionMark}) {
  const { isDarkMode } = useStore();
  
  return (
    <div className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''}`}>
      <div className={styles.card}>
        <h4>{children}</h4>
        <div>
          { isQuestionMark
            ? <h3>?</h3>
            : <Image src={srcOne} alt={altOne} layout="fill"
              objectFit="contain" />
          }
        </div>
        {/* <div>
          <Image src={srcTwo} alt={altTwo} layout="fill"
  objectFit="contain" />
        </div> */}
      </div>
    </div>
  )
}

CharacterCard.defaultProps= {
  isQuestionMark: false
}

export default CharacterCard