import useStore from '../../../store/store';
import styles from './wavelines.module.scss';
import Waves from '../../../public/backgrounds/waves-updated.svg';
import Image from 'next/image';

function WaveLines({ className, style }) {
  const { isDarkMode } = useStore();

  return (
    <div
      style={style}
      className={`
      ${styles.wrapper}
      ${isDarkMode ? '' : `${styles.light}`}
      ${className}
    `}
    >
      <Image draggable="false" src={Waves} alt="wave lines" />
    </div>
  );
}

export default WaveLines;
