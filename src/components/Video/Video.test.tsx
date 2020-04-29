import React from 'react';
import { shallow } from 'enzyme';

import Video from './Video';

describe('<Video />', () => {
  const output = shallow(
    <Video src="video" caption="Video caption" credit="Video credit" />
  );

  it('renders the component', () => {
    expect(output);
  });
});
