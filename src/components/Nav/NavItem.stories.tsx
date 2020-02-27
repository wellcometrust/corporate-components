import React from 'react';
import { storiesOf } from '@storybook/react';

import NavItem from './NavItem';

const NavItemExample = () => {
  return (
    <ul>
      <NavItem className="header-nav__item" url="/" text="Nav item" level={1}>
        <ul>
          <NavItem
            className="header-nav__item"
            url="/"
            text="Nav item"
            level={2}
          />
          <NavItem
            className="header-nav__item"
            url="/"
            text="Nav item"
            level={2}
          />
        </ul>
      </NavItem>
      <NavItem className="header-nav__item" url="/" text="Nav item" level={1} />
    </ul>
  );
};

const stories = storiesOf('Components|NavItem', module);

stories.add('NavItem', NavItemExample);
