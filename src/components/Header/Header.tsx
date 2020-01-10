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
import SearchContext from 'SearchPane/Context/SearchPaneContext';

import Hamburger from 'Hamburger/Hamburger';
import Icon from 'Icon/Icon';
import Logo from 'Logo/Logo';
import NavLinks from 'Nav/NavLinks';
// import SearchForm from 'SearchForm/SearchForm';
import { RouterLinkWrapper as Link } from 'RouterLinkWrapper/RouterLinkWrapper';

import navLinkData from 'data/default-site-links.json';
import logoData from 'Logo/constants';
import { useSticky } from './use-sticky';

type HeaderProps = {
  banner?: React.ReactNode;
};

export const Header = ({ banner }: HeaderProps) => {
  const headerRef = useRef(null);
  const [sticky] = useSticky(headerRef);
  const logoRef = useRef(null);

  const { isNavActive, toggleNav } = useContext(NavContext);
  const { isSearchActive, toggleSearch } = useContext(SearchContext);

  // TODO: find a better way to handle logo switch
  // isMobile returns initial state first which results in 'double rendering'
  const logoSmallClass = classnames('logo--small', { transparent: sticky });

  const logoLargeClass = classnames('logo--large', { transparent: sticky });

  const openSearch = (e: ReactMouseEvent) => {
    e.preventDefault();
    toggleSearch(true);
  };

  useEffect(() => {
    if (!isSearchActive && logoRef.current !== null) {
      logoRef.current.focus();
    }

    return () => {};
  });

  const openNav = (e: ReactMouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleNav(true);
  };

  return (
    <header ref={headerRef} className={sticky ? 'header sticky' : 'header'}>
      <>
        {banner}
        <div className="header__container">
          <>
            <div className="logo-container">
              <Link href="/">
                <a ref={logoRef} className="brand-link">
                  <Logo data={logoData.medium} title="Wellcome" />
                  <Logo data={logoData.small} className={logoSmallClass} />
                  <Logo data={logoData.large} className={logoLargeClass} />
                </a>
              </Link>
            </div>
            {!isNavActive && (
              <a href="#footer-nav" className="nav__toggle">
                <Hamburger
                  ariaControls="main-nav"
                  ariaExpanded={isNavActive}
                  onClick={openNav}
                  role="button"
                  tabIndex={-1}
                />
              </a>
            )}
            <a
              aria-controls="search-pane"
              className={
                isSearchActive
                  ? 'nav__btn--search-mobile keyboard-nav is-disabled'
                  : 'nav__btn--search-mobile keyboard-nav'
              }
              href="/search?search=&op=Search"
              onClick={openSearch}
              role="button"
            >
              Search
              <Icon name="search" />
            </a>
            <div
              className={isNavActive ? 'nav is-active' : 'nav'}
              id="main-nav"
            >
              <div className="nav__mobile-header">
                <button
                  className="nav__btn--close"
                  type="button"
                  onClick={() => toggleNav(false)}
                >
                  <Icon name="close" />
                  Close<span className="u-visually-hidden"> menu</span>
                </button>
                <a
                  aria-controls="search-pane"
                  className={
                    isSearchActive
                      ? 'nav__btn--search-mobile is-disabled'
                      : 'nav__btn--search-mobile'
                  }
                  href="/search"
                  onClick={openSearch}
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
              onClick={() => toggleNav(false)}
              onKeyDown={() => toggleNav(false)}
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
