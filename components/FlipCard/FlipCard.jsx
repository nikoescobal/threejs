import LinkedIn from '@mui/icons-material/LinkedIn';
import PropTypes from 'prop-types';
import useStore from '../../store/store';
import styles from './flipcard.module.scss';

function FlipCard({ className, position, disableFlip, visible, profileLink, picture, name }) {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <div className={`
      ${styles.flip}
      ${className}
      ${!isDarkMode ? `${styles.light}` : ''}
      ${disableFlip ? `${styles.disabled}` : `${styles.enabled}`}
      ${visible ? '' : 'invisible'}`}>
      <div className={`${styles['flip-content']}`}>
        <div className={`${styles['flip-front']}`}>
          {!disableFlip && <img src={picture} alt={name} />}
        </div>
        <div className={`${styles['flip-back']}`}>
          {!disableFlip && 
            <div>
              <p>{name}</p>
              {/* <p>{position}</p> */}
              <a href={profileLink} rel='noreferrer' target="_blank">
                <LinkedIn />
              </a>
            </div>
          }
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
