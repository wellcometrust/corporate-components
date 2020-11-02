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
import SearchPaneContext from 'SearchPaneContext/SearchPaneContext';

import Hamburger from 'Hamburger/Hamburger';
import Icon from 'Icon/Icon';
import Logo from 'Logo/Logo';
import NavLinks from 'Nav/NavLinks';
import SearchPane from 'SearchPane/SearchPane';
import { RouterLinkWrapper as Link } from 'RouterLinkWrapper/RouterLinkWrapper';

import navLinkData from 'data/default-site-links.json';
import logoData from 'Logo/constants';
import headerNav from './header-nav';
import { useSticky } from './use-sticky';

type HeaderProps = {
  banner?: React.ReactNode;
};

export const Header = ({ banner }: HeaderProps) => {
  const headerRef = useRef(null);
  const [sticky] = useSticky(headerRef);
  const logoRef = useRef(null);

  /**
   * `intialRender` indicates the first time the component is loaded
   * useRef is used in preference to useState to prevent additional re-renders
   * https://medium.com/swlh/prevent-useeffects-callback-firing-during-initial-render-the-armchair-critic-f71bc0e03536
   */
  const initialRender = useRef(true);

  const { isNavActive, toggleNav } = useContext(NavContext);
  const { isSearchActive, toggleSearch } = useContext(SearchPaneContext);

  /**
   * Header renders three different logos:
   *
   * logo       - used when sticky header (mobile + desktop)
   * logoSmall  - used when static header (mobile)
   * logoLarge  - used when static header (desktop)
   */
  const logoClass = classnames(null, { transparent: !sticky });
  const logoSmallClass = classnames('logo--small', { transparent: sticky });
  const logoLargeClass = classnames('logo--large', { transparent: sticky });

  const openSearch = (e: ReactMouseEvent) => {
    e.preventDefault();
    toggleSearch(true);
  };

  useEffect(() => {
    headerNav(window);

    return () => {};
  }, []);

  useEffect(() => {
    // initialRender prevents logo from being focused on component load
    if (initialRender.current) {
      initialRender.current = false;
    } else if (!isSearchActive && logoRef.current !== null) {
      logoRef.current.focus();
    }

    return () => {};
  }, [isSearchActive]);

  const openNav = (e: ReactMouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleNav(true);
  };

  return (
    <header
      ref={headerRef}
      className={sticky ? 'header o-app sticky' : 'header o-app'}
    >
      <>
        {banner}
        <div className="header__container">
          <>
            <div className="logo-container">
              <Link href="/" ref={logoRef}>
                <a href="/" className="brand-link">
                  <Logo
                    data={logoData.medium}
                    className={logoClass}
                    title="Wellcome"
                  />
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
            <SearchPane />
            <div
              className={
                isNavActive ? 'nav__overlay is-active' : 'nav__overlay'
              }
              onClick={() => toggleNav(false)}
              onKeyDown={() => toggleNav(false)}
              role="button"
              tabIndex={-1}
            >
              <span className="u-visually-hidden">Close search and menu</span>
            </div>
          </>
        </div>
      </>
    </header>
  );
};

export default Header;
