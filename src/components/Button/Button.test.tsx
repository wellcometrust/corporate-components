import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  const output = shallow(<Button>Button text</Button>);

  it('renders the component', () => {
    expect(output);
  });
});
