import useStore from '../../../store/store';
import styles from './utilitysection.module.scss';

function UtilitySection() {
  const { isDarkMode } = useStore();

  const data = [
    {
      img: '/illustrations/world.svg',
      text: 'Free access to the ecosystem',
    },
    {
      img: '/illustrations/rounded-grid.svg',
      text: 'Share distribution',
    },
    {
      img: '/illustrations/balance.svg',
      text: 'Access to special areas within the app',
    },
    {
      img: '/illustrations/person.svg',
      text: 'In-game character',
    },
    {
      img: '/illustrations/medal.svg',
      text: 'High play-to-earn reward',
    },
    {
      img: '/illustrations/medal.svg',
      text: 'Network opportunities',
    },
  ];

  return (
    <section
      className={`${styles.wrapper}  ${
        !isDarkMode ? `${styles.light}` : ''
      } spacing-x`}
    >
      <h3>NFT Utility</h3>
      <p>
        Access to special areas within the app + Network opportunities 
      </p>
      <div className={`${styles.grid} grid three-col`}>
        {data.map((item) => (
          <div key={item.text}>
            <div>
              <img src={item.img} alt="" />
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <button className="button-blue">Learn more</button>
    </section>
  );
}

export default UtilitySection;
