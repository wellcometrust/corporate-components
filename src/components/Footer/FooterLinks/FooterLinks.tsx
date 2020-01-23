import React from 'react';

import FooterLinksItem from './FooterLinksItem';

type FooterProps = {
  links: [];
};

export const FooterLinks = ({ links }: FooterProps) => {
  return (
    <div className="footer-links">
      {links.map(({ className, text, href, target, rel, role, tabIndex }) => (
        <FooterLinksItem
          className={className}
          text={text}
          url={href}
          target={target}
          rel={rel}
          role={role}
          tabIndex={tabIndex}
        />
      ))}
    </div>
  );
};

export default FooterLinks;
