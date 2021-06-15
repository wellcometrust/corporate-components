import React from 'react';

import Link from 'Link';

type FooterLinksProps = {
  links: FooterLinksItemProps[];
};

type FooterLinksItemProps = {
  text: string;
  href: string;
};

export const FooterLinks = ({ links }: FooterLinksProps) => (
  <div className="cc-footer-links">
    {links.map(({ text, href, ...props }) => (
      <Link
        key={`footer-links-item-${href}`}
        className="cc-footer-links__item"
        to={href}
        {...props}
      >
        {text}
      </Link>
    ))}
  </div>
);

export default FooterLinks;
