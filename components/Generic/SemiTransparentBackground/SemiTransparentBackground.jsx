import useStore from '../../../store/store';
import styles from './semitransparentbackground.module.scss';

function SemiTransparentBackground({children}) {
  const { isDarkMode } = useStore();
  
  return (
    <div className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''}`}>
      {children}
    </div>
  )
}

export default SemiTransparentBackground