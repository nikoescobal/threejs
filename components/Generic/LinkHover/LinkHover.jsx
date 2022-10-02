import Link from 'next/link';
import useStore from '../../../store/store';
import styles from './linkhover.module.scss';

function LinkHover({hoverText, children}) {
  const { isDarkMode } = useStore();
  
  return (
    <div className={`${styles.wrapper} ${isDarkMode ? '' : `${styles.light}`}`}>
      <p className={styles['hover-text']}>
        {hoverText}
      </p>
      <span>
        {children}
      </span>
    </div>
  )
}

export default LinkHover