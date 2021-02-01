import React from 'react';
import cx from 'classnames';

import { ImageElement } from 'Image';
import FormattedDate from 'FormattedDate';
import Link from 'Link';

type ImageCardProps = {
  authors?: string[];
  className?: string;
  date?: string;
  href: string;
  imageAlt: string;
  imageHeight?: string;
  imageSizes?: string;
  imageSrc: string;
  imageSrcSet?: string;
  imageWidth?: string;
  title: string;
  titleAs?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  metaLabel?: string;
};

export const ImageCard = ({
  authors,
  className,
  date,
  href,
  imageAlt,
  imageHeight,
  imageSizes = '(min-width: 1500px) 400px, (min-width: 1024px) calc(30vw - 48px), (min-width: 768px) calc(30vw - 40px), 30vw',
  imageSrc,
  imageSrcSet,
  imageWidth,
  title,
  titleAs = 'h3',
  metaLabel
}: ImageCardProps) => {
  const TitleElement = titleAs;
  const classNames = cx('cc-image-card', {
    [className]: className
  });

  return (
    <article
      className={classNames}
      itemScope
      itemType="https://schema.org/Article"
    >
      <Link className="cc-image-card__figure" to={href}>
        <figure className="cc-image-card__image">
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
      <div className="cc-image-card__body">
        {(metaLabel || authors?.length) && (
          <span className="cc-image-card__meta">
            {metaLabel && (
              <span className="cc-image-card__meta-item cc-image-card__meta-item--flag cc-image-card__meta-item--label">
                {metaLabel}
              </span>
            )}
            {authors?.length > 0 && (
              <dl className="cc-image-card__meta-item cc-image-card__meta-item--author cc-image-card__authors">
                <dt className="cc-image-card__authors-label">Author</dt>
                {authors?.map(author => (
                  <dd
                    key={author}
                    className="cc-image-card__author"
                    itemProp="author"
                  >
                    {author}
                  </dd>
                ))}
              </dl>
            )}
          </span>
        )}
        <TitleElement className="cc-image-card__title" itemProp="name">
          <Link className="cc-image-card__link" to={href}>
            {title}
          </Link>
        </TitleElement>
        {date && (
          <time
            className="cc-image-card__date"
            dateTime={date}
            itemProp="datePublished"
          >
            <FormattedDate dateString={date} />
          </time>
        )}
      </div>
    </article>
  );
};

export default ImageCard;
