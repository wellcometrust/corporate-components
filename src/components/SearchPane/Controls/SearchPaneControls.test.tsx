import React from 'react';
import { shallow } from 'enzyme';

import SearchPaneControls from './SearchPaneControls';

// TODO: test context updates from button(s) within controls
describe('<SearchPaneControls />', () => {
  const output = shallow(<SearchPaneControls />);

  it('renders the component', () => {
    expect(output);
  });
});
