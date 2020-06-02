import React from 'react';
import cx from 'classnames';

type ListingProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'ol' | 'ul';
};

export const Listing = ({ as = 'div', children, className }: ListingProps) => {
  const Element = as;
  const classNames = cx('cc-listing', {
    [`${className}`]: className
  });

  return <Element className={classNames}>{children}</Element>;
};

export default Listing;
