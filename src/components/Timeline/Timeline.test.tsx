import React from 'react';
import { shallow } from 'enzyme';

import Timeline from './Timeline';

describe('<Timeline />', () => {
  const milestones = [
    {
      date: '1964',
      title: 'Beatles for Sale'
    },
    {
      body: '<p>This is the body text</p>',
      date: '1965',
      title: 'Help'
    },
    {
      date: '1965',
      title: 'Rubber Soul'
    }
  ];

  const output = shallow(<Timeline milestones={milestones} />);

  it('has 3 definition title elements (<dt>)', () => {
    expect(output.find('dt')).toHaveLength(3);
  });

  it('has 3 definition detail elements (<dd>)', () => {
    expect(output.find('dd')).toHaveLength(3);
  });
});
