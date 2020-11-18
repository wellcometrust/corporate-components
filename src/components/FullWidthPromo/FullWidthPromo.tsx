import React from 'react';

import { ImageElement } from 'Image';
import Button from 'Button';
import Link from 'Link';
import RichText from 'RichText';
import TagList, { TagProps } from 'TagList/TagList';

type FullWidthPromoProps = {
  authors?: string[];
  description?: string;
  href: string;
  imageAlt?: string;
  imageCaption?: string;
  imageCredit?: string;
  imageHeight?: string;
  imageLicence?: string;
  imageSizes?: string;
  imageSrc?: string;
  imageSrcSet?: string;
  imageWidth?: string;
  linkText: string;
  metaLabel?: string;
  title: string;
  topics: TagProps[];
};

export const FullWidthPromo = ({
  authors,
  description,
  href,
  imageAlt,
  imageHeight,
  imageSizes,
  imageSrc,
  imageSrcSet,
  imageWidth,
  linkText,
  metaLabel,
  title,
  topics
}: FullWidthPromoProps) => (
  <article
    className="cc-fw-promo"
    itemScope
    itemType="https://schema.org/Article"
  >
    {(!!imageSrc || (imageSrcSet && imageSizes)) && (
      <figure className="cc-fw-promo__image">
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
    )}
    <div className="cc-fw-promo__container grid">
      <div className="cc-fw-promo__content">
        {(metaLabel || authors) && (
          <div className="cc-fw-promo__meta">
            {metaLabel && <p className="cc-fw-promo__type">{metaLabel}</p>}
            {authors && (
              <dl className="cc-fw-promo__authors">
                <dt className="cc-fw-promo__authors-label">Author</dt>
                {authors?.map(author => (
                  <dd
                    key={author}
                    className="cc-fw-promo__author"
                    itemProp="author"
                  >
                    {author}
                  </dd>
                ))}
              </dl>
            )}
          </div>
        )}
        <h3 className="cc-fw-promo__title" itemProp="name">
          <Link to={href} className="cc-fw-promo__title-link">
            {title}
          </Link>
        </h3>
        {description && (
          <RichText className="cc-fw-promo__description" itemProp="abstract">
            {description}
          </RichText>
        )}
        <Button
          className="cc-fw-promo__link cc-cta-link"
          href={href}
          icon="arrowLong"
          iconPlacementSwitch
          variant="unstyled"
        >
          {linkText}
        </Button>
        {topics && (
          <div className="cc-page-header-compact__topics">
            <TagList tags={topics} />
          </div>
        )}
      </div>
    </div>
  </article>
);

export default FullWidthPromo;
