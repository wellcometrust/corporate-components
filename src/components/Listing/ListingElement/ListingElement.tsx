import React from 'react';
import cx from 'classnames';

import Card from 'Card';
import { ListingLink } from 'Listing/ListingLink/ListingLink';

type ListingElementProps = {
  authors?: string[];
  className?: string;
  date?: string;
  description?: string;
  href: string;
  image?: any;
  meta?: string;
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
  authors,
  className,
  date,
  description,
  href,
  image,
  meta,
  title,
  variant
}: ListingElementProps) => {
  const classNames = cx({
    'cc-card--horizontal': variant === 'horizontal_card',
    'cc-card--vertical': variant === 'vertical_card',
    [`${className}`]: className
  });

  const Element = variantElement[variant];

  // TODO #6711, #6715: pass through additional props for populating text listing items / cards
  return (
    <Element
      authors={authors}
      className={classNames}
      date={date}
      description={description}
      href={href}
      image={image}
      meta={meta}
      title={title}
    />
  );
};

export default ListingElement;
