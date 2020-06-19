import React from 'react';
import { shallow } from 'enzyme';

import SectionTitle from './SectionTitle';

describe('<SectionTitle />', () => {
  const output = shallow(<SectionTitle title="My heading" />);

  it('renders the component', () => {
    expect(output);
  });
});
