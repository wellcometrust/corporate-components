import React from 'react';

type FooterLinksProps = {
  rel?: string;
  role?: string;
  tabIndex?: number;
  target?: string;
  text: string;
  url: string;
};

export const FooterLinksItem = ({
  rel,
  role,
  tabIndex,
  target,
  text,
  url
}: FooterLinksProps) => {
  return (
    <a href={url} rel={rel} role={role} tabIndex={tabIndex} target={target}>
      {text}
    </a>
  );
};

export default FooterLinksItem;
