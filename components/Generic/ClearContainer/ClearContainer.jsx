/* eslint-disable react/prop-types */
import Link from 'next/link';
import PropTypes from 'prop-types';
import useStore from '../../../store/store';
import styles from './clearcontainer.module.scss';
// import ComingSoon from '../ComingSoon/ComingSoon';

function ClearContainer({
  title,
  children,
  to,
  urlTitle,
  linkText,
  textAlign,
  reducedPadding,
  style,
  isTransparent,
  className,
  isComingSoon,
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
        ...style,
      }}
    >
      <h4>{title}</h4>
      {children}
      {linkText?.length > 0 && (
        <div className={styles['link-wrapper']}>
          {isComingSoon ? (
            <div className={styles['link-text']}>
              <p className="button-blue">{linkText}</p>
            </div>
          ) : (
            <Link href={to} title={urlTitle}>
              <a className="button-blue">{linkText}</a>
            </Link>
          )}
          {isComingSoon && <p className={styles['coming-soon']}>Coming Soon</p>}
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
