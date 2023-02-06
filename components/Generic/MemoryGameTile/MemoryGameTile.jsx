import styles from './MemoryGameTile.module.scss';
import PropTypes from 'prop-types';

function MemoryGameTile({ imgSource, imgDesc, className, onClick, opened, finished }) {
  return (
    <div className={`${styles.wrapper} ${className}`} onClick={onClick} data-opened={opened} data-finished={finished}>
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