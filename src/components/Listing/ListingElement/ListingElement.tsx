import React from 'react';
import cx from 'classnames';

import Card from 'Card';
import { ListingLink } from 'Listing/ListingLink/ListingLink';

type ListingElementProps = {
  className?: string;
  href: string;
  title: string;
  variant: 'horizontal_card' | 'link_list' | 'text_list' | 'vertical_card';
};

const variantElement = {
  horizontal_card: Card,
  link_list: ListingLink,
  // TODO #6715: add item component for Text Listing
  text_list: Card,
  vertical_card: Card
};

export const ListingElement = ({
  className,
  href,
  title,
  variant
}: ListingElementProps) => {
  const classNames = cx({
    'cc-card--horizontal': variant === 'horizontal_card',
    [`${className}`]: className
  });

  const Element = variantElement[variant];

  // TODO #6711, #6715: pass through additional props for populating text listing items / cards
  return <Element className={classNames} href={href} title={title} />;
};

export default ListingElement;
