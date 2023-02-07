import content from './content.js';
import styles from './legacymethods.module.scss';
import useStore from '../../../../store/store';
import MethodCard from '../MethodCard/MethodCard.jsx';
import Arrow from '../../../../public/icons/dotted-arrow.svg';
import { Diversity3 } from '@mui/icons-material';
import { useRouter } from 'next/router.js';
import List from '../../../Generic/List/List.jsx';
import ListItem from '../../../Generic/ListItem/ListItem.jsx';

const LegacyMethods = () => {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();
  const { uuid } = require('crypto');

  return (
    <section
      className={`${styles['wrapper']} ${
        !isDarkMode ? `${styles['light']}` : ''
      } spacing-x max-1920`}
    >
      <h2 className={styles['title']}>{content[locale].title}</h2>
      <p className={styles['subtitle']} dangerouslySetInnerHTML={{__html: content[locale].subtitle}} />
      <img src="/weapons/spikes.png" alt="spikes weapon" className={styles.spikes} />
      <div className={styles['legacy-methods']}>
        <div className={styles['left-content']}>
          {content[locale].list.slice(0, 3).map((method, index) => (
            <MethodCard
              className={styles['left']}
              key={uuid}
              title={method.title}
              // description={method.description}
            >
              <List className={styles.list}>
              {
                method.list.map((item) => <ListItem key={uuid}>{item}</ListItem>)
              }
              </List>
            </MethodCard>
          ))}
        </div>
        <div className={styles['divider-wrapper']}>
          <div className={styles['divider-content']}>
            <div className={styles['divider-indicator']}>
              <div className={styles['arrow-left']}>
                <img src={Arrow.src} alt="dotted arrow" />
              </div>
              <span></span>
            </div>
            <div className={styles['divider-indicator']}>
              <div className={styles['arrow-right']}>
                <img src={Arrow.src} alt="dotted arrow" />
              </div>

              <span></span>
            </div>
            <div className={styles['divider-indicator']}>
              <div className={styles['arrow-left']}>
                <img src={Arrow.src} alt="dotted arrow" />
              </div>

              <span></span>
            </div>
            <div className={styles['divider-indicator']}>
              <div className={styles['arrow-right']}>
                <img src={Arrow.src} alt="dotted arrow" />
              </div>

              <span></span>
            </div>
            <div className={styles['divider-indicator']}>
              <div className={styles['arrow-left']}>
                <img src={Arrow.src} alt="dotted arrow" />
              </div>

              <span></span>
            </div>
            <div className={styles['divider-indicator']}>
              <div className={styles['arrow-right']}>
                <img src={Arrow.src} alt="dotted arrow" />
              </div>

              <span></span>
            </div>
          </div>
        </div>

        <div className={styles['right-content']}>
          {content[locale].list.slice(3, 6).map((method, index) => (
            <MethodCard
              className={styles['right']}
              key={uuid}
              title={method.title}
              // description={method.description}
            >
              <List className={styles.list}>
              {
                method.list.map((item) => <ListItem key={uuid}>{item}</ListItem>)
              }
              </List>
            </MethodCard>
            ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyMethods;
