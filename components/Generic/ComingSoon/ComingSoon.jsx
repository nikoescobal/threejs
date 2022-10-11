import Link from 'next/link';
import useStore from '../../../store/store';
import styles from './comingsoon.module.scss';

function ComingSoon({className, children, style}) {
  const { isDarkMode } = useStore();

  return (
    <div  className={`${styles.wrapper} ${className} ${isDarkMode ? '' : `${styles.light}`}`}>
      <p style={style} className={`button-blue`}>
        {children}
      </p>
      <p className={`${styles['hover-text']}`}>
        Coming Soon
      </p>
    </div>
  )
}

export default ComingSoon
