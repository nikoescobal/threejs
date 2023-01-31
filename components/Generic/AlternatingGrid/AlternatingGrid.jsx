import styles from './alternatinggrid.module.scss';
import PropTypes from 'prop-types';

function AlternatingGrid({ columns, children, className }) {
  return (
    <div className={`${styles['wrapper']} ${className}`}>
      { children }
      {/* {content[locale].map((item) => (
        <div key={uuid} className={styles.grid}>
          <div className={styles['img-wrapper']}>
            <img src={item.image} width={700} height={100} alt="illustration" />
          </div>
          <div className={styles['card']}>
            <h3>{item.title}</h3>
            <div dangerouslySetInnerHTML={{__html: item.body}} />
            <Link href={item.url} title={item.urlTitle}>
              <a className="button-blue">{translations['get_started'][locale]}{' '}<EastIcon /></a>
            </Link>
          </div>
        </div>
      ))} */}
    </div>
  )
}

AlternatingGrid.propTypes = {
  columns: PropTypes.number,
}

AlternatingGrid.defaultProps = {
  columns: 2,
}

export default AlternatingGrid