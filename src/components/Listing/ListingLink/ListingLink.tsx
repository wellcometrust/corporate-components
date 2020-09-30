import React from 'react';
import cx from 'classnames';

import { FileMetaProps } from 'ResultsItem/ResultsItem';
import Icon from 'Icon';
import Link from 'Link';

type ListingLinkProps = {
  className?: string;
  fileMeta?: FileMetaProps;
  href: string;
  title: string;
  iconVariant?: 'chevron' | 'download';
};

export const ListingLink = ({
  className,
  fileMeta,
  href,
  title,
  iconVariant = 'chevron'
}: ListingLinkProps) => {
  const classNames = cx('cc-listing__item', {
    [`${className}`]: className
  });

  const iconClassNames = cx('cc-listing__link-icon', {
    'cc-listing__link-icon--download': iconVariant === 'download'
  });

  return (
    <li className={classNames}>
      <Link className="cc-listing__link" to={href}>
        {title}
        {fileMeta?.type && fileMeta?.size && (
          <>
            {' '}
            <span className="cc-listing__link-meta">
              {fileMeta.type} {fileMeta.size}
            </span>
          </>
        )}
        <Icon name={iconVariant} className={iconClassNames} />
      </Link>
    </li>
  );
};

export default ListingLink;
