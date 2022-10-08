/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { Dialog, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import useStore from '../../../store/store';
import styles from './slidercontent.module.scss';
import CheckIcon from '@mui/icons-material/Check';

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
          <li key={`${index}1`}>
            {/* <span>{item.content} {item.isChecked && <CheckIcon color='success' />}</span> */}
            <span>{item.content}</span>
          </li>
        ))}
      </ul>
    // </Dialog>
  );
}

SliderContent.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};

SliderContent.defaultProps = {
  list: [],
};

export default SliderContent;
