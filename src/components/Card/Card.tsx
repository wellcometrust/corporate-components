import React from 'react';
import cx from 'classnames';

import FormattedDate from 'FormattedDate';
import ImageElement from 'Image/ImageElement';
import { CardBaseProps } from 'ResultsItem/ResultsItem';

export type CardImageProps = {
  alt?: string;
  src?: string;
  // sources?: {
  //   thumbnail_lo?: string;
  //   thumbnail?: string;
  //   thumbnail_hi?: string;
  // };
};

export type CardProps = CardBaseProps & {
  image?: CardImageProps;
  variant: 'horizontal_card' | 'link_list' | 'text_list' | 'vertical_card';
};

const cardImageSizesDefault =
  '(min-width: 1494px) 420px, (min-width: 1024px) 27vw, (min-width: 768px) 37vw, 90vw';

export const Card = ({
  authors,
  className,
  description,
  href,
  id,
  image,
  meta,
  title,
  variant
}: CardProps) => {
  const classNames = cx('cc-card', {
    [`${className}`]: className
  });

  const isHorizontal = variant === 'horizontal_card';
  const isVertical = variant === 'vertical_card';

  const src = image?.src;

  // TODO: handle responsive image sources
  // const srcSet = `
  //     ${image?.sources?.thumbnail_lo} 300w,
  //     ${image?.sources?.thumbnail} 600w,
  //     ${image?.sources?.thumbnail_hi} 900w
  //   `;

  return (
    <article className={classNames} id={id}>
      <div className="cc-card__image-wrap">
        <div className="cc-card__image-ratio">
          <ImageElement
            alt={image?.alt}
            className="cc-card__image"
            // sizes={srcSet && cardImageSizesDefault}
            src={src}
            // srcSet={srcSet}
          />
        </div>
      </div>
      <div className="cc-card__content">
        {/* TODO #7139: conditionally add following props for non-standard page types
          // meta={...}
        */}
        {isHorizontal && meta?.type && (
          <p className="cc-card__type">{meta?.type}</p>
        )}
        <h3 className="cc-card__title">
          <a href={href} className="cc-card__link" target="_self">
            {title}
          </a>
        </h3>
        {/* TODO #7139: conditionally add following props for non-standard page types
          // authors={...}
          // meta={...}
        */}
        {isHorizontal && (authors || meta?.date) && (
          <div className="cc-card__meta">
            {isHorizontal && authors ? (
              <dl className="cc-card__authors">
                <dt className="cc-card__authors-label">Author</dt>
                {authors?.map(author => (
                  <dd key={author} className="cc-card__author">
                    {author}
                  </dd>
                ))}
              </dl>
            ) : (
              <span />
            )}
            {isHorizontal && meta?.date && (
              <time className="cc-card__date">
                <FormattedDate dateString={meta?.date} />
              </time>
            )}
          </div>
        )}
        {isVertical && description && (
          <div
            className="cc-card__description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </article>
  );
};

export default Card;
