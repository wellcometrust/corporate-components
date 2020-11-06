import React from 'react';
import cx from 'classnames';

import { ImageElement } from 'Image';
import FormattedDate from 'FormattedDate';
import Link from 'Link';

type NewsCardProps = {
  author: string;
  className?: string;
  date: string;
  image: {
    alt: string;
    height?: string;
    sizes?: string;
    src: string;
    srcSet?: string;
    width?: string;
  };
  title: string;
  titleAs?: keyof JSX.IntrinsicElements;
  topic: string;
  url: string;
};

export const NewsCard = ({
  author,
  className,
  date,
  image,
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
            alt={image.alt}
            height={image.height}
            itemProp="image"
            sizes={image.sizes}
            src={image.src}
            srcSet={image.srcSet}
            width={image.width}
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
