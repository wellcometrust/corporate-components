import React from 'react';
import { shallow } from 'enzyme';

import Grid from './Grid';

describe('<Grid />', () => {
  const output = shallow(<Grid>The Grid Component</Grid>);

  it('renders the component', () => {
    expect(output);
  });
});
