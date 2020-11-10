import React from 'react';
import cx from 'classnames';

import { ImageElement } from 'Image';
import FormattedDate from 'FormattedDate';
import Link from 'Link';

type NewsCardProps = {
  author: string;
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

export const NewsCard = ({
  author,
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
}: NewsCardProps) => {
  const TitleElement = titleAs;
  const classNames = cx('cc-news-card', {
    [className]: className
  });

  return (
    <article
      className={classNames}
      itemScope
      itemType="https://schema.org/Article"
    >
      <Link className="cc-news-card__figure" to={url}>
        <figure className="cc-news-card__image">
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
      <div className="cc-news-card__body">
        <span className="cc-news-card__meta">
          <span className="cc-news-card__meta-item cc-news-card__meta-item--flag cc-news-card__meta-item--topic">
            {topic}
          </span>
          <span
            className="cc-news-card__meta-item cc-news-card__meta-item--author"
            itemProp="author"
          >
            {author}
          </span>
        </span>
        <TitleElement className="cc-news-card__title" itemProp="name">
          <Link className="cc-news-card__link" to={url}>
            {title}
          </Link>
        </TitleElement>
        <time
          className="cc-news-card__date"
          dateTime={date}
          itemProp="datePublished"
        >
          <FormattedDate dateString={date} />
        </time>
      </div>
    </article>
  );
};

export default NewsCard;
