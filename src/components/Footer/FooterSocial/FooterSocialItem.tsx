import React from 'react';
import cx from 'classnames';

type FooterSocialItemProps = {
  text: string;
  url: string;
};

export const FooterSocialItem = ({ text, url }: FooterSocialItemProps) => {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      <span className="visuallyhidden">Wellcome on {text}</span>
      <span className="assistive-text"> (opens in a new tab)</span>
    </a>
  );
};

export default FooterSocialItem;
