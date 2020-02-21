import React from 'react';
import { shallow } from 'enzyme';

import GridCell from './GridCell';

describe('<GridCell />', () => {
  const output = shallow(
    <GridCell column={1} columnCount={3}>
      A GridCell component
    </GridCell>
  );

  it('renders the component', () => {
    expect(output);
  });
});
