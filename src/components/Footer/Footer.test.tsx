import * as React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {
  const output = shallow(<Footer />);

  it('renders the component', () => {
    expect(output);
  });
});
