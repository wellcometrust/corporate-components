import React, {
  useContext,
  useEffect,
  useRef,
  MouseEvent as ReactMouseEvent
} from 'react';
import classnames from 'classnames';

// TODO: replace useSticky with IntersectionObserver
// import 'intersection-observer';
// import { useInView } from 'react-intersection-observer';

import NavContext from 'NavContext/NavContext';
import SearchContext from 'SearchContext/SearchContext';

import Hamburger from 'Hamburger/Hamburger';
import Icon from 'Icon/Icon';
// import Logo from 'Logo/Logo';
import NavLinks from 'Nav/NavLinks';
import NavItem from 'Nav/NavItem';
// import SearchForm from 'SearchForm/SearchForm';
import { RouterLinkWrapper as Link } from 'RouterLinkWrapper/RouterLinkWrapper';

import navLinkData from 'data/default-site-links.json';
import { useSticky } from './use-sticky';
// import logoData from '../Logo/constants';

type HeaderProps = {
  banner?: React.ReactNode;
};

export const Header = ({ banner }: HeaderProps) => {
  const [headerRef, sticky] = useSticky();
  const logoRef = useRef(null);

  const { isNavActive, openNav } = useContext(NavContext);
  const { isSearchActive, openSearch } = useContext(SearchContext);

  // TODO: find a better way to handle logo switch
  // isMobile returns initial state first which results in 'double rendering'
  const logoSmallClass = classnames('logo--small', { transparent: sticky });

  const logoLargeClass = classnames('logo--large', { transparent: sticky });

  const toggleSearch = (e: ReactMouseEvent) => {
    e.preventDefault();
    openSearch(true);
  };

  useEffect(() => {
    if (!isSearchActive && logoRef.current !== null) {
      logoRef.current.focus();
    }

    return () => {};
  });

  const toggleNav = (e: ReactMouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    openNav(true);
  };

  return (
    <header className={sticky ? 'header sticky' : 'header'}>
      <>
        {banner}
        <div className="header__container">
          <>
            <div className="logo-container">
              <Link href="/">
                <a ref={logoRef} className="brand-link">
                  {/* <Logo data={logoData.medium} title="Wellcome" />
                  <Logo data={logoData.small} className={logoSmallClass} />
                  <Logo data={logoData.large} className={logoLargeClass} /> */}
                </a>
              </Link>
            </div>
            {!isNavActive && (
              <a href="#footer-nav" className="nav__toggle">
                <Hamburger
                  ariaControls="main-nav"
                  ariaExpanded={isNavActive}
                  onClick={toggleNav}
                  role="button"
                  tabIndex={-1}
                />
              </a>
            )}
            <a
              aria-controls="search-pane"
              className={
                isSearchActive
                  ? 'btn--search-mobile keyboard-nav is-disabled'
                  : 'btn--search-mobile keyboard-nav'
              }
              href="/search?search=&op=Search"
              onClick={toggleSearch}
              role="button"
            >
              Search
              <Icon name="search" />
            </a>
            <div
              className={isNavActive ? 'nav__mobile is-active' : 'nav__mobile'}
              id="main-nav"
            >
              <div className="nav__mobile-header">
                <button
                  className="btn--nav-close"
                  type="button"
                  onClick={() => openNav(false)}
                >
                  <Icon name="close" />
                  Close <span className="visually-hidden">menu</span>
                </button>
                <a
                  aria-controls="search-pane"
                  className={
                    isSearchActive
                      ? 'btn--search-mobile is-disabled'
                      : 'btn--search-mobile'
                  }
                  href="/search"
                  onClick={toggleSearch}
                >
                  Search
                  <Icon name="search" />
                </a>
              </div>
              <nav>
                <NavLinks data={navLinkData} level={1} />
              </nav>
            </div>
            {/* <SearchForm /> */}
            <div
              aria-label="Close search and menu"
              className={
                isNavActive ? 'nav__overlay is-active' : 'nav__overlay'
              }
              onClick={() => openNav(false)}
              onKeyDown={() => openNav(false)}
              role="button"
              tabIndex={0}
            />
          </>
        </div>
      </>
    </header>
  );
};

export default Header;
