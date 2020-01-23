import React from 'react';
import cx from 'classnames';

type FooterSocialItemProps = {
  className?: string;
  text: string;
  url: string;
};

export const FooterSocialItem = ({
  className,
  text,
  url
}: FooterSocialItemProps) => {
  const classNames = cx('footer-social__icon newwindow-active', {
    [`${className}`]: className
  });
  return (
    <a
      className={classNames}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="visuallyhidden">Wellcome on {text}</span>
      <span className="assistive-text"> (opens in a new tab)</span>
    </a>
  );
};

export default FooterSocialItem;
