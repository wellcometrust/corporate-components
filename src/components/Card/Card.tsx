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
  image: {
    alt?: string;
    sources: any;
  },
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

  // const src = image?.sources.gallery_thumbnail_square_mobile;
  const src = 'https://placehold.it/300x171';

  // const srcSet = `
  //     ${image?.sources.gallery_full_mobile} 300w,
  //     ${image?.sources.gallery_full_mobile_hi} 600w
  //   `;
  const srcSet = `
      https://placehold.it/300x171 300w,
      https://placehold.it/600x342 600w,
      https://placehold.it/900x513 900w
      https://placehold.it/1200x684 1200w
    `;

  return (
    <div className={classNames} id={id}>
      <div className="card__image">
        <div className="promo__image-ratio">
          <ImageElement
            alt={image?.alt}
            className="cc-card__image"
            sizes={cardImageSizesDefault}
            src={src}
            srcSet={srcSet} />
        </div>
      </div>
      <div className="card__content">
        <p className="card__type">{meta}</p>
        <h3 className="card__title">
          <a href={href} className="card__link" target="_self">
            {title}
          </a>
        </h3>
        <div className="card__meta">
          {authors &&
            <dl className="card__authors">
              <dt className="card__authors-label">Author</dt>
              {authors?.map(author => {
                <dd className="card__author">{author}</dd>
              })}
            </dl>
          }
          {date && <time className="card__date">
            <FormattedDate dateString={date} />
          </time>}
          {description && <p className="card__description">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
