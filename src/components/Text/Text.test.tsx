import React from 'react';
import { shallow } from 'enzyme';

import RichText from 'RichText';
import Text from './Text';

describe('<Text />', () => {
  const output = shallow(
    <Text className="My text">{`
      <h3>Heading 3</h3>
      <p><script>alert('xss')</script>Paragraph hiding a script tag</p>
      <script>alert('another xss')</script>
    `}</Text>
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

  it('has script elements stripped out', () => {
    expect(
      output
        .find(RichText)
        .dive()
        .find('script')
    ).toHaveLength(0);
  });
});
