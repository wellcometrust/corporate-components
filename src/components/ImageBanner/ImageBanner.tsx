import React, { useState } from 'react';
import cx from 'classnames';

import MediaCaption from 'Media/MediaCaption';
import ImageElement from 'Image/ImageElement';

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
          src={src}
          role="presentation"
          sizes={sizes}
        />
      </div>

      <div className="cc-image-banner__caption-container">
        <MediaCaption
          caption={caption}
          className="cc-image-banner__caption"
          credit={credit}
        />
      </div>
    </figure>
  );
};

export default ImageBanner;
