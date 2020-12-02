import React from 'react';
import cx from 'classnames';

import Icon from 'Icon';
import Link from 'Link';

type ListingLinkProps = {
  className?: string;
  fileSize?: string;
  fileType?: string;
  href: string;
  iconVariant?: 'chevron' | 'download';
  title: string;
};

export const ListingLink = ({
  className,
  fileSize,
  fileType,
  href,
  title,
  iconVariant = 'chevron'
}: ListingLinkProps) => {
  const classNames = cx('cc-listing__item', {
    [`${className}`]: className
  });

  const iconClassNames = cx('cc-listing__link-icon', {
    [`cc-listing__link-icon--${iconVariant}`]: iconVariant
  });

  return (
    <li className={classNames}>
      <Link className="cc-listing__link" to={href}>
        {title}
        {fileType && fileSize && (
          <>
            {' '}
            <span className="cc-listing__link-meta">
              {fileType} {fileSize}
            </span>
          </>
        )}
        <Icon name={iconVariant} className={iconClassNames} />
      </Link>
    </li>
  );
};

export default ListingLink;
