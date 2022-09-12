/* eslint-disable no-unused-vars */
import ClearContainer from '../../Generic/ClearContainer/ClearContainer';
import styles from './app.module.scss';
import generics from '../../../styles/generics.module.scss';
import iPhone from '../../../public/illustrations/iPhone.png';

function App() {
  return (
    <section className={`${styles['app-wrappe']} ${generics['alternating-rows-wrapper']} ${generics['spacing-x']}`}>
      <div className={`${generics['alternating-rows']}`}>
        <div>
          <img src="/illustrations/iPhone.png" alt="" />
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
        <div><img src="/illustrations/ai.png" alt="" /></div>
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
    </section>
  );
}

export default App;
