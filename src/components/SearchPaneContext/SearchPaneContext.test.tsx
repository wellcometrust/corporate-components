import React from 'react';
import { mount } from 'enzyme';

import 'test/mocks/match-media.mock';
import SearchPaneContext, {
  SearchPaneContextProvider
} from './SearchPaneContext';

describe('<SearchPaneContextProvider />', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let output: any;

  beforeEach(() => {
    output = mount(
      <SearchPaneContextProvider>
        <SearchPaneContext.Consumer>
          {({ isSearchActive }) => (
            <>
              <div className="test-isSearchActive">
                {isSearchActive.toString()}
              </div>
            </>
          )}
        </SearchPaneContext.Consumer>
      </SearchPaneContextProvider>
    );
  });

  afterEach(() => {
    output.unmount();
  });

  it('has `isSearchActive` property set to false', () => {
    expect(output.find('.test-isSearchActive').text()).toBe('false');
  });
});
