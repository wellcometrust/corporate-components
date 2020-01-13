import React from 'react';
import { shallow } from 'enzyme';
import ResultItem from './ResultItem';

describe('<ResultItem />', () => {
  const output = shallow(<ResultItem title="title" href="#" />);

  it('renders the component', () => {
    expect(output);
  });
});
