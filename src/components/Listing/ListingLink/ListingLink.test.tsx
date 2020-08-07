import React, { Children } from 'react';
import { shallow } from 'enzyme';

import Listing from 'Listing';
import ListingLink from './ListingLink';

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

describe('<ListingLink />', () => {
  const output = shallow(
    <Listing as="ul">
      {links.map(({ href, text }) => (
        <ListingLink key={`listing-item-${href}`} href={href} title={text} />
      ))}
    </Listing>
  );

  it('renders the component', () => {
    expect(output.find(ListingLink)).toHaveLength(3);
  });
});
