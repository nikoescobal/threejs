import styles from './newsletter.module.scss';
import generics from '../../../styles/generics.module.scss';
import useStore from '../../../store/store';

function NewsLetter() {
  const { isDarkMode } = useStore((state) => state);
  
  return (
    <div
      className={`${styles['news-letter']} ${generics['spacing-x']} ${!isDarkMode ? `${styles.light}` : ''}`}
    >
      <div>
        <h4>Don&apos;t miss out, stay updated</h4>
        <p>
          Subscribe to our newsletter and be the first to get updates on our product and services.
        </p>
        <form>
          <input type="email" name="email" placeholder="Email" id="" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
