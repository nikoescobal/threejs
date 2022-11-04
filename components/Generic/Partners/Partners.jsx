import styles from './partners.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';

function Partners() {
  const partners = [
    {
      endpoint: 'crypto-valley.png',
      alt: 'crypto valley logo',
      class: 'crypto-valley',
      src: 'https://cryptovalley.swiss/'
    },
    {
      endpoint: 'cv-labs.png',
      alt: 'cv labs logo',
      class: 'cv-labs',
      src: 'https://www.cvlabs.com/'
    },
    {
      endpoint: 'niedermuller.png',
      alt: 'niedermuller logo',
      class: 'niedermuller',
      src: 'https://niedermueller.law/de/'
    },
    {
      endpoint: 'sercor.png',
      alt: 'seratio logo',
      class: 'sercor',
      src: 'https://www.sercor.com/en/'
    },
    {
      endpoint: 'synaps.png',
      alt: 'synaps logo',
      class: 'synaps',
      src: 'https://synaps.io/'
    },
    {
      endpoint: 'caag.png',
      alt: 'caag logo',
      class: 'caag',
      src: 'https://cryptoadvisory.li/en/home/'
    },
    {
      endpoint: 'red4sec.png',
      alt: 'red4sec logo',
      class: 'red4sec',
      src: 'https://red4sec.com/en'
    },
  // {
    //   endpoint: 'maerki.png',
    //   alt: 'maerki logo',
    //   class: 'maerki',
    // },
    {
      endpoint: 'saynode.png',
      alt: 'saynode logo',
      class: 'saynode',
      src: 'https://saynode.ch/'
    },
    {
      endpoint: 'safehaven.png',
      alt: 'safehaven logo',
      class: 'safehaven',
      src: 'https://safehaven.io/'
    },
    {
      endpoint: 'vechain.png',
      alt: 'vechain logo',
      class: 'vechain',
      src: 'https://www.vechain.org/'
    },
  ];
  const { isDarkMode } = useStore((state) => state);

  return (
    <section
      className={`${styles.partners} ${!isDarkMode ? `${styles.light}` : ''} `}
    >
      <h3 className={`${generics['spacing-x']}`}>Our Partners</h3>
      <div
        className={`${styles['logos-wrapper']} ${generics['spacing-x']} max-1920`}
      >
        {partners.map((logo) => (
          <div key={logo.alt}>
            <a href={logo.src} target="_blank" rel="noopener noreferrer">
              <img
                src={`/logos/${logo.endpoint}`}
                alt={logo.alt}
                className={styles[logo.class]}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;
