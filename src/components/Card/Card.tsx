import React from 'react';
import cx from 'classnames';

import FormattedDate from 'FormattedDate';
import ImageElement from 'Image/ImageElement';

type CardProps = {
  authors?: string[];
  className?: string;
  date?: string;
  description?: string;
  href: string;
  image?: {
    alt?: string;
    src?: string;
    // sources?: {
    //   thumbnail_lo?: string;
    //   thumbnail?: string;
    //   thumbnail_hi?: string;
    // };
  };
  meta?: string;
  id?: string;
  title: string;
};

const cardImageSizesDefault =
  '(min-width: 1494px) 420px, (min-width: 1024px) 27vw, (min-width: 768px) 37vw, 90vw';

export const Card = ({
  authors,
  className,
  date,
  description,
  href,
  image,
  meta,
  id,
  title
}: CardProps) => {
  const classNames = cx('cc-card', {
    [`${className}`]: className
  });

  const src = image?.src;

  // TODO: handle responsive image sources
  // const srcSet = `
  //     ${image?.sources?.thumbnail_lo} 300w,
  //     ${image?.sources?.thumbnail} 600w,
  //     ${image?.sources?.thumbnail_hi} 900w
  //   `;

  return (
    <div className={classNames} id={id}>
      <div className="card__image">
        <div className="promo__image-ratio">
          <ImageElement
            alt={image?.alt}
            className="cc-card__image"
            // sizes={srcSet && cardImageSizesDefault}
            src={src}
            // srcSet={srcSet}
          />
        </div>
      </div>
      <div className="card__content">
        {meta && <p className="card__type">{meta}</p>}
        <h3 className="card__title">
          <a href={href} className="card__link" target="_self">
            {title}
          </a>
        </h3>
        <div className="card__meta">
          {authors && (
            <dl className="card__authors">
              <dt className="card__authors-label">Author</dt>
              {authors?.map(author => (
                <dd key={author} className="card__author">
                  {author}
                </dd>
              ))}
            </dl>
          )}
          {date && (
            <time className="card__date">
              <FormattedDate dateString={date} />
            </time>
          )}
          {description && (
            <div
              className="card__description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;