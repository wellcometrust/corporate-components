import React from 'react';
import cx from 'classnames';

import Grid from 'Grid';
import ListingLink from './ListingLink';

type ListingProps = {
  as?: 'div' | 'ol' | 'ul';
  children: React.ReactNode;
  className?: string;
  variant?: 'horizontal_card' | 'vertical_card';
};

// Specific style variations for card listings
const variantMapping = {
  horizontal_card: 'cc-card-listing cc-card-listing--horizontal',
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

  return (
    <Grid>
      <Element className={classNames}>
        {variant} - {children}
      </Element>
    </Grid>
  );
};

export default Listing;
export { ListingLink };
