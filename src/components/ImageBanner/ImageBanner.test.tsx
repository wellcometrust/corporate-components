import React from 'react';
import { shallow } from 'enzyme';

import ImageBanner from './ImageBanner';

describe('<ImageBanner />', () => {
  const output = shallow(<ImageBanner src="image.jpg" alt="My description" />);

  it('renders the component', () => {
    expect(output);
  });
});
