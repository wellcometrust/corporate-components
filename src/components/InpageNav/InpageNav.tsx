import React from 'react';

type InpageNavItemLinksProps = {
  links?: InpageNavItemProps[];
};

type InpageNavItemProps = {
  title?: string;
  id?: string;
};

export const InpageNav = ({ links }: InpageNavItemLinksProps) => (
  <>
    <strong className="section-links__heading">On this page</strong>
    <ul className="list-unstyled list-highlight">
      {links.map(({ title, id, ...props }) => (
        <li key={`anchor-link-${id}`} className="list-highlight__item">
          <a href={`#${id}`}>{title}</a>
        </li>
      ))}
    </ul>
  </>
);

export default InpageNav;
