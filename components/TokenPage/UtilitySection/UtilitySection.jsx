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
      img: '/icons/util3.svg',
      text: 'Reward distribution',
    },
    {
      img: '/icons/util2.svg',
      text: 'Access to special areas within the app',
    },
    {
      img: '/icons/util6.svg',
      text: 'In-game character',
    },
    {
      img: '/icons/util5.svg',
      text: 'Higher play-to-earn reward',
    },
    {
      img: '/icons/util4.svg',
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

      <div className={`${styles.grid} grid three-col`}>
        {data.map((item) => (
          <div key={item.text}>
            <div>
              <img src={item.img} alt="utility illustration" />
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <a href="https://blog.legacynetwork.io/blogs/Q3dj2EaBUPuizZVFQpye" rel='noreferrer' target="_blank" className='button-blue'>Read more</a>
    </section>
  );
}

export default UtilitySection;
