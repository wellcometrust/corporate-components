import React, { useContext } from 'react';

import NavContext from 'NavContext/NavContext';
import Button from 'Button/Button';
import SearchContext from '../Context/SearchPaneContext';

export const SearchPaneControls = () => {
  const { toggleNav } = useContext(NavContext);
  const { toggleSearch } = useContext(SearchContext);

  const closeAll = () => {
    toggleNav(false);
    toggleSearch(false);
  };

  return (
    <div className="search-pane__controls">
      <Button
        className="search-pane__btn-close"
        onClick={closeAll}
        icon="close"
        styled={false}
      >
        Close <span className="u-visually-hidden">search</span>
      </Button>
      <Button
        className="search-pane__btn-back"
        onClick={() => toggleSearch(false)}
        icon="chevron"
        styled={false}
      >
        Back to menu
      </Button>
    </div>
  );
};

export default SearchPaneControls;
