import React, { useContext } from 'react';

import NavContext from 'NavContext/NavContext';
import Button from 'Button/Button';
import SearchPaneContext from 'SearchPaneContext/SearchPaneContext';

export const SearchPaneControls = () => {
  const { toggleNav } = useContext(NavContext);
  const { isSearchActive, toggleSearch } = useContext(SearchPaneContext);
  const searchTabIndex = isSearchActive ? 0 : -1;

  const closeAll = () => {
    toggleNav(false);
    toggleSearch(false);
  };

  return (
    <div className="search-pane__controls">
      <Button
        buttonType="unstyled"
        className="search-pane__btn-close"
        icon="close"
        onClick={closeAll}
        tabIndex={searchTabIndex}
      >
        Close <span className="u-visually-hidden">search</span>
      </Button>
      <Button
        buttonType="unstyled"
        className="search-pane__btn-back"
        icon="chevron"
        onClick={() => toggleSearch(false)}
        tabIndex={searchTabIndex}
      >
        Back to menu
      </Button>
    </div>
  );
};

export default SearchPaneControls;
