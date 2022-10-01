import styles from './partners.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';

function Partners() {
  const partners = [
    {
      endpoint: 'crypto-valley.png',
      alt: 'crypto valley logo',
      class: 'crypto-valley',
    },
    {
      endpoint: 'cvlabs.svg',
      alt: 'cv labs logo',
      class: 'cv-labs',
    },
    {
      endpoint: 'niedermuller.png',
      alt: 'niedermuller logo',
      class: 'niedermuller',
    },
    {
      endpoint: 'sercor.svg',
      alt: 'seratio logo',
      class: 'sercor',
    },
    {
      endpoint: 'synaps.png',
      alt: 'synaps logo',
      class: 'synaps',
    },
    {
      endpoint: 'caag.png',
      alt: 'caag logo',
      class: 'caag',
    },
    {
      endpoint: 'red4sec.png',
      alt: 'red4sec logo',
      class: 'red4sec',
    },
    {
      endpoint: 'maerki.svg',
      alt: 'maerki logo',
      class: 'maerki',
    },
  ];
  const { isDarkMode } = useStore((state) => state);

  return (
    <section
      className={`${styles.partners} ${!isDarkMode ? `${styles.light}` : ''} `}
    >
      <h3 className={`${generics['spacing-x']}`}>Our Partners</h3>
      <div className={`${styles['logos-wrapper']} ${generics['spacing-x']} max-1920`}>
        {partners.map((logo) => (
          <div key={logo.alt}>
            <img
              src={`/logos/${logo.endpoint}`}
              alt={logo.alt}
              className={styles[logo.class]}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;
