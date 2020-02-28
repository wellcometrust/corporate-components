import React, { useContext, MouseEvent as ReactMouseEvent } from 'react';
import cx from 'classnames';

import NavContext from 'NavContext/NavContext';
import SearchPaneContext from 'SearchPaneContext/SearchPaneContext';

import Icon from 'Icon';

export const HeaderNavMobileHeader = () => {
  const { toggleNav } = useContext(NavContext);
  const { isSearchActive, toggleSearch } = useContext(SearchPaneContext);

  const classNames = cx('header-nav__btn--search-mobile', {
    'is-disabled': isSearchActive
  });

  /**
   * Opens the SearchPane
   *
   * @param {event} event
   */
  const openSearch = (event: ReactMouseEvent) => {
    event.preventDefault();
    toggleSearch(true);
  };

  /**
   * Closes the navigation menu
   */
  const closeNav = () => {
    toggleNav(false);
  };

  return (
    <div className="header-nav__mobile-header">
      <button
        className="header-nav__btn--close"
        type="button"
        onClick={closeNav}
      >
        <Icon name="close" />
        Close<span className="u-visually-hidden"> menu</span>
      </button>
      <a
        aria-controls="search-pane"
        className={classNames}
        href="/search"
        onClick={openSearch}
      >
        Search
        <Icon name="search" />
      </a>
    </div>
  );
};

export default HeaderNavMobileHeader;
