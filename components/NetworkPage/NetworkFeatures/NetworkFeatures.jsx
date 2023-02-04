import styles from './NetworkFeatures.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import AlternatingGrid from '../../Generic/AlternatingGrid/AlternatingGrid';
import { Button } from '@mui/material';
import List from '../../Generic/List/List';
import ListItem from '../../Generic/ListItem/ListItem';

function NetworkFeatures() {
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
          <AlternatingGrid key={uuid}>
            <div className={styles['img-wrapper']}>
              <img src={item.picture} width={700} height={100} alt="Network Mockup" />
            </div>
            <div className={styles['info-wrapper']}>
              <span>{item.top_text}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <List className={styles.list}>
                {item.features.map((feature) => (
                  <ListItem key={uuid} className={styles['list-item']}>{feature}</ListItem>
                ))}
              </List>
              {
                item.button
                  ? <Button className={'button-blue'}>{item.button}</Button>
                  : null
              }
            </div>
          </AlternatingGrid>
        ))}
      </div>
    </section>
  );
}

export default NetworkFeatures;
