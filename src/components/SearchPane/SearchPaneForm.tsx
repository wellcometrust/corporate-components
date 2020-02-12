import React from 'react';

import Button from 'Button';

export const SearchPaneForm = () => (
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
        placeholder="Search wellcome.ac.uk"
      />
    </label>
    <Button
      className="search-pane__form-submit"
      type="submit"
      icon="search"
      iconPlacementSwitch
    >
      Search
    </Button>
  </form>
);

export default SearchPaneForm;
