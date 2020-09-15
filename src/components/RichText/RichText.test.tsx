import React from 'react';
import { shallow } from 'enzyme';

import RichText from 'RichText';

describe('<RichText />', () => {
  const output = shallow(<RichText>{'<h3>Heading 3</h3>'}</RichText>);

  it('contains an H3 element', () => {
    expect(output.find('h3')).toHaveLength(1);
  });
});
