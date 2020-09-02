import React from 'react';
import cx from 'classnames';

import Card from 'Card';
import { ListingLink } from 'Listing/ListingLink/ListingLink';
import ResultsItem, { ResultItemProps } from 'ResultsItem/ResultsItem';
import { CardImageProps } from 'Card/Card';

type ListingElementProps = ResultItemProps & {
  image?: CardImageProps;
  variant: 'horizontal_card' | 'link_list' | 'text_list' | 'vertical_card';
};

const variantElement = {
  horizontal_card: Card,
  link_list: ListingLink,
  text_list: ResultsItem,
  vertical_card: Card
};

export const ListingElement = ({
  authors,
  className,
  description,
  href,
  fileMeta,
  id,
  image,
  itemType,
  meta,
  title,
  type,
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
      description={description}
      fileMeta={fileMeta}
      href={href}
      id={id}
      image={image}
      itemType={itemType}
      meta={meta}
      title={title}
      type={type}
      variant={variant}
    />
  );
};

export default ListingElement;
