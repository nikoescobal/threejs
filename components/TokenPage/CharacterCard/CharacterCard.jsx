import { style } from '@mui/system';
import Image from 'next/image';
import styles from './charactercard.module.scss';

function CharacterCard({children, src, alt}) {
  return (
    <div className={styles.wrapper}>
      <h4>{children}</h4>
      <div>
        <Image src={src} alt={alt} />
      </div>
    </div>
  )
}

export default CharacterCard