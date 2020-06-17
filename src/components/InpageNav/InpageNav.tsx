import React from 'react';

type InpageNavItemLinksProps = {
  links?: InpageNavItemProps[];
};

type InpageNavItemProps = {
  title?: string;
  id?: string;
};

export const InpageNav = ({ links }: InpageNavItemLinksProps) => (
  <div className="cc-inpage-nav">
    <strong className="cc-inpage-nav__title">On this page</strong>
    <ul className="cc-inpage-nav__list">
      {links.map(({ title, id, ...props }) => (
        <li key={`anchor-link-${id}`} className="cc-inpage-nav__item">
          <a className="cc-inpage-nav__link" href={`#${id}`}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default InpageNav;
