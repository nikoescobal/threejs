import styles from './methodcard.module.scss';
import BorderRight from '../../../public/icons/border-gradient-right.svg';
import Borderleft from '../../../public/icons/border-gradient-left.svg';

const MethodCard = ({ title, description, className }) => {
  return (
    // <article className={styles['method-card']}>
    //   <h4 className={styles['method-title']}>{title}</h4>
    //   <ul className={styles['method-bullets']}>
    //     {bullets.map((bullet, index) => (
    //       <li key={index}>{bullet}</li>
    //     ))}
    //   </ul>
    // </article>
    <article className={`${styles['method-card']} ${className}`}>
      <div className={styles['inner-content']}>
        {/* <div className={styles['card-border']}>
          <img
            className={styles['image-border']}
            src={BorderRight.src}
            alt=""
            width="60"
            height="60"
          />
        </div> */}
        <h4 className={styles['method-title']}>{title}</h4>
        <p className={styles['method-description']}>{description}</p>
      </div>
    </article>
  );
};

export default MethodCard;
