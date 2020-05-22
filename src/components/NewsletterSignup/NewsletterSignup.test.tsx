import React from 'react';
import { shallow } from 'enzyme';

import NewsletterSignup from './NewsletterSignup';

describe('<NewsletterSignup />', () => {
  const output = shallow(<NewsletterSignup title="title" />);

  it('renders the component', () => {
    expect(output);
  });
});
