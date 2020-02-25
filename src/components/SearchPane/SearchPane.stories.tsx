import React from 'react';
import { storiesOf } from '@storybook/react';

import SearchPaneContext, {
  SearchPaneContextProvider
} from 'SearchPaneContext/SearchPaneContext';
import Button from 'Button';

import SearchPane from './SearchPane';

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
