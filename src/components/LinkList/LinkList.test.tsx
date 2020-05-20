import React from 'react';
import { shallow } from 'enzyme';

import LinkList from './LinkList';

const links = [
  {
    text: 'Link title lorem ipsum dolor amet sit',
    href: '/internal-link-1'
  },
  {
    text: 'Link (external) title lorem ipsum dolor amet sit',
    href: 'http://corporate-d8.docker.test:8000/external-link-2'
  },
  {
    text:
      'This is dummy text, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque.',
    href: '/internal-link-3'
  }
];

describe('<LinkList />', () => {
  const output = shallow(<LinkList links={links} />);

  it('renders the component', () => {
    expect(output);
  });
});
