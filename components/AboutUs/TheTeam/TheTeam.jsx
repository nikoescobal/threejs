import { useRouter } from 'next/router';
import useStore from '../../../store/store';
import TeamCard from '../TeamCard/TeamCard';
import content from './content';
import styles from './team.module.scss';
import { v4 as uuid } from 'uuid';

function TheTeam() {
  const { isDarkMode } = useStore();
  const { locale } = useRouter();

  return (
    <section className={`${!isDarkMode ? `${styles.light}` : ''} ${styles['wrapper']} spacing-y spacing-x max-1920`}>
      <h2>{content[locale].title}</h2>
      <div className={styles['team-wrapper']}>
        {
          content[locale].team.map((member, index) => (
            <TeamCard key={uuid()} className={styles.member} member={member} index={index} />
          ))
        }
      </div>
    </section>
  );
}

export default TheTeam;
