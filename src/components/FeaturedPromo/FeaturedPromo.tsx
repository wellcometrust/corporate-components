import React from 'react';
import cx from 'classnames';

import { ImageElement } from 'Image';
import RichText from 'RichText';
import Link from 'Link';

type FeaturedPromoProps = {
  author: string;
  className?: string;
  description?: string;
  imageAlt: string;
  imageHeight?: string;
  imageSizes?: string;
  imageSrc: string;
  imageSrcSet?: string;
  imageWidth?: string;
  title: string;
  titleAs?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  topic: string;
  url: string;
};

export const FeaturedPromo = ({
  author,
  className,
  description,
  imageAlt,
  imageHeight,
  imageSizes,
  imageSrc,
  imageSrcSet,
  imageWidth,
  title,
  titleAs = 'h3',
  topic,
  url
}: FeaturedPromoProps) => {
  const TitleElement = titleAs;
  const classNames = cx('cc-featured-promo', {
    [className]: className
  });

  return (
    <article
      className={classNames}
      itemScope
      itemType="https://schema.org/Article"
    >
      <Link className="cc-featured-promo__figure" to={url}>
        <figure className="cc-featured-promo__image">
          <ImageElement
            alt={imageAlt}
            height={imageHeight}
            itemProp="image"
            sizes={imageSizes}
            src={imageSrc}
            srcSet={imageSrcSet}
            width={imageWidth}
          />
        </figure>
      </Link>
      <div className="cc-featured-promo__body">
        <span className="cc-featured-promo__meta">
          <span className="cc-featured-promo__meta-item cc-featured-promo__meta-item--flag cc-featured-promo__meta-item--topic">
            {topic}
          </span>
          <span
            className="cc-featured-promo__meta-item cc-featured-promo__meta-item--author"
            itemProp="author"
          >
            {author}
          </span>
        </span>
        <TitleElement className="cc-featured-promo__title" itemProp="name">
          <Link className="cc-featured-promo__link" to={url}>
            {title}
          </Link>
        </TitleElement>
        {description && (
          <RichText
            className="cc-featured-promo__description"
            itemProp="abstract"
          >
            {description}
          </RichText>
        )}
      </div>
    </article>
  );
};

export default FeaturedPromo;
