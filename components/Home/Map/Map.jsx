import useStore from '../../../store/store';
import styles from './map.module.scss';

function Map() {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <section className={`${styles.map} ${!isDarkMode ? `${styles.light}` : ''} max-1920`}>
      <div>
      <img src="/backgrounds/mapbase.png" alt="" />

      </div>
      <h4>Join Us To Make The world A Better Place</h4>
    </section>
  )
}

export default Map