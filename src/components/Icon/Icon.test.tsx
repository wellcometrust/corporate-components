import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

describe('<Icon />', () => {
  const output = shallow(<Icon name="circleCross" />);

  it('renders the component', () => {
    expect(output);
  });
});
