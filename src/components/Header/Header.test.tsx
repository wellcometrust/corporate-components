import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  const output = shallow(<Header />);

  it('renders the component', () => {
    expect(output);
  });
});
