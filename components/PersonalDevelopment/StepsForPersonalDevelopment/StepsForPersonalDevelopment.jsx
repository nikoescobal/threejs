import styles from './stepsforpersonaldevelopment.module.scss';
import generics from '../../../styles/generics.module.scss';
import { content } from './content';
import { useEffect } from 'react';

function StepsForPersonalDevelopment() {
  return (
    <div className={`${styles.wrapper} ${generics['spacing-x']}`}>
      <div>
        <h3>
          Steps to archieving personal development
        </h3>
        <p>
          It requires a plan, dedication, and a will to keep trying until you become successful. In this section, you will learn about the different steps involved in personal development.
        </p>
      </div>
      <div className={styles.grid}>
        {content.map((item, index) => (
          <div className={styles['col-item']} key={item.title}>
            <h4>{item.title}</h4>
            <p>
              {index + 1}.
              {' '}
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StepsForPersonalDevelopment