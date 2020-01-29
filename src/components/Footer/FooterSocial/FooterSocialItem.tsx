import React from 'react';

import Icon from 'Icon/Icon';

type FooterSocialItemProps = {
  text: string;
  url: string;
};

export const FooterSocialItem = ({ text, url }: FooterSocialItemProps) => {
  return (
    <a
      href={url}
      className="footer-social-item"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon
        className="footer-social-item__icon"
        name={text.charAt(0).toLowerCase() + text.slice(1)}
      />
      &nbsp;
      <span className="u-visually-hidden">Wellcome on {text}</span>
      <span className="assistive-text">&nbsp;(opens in a new tab)</span>
    </a>
  );
};

export default FooterSocialItem;
