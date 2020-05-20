import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import LinkList from './LinkList';
import Readme from './LinkList.md';

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

const LinkListExample = () => <LinkList links={links} />;

const stories = storiesOf('Components|Image', module);

stories.add('Image', LinkListExample, {
  readme: { sidebar: Readme }
});
