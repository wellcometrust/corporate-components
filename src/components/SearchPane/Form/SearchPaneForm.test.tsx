import React from 'react';
import { shallow } from 'enzyme';

import SearchPaneForm from './SearchPaneForm';

describe('<SearchPaneForm />', () => {
  const output = shallow(<SearchPaneForm />);

  it('renders the component', () => {
    expect(output);
  });
});
