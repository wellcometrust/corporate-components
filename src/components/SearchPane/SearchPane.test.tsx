import React from 'react';
import { shallow } from 'enzyme';

import SearchPane from './SearchPane';

describe('<SearchPane />', () => {
  const output = shallow(<SearchPane />);

  it('renders the component', () => {
    expect(output);
  });
});
