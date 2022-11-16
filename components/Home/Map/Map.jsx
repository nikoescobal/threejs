import dynamic from 'next/dynamic';
import useStore from '../../../store/store';
import styles from './map.module.scss';
// import MapParticles from './MapParticles';

function Map() {
  const { isDarkMode } = useStore((state) => state);
  const MapParticles = dynamic(
    () => import('./MapParticles'),
    { ssr: false }
  )
  return (
    <section className={styles.wrapper}>
      <div className={`${styles.map} ${!isDarkMode ? `${styles.light}` : ''} max-1920`}>
        <div>
        <img src="/backgrounds/mapbase.png" alt="world map" />

        </div>
        <h4>Join Us To Make The world A Better Place</h4>
      </div>
      {/* <MapParticles className={styles.particles} /> */}
    </section>
  )
}

export default Map