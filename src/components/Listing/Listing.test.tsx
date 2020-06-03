import React from 'react';
import { shallow } from 'enzyme';

import Listing from './Listing';

describe('<Listing />', () => {
  const output = shallow(
    <Listing as="ul">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </Listing>
  );

  it('renders the component', () => {
    expect(output);
  });
});
