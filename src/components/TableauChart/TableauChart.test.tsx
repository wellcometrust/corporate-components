import React from 'react';
import { shallow } from 'enzyme';

import TableauChart from './TableauChart';

describe('<TableauChart />', () => {
  const output = shallow(<TableauChart embed="" />);

  it('renders the component', () => {
    expect(output);
  });
});
