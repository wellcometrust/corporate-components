import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

describe('<Card />', () => {
  const output = shallow(<Card title="My heading" />);

  it('renders the component', () => {
    expect(output);
  });
});
