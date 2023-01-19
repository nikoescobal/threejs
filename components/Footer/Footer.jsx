import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import RedditIcon from '@mui/icons-material/Reddit';
import useStore from '../../store/store';
import Link from 'next/link';
import styles from './footer.module.scss';
import Logo from '../../public/logo-small.webp';
import { LinkedIn } from '@mui/icons-material';
import { useState } from 'react';
import Dialog from '../Generic/SimpleDialog/Dialog';

function Footer() {
  const date = new Date();
  const { isDarkMode } = useStore((state) => state);
  const [openWhitePaperDialog, setOpenWhitePaperDialog] = useState(false);
  const [openLitePaperDialog, setOpenLitePaperDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleWhitePaperDialogOpen = () => {
    setOpenWhitePaperDialog(true);
  };

  const handleWhitePaperDialogClose = () => {
    setOpenWhitePaperDialog(false);
  };

  const handleLitePaperDialogOpen = () => {
    setOpenLitePaperDialog(true);
  };

  const handleLitePaperDialogClose = () => {
    setOpenLitePaperDialog(false);
  };

  return (
    <footer
      className={`${styles.footer} ${!isDarkMode ? `${styles.light}` : ''}`}
    >
      <section>
        <div className={`${styles.footer__main}`}>
          <Dialog
            selectedValue={selectedValue}
            open={openWhitePaperDialog}
            onClose={() => handleWhitePaperDialogClose()}
            title="Choose language"
          >
            <div>
              <a
                href="/pdf/WP-Eng.pdf"
                onClick={handleWhitePaperDialogClose}
                target="_blank"
                className={`${styles.footer__column__item} button-blue`}
              >
                English
              </a>
              <a
                href="/pdf/WP-Ger.pdf"
                onClick={handleWhitePaperDialogClose}
                target="_blank"
                className={`${styles.footer__column__item} button-blue`}
              >
                German
              </a>
            </div>
          </Dialog>
          <Dialog
            selectedValue={selectedValue}
            open={openLitePaperDialog}
            onClose={() => handleLitePaperDialogClose()}
            title="Choose language"
          >
            <div>
              <a
                href="https://ik.imagekit.io/n8ccbmd8gj/LP-Eng.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1673594835629"
                rel="noreferrer"
                onClick={handleLitePaperDialogClose}
                target="_blank"
                className={`${styles.footer__column__item} button-blue`}
              >
                English
              </a>
              <a
                href="https://ik.imagekit.io/n8ccbmd8gj/LP-Ger.pdf?ik-sdk-version=javascript-1.4.3&updatedAt=1673594835385"
                rel="noreferrer"
                onClick={handleLitePaperDialogClose}
                target="_blank"
                className={`${styles.footer__column__item} button-blue`}
              >
                German
              </a>
            </div>
          </Dialog>
          <div className={`${styles.footer__column} ${styles.left}`}>
            <div className={`${styles.footer__column__items__wrapper}`}>
              <Link href="/" className={`${styles.footer__column__item}`}>
                Home
              </Link>
              <Link href="/app" className={`${styles.footer__column__item}`}>
                App
              </Link>
              <Link href="/token" className={`${styles.footer__column__item}`}>
                Token
              </Link>
              <Link
                href="/personal-development"
                className={`${styles.footer__column__item}`}
              >
                Personal Development
              </Link>
              <Link
                href="/about-us"
                className={`${styles.footer__column__item}`}
              >
                About Us
              </Link>
            </div>
          </div>
          <div className={`${styles.footer__column} ${styles.middle}`}>
            <div className={`${styles.footer__column__items__wrapper}`}>
              <a
                href="/pdf/audit_report.pdf"
                target="_blank"
                className={`${styles.footer__column__item}`}
              >
                Audit Report
              </a>
              <a
                href="https://github.com/LegacyNetworkAG/LGCT-CONTRACTS"
                rel="noreferrer"
                target="_blank"
                className={`${styles.footer__column__item}`}
              >
                Smart Contract
              </a>
              <button type="button" onClick={handleWhitePaperDialogOpen}>
                Whitepaper
              </button>
              <button type="button" onClick={handleLitePaperDialogOpen}>
                Litepaper
              </button>
              {/* <a href="/pdf/WP-Eng.pdf" target="_blank" className={`${styles.footer__column__item}`}>
                Whitepaper
              </a> */}
              <Link
                href="/policies"
                className={`${styles.footer__column__item}`}
              >
                Policies
              </Link>
            </div>
          </div>
          <div className={`${styles.footer__column} ${styles.right}`}>
            <div className={`${styles.items__wrapper}`}>
              <a
                href="mailto:hello@legacynetwork.io"
                className={`${styles.footer__column__ite}`}
              >
                hello@legacynetwork.io
              </a>
              <span className={`${styles.footer__column__item}`}>
                LEGACY Network AG
              </span>
              <span href="/" className={`${styles.footer__column__item}`}>
                Industriering 11
              </span>
              <span href="/" className={`${styles.footer__column__item}`}>
                9491 Ruggell
              </span>
              <span href="/" className={`${styles.footer__column__item}`}>
                Liechtenstein
              </span>
              <span href="/" className={`${styles.footer__column__item}`}>
                FL-0002.683.628-1
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles.footer__column}`}>
          <img
            src="logo-2.webp"
            className={`${styles.footer__column__logo}`}
            alt="footer logo 2"
          />
        </div>
      </section>
      <div className={styles['logo-wrapper']}>
        <div>
          <svg
            width="267"
            height="227"
            className={styles.shape}
            viewBox="0 0 267 227"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M202 101.654C187.6 6.8543 235 0.15457 267 0.154297H0V226.654C0.4 170.654 59.5 165.987 89 170.654C188.6 187.454 205.833 131.654 202 101.654Z"
              fill="#D9D9D9"
            />
          </svg>
          <img src={Logo.src} className={styles.logo} alt="footer logo 1" />
          <div></div>
        </div>
      </div>
      <div className={styles['socials-wrapper']}>
        <a
          href="https://t.me/LegacyNetworkAnnouncements"
          rel="noreferrer"
          target="_blank"
        >
          <TelegramIcon />
        </a>
        <a
          href="https://www.instagram.com/legacynetwork.io/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/LegacyNetworkio"
          rel="noreferrer"
          target="_blank"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.tiktok.com/@legacynetwork.io"
          rel="noreferrer"
          target="_blank"
        >
          <svg
            className={styles.tiktok}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2859 3333"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/legacy-network-ag/mycompany/"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedIn />
        </a>
        <a
          href="https://www.reddit.com/r/legacynetwork/"
          rel="noreferrer"
          target="_blank"
        >
          <RedditIcon />
        </a>
      </div>
      <div className={styles['rights-container']}>
        <div>
          <svg
            width="865"
            height="86"
            viewBox="0 0 865 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34 30.5C35.2 66.9 11.8333 82.3333 0 85.5L865 84C842.2 84 832.167 60.6667 830 49C833.2 13 804 1.33333 789 0H74.5C42.9 0 34.3333 20.3333 34 30.5Z"
              fill="#D9D9D9"
            />
          </svg>
          <p>© {date.getFullYear()} Legacy Network AG - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
