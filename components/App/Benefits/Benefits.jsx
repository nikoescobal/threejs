/* eslint-disable react/no-unescaped-entities */
import useStore from '../../../store/store';
import ClearContainer from '../../Generic/ClearContainer/ClearContainer';
import styles from './benefits.module.scss';
import generics from '../../../styles/generics.module.scss';

function Benefits() {
  const { isDarkMode } = useStore();

  return (
    <section className={`${styles['app-wrapper']} ${generics['alternating-rows-wrapper']} spacing-x`}>
      <div className={`${generics['alternating-rows']}`}>
        <div style={{marginBottom: '4rem'}}>
          <img src="/downloads/download1.png" alt="" />
        </div>
        <ClearContainer
          title="A gamified all in one solution developed to get the best out of you"
          to="/app"
          linkText="Read More"
          reducedPadding
        >
          <p>
            The Legacy Network app is divided in a health and an education area.
            The education area is where users learn how to achieve their individual goals
            by reprogramming their minds, developing effective characteristics and forming
            new, positive habits.
          </p>
        </ClearContainer>
      </div>
      <div className={`${generics['alternating-rows']}`}>
        <div><img src="/nft/char-with-iphone.png" alt="" className={`${styles.scaled}`}/></div>
        <ClearContainer
          title="The first artificial intelligence designed to analyze human behavior"
          to="/app"
          linkText="Read More"
          reducedPadding
        >
          <p>
            Our artificial intelligence evaluates the collected information about the user
            and utilizes it to deliver individual and effective solutions. Over time, the AI
            turns into a personal coach which knows more about the user, than he knows about himself.
          </p>
        </ClearContainer>
      </div>
      <div className={`${generics['alternating-rows']}`}>
        <div style={{marginBottom: '4rem'}}>
          <img src="/downloads/download2.png" alt="" />
        </div>
        <ClearContainer
          title="A gamified all in one solution developed to get the best out of you"
          to="/app"
          linkText="Read More"
          reducedPadding
        >
          <p>
            The Legacy Network app is divided in a health and an education area.
            The education area is where users learn how to achieve their individual goals
            by reprogramming their minds, developing effective characteristics and forming
            new, positive habits.
          </p>
        </ClearContainer>
      </div>
    </section>
  );
}

export default Benefits;
