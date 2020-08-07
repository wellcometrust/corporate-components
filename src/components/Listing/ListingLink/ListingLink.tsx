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
};

export const ListingLink = ({
  className,
  fileMeta,
  href,
  title
}: ListingLinkProps) => {
  const classNames = cx('cc-listing__item', {
    [`${className}`]: className
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
        <Icon name="chevron" className="cc-listing__link-icon" />
      </Link>
    </li>
  );
};

export default ListingLink;
