import React from 'react';

import { ImageElement } from 'Image';
import Button from 'Button';
import Icon from 'Icon';
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
  imageLicence?: string;
  imageSizes?: string;
  imageSrc?: string;
  imageSrcSet?: string;
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
  imageSizes,
  imageSrc,
  imageSrcSet,
  linkText,
  metaLabel,
  title,
  topics
}: FullWidthPromoProps) => (
  <div className="cc-fw-promo">
    {(!!imageSrc || (imageSrcSet && imageSizes)) && (
      <figure className="cc-fw-promo__image">
        <ImageElement src={imageSrc} srcSet={imageSrcSet} alt={imageAlt} />
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
                  <dd key={author} className="cc-fw-promo__author">
                    {author}
                  </dd>
                ))}
              </dl>
            )}
          </div>
        )}
        <h3 className="cc-fw-promo__title">
          <Link to={href} className="cc-fw-promo__title-link">
            {title}
          </Link>
        </h3>
        {description && (
          <RichText className="cc-fw-promo__description">
            {description}
          </RichText>
        )}
        <Button
          className="cc-fw-promo__link cc-cta-link"
          href={href}
          icon="chevronRight"
          iconPlacementSwitch
          variant="unstyled"
        >
          {/* <span className="cc-fw-promo__link-text">{linkText}</span> */}
          {linkText}
          {/* <Icon name="chevronRight" /> */}
        </Button>
        {topics && (
          <div className="cc-page-header-compact__topics">
            <TagList tags={topics} />
          </div>
        )}
      </div>
    </div>
  </div>
);

export default FullWidthPromo;
