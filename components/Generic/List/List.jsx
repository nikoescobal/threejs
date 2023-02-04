import styles from './List.module.scss';
import useStore from '../../../store/store';
import { useRouter } from 'next/router';

function List({children, className}) {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();

  return (
    <ul
      className={`
        ${styles['wrapper']}
        ${styles[locale]}
        ${className}
        ${!isDarkMode ? `${styles['light']}` : ''}
      `}
    >
      {children}
    </ul>
  );
}

export default List;
