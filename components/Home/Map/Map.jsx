import dynamic from 'next/dynamic';
import Image from 'next/image';
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
        <Image
          src="/backgrounds/mapbase.webp"
          width={1566}
          height={509}
          layout='responsive'
          objectFit='contain'
          alt="world map"
        />
        <h4>Join Us To Make The world A Better Place</h4>
      </div>
      {/* <MapParticles className={styles.particles} /> */}
    </section>
  )
}

export default Map