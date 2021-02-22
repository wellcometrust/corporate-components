import React from 'react';
import cx from 'classnames';

import Icon from 'Icon';
import Link from 'Link';

type ListingLinkProps = {
  className?: string;
  documentSubType?: string;
  documentType?: string;
  fileSize?: string;
  fileType?: string;
  href: string;
  iconVariant?: 'chevron' | 'download';
  title: string;
};

export const ListingLink = ({
  className,
  documentSubType,
  documentType,
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
      <Link
        className="cc-listing__link"
        // todo: #7814
        data-file-type={documentType}
        data-report-type={documentSubType}
        to={href}
      >
        <span className="cc-listing__link-text">{title}</span>
        {fileType && fileSize && (
          <span className="cc-listing__link-meta">
            {fileType} {fileSize}
          </span>
        )}
        <Icon name={iconVariant} className={iconClassNames} />
      </Link>
    </li>
  );
};

export default ListingLink;
