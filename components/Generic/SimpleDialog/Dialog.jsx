import { Dialog as MuiDialog, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
import useStore from '../../../store/store';
import styles from './dialog.module.scss';

function Dialog({ onClose, selectedValue, open, title, children }) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const { isDarkMode } = useStore();

  return (
    <MuiDialog onClose={handleClose} open={open}>
      <div className={`${styles['content-wrapper']} ${!isDarkMode ? `${styles.light}` : ''}`}>
        <DialogTitle>{title}</DialogTitle>
        <div>
          {children}
        </div>
      </div>
    </MuiDialog>
  );
}

Dialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default Dialog