import React from 'react';
import styled from 'styled-components';

import Item from './NavItem';

const NavList = styled.ul.attrs(props => ({
  className: 'nav__list'
}))`
  border-top: 1px solid ${props.theme.colours.lightGrey};
  list-style: none;
  margin: 0;
  padding: 0;

  ${props.theme.mediaQuery.min('medium')`
    border-top: none;
    display: flex;
  `}
`;

const Ul = ({ data, level, parentUrl }) => {
  // create child nav items
  // children of the context level (e.g. level 2)
  const children = (childNodes, parentNode) =>
    childNodes && (
      <NavList className="nav__list">
        <Item
          key={parentNode.id}
          level={level + 1}
          text={parentNode.text}
          url={parentNode.url}
          className="first"
        />
        <Ul data={childNodes} level={level + 1} parentUrl={parentNode.url} />
      </NavList>
    );

  return data.map(node => (
    <Item
      key={node.id}
      level={level}
      parentUrl={parentUrl}
      text={node.text}
      url={node.url}
    >
      {children(node.navLinks, node)}
    </Item>
  ));
};

export const NavLinks = ({ data, level }) => {
  return (
    <NavList>
      <Ul data={data} level={level} />
    </NavList>
  );
};

export default NavLinks;
