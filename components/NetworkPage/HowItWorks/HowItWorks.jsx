import styles from './HowItWorks.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import EastIcon from '@mui/icons-material/East';
import AlternatingGrid from '../../Generic/AlternatingGrid/AlternatingGrid';
import Image from 'next/image';

function HowItWorks() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();
  const { uuid } = require('crypto');

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
      {/* <h2>{content[locale].title}</h2> */}
      <p>{content[locale].description}</p>
      <div className={`${styles['list-wrapper']}`}>
        {content[locale].list.map((item) => (
          <AlternatingGrid key={uuid} className={styles.grid} reverse>
            <div className={styles['img-wrapper']}>
              <Image src={item.img} width={970} height={522} objectFit={'contain'} layout='responsive' alt="illustration" />
            </div>
            <div className={styles['text-wrapper']}>
              <span>{item.surtitle}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a className="button-blue" href="https://blog.legacynetwork.io" rel='noreferrer' target="_blank">
                {item.link}
                {' '}
                <EastIcon />
              </a>
              <div className={styles['sub-list-wrapper']}>
                {
                  item.sub_list.map((subItem) => (
                    <div key={uuid} className={styles['sub-item']}>
                      {subItem.icon}
                      <h4>{subItem.title}</h4>
                      <p>{subItem.description}</p>
                      <a href="https://blog.legacynetwork.io" rel='noreferrer' target="_blank">
                        {subItem.link}
                        {' '}
                        <EastIcon />
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
          </AlternatingGrid>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
