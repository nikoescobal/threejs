import { Dialog, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
import useStore from '../../../store/store';
import styles from './simpledialog.module.scss';

function SimpleDialog({ onClose, selectedValue, open, title, children }) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const { isDarkMode } = useStore();

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className={`${styles['content-wrapper']} ${!isDarkMode ? `${styles.light}` : ''}`}>
        <DialogTitle>{title}</DialogTitle>
        <div>
          {children}
          
        </div>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default SimpleDialog