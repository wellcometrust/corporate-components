/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';

import 'test/mocks/match-media.mock';
import NavContext, { NavContextProvider } from './NavContext';

describe('<NavContextProvider />', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let output: any;

  beforeEach(() => {
    output = mount(
      <NavContextProvider>
        <NavContext.Consumer>
          {({ isNavActive }) => (
            <div className="test-isNavActive">{isNavActive.toString()}</div>
          )}
        </NavContext.Consumer>
      </NavContextProvider>
    );
  });

  afterEach(() => {
    output.unmount();
  });

  it('has `isNavActive` property set to false', () => {
    expect(output.find('.test-isNavActive').text()).toBe('false');
  });
});
