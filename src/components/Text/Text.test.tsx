import React from 'react';
import { mount } from 'enzyme';

import Text from './Text';

describe('<Text />', () => {
  const output = mount(
    <Text className="My heading">{`<h3>Heading 3</h3>`}</Text>
  );

  it('renders the component', () => {
    expect(output.find('h3')).toHaveLength(1);
  });
});
