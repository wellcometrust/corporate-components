import React from 'react';
import cx from 'classnames';

import ListingLink from './ListingLink';

type ListingProps = {
  as?: 'div' | 'ol' | 'ul';
  children: React.ReactNode;
  className?: string;
};

export const Listing = ({ as = 'div', children, className }: ListingProps) => {
  const Element = as;
  const classNames = cx('cc-listing', {
    [`${className}`]: className
  });

  return <Element className={classNames}>{children}</Element>;
};

export default Listing;
export { ListingLink };
