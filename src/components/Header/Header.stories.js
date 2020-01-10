import React from 'react';
// import Router from 'next/router';
import { storiesOf } from '@storybook/react';

import Header from './Header';
import { NavContextProvider } from '../NavContext/NavContext';
import { SearchPaneContextProvider } from '../SearchPane/Context/SearchPaneContext';
import { ViewportContextProvider } from '../ViewportContext/ViewportContext';
import HeaderReadme from './Header.md';

// const mockedRouter = { push: () => {}, prefetch: () => {} };
// Router.router = mockedRouter;

storiesOf('Components|Header', module).add(
  'Header (default)',
  () => (
    <ViewportContextProvider>
      <SearchPaneContextProvider>
        <NavContextProvider>
          <Header />
        </NavContextProvider>
      </SearchPaneContextProvider>
    </ViewportContextProvider>
  ),
  {
    readme: { sidebar: HeaderReadme }
  }
);
