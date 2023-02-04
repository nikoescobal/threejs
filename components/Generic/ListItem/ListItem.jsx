import styles from './ListItem.module.scss';
import useStore from '../../../store/store';
import { useRouter } from 'next/router';

function ListItem({children, className}) {
  const { isDarkMode } = useStore((state) => state);
  const { locale } = useRouter();

  return (
    <li
      className={`
        ${styles['wrapper']}
        ${styles[locale]}
        ${!isDarkMode ? `${styles['light']}` : ''}
        ${className}
      `}
    >
      {children}
    </li>
  );
}

export default ListItem;
