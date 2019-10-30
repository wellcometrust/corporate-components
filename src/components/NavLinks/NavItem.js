// @flow
import React, { useContext, useState } from 'react';
// import type { Node } from 'react';
import styled from 'styled-components';

import {
  NavItem_S,
  NavLink_S,
  NavPane_S
} from './NavItemStyles';

// import ViewportContext from '../ViewportContext/ViewportContext';
import Link from './ActiveLink';
// import Icon from '../Icon/Icon';
import { BackButton } from './ButtonStyles';

// type Props = {
//   className?: string,
//   level: number,
//   parentUrl?: string,
//   text: string,
//   url: string,
//   children?: Node
// };

const defaultProps = {
  className: '',
  children: null,
  parentUrl: ''
};

const Item = ({ className, level, parentUrl, text, url, children }) => {
  const [isActive, setIsActive] = useState(false);
  // const { isMobile } = useContext(ViewportContext);
  const isMobile = true;

  const itemClasses = classNames(className, {
    'has-children': children
  });

  const childClasses = classNames({
    'nav-secondary': true,
    'is-active': isActive
  });

  const handleItemClick = e => {
    if (children && isMobile) {
      e.preventDefault();
      setIsActive(!isActive);
    }
  };

  return (
    <NavItem_S className={itemClasses}>
      <Link href={url} activeClassName="active" prefetch passHref>
        <NavLink_S
          className="nav__link"
          data-level={level}
          data-parent={parentUrl}
          href={url}
          onClick={handleItemClick}
        >
          <span className="nav__link-text">{text}</span>
          {children && <Icon name="arrowNarrow" />}
        </NavLink_S>
      </Link>
      {children && (
        <NavPane_S className={childClasses}>
          <BackButton type="button" onClick={handleItemClick}>
            <Icon name="arrowNarrow" />
            Back to menu
          </BackButton>
          {children}
        </NavPane_S>
      )}
    </NavItem_S>
  );
};

Item.defaultProps = defaultProps;

export default Item;
