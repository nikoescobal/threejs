/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useScrollDirection from '../../hooks/useScrollDirection';
import useStore from '../../store/store';
import Link from 'next/link';
import styles from './navbar.module.scss';
import Image from 'next/image';
import LinkHover from '../Generic/LinkHover/LinkHover';

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

function Navbar() {
  // const { pathname } = useLocation();
  const scrollDirection = useScrollDirection();
  const { isDarkMode, toggleDarkMode } = useStore((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery('(min-width: 1024px)');
  const router = useRouter();

  const toggle = () => {
    toggleDarkMode();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* { !pathname.includes('blogs') && (
        <> */}
      {!isDesktopOrLaptop && (
        <Hamburger
          onClick={toggleMenu}
          className={`${isDarkMode ? '' : `${styles.light}`}`}
        />
      )}
      <nav
        className={`${styles.navbar} ${isDarkMode ? '' : `${styles.light}`} ${
          isOpen ? `${styles.open}` : ''
        } ${scrollDirection === 'down' ? `${styles['scroll-down']}` : ''}`}
      >
        <div className={styles.navbar__logo__wrapper}>
          <Link href="/">
            <img
              src="/logo-cropped.png"
              alt="logo"
              onClick={() => setIsOpen(false)}
            />
          </Link>
        </div>
        <div className={styles.align_navbar}>
          <span
            className={router.asPath === '/' ? `${styles.active}` : ''}
            onClick={() => setIsOpen(false)}
          >
            <Link href="/">Home</Link>
          </span>
          <span
            className={router.asPath === '/app' ? `${styles.active}` : ''}
            onClick={() => setIsOpen(false)}
          >
            <Link
              href="/app"
              className={router.pathname === '/app' ? `${styles.active}` : ''}
            >
              App
            </Link>
          </span>
          <span
            className={router.asPath === '/token' ? `${styles.active}` : ''}
            onClick={() => setIsOpen(false)}
          >
            <Link
              href="/token"
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
              className={
                router.pathname === '/about-us' ? `${styles.active}` : ''
              }
            >
              About Us
            </Link>
          </span>
          {/* <span className={router.asPath === "/security" ? `${styles.active}` : ""} onClick={() => setIsOpen(false)}>
                <Link href="/security" className={router.pathname === "/security" ? `${styles.active}` : ""}>Security</Link>
              </span> */}
          <span
            className={router.asPath === '/blogs' ? `${styles.active}` : ''}
          >
            <LinkHover hoverText={'Coming Soon'}>Blog</LinkHover>
            {/* <Link href="/" className={router.pathname === "/" ? `${styles.active}` : ""}>Blog</Link> */}
          </span>
          <div className={styles['boards-wrapper']}>
            <span className={`${isDarkMode ? '' : `${styles.light}`}`}>
              <LinkHover hoverText={'Coming Soon'}>Boards</LinkHover>
            </span>
            <div>
              <span
                className={router.asPath === '/blogs' ? `${styles.active}` : ''}
              >
                <span>Community</span>
              </span>
              <span
                className={router.asPath === '/blogs' ? `${styles.active}` : ''}
              >
                <span>Partners</span>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className={`${styles.win} button-blue`}>
            <span>Win</span>
          </div>
          <button
            type="button"
            onClick={toggle}
            className={`${styles['dark-mode-toggle']} ${
              isDarkMode ? '' : 'light'
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
      </nav>
    </>
  );
}

export default Navbar;
