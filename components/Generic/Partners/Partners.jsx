import styles from './partners.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';

function Partners() {
  const partners = [
    {
      endpoint: 'cv-labs.svg',
      alt: 'cv labs'
    },
    {
      endpoint: 'cv-labs.svg',
      alt: 'cv labs1'
    },
    {
      endpoint: 'cv-labs.svg',
      alt: 'cv labs2'
    },
    {
      endpoint: 'cv-labs.svg',
      alt: 'cv labs3'
    },
  ]
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <section className={`${styles.partners} ${!isDarkMode ? `${styles.light}` : ''}`}>
      <h3 className={`${generics['spacing-x']}`}>Partners of Legacy Network</h3>
      <div className={`${styles['logos-wrapper']} ${generics['spacing-x']}`}>
        {partners.map((logo) => (
          <div key={logo.alt}>
            <img src={`/logos/${logo.endpoint}`} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partners