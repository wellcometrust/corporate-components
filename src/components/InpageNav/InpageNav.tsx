import React from 'react';

import Accordion, { AccordionItem } from 'Accordion/Accordion';

type InpageNavProps = {
  isMinimal?: boolean;
  links?: InpageNavItemProps[];
};

type InpageNavItemProps = {
  title?: string;
  id?: string;
};

export const InpageNav = ({ isMinimal, links }: InpageNavProps) => {
  const navLinks = (
    <ul className="cc-inpage-nav__list">
      {links.map(({ title, id, ...props }) => (
        <li key={`anchor-link-${id}`} className="cc-inpage-nav__item">
          <a className="cc-inpage-nav__link" href={`#${id}`}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="cc-inpage-nav">
      {isMinimal ? (
        <Accordion>
          <AccordionItem
            title="On this page"
            titleAs="strong"
            variant="chevron"
          >
            {navLinks}
          </AccordionItem>
        </Accordion>
      ) : (
        <>
          <strong className="cc-inpage-nav__title">On this page</strong>
          {navLinks}
        </>
      )}
    </div>
  );
};

export default InpageNav;
