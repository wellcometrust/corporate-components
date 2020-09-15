import React from 'react';
import { shallow } from 'enzyme';

import Timeline from './Timeline';

describe('<Timeline />', () => {
  const output = shallow(<Timeline />);

  it('renders the component', () => {
    expect(output);
  });
});
