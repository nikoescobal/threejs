/* eslint-disable react/prop-types */
import Link from 'next/link';
import PropTypes from 'prop-types';
import useStore from '../../../store/store';
import styles from './clearcontainer.module.scss';

function ClearContainer({
  title, children, to, linkText, textAlign,
  reducedPadding, style, isTransparent, className
}) {
  const { isDarkMode } = useStore();
  
  return (
    <div
      className={`
        ${styles['clear-container']} 
        ${className}
        ${!isDarkMode ? `${styles.light}` : ''} 
        ${isTransparent ? `${styles.transparent}` : ''} 
        ${reducedPadding ? `${styles['reduced-padding']}` : ''}`}
      style={{
        textAlign,
        ...style
      }}
    >
      <h4>{title}</h4>
      {children}
      {linkText?.length > 0
      && (
      <div>
        <Link href={to}>
          <a className='button-blue'>{linkText}</a>
        </Link>
      </div>
      )}
    </div>
  );
}

ClearContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  to: PropTypes.string,
  linkText: PropTypes.string,
  textAlign: PropTypes.string,
  border: PropTypes.string,
};

ClearContainer.defaultProps = {
  title: '',
  to: '/',
  linkText: '',
  textAlign: 'left',
  border: 'none',
};

export default ClearContainer;
