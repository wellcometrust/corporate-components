import React from 'react';

type FooterSocialItemProps = {
  text: string;
  url: string;
};

export const FooterSocialItem = ({ text, url }: FooterSocialItemProps) => {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      <span className="u-visually-hidden">Wellcome on {text}</span>
      <span> (opens in a new tab)</span>
    </a>
  );
};

export default FooterSocialItem;
