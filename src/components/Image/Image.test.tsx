import React from 'react';
import { shallow } from 'enzyme';

import Image from './Image';

describe('<Image />', () => {
  const output = shallow(<Image src="image.jpg" alt="My description" />);

  it('renders the component', () => {
    expect(output);
  });
});
