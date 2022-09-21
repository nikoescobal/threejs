import PropTypes from 'prop-types';
import useStore from '../../store/store';
import styles from './flipcard.module.scss';

function FlipCard({ className, disableFlip, visible }) {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <div className={`
      ${styles.flip}
      ${className}
      ${!isDarkMode ? 'light' : ''}
      ${disableFlip ? 'disabled' : `${styles.enabled}`}
      ${visible ? '' : 'invisible'}`}>
      <div className={`${styles['flip-content']}`}>
        <div className={`${styles['flip-front']}`}>
          {!disableFlip && 'Front'}
        </div>
        <div className={`${styles['flip-back']}`}>
          {!disableFlip && 'Back'}
        </div>
      </div>
    </div>
  );
}

FlipCard.propTypes = {
  disableFlip: PropTypes.bool,
  visible: PropTypes.bool,
};

FlipCard.defaultProps = {
  disableFlip: false,
  visible: true,
};

export default FlipCard;
