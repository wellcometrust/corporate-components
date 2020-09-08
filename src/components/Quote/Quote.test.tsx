import React from 'react';
import { shallow } from 'enzyme';

import Quote from './Quote';

describe('<Quote />', () => {
  const output = shallow(
    <Quote
      cite="Jeremy Farrar, Director Wellcome Trust"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget fringilla massa. Quisque ut enim vehicula, volutpat dui et, gravida purus. In eget blandit libero."
    />
  );

  it('renders the component', () => {
    expect(output);
  });
});
