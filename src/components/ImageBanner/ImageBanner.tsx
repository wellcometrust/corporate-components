import React from 'react';
import cx from 'classnames';

import Accordion, { AccordionItem } from 'Accordion/Accordion';
import ImageElement from 'Image/ImageElement';
import MediaCaption from 'Media/MediaCaption';

type ImageBannerProps = {
  alt: string;
  caption?: string;
  credit?: string;
  className?: string;
  sizes?: string;
  src: string;
  srcSet?: string;
};

const imageSizesDefault = '100vw';

export const ImageBanner = ({
  alt,
  caption,
  credit,
  className,
  sizes = imageSizesDefault,
  src,
  srcSet
}: ImageBannerProps) => {
  const classNames = cx('cc-image-banner', {
    [`${className}`]: className
  });

  return (
    <figure className={classNames} role="banner">
      <div className="cc-image-banner__container">
        <ImageElement
          alt={alt}
          className="cc-image-banner__img"
          role="presentation"
          sizes={sizes}
          src={src}
          srcSet={srcSet}
        />
      </div>

      <div className="cc-image-banner__caption-container">
        <Accordion>
          <AccordionItem title="Read the caption">
            <MediaCaption
              caption={caption}
              className="cc-image-banner__caption"
              credit={credit}
            />
          </AccordionItem>
        </Accordion>
      </div>
    </figure>
  );
};

export default ImageBanner;
