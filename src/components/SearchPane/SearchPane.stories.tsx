import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from 'Button';

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
            <Button onClick={() => toggleSearch(true)} styled={false}>
              Show search pane
            </Button>
          )}
          <SearchPane />
        </>
      )}
    </SearchPaneContext.Consumer>
  </SearchPaneContextProvider>
);

const stories = storiesOf('Components|SearchPane', module);

stories.add('SearchPane', SearchPaneExample);
