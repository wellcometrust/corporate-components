import React from 'react';
import cx from 'classnames';

import Link from 'Link';
import Icon from 'Icon';

type ListingLinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

export const ListingLink = ({
  children,
  className,
  href
}: ListingLinkProps) => {
  const classNames = cx('cc-listing__item', {
    [`${className}`]: className
  });

  return (
    <li className={classNames}>
      <Link className="cc-listing__link" to={href}>
        {children}
        <Icon name="chevron" className="cc-listing__link-icon" />
      </Link>
    </li>
  );
};

export default ListingLink;
