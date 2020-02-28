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
import SearchPane from 'SearchPane/SearchPane';
import { RouterLinkWrapper as Link } from 'RouterLinkWrapper/RouterLinkWrapper';

import logoData from 'Logo/constants';
import HeaderNav from './HeaderNav';
import { useSticky } from './use-sticky';

type HeaderProps = {
  banner?: React.ReactNode;
};

export const Header = ({ banner }: HeaderProps) => {
  const headerRef = useRef(null);
  const [sticky] = useSticky(headerRef);
  const logoRef = useRef(null);

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
    if (!isSearchActive && logoRef.current !== null) {
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
              <a href="#footer-nav" className="header-nav__toggle">
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
                  ? 'header-nav__btn--search-mobile keyboard-nav is-disabled'
                  : 'header-nav__btn--search-mobile keyboard-nav'
              }
              href="/search?search=&op=Search"
              onClick={openSearch}
              role="button"
            >
              Search
              <Icon name="search" />
            </a>
            <HeaderNav isActive={isNavActive} />
            <SearchPane />
            <div
              className={
                isNavActive
                  ? 'header-nav__overlay is-active'
                  : 'header-nav__overlay'
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
