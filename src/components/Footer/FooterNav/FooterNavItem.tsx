import React from 'react';

export type FooterNavItemProps = {
  heading: {
    text: string;
    href?: string;
  };
  links?: {
    text: string;
    href: string;
  }[];
  children?: React.ReactNode;
};

export const FooterNavItem = ({
  heading,
  links,
  children
}: FooterNavItemProps) => {
  return (
    <li>
      {heading.href ? (
        <a href={heading.href}>{heading.text}</a>
      ) : (
        `${heading.text}`
      )}
      {links && (
        <ul>
          {links.map(({ text, href }) => (
            <li>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
      )}
      {children}
    </li>
  );
};

export default FooterNavItem;
