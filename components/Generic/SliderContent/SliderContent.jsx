/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import { Dialog } from '@mui/material';
import PropTypes from 'prop-types';
import useStore from '../../../store/store';
import styles from './slidercontent.module.scss';

function SliderContent({ list, open, isActive, onClose }) {
  const { isDarkMode } = useStore((state) => state);
  
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
      >
        {list.map((item, index) => (
          <li key={`${index}1`}>
            {item}
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
