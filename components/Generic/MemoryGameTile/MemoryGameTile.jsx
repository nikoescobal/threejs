import styles from './MemoryGameTile.module.scss';
import PropTypes from 'prop-types';
import useStore from '../../../store/store';

function MemoryGameTile({ imgSource, imgDesc, className, onClick, opened, finished, hasGameStarted }) {
  const { isDarkMode } = useStore();
  
  return (
    <div className={`
      ${styles.wrapper}
      ${isDarkMode ? '' : styles.light}
      ${className}
      `}
      onClick={onClick}
      data-has-started={hasGameStarted}
      data-opened={opened}
      data-finished={finished}>
      <img
        src={imgSource}
        alt={imgDesc}
      />
    </div>
  );
}

MemoryGameTile.propTypes = {
  opened: PropTypes.bool,
  finished: PropTypes.bool,
}

MemoryGameTile.defaultProps = {
  opened: false,
  finished: false,
}

export default MemoryGameTile