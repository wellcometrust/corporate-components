import React from 'react';
import { storiesOf } from '@storybook/react';

import Listing from 'Listing';
import ListingLink from './ListingLink';
import Readme from './ListingLink.md';

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

const LinkListExample = () => (
  <Listing as="ul">
    {links.map(({ href, text }) => (
      <ListingLink key={`listing-item-${href}`} href={href} title={text} />
    ))}
  </Listing>
);

const stories = storiesOf('Components|Listings', module);

stories.add('Links List', LinkListExample, {
  readme: { sidebar: Readme }
});
