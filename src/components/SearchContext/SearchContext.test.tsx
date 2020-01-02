import React from 'react';
import { mount } from 'enzyme';

import 'test/mocks/match-media.mock';
import SearchContext, { SearchContextProvider } from './SearchContext';

describe('<SearchContextProvider />', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let output: any;

  beforeEach(() => {
    output = mount(
      <SearchContextProvider>
        <SearchContext.Consumer>
          {({ isSearchActive }) => (
            <>
              <div className="test-isSearchActive">
                {isSearchActive.toString()}
              </div>
            </>
          )}
        </SearchContext.Consumer>
      </SearchContextProvider>
    );
  });

  afterEach(() => {
    output.unmount();
  });

  it('has `isSearchActive` property set to false', () => {
    expect(output.find('.test-isSearchActive').text()).toBe('false');
  });
});
