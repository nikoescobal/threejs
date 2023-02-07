import styles from './methodcard.module.scss';
import useStore from '../../../../store/store';

const MethodCard = ({ title, description, className, children }) => {
  const { isDarkMode } = useStore();

  return (
    <div className={`${styles['method-card']} ${className}`}>
      <div
        className={`${styles['inner-content']} ${
          !isDarkMode ? `${styles.light}` : ''
        }`}
      >
        <h3 className={styles['method-title']}>{title}</h3>
        {/* <p className={styles['method-description']}>{description}</p> */}
        {children}
      </div>
    </div>
  );
};

export default MethodCard;
