import styles from './Tribes.module.scss';
import useStore from '../../../store/store';
import content from './content';
import { useRouter } from 'next/router';
import List from '../../Generic/List/List';
import ListItem from '../../Generic/ListItem/ListItem';
import NFTSlider from '../NFTSlider/NFTSlider';

function Tribes() {
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
      <p>{content[locale].description_1}</p>
      <br />
      <p>{content[locale].description_2}</p>
      <NFTSlider />
    </section>
  );
}

export default Tribes;
