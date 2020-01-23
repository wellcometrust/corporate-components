import React from 'react';
import FooterLinksItem from './FooterLinksItem';

type FooterLinksItemProps = {
  links: [];
};

export const FooterLinks = ({ links }: FooterLinksItemProps) => {
  return (
    <div className="footer-links">
      {links.map(({ text, href, target, rel, role, tabIndex }) => (
        <FooterLinksItem
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
