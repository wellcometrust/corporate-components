import React from 'react';
import { shallow } from 'enzyme';

import RichText from 'RichText';
import Text from './Text';

describe('<Text />', () => {
  const output = shallow(
    <Text className="My text">{'<h3>Heading 3</h3>'}</Text>
  );

  it('contains a RichText child component', () => {
    expect(output.find(RichText)).toHaveLength(1);
  });

  it('contains an H3 element', () => {
    expect(
      output
        .find(RichText)
        .dive()
        .find('h3')
    ).toHaveLength(1);
  });
});
