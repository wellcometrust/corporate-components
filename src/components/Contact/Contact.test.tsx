import React from 'react';
import { shallow } from 'enzyme';

import Contact from './Contact';

describe('<Contact />', () => {
  const output = shallow(
    <Contact
      email="s.pritchard@wellcome.ac.uk"
      institution="Stuart's Institute"
      name="Stuart Pritchard"
      contactRole="<p>EU and Public Affairs Manager</p>"
      tel=""
    />
  );

  it('renders the component', () => {
    expect(output);
  });
});
