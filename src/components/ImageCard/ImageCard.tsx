import React from 'react';
import cx from 'classnames';

import { ImageElement } from 'Image';
import FormattedDate from 'FormattedDate';
import Link from 'Link';

type ImageCardProps = {
  authors: string[];
  className?: string;
  date: string;
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

export const ImageCard = ({
  authors,
  className,
  date,
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
      <Link className="cc-image-card__figure" to={url}>
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
        <span className="cc-image-card__meta">
          <span className="cc-image-card__meta-item cc-image-card__meta-item--type cc-image-card__meta-item--flag">
            {topic}
          </span>
          {authors && (
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
        <TitleElement className="cc-image-card__title" itemProp="name">
          <Link className="cc-image-card__link" to={url}>
            {title}
          </Link>
        </TitleElement>
        <time
          className="cc-image-card__date"
          dateTime={date}
          itemProp="datePublished"
        >
          <FormattedDate dateString={date} />
        </time>
      </div>
    </article>
  );
};

export default ImageCard;
