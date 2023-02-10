import { useState } from 'react';
import { useRouter } from 'next/router';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useScrollDirection from '../../hooks/useScrollDirection';
import useStore from '../../store/store';
import Link from 'next/link';
import styles from './navbar.module.scss';
import LinkHover from '../Generic/LinkHover/LinkHover';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ComingSoon from '../Generic/ComingSoon/ComingSoon';
import LanguageIcon from '@mui/icons-material/Language';
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  useMediaQuery,
} from '@mui/material';
import { useCallback } from 'react';
import Dialog from '../Generic/SimpleDialog/Dialog';
import { inProdEnvironment } from '../../utils';
import EastIcon from '@mui/icons-material/East';
import CloseIcon from '@mui/icons-material/Close';
import content from './content';

function Hamburger({ onClick, className }) {
  return (
    <button
      type="button"
      className={`${styles['burger-wrapper']} ${className}`}
      onClick={onClick}
    >
      <div className={`${styles['burger-icon-wrapper']}`}>
        <div className={`${styles['burger-icon']}`} />
      </div>
    </button>
  );
}

const selectLanguageText = {
  en: 'Select a Language',
  de: 'Wähle eine Sprache',
};

const languages = {
  en: [
    {
      locale: 'en',
      language: 'English',
    },
    {
      locale: 'de',
      language: 'German',
    },
  ],
  de: [
    {
      locale: 'en',
      language: 'Englisch',
    },
    {
      locale: 'de',
      language: 'Deutsch',
    },
  ],
};

