import useStore from '../../../store/store';
import ComingSoon from '../../Generic/ComingSoon/ComingSoon';
import styles from './utilitysection.module.scss';

function UtilitySection() {
  const { isDarkMode } = useStore();

  const data = [
    {
      img: '/icons/util1.svg',
      text: 'Free access to our ecosystem',
    },
    {
      img: '/icons/util2.svg',
      text: 'Reward distribution',
    },
    {
      img: '/icons/util3.svg',
      text: 'Access to special areas within the app',
    },
    {
      img: '/icons/util4.svg',
      text: 'In-game character',
    },
    {
      img: '/icons/util5.svg',
      text: 'Higher play-to-earn reward',
    },
    {
      img: '/icons/util6.svg',
      text: 'Networking opportunities',
    },
  ];

  return (
    <section
      className={`${styles.wrapper}  ${
        !isDarkMode ? `${styles.light}` : ''
      } spacing-x max-1920`}
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
      {/* <button className="button-blue">Learn more</button> */}
      <ComingSoon>Learn more</ComingSoon>
    </section>
  );
}

export default UtilitySection;
