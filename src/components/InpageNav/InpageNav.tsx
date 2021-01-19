import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import Accordion, { AccordionItem } from 'Accordion/Accordion';
import Grid from 'Grid';

type InpageNavProps = {
  activeLink?: string;
  isMinimal?: boolean;
  links?: InpageNavItemProps[];
};

type InpageNavItemProps = {
  id: string;
  title?: string;
};

export const InpageNav = ({ activeLink, isMinimal, links }: InpageNavProps) => {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    setActive(prevState => activeLink !== prevState && activeLink);

    return () => {};
  }, [activeLink]);

  const navLinks = (
    <ul className="cc-inpage-nav__list">
      {links.map(({ id, title }) => {
        const linkClassNames = cx('cc-inpage-nav__link', {
          'is-active': id === active
        });

        return (
          <li key={`anchor-link-${id}`} className="cc-inpage-nav__item">
            <a className={linkClassNames} href={`#${id}`}>
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <Grid className="cc-inpage-nav-container">
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
    </Grid>
  );
};

export default InpageNav;
