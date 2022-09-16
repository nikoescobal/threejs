import styles from './hexagonslidersection.module.scss';
import HexagonSlider from '../HexagonSlider/HexagonSlider';

function HexagonSliderSection() {
  return (
    <section className={styles.wrapper}>
      <h2>Token Utility</h2>
      <HexagonSlider />
    </section>
  )
}

export default HexagonSliderSection