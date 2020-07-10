import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './Accordion';

describe('<Accordion />', () => {
  const output = shallow(<Accordion />);

  it('renders the component', () => {
    expect(output);
  });
});
