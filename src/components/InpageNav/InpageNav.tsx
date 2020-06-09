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
    <h3 className="section-links__heading">On this page</h3>
    <ul className="list-unstyled list-highlight">
      {links.map(({ title, id, ...props }) => (
        <li className="list-highlight__item">
          <p className="list-highlight__title">
            <a href={id}>{title}</a>
          </p>
        </li>
      ))}
    </ul>
  </>
);

export default InpageNav;
