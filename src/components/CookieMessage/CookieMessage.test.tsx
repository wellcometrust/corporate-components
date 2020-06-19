import React from 'react';
import { shallow } from 'enzyme';
import CookieMessage from './CookieMessage';

describe('<CookieMessage />', () => {
  const output = shallow(<CookieMessage isActive />);

  it('renders the component', () => {
    expect(output);
  });
});
