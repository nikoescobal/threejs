import styles from './partners.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';
import { useRouter } from 'next/router';
import content from './content';

const partners = [
  {
    endpoint: 'crypto-valley.webp',
    alt: 'crypto valley logo',
    class: 'crypto-valley',
    src: 'https://cryptovalley.swiss/',
  },
  {
    endpoint: 'cv-labs.png',
    alt: 'cv labs logo',
    class: 'cv-labs',
    src: 'https://www.cvlabs.com/',
  },
  {
    endpoint: 'niedermuller.webp',
    alt: 'niedermuller logo',
    class: 'niedermuller',
    src: 'https://niedermueller.law/de/',
  },
  {
    endpoint: 'sercor.png',
    alt: 'seratio logo',
    class: 'sercor',
    src: 'https://www.sercor.com/en/',
  },
  {
    endpoint: 'synaps.webp',
    alt: 'synaps logo',
    class: 'synaps',
    src: 'https://synaps.io/',
  },
  {
    endpoint: 'caag.webp',
    alt: 'caag logo',
    class: 'caag',
    src: 'https://cryptoadvisory.li/en/home/',
  },
  {
    endpoint: 'red4sec.webp',
    alt: 'red4sec logo',
    class: 'red4sec',
    src: 'https://red4sec.com/en',
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
    src: 'https://saynode.ch/',
  },
  {
    endpoint: 'safehaven.webp',
    alt: 'safehaven logo',
    class: 'safehaven',
    src: 'https://safehaven.io/',
  },
  {
    endpoint: 'vechain.webp',
    alt: 'vechain logo',
    class: 'vechain',
    src: 'https://www.vechain.org/',
  },
];

function Partners() {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();

  return (
    <section>
      <div className={styles['container']}>
        <div className={styles['slider-wrapper']}>
          <h3 className={styles['title']}>{content[locale].title}</h3>
          <div className={`${styles['slider']} ${styles['animate']}`}>
            <div className={styles['logo-wrapper']}>
              {partners.map((logo, index) => (
                <a
                  key={index}
                  className={styles['slide']}
                  href={logo.src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`/logos/${logo.endpoint}`}
                    alt={logo.alt}
                    className={`${styles['logo']} ${styles[logo.class]}`}
                  />
                </a>
              ))}
            </div>
            <div className={styles['logo-wrapper']}>
              {partners.map((logo, index) => (
                <a
                  key={index}
                  className={styles['slide']}
                  href={logo.src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`/logos/${logo.endpoint}`}
                    alt={logo.alt}
                    className={`${styles['logo']} ${styles[logo.class]}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
