import React, { forwardRef, useContext } from 'react';

import Button from 'Button/Button';
import SearchPaneContext from 'SearchPaneContext/SearchPaneContext';

export const SearchPaneForm = forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => {
    const { isSearchActive, toggleSearch } = useContext(SearchPaneContext);
    const searchTabIndex = isSearchActive ? 0 : -1;

    return (
      <form
        className="search-pane__form"
        role="search"
        action="/search"
        method="GET"
      >
        <label className="search-pane__form-label" htmlFor="search">
          <span className="u-visually-hidden">Search</span>
          <input
            className="search-pane__form-input"
            name="search"
            id="search"
            type="search"
            placeholder="Search wellcome.org"
            ref={ref}
            tabIndex={searchTabIndex}
          />
        </label>
        <Button
          className="search-pane__form-submit"
          type="submit"
          icon="search"
          iconPlacementSwitch
          tabIndex={searchTabIndex}
        >
          Search
        </Button>
      </form>
    );
  }
);

export default SearchPaneForm;
