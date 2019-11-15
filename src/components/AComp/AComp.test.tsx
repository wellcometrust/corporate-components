import React from 'react';
import { shallow } from 'enzyme';
import AComp from './AComp';

describe('<AComp />', () => {
  const output = shallow(<AComp>Button text</AComp>);

  it('renders the component', () => {
    expect(output);
  });
});
