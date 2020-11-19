import React from 'react';
import cx from 'classnames';

import Card from 'Card';
import ImageCard from 'ImageCard';
import { ListingLink } from 'Listing/ListingLink/ListingLink';
import ResultsItem from 'ResultsItem/ResultsItem';

type ListingElementProps = {
  authors?: string[];
  className?: string;
  description?: string;
  href: string;
  id?: string;
  image?: {
    alt?: string;
    src?: string;
    // sources?: {
    //   thumbnail_lo?: string;
    //   thumbnail?: string;
    //   thumbnail_hi?: string;
    // };
  };
  meta?: {
    date?: string;
    lastUpdated?: string;
    hasType?: boolean;
    type?: string | null;
  };
  title: string;
  fileMeta?: {
    type: string;
    size: string;
  };
  type?: 'content' | 'file' | 'taxonomy_term';
  variant:
    | 'image_card'
    | 'horizontal_card'
    | 'link_list'
    | 'text_list'
    | 'vertical_card';
};

const variantElement = {
  horizontal_card: Card,
  image_card: ImageCard,
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
      date={meta.date}
      description={description}
      fileMeta={fileMeta}
      href={href}
      id={id}
      image={image}
      imageAlt={image.alt}
      imageSrc={image.src}
      meta={meta}
      metaLabel={meta.type}
      title={title}
      type={type}
      variant={variant}
    />
  );
};

export default ListingElement;
