import styles from './methodcard.module.scss';

const MethodCard = ({ title, description }) => {
  return (
    // <article className={styles['method-card']}>
    //   <h4 className={styles['method-title']}>{title}</h4>
    //   <ul className={styles['method-bullets']}>
    //     {bullets.map((bullet, index) => (
    //       <li key={index}>{bullet}</li>
    //     ))}
    //   </ul>
    // </article>
    <article className={styles['method-card']}>
      <h4 className={styles['method-title']}>{title}</h4>
      <p className={styles['method-description']}>{description}</p>
    </article>
  );
};

export default MethodCard;
