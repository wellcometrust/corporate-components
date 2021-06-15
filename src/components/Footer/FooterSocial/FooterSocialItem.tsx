import React from 'react';

import Icon from 'Icon/Icon';
import VisuallyHidden from 'VisuallyHidden';

type FooterSocialItemProps = {
  text: string;
  url: string;
};

export const FooterSocialItem = ({ text, url }: FooterSocialItemProps) => {
  return (
    <a
      href={url}
      className="cc-footer-social-item"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon
        className="cc-footer-social-item__icon"
        name={text.charAt(0).toLowerCase() + text.slice(1)}
      />
      <VisuallyHidden>
        <>Wellcome on {text} (opens in a new tab)</>
      </VisuallyHidden>
    </a>
  );
};

export default FooterSocialItem;
