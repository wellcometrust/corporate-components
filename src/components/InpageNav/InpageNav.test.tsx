import React from 'react';
import { shallow } from 'enzyme';

import { InpageNav } from './InpageNav';

const links = [
  {
    title: 'Section title 1',
    id: '#section-title-1'
  },
  {
    title: 'Section title 2',
    id: '#section-title-2'
  },
  {
    title: 'Very very very very very very very very long Section title 3',
    id: '#section-title-3'
  },
  {
    title: 'Section title 4',
    id: '#section-title-4'
  }
];

describe('<InpageNav />', () => {
  const output = shallow(<InpageNav links={links} />);

  it('renders the component', () => {
    expect(output);
  });
});
