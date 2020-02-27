import React, { useContext, MouseEvent as ReactMouseEvent } from 'react';
import cx from 'classnames';

import navLinkData from 'data/default-site-links.json';

import NavContext from 'NavContext/NavContext';
import SearchPaneContext from 'SearchPaneContext/SearchPaneContext';

import NavLinks from 'Nav/NavLinks';
import Icon from 'Icon';
import Button from 'Button';

const HeaderNavMobileHeader = () => {
  const { isSearchActive, toggleSearch } = useContext(SearchPaneContext);
  const { toggleNav } = useContext(NavContext);

  /**
   * Opens the SearchPane
   *
   * @param {event} event
   */
  const openSearch = (event: ReactMouseEvent) => {
    event.preventDefault();
    toggleSearch(true);
  };

  return (
    <div className="header-nav__mobile-header">
      <Button
        className="header-nav__btn--close"
        type="button"
        onClick={() => toggleNav(false)}
        variant="unstyled"
      >
        <Icon name="close" />
        Close<span className="u-visually-hidden"> menu</span>
      </Button>
      <a
        aria-controls="search-pane"
        className={
          isSearchActive
            ? 'header-nav__btn--search-mobile is-disabled'
            : 'header-nav__btn--search-mobile'
        }
        href="/search"
        onClick={openSearch}
      >
        Search
        <Icon name="search" />
      </a>
    </div>
  );
};

type HeaderNavProps = {
  isActive: boolean;
};

export const HeaderNav = ({ isActive }: HeaderNavProps) => {
  const classNames = cx('header-nav', {
    'is-active': isActive
  });

  return (
    <div className={classNames} id="main-nav">
      <HeaderNavMobileHeader />
      <nav>
        <NavLinks data={navLinkData} level={1} />
      </nav>
    </div>
  );
};

export default HeaderNav;
