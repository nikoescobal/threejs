import styles from './BoardFeatures.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import AlternatingGrid from '../../Generic/AlternatingGrid/AlternatingGrid';
import { Button } from '@mui/material';
import List from '../../Generic/List/List';
import ListItem from '../../Generic/ListItem/ListItem';

function BoardFeatures() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto')

  return (
    <section
      className={`
        ${styles['wrapper']}
        ${styles[locale]}
        ${!isDarkMode ? `${styles['light']}` : ''}
        spacing-x
        max-1920
      `}
    >
      <h2>{content[locale].title}</h2>
      <p>{content[locale].description}</p>
      <div className={styles.grid}>
        {content[locale].grid_items.map((item) => (
          <div key={uuid} className={styles['item']}>
            <span>{item.top_text}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <List className={styles.list}>
              {item.features.map((feature) => (
                <ListItem key={uuid} className={styles['list-item']}>{feature}</ListItem>
              ))}
            </List>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BoardFeatures;
