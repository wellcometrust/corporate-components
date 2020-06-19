import React from 'react';

import { NavItem } from './NavItem';

type NavDataItemProps = {
  id: string;
  text: string;
  url: string;
};

type NavDataProps = {
  id: string;
  text: string;
  url: string;
  navLinks?: NavDataProps;
}[];

type NavListProps = {
  data: NavDataProps;
  level?: number;
  parentUrl?: string;
  parentText?: string;
};

type NavLinksProps = {
  data: NavDataProps;
  level?: number;
};

const NavList = ({ data, level, parentUrl, parentText }: NavListProps) => {
  // create child nav items
  // children of the context level (e.g. level 2)
  const children = (childNodes: NavDataProps, parentNode: NavDataItemProps) =>
    childNodes && (
      <ul className="nav__list">
        <NavItem
          key={parentNode.id}
          level={level + 1}
          text={parentNode.text}
          parentText={parentText}
          url={parentNode.url}
          className="first"
        />
        <NavList
          data={childNodes}
          parentText={parentNode.text}
          level={level + 1}
          parentUrl={parentNode.url}
        />
      </ul>
    );
  return (
    <>
      {data.map(node => (
        <NavItem
          key={node.id}
          level={level}
          parentUrl={parentUrl}
          parentText={parentText}
          text={node.text}
          url={node.url}
        >
          {children(node.navLinks, node)}
        </NavItem>
      ))}
    </>
  );
};

export const NavLinks = ({ data, level }: NavLinksProps) => {
  return (
    <ul className="nav__list">
      <NavList data={data} level={level} />
    </ul>
  );
};

export default NavLinks;
