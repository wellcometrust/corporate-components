import React, { useContext, useEffect, useRef } from 'react';
import cx from 'classnames';

import Button from 'Button/Button';

import NavContext from 'NavContext/NavContext';
import SearchPaneContext from 'SearchPaneContext/SearchPaneContext';

import SearchPaneForm from './SearchPaneForm';
import SearchPaneControls from './SearchPaneControls';

const CSS_CLASSES = {
  IS_SEARCH_ACTIVE: 'is-search-active'
};

const addBodyClass = (className: string) => {
  if (typeof window !== 'undefined' && document.body) {
    document.body.classList.add(className);
  }
};

const removeBodyClass = (className: string) => {
  if (typeof window !== 'undefined' && document.body) {
    document.body.classList.remove(className);
  }
};

export const SearchPane = () => {
  const searchInputRef = useRef(null);
  const { toggleNav } = useContext(NavContext);
  const { isSearchActive, toggleSearch } = useContext(SearchPaneContext);
  const searchTabIndex = isSearchActive ? 0 : -1;

  useEffect(() => {
    if (isSearchActive) {
      addBodyClass(CSS_CLASSES.IS_SEARCH_ACTIVE);

      if (searchInputRef.current !== null) {
        searchInputRef.current.focus();
      }
    } else {
      removeBodyClass(CSS_CLASSES.IS_SEARCH_ACTIVE);
    }

    // TODO add return value for unmount
    return () => removeBodyClass(CSS_CLASSES.IS_SEARCH_ACTIVE);
  });

  const closeAll = () => {
    toggleNav(false);
    toggleSearch(false);
  };

  const escHandler = (event: React.KeyboardEvent) => {
    if (event.keyCode === 27) {
      closeAll();
    }
  };

  const classNames = {
    parent: cx('search-pane', {
      'is-active': isSearchActive
    }),
    overlay: cx('search-pane__overlay', {
      'is-active': isSearchActive
    })
  };

  // TODO: #5916 - add accessibility features from corporate-react
  // * ensure search form is unreachable when closed

  // eslint ignore added to wrapping element as esc keydown detection is required for whole search pane
  return (
    <div // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
      className={classNames.parent}
      onKeyDown={escHandler}
      role="dialog"
    >
      <div className="search-pane__content">
        <div className="search-pane__container">
          <SearchPaneControls />
          <SearchPaneForm ref={searchInputRef} />
        </div>
      </div>
      <Button
        buttonType="link"
        className={classNames.overlay}
        disabled={!isSearchActive}
        onClick={closeAll}
        tabIndex={searchTabIndex}
      >
        <span className="u-visually-hidden">Hide Search</span>
      </Button>
    </div>
  );
};

export default SearchPane;
