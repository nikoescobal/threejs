/* eslint-disable no-unused-vars */
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import useStore from '../../store/store';
import Link from 'next/link';
import styles from './footer.module.scss';

function Footer() {
  const date = new Date();
  const { isDarkMode } = useStore((state) => state);

  return (
    <footer
      className={`${styles.footer} ${!isDarkMode ? `${styles.light}` : ''}`}
      style={{
        background: 'url("/backgrounds/footer-bg.png"), rgb(2, 5, 14)',
        backgroundSize: 'cover',
      }}
    >
      <img src="/backgrounds/waves-blue-bl.svg" alt="" />
      <div className={`${styles.footer__main}`}>
        <div className={`${styles.footer__column}`}>
          <span className={`${styles.footer__column__title}`}>Resources</span>
          <div className={`${styles.footer__column__items__wrapper}`}>
            <Link href="/" className={`${styles.footer__column__item}`}>
              Help center
            </Link>
            <Link href="/" className={`${styles.footer__column__item}`}>
              Community
            </Link>
            <Link href="/" className={`${styles.footer__column__item}`}>
              Partners
            </Link>
            <Link href="/" className={`${styles.footer__column__item}`}>
              Memberships
            </Link>
            <Link href="/" className={`${styles.footer__column__item}`}>
              Blogs
            </Link>
          </div>
        </div>
        <div className={`${styles.footer__column}`}>
          <span className={`${styles.footer__column__title}`}>Company</span>
          <div className={`${styles.footer__column__items__wrapper}`}>
            <Link href="/" className={`${styles.footer__column__item}`}>
              Our Team
            </Link>
            <Link href="/" className={`${styles.footer__column__item}`}>
              About Us
            </Link>
            <Link href="/" className={`${styles.footer__column__item}`}>
              Contact Us
            </Link>
            <Link href="/" className={`${styles.footer__column__item}`}>
              Career
            </Link>
          </div>
        </div>
        <div className={`${styles.footer__column}`}>
          <span className={`${styles.footer__column__title}`}>Contact Us</span>
          <div className={`${styles.footer__column__items__wrapper}`}>
            <a href="mailto:hello@legacynetwork.io" className={`${styles.footer__column__item}`}>
              Hello@legacynetwork.io
            </a>
            <div className={`${styles.footer__socials}`}>
              <Link href="/" target="_blank">
                <TwitterIcon />
              </Link>
              <Link href="/" target="_blank">
                <FacebookIcon />
              </Link>
              <Link href="/" target="_blank">
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.footer__column}`}>
          <img src="logo-cropped.png" className={`${styles.footer__column__logo}`} alt="" />
        </div>
      </div>
      <div className={`${styles.address}`}>
        <p>LEGACY Network AG, Aeulenstrasse 74, 9490 Vaduz, Liechtenstein</p>
      </div>
      {/* <div className="footer__end">
        {date.getFullYear()}
        {' '}
        Legacy Network AG - All right reserved
      </div> */}
    </footer>
  );
}

export default Footer;
