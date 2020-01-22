import React from 'react';
import cx from 'classnames';

type FooterLinksItemProps = {
  className?: string;
  text: string;
  url: string;
  target?: string;
  rel?: string;
  role?: string;
  tabIndex?: number;
};

export const FooterLinksItem = ({
  className,
  text,
  url,
  target,
  rel,
  role,
  tabIndex
}: FooterLinksItemProps) => {
  const classNames = cx('footer-links__item', { [`${className}`]: className });
  return (
    <a
      className={classNames}
      href={url}
      target={target}
      rel={rel}
      role={role}
      tabIndex={tabIndex}
    >
      {text}
    </a>
  );
};

export default FooterLinksItem;
