/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { Dialog, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import useStore from '../../../store/store';
import styles from './slidercontent.module.scss';
import CheckIcon from '@mui/icons-material/Check';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function SliderContent({ list, open, isActive, onClose, showBenefits }) {
  const { isDarkMode } = useStore((state) => state);
  const isTablet = useMediaQuery('(min-width:768px)');
  
  const handleClose = () => {
    onClose();
  };

  return (
    // <Dialog onClose={handleClose} open={open}>
      <ul className={`
          ${styles['slide-content-wrapper']}
          ${isActive ? `${styles.active}` : ''}
          ${!isDarkMode ? `${styles.light}` : ''}
        `}

        style={{
          transform: isTablet ? 'translateX(0)' : 'translateX(3vw)',
          scale: isTablet ? '1' : '0.85'
        }}
      >
        { showBenefits &&
          list.map((item, index) => (
          <li key={`${index}1`}>
            {item}
          </li>
        ))}
        { !showBenefits &&
          list.map((item, index) => (
          <li key={`${index}1`} className={item.isChecked ? styles['success'] : ''}>
            <span>{item.isChecked && <CheckIcon className={styles.check} color='success' />} {item.content}</span>
            {/* <span>{item.content}</span> */}
          </li>
        ))}
        <a
          href='https://blog.legacynetwork.io'
          rel="no-referrer noreferrer"
          target="_blank"
          title='Link to Legacy Network Blog website'
          className={`${styles['slide-button']} read-more`}
        >
          Read More
          <ArrowRightAltIcon />
        </a>
      </ul>
    // </Dialog>
  );
}

SliderContent.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
        isChecked: PropTypes.bool,
        content: PropTypes.string,
    })
  ),
};

SliderContent.defaultProps = {
  list: [],
};

export default SliderContent;
