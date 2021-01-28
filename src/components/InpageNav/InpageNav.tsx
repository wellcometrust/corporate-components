import React from 'react';
import cx from 'classnames';

import Accordion, { AccordionItem } from 'Accordion/Accordion';
import Grid from 'Grid';

type InpageNavProps = {
  activeLinkId?: string;
  backToTopHref?: string;
  backToTopText?: string;
  hasBackToTop?: boolean;
  isMinimal?: boolean;
  links?: InpageNavItemProps[];
};

type InpageNavItemProps = {
  id: string;
  title?: string;
};

export const InpageNav = ({
  activeLinkId,
  backToTopHref = '#top',
  backToTopText = 'Back to top',
  hasBackToTop = true,
  isMinimal,
  links
}: InpageNavProps) => {
  const navLinks = (
    <ul className="cc-inpage-nav__list">
      {links.map(({ id, title }) => {
        const linkClassNames = cx('cc-inpage-nav__link', {
          'is-active': id === activeLinkId
        });

        return (
          <li key={`anchor-link-${id}`} className="cc-inpage-nav__item">
            <a className={linkClassNames} href={`#${id}`}>
              {title}
            </a>
          </li>
        );
      })}
      {hasBackToTop && (
        <li className="cc-inpage-nav__item cc-inpage-nav__item--top">
          <a className="cc-inpage-nav__link" href={backToTopHref}>
            {backToTopText}
          </a>
        </li>
      )}
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
