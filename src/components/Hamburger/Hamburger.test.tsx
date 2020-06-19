import React from 'react';
import { shallow } from 'enzyme';
import Hamburger from './Hamburger';

describe('<Hamburger />', () => {
  const output = shallow(<Hamburger label="Menu" onClick={() => {}} />);

  it('renders the component', () => {
    expect(output);
  });
});