function Navbar() {
  const scrollDirection = useScrollDirection();
  const { isDarkMode, toggleDarkMode } = useStore((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const { uuid } = require('crypto');
  const [displayLanguages, setDisplayLanguages] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const handleProductsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProductsClose = () => {
    setAnchorEl(null);
  };

  const toggle = () => {
    toggleDarkMode();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguageList = () => {
    setDisplayLanguages(!displayLanguages);
  };

  const switchToLocale = useCallback(
    (locale) => {
      const path = router.asPath;
      return router.push(path, path, { locale, scroll: false });
    },
    [router]
  );

  const switchLanguage = useCallback(
    async (option) => {
      const locale = option;
      setDisplayLanguages(false);
      await switchToLocale(locale);
    },
    [switchToLocale]
  );

  return (
    <>
      {/* { !pathname.includes('blogs') && (
        <> */}
      <Hamburger
        onClick={toggleMenu}
        className={`${isDarkMode ? '' : `${styles.light}`}`}
      />
      <Dialog
        open={displayLanguages}
        onClose={() => setDisplayLanguages(false)}
        title={selectLanguageText[locale]}
      >
        <MenuList className={styles.menu}>
          {languages[locale].map((languageSet) => (
            <MenuItem
              onClick={(e) => switchLanguage(languageSet.locale)}
              key={languageSet.language}
            >
              <span className={styles.language}>{languageSet.language}</span>
            </MenuItem>
          ))}
        </MenuList>
      </Dialog>
      <nav
        className={`
          ${styles.navbar}
          ${isDarkMode ? '' : `${styles.light}`}
          ${isOpen ? `${styles.open}` : ''}
          ${scrollDirection === 'down' ? `${styles['scroll-down']}` : ''}`}
        data-visible-gradient={router.pathname === '/'}
      >
        <div className={styles.navbar__logo__wrapper}>
          <Link href="/" title="Navbar link to home page">
            <img
              src="/logo-small.webp"
              width={40}
              height={36}
              alt="Legacy Network Logo"
              onClick={() => setIsOpen(false)}
            />
          </Link>
        </div>
        <div className={styles.align_navbar}>
          {content.en.main_links.map((link) => {
            {
              return link.name !== 'Products' ? (
                link.external
                  ? <span
                      key={uuid}
                      className={
                        router.asPath === link.endpoint ? `${styles.active}` : ''
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      <a href={link.endpoint} title={link.title} rel='noreferrer' target={'_blank'}>
                        {link.name}
                      </a>
                    </span>
                  :<span
                    key={uuid}
                    className={
                      router.asPath === link.endpoint ? `${styles.active}` : ''
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={link.endpoint} title={link.title}>
                      {link.name}
                    </Link>
                  </span>
              ) : (
                <>
                  <span
                    aria-controls={open ? 'products-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleProductsClick}
                    className={styles['dropdown-button']}
                  >
                    {link.name}
                    <KeyboardArrowDownIcon />
                  </span>
                  <Menu
                    id="basic-menu"
                    className={`${styles['sub-menu']} ${
                      isDarkMode ? '' : `${styles.light}`
                    }`}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleProductsClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    {link.sub_links.map((subLink) => (
                      <MenuItem
                        key={uuid}
                        onClick={() => {
                          console.log(subLink.name, subLink.endpoint);
                          router.push(subLink.endpoint, subLink.endpoint, {
                            scroll: false,
                          });
                          setAnchorEl(null);
                        }}
                      >
                        {subLink.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              );
            }
          })}
          {/* <span
            className={router.asPath === '/products' ? `${styles.active}` : ''}
            onClick={() => setIsOpen(false)}
          >
            <Link
              href="/products"
              title="Navbar link to app page"
              className={
                router.pathname === '/products' ? `${styles.active}` : ''
              }
            >
              Products
            </Link>
          </span>
          <span
            className={router.asPath === '/token' ? `${styles.active}` : ''}
            onClick={() => setIsOpen(false)}
          >
            <Link
              href="/token"
              title="Navbar link to token page"
              className={router.pathname === '/token' ? `${styles.active}` : ''}
            >
              Token
            </Link>
          </span>
          <span
            className={
              router.asPath === '/personal-development'
                ? `${styles.active}`
                : ''
            }
            onClick={() => setIsOpen(false)}
          >
            <Link
              href="/personal-development"
              title="Navbar link to personal development page"
              className={
                router.pathname === '/personal-development'
                  ? `${styles.active}`
                  : ''
              }
            >
              Personal Development
            </Link>
          </span>
          <span
            className={router.asPath === '/about-us' ? `${styles.active}` : ''}
            onClick={() => setIsOpen(false)}
          >
            <Link
              href="/about-us"
              title="Navbar link to about us page"
              className={
                router.pathname === '/about-us' ? `${styles.active}` : ''
              }
            >
              About Us
            </Link>
          </span> */}
          {/* <span
            className={router.asPath === '/blogs' ? `${styles.active}` : ''}
          >
            <a
              href="https://blog.legacynetwork.io/"
              className={
                router.pathname === 'https://blog.legacynetwork.io/'
                  ? `${styles.active}`
                  : ''
              }
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </span>
          <div className={styles['boards-wrapper']}>
            <span className={`${isDarkMode ? '' : `${styles.light}`}`}>
              <LinkHover hoverText={'Coming Soon'}>Boards</LinkHover>
            </span>
            <div>
              <span className={styles.banner}>Coming Soon</span>
              <span
                className={router.asPath === '/blogs' ? `${styles.active}` : ''}
              >
                <span className={styles.community}>Community</span>
              </span>
              <span
                className={router.asPath === '/blogs' ? `${styles.active}` : ''}
              >
                <span className={styles.partners}>Partners</span>
              </span>
            </div>
          </div> */}
        </div>
        <div>
          <div
            className={`${styles.win} ${!isDarkMode ? `${styles.light}` : ''} `}
            data-env={inProdEnvironment}
          >
            <ComingSoon className={`${styles.coming} `}>
              <img
                className={styles['img-wrapper']}
                src="/icons/trophy-win.svg"
                alt="trophy icon"
              />
              Win
            </ComingSoon>
          </div>
          <div className={styles.languages}>
            <IconButton
              type="button"
              onClick={toggleLanguageList}
              className={`${styles['dark-mode-toggle']} ${
                isDarkMode ? '' : `${styles.light}`
              }`}
            >
              <LanguageIcon />
            </IconButton>
          </div>

          <button
            type="button"
            onClick={toggle}
            className={`${styles['dark-mode-toggle']} ${
              isDarkMode ? '' : `${styles.light}`
            }`}
          >
            <DarkModeSwitch
              onChange={() => {}}
              checked={!isDarkMode}
              style={{
                filter: `${isDarkMode ? 'invert(100%)' : 'invert(80%)'}`,
              }}
            />
          </button>
        </div>
        <p
          className={`${styles['gradient-bar']} ${
            scrollDirection === 'down' ? `${styles['scroll-down']}` : ''
          }`}
          data-visible={showBanner}
        >
            Join the Legacy Network giveaway | $1 million in prizes and seed
            funding |
          <a href="https://legacy-token-giveaway.kickoffpages.com/">
            Join now, we are waiting for you <EastIcon />
          </a>
          <IconButton
            className={styles.close}
            onClick={() => setShowBanner(false)}
          >
            <CloseIcon className={styles['close']} />
          </IconButton>
        </p>
      </nav>
    </>
  );
}

export default Navbar;
