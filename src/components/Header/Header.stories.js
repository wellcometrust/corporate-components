import React from 'react';
// import Router from 'next/router';
import { storiesOf } from '@storybook/react';

import Header from './Header';
import { NavContextProvider } from '../NavContext/NavContext';
import { SearchContextProvider } from '../SearchContext/SearchContext';
import { ViewportContextProvider } from '../ViewportContext/ViewportContext';
import HeaderReadme from './Header.md';

// const mockedRouter = { push: () => {}, prefetch: () => {} };
// Router.router = mockedRouter;

storiesOf('Components|Header', module).add(
  'Header (default)',
  () => (
    <ViewportContextProvider>
      <SearchContextProvider>
        <NavContextProvider>
          <Header />
        </NavContextProvider>
      </SearchContextProvider>
    </ViewportContextProvider>
  ),
  {
    readme: { sidebar: HeaderReadme }
  }
);
