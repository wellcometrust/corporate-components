import React from 'react';
import { shallow } from 'enzyme';

import Timeline from './Timeline';

describe('<Timeline />', () => {
  const milestones = [
    {
      date: '1964-01-01T00:00:00Z',
      dateLabel: '1964',
      title: 'Beatles for Sale'
    },
    {
      body: '<p>This is the body text</p>',
      date: '1965-01-01T00:00:00Z',
      dateLabel: '1965',
      title: 'Help'
    },
    {
      date: '1965-01-01T00:00:00Z',
      dateLabel: '1965',
      title: 'Rubber Soul'
    }
  ];

  const output = shallow(<Timeline milestones={milestones} />);

  it('has 1 ordered list element (<ol>)', () => {
    expect(output.find('ol')).toHaveLength(1);
  });

  it('has 3 list item elements (<li>)', () => {
    expect(output.find('li')).toHaveLength(3);
  });
});
