import Link from 'next/link';
import styles from './WhyLegacyNetwork.module.scss';
import useStore from '../../../store/store';
import content from './content';
import Circles from '../../Generic/Circles/Circles';
import { useRouter } from 'next/router';
import translations from '../../../language';
import Image from 'next/image';
import EastIcon from '@mui/icons-material/East';
import AlternatingGrid from '../../Generic/AlternatingGrid/AlternatingGrid';

function WhyLegacyNetwork() {
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
      <div className={`${styles['left']}`}>
        <h2>{content[locale].title}</h2>
        <p>{content[locale].body}</p>
      </div>
      <div className={`${styles['right']}`}>
        {content[locale].extras.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyLegacyNetwork;
