/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import styles from './Functionality.module.scss';
import content from './content';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import List from '../../Generic/List/List';
import ListItem from '../../Generic/ListItem/ListItem';

function Functionality() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();
  const { uuid } = require('crypto');

  return (
    <section
      className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''} spacing-x max-1920`}
    >
      {
        content[locale].list.map((row, index) => (
          <div key={uuid} className={styles.row}>
            <div>
              <img src={row.img.src} alt={row.img.alt} />
            </div>
            <div>
              <h2 className={styles['title']}>{row.title}</h2>
              <div className={styles['info']} dangerouslySetInnerHTML={{__html: row.body}} />
              <br />
              {
                index === 1
                  ? <List className={styles.list}>
                      <ListItem>Analyzes your personality, behavior patterns and much more</ListItem>
                      <ListItem>Delivers individual strategies for your personal success</ListItem>
                      <ListItem>Grants you access to valuable data about yourself</ListItem>
                      <ListItem>Guides you step by step through the game of life</ListItem>
                    </List>
                  : null
              }
            </div>
          </div>
        ))
      }
    </section>
  );
}

export default Functionality;
