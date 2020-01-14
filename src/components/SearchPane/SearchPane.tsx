import React, { useContext, useEffect } from 'react';
import cx from 'classnames';

import Button from 'Button/Button';

import NavContext from 'NavContext/NavContext';
import SearchContext from 'SearchPane/Context/SearchPaneContext';

import SearchPaneForm from './Form/SearchPaneForm';
import SearchPaneControls from './Controls/SearchPaneControls';

const CSS_CLASSES = {
  IS_SEARCH_ACTIVE: 'search-open'
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
  const { toggleNav } = useContext(NavContext);
  const { isSearchActive, toggleSearch } = useContext(SearchContext);

  useEffect(() => {
    if (isSearchActive) {
      addBodyClass(CSS_CLASSES.IS_SEARCH_ACTIVE);
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

  const classNames = {
    parent: cx('search-pane', {
      'is-active': isSearchActive
    }),
    overlay: cx('search-pane__overlay', {
      'is-active': isSearchActive
    })
  };

  return (
    <div className={classNames.parent}>
      <div className="search-pane__content">
        <div className="search-pane__container">
          <SearchPaneControls />
          <SearchPaneForm />
        </div>
      </div>
      <Button
        className={classNames.overlay}
        tabIndex={isSearchActive ? '0' : '-1'}
        disabled={!isSearchActive}
        onClick={closeAll}
        styled={false}
      >
        <span className="u-visually-hidden">Hide Search</span>
      </Button>
    </div>
  );
};

export default SearchPane;
