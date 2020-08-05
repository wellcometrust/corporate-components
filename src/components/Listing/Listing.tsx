import React from 'react';
import cx from 'classnames';

import Grid from 'Grid';
import ListingLink from './ListingLink';

type ListingProps = {
  as?: 'div' | 'ol' | 'ul';
  children: React.ReactNode;
  className?: string;
  variant?: 'link_list' | 'text_list' | 'horizontal_card' | 'vertical_card';
};

// Specific style variations for card listings
const variantMapping = {
  horizontal_card: 'cc-card-listing cc-card-listing--horizontal',
  link_list: '',
  text_list: '',
  vertical_card: 'cc-card-listing'
};

export const Listing = ({
  as = 'div',
  children,
  className,
  variant
}: ListingProps) => {
  const Element = as;
  const classNames = cx(
    variantMapping[variant] ? variantMapping[variant] : 'cc-listing',
    {
      [`${className}`]: className
    }
  );

  return <Element className={classNames}>{children}</Element>;
};

export default Listing;
export { ListingLink };
