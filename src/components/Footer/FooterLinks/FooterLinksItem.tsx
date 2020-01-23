import React from 'react';
import cx from 'classnames';

type FooterLinksProps = {
  className?: string;
  rel?: string;
  role?: string;
  tabIndex?: number;
  target?: string;
  text: string;
  url: string;
};

export const FooterLinksItem = ({
  className,
  rel,
  role,
  tabIndex,
  target,
  text,
  url
}: FooterLinksProps) => {
  const classNames = cx('footer-links__item', { [`${className}`]: className });
  return (
    <a
      className={classNames}
      href={url}
      rel={rel}
      role={role}
      tabIndex={tabIndex}
      target={target}
    >
      {text}
    </a>
  );
};

export default FooterLinksItem;
