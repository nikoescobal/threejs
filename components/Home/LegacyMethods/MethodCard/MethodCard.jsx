import styles from './methodcard.module.scss';
import useStore from '../../../../store/store';

const MethodCard = ({ title, description, className }) => {
  const { isDarkMode } = useStore();

  return (
    <div className={`${styles['method-card']} ${className}`}>
      <div
        className={`${styles['inner-content']} ${
          !isDarkMode ? `${styles.light}` : ''
        }`}
      >
        <h4 className={styles['method-title']}>{title}</h4>
        <p className={styles['method-description']}>{description}</p>
      </div>
    </div>
  );
};

export default MethodCard;
