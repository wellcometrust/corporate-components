import React from 'react';
import { storiesOf } from '@storybook/react';

import navLinkData from 'data/default-site-links.json';
import NavLinks from './NavLinks';

const NavLinksExample = () => {
  return <NavLinks data={navLinkData} level={1} />;
};

const stories = storiesOf('Components|NavItem', module);

stories.add('NavLinks', NavLinksExample);
