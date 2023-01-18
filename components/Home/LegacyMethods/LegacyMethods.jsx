import content from './content.js';
import styles from './legacymethods.module.scss';
import MethodCard from './MethodCard';

const LegacyMethods = () => {
  return (
    <section className={`${styles['legacy-method-wrapper']} spacing-x`}>
      {/* <hr className={styles['divider']}></hr> */}

      <h3 className={styles['title']}>The Legacy Method</h3>
      <p className={styles['subtitle']}>
        We follow a systematic approach that is based on 6{' '}
        <strong>core methodologies</strong>.
      </p>

      <div className={styles['legacy-methods']}>
        <div className={styles['left-content']}>
          {content.slice(0, 3).map((method, index) => (
            <MethodCard
              key={index}
              title={method.title}
              description={method.description}
            />
          ))}
        </div>
        <div className={styles['divider-wrapper']}>
          <div className={styles['divider-content']}>
            <div className={styles['divider-indicator']}>
              <span></span>
            </div>
            <div className={styles['divider-indicator']}>
              <span></span>
            </div>
            <div className={styles['divider-indicator']}>
              <span></span>
            </div>
            <div className={styles['divider-indicator']}>
              <span></span>
            </div>
            <div className={styles['divider-indicator']}>
              <span></span>
            </div>
            <div className={styles['divider-indicator']}>
              <span></span>
            </div>
          </div>
        </div>

        <div className={styles['right-content']}>
          {content.slice(3, 6).map((method, index) => (
            <MethodCard
              key={index}
              title={method.title}
              description={method.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyMethods;
