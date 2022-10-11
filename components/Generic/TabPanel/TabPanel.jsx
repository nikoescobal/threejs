/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import useStore from '../../../store/store';
import styles from './tabpanel.module.scss';

function TabPanel({
  children, value, index, className, ...other
}) {
  const { isDarkMode } = useStore();  
  
  return (
    <div
      className={`${styles['tab-panel']} ${!isDarkMode ? `${styles.light}` : ''} ${className}`}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default TabPanel;
