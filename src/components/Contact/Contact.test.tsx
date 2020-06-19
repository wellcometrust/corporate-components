import React from 'react';
import { shallow } from 'enzyme';

import Contact from './Contact';

describe('<Contact />', () => {
  const output = shallow(
    <Contact
      name="Stuart Pritchard"
      title="EU and Public Affairs Manager"
      email="s.pritchard@wellcome.ac.uk"
      tel=""
    />
  );

  it('renders the component', () => {
    expect(output);
  });
});
