import styles from '../Benefits/benefits.module.scss';
import useStore from '../../../store/store';

function Benefits() {
  const { isDarkMode } = useStore();
  return (
    <section className={`${styles.wrapper} ${!isDarkMode ? `${styles.light}` : ''} spacing-x max-1920`}>
      <div className={`${styles.title}`}>
        <h3>Your Benefits</h3>
        <p>
          With a lot of powerful features, we guarantee simplity and clarity
        </p>
      </div>
      <div className={`${styles.layout}`}>
        <div className={styles['bullet-wrapper']}>
          <div className={styles['img-wrapper']}>
            <img src="/icons/play.svg" alt="play icon" />
          </div>
          <h4>Education</h4>
          <ul className={styles['list-wrapper']}>
            <li>Get access to high quality content for your personal growth</li>
            <li>Keep up your motivation thanks to our play to earn system</li>
            <li>Test and deepen your new gained knowledge </li>
            <li>Profit from a fair and flexible subscription model </li>
          </ul>
        </div>

        <div className={styles['bullet-wrapper']}>
          <div className={styles['header']}>
            <div className={styles['img-wrapper']}>
              <img src="/icons/notebook.svg" alt="notebook icon" />
            </div>

            <h4>Execution</h4>
          </div>
          <ul className={styles['list-wrapper']}>
            <li>
              Receive individual quests and apply your learnings right away
            </li>
            <li>Understand and fix what holds you back from taking action</li>
            <li>
              Increase your capability and exceed your limits step by step
            </li>
          </ul>
        </div>

        <div className={styles['bullet-wrapper']}>
          <div className={styles['header']}>
            <div className={styles['img-wrapper']}>
              <img src="/icons/charts.svg" alt="charts icon" />
            </div>
            <h4>Monitoring</h4>
          </div>
          <ul className={styles['list-wrapper']}>
            <li>Keep track of your progress in the statistics area</li>
            <li>Notice problems early and make the necessary adjustments</li>
            <li>
              Enjoy to see your growth and the growth of your in-game character
            </li>
          </ul>
        </div>

        <div className={styles['bullet-wrapper']}>
          <div className={styles['header']}>
            <div className={styles['img-wrapper']}>
              <img src="/icons/people.svg" alt="people icon" />
            </div>
            <h4>Community</h4>
          </div>
          <ul className={styles['list-wrapper']}>
            <li>Connect with likeminded people who are on the same path</li>
            <li>Exchange knowledge and ressources with your peers</li>
            <li>Find your twins and build your own legacy</li>
            <li>Participate in exciting events</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
