import styles from './alternatinggrid.module.scss';
import PropTypes from 'prop-types';

function AlternatingGrid({ columns, children, className, reverse }) {
  return (
    <div className={`${styles['wrapper']} ${className}`} data-reverse={reverse}>
      { children }
    </div>
  )
}

AlternatingGrid.propTypes = {
  columns: PropTypes.number,
  reverse: PropTypes.bool,
}

AlternatingGrid.defaultProps = {
  columns: 2,
  reverse: false,
}

export default AlternatingGrid