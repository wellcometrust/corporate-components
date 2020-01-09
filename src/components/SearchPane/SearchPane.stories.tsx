import React from 'react';
import { storiesOf } from '@storybook/react';

import SearchPane from './SearchPane';
import SearchPaneContext, {
  SearchPaneContextProvider
} from './Context/SearchPaneContext';

const SearchPaneExample = () => (
  <SearchPaneContextProvider>
    <SearchPaneContext.Consumer>
      {({ isSearchActive, toggleSearch }) => (
        <>
          {!isSearchActive && (
            <button onClick={() => toggleSearch(true)} type="button">
              Show search pane
            </button>
          )}
          <SearchPane />
        </>
      )}
    </SearchPaneContext.Consumer>
  </SearchPaneContextProvider>
);

const stories = storiesOf('Components|SearchPane', module);

stories.add('SearchPane', SearchPaneExample);
