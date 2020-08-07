import React, { Children, cloneElement } from 'react';
import cx from 'classnames';

import ListingElement from './ListingElement';
import ListingLink from './ListingLink';

type ListingProps = {
  as?: 'div' | 'ol' | 'ul';
  children: JSX.Element | JSX.Element[];
  className?: string;
  variant?: 'horizontal_card' | 'link_list' | 'text_list' | 'vertical_card';
};

// Specific style variations for card listings
const variantMapping = {
  horizontal_card: 'cc-card-listing cc-card-listing--horizontal',
  link_list: 'cc-listing',
  text_list: 'cc-text-listing',
  vertical_card: 'cc-card-listing'
};

export const Listing = ({
  as = 'div',
  children,
  className,
  variant = 'link_list'
}: ListingProps) => {
  const Element = as;
  const classNames = cx(variantMapping[variant], {
    [`${className}`]: className
  });

  const childrenWithProps = Children.map(children, child =>
    cloneElement(child, {
      /**
       * Pass the variant type to the child elements
       */
      variant
    })
  );

  return <Element className={classNames}>{childrenWithProps}</Element>;
};

export default Listing;
export { ListingElement, ListingLink };
