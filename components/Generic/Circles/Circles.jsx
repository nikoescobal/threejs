import Image from 'next/image';
import styles from './circles.module.scss';
import CirclesImg from '../../../public/backgrounds/circles.svg';
import useStore from '../../../store/store';

function Circles({className}) {
  const { isDarkMode } = useStore();
  
  return (
    <div className={`${className} ${styles.wrapper} ${isDarkMode ? '' : `${styles.light}`}`}>
      <Image src={CirclesImg} alt="circle" />
    </div>
  )
}

export default Circles