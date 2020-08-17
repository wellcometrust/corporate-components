import React from 'react';

import Media from 'Media';
import ImageElement from './ImageElement';

type ImageProps = {
  alt: string;
  caption?: string;
  credit?: string;
  className?: string;
  licence?: string;
  sizes?: string;
  src: string;
  srcSet?: string;
};

const imageSizesDefault =
  '(min-width: 1494px) 648px, (min-width: 1024px) 42vw, (min-width: 768px) 75vw, 90vw';

export const Image = ({
  alt = '',
  caption,
  credit,
  className,
  licence,
  sizes = imageSizesDefault,
  src,
  srcSet
}: ImageProps) => (
  <Media
    caption={caption}
    className={className}
    credit={credit}
    licence={licence}
    type="image"
  >
    <ImageElement alt={alt} sizes={srcSet && sizes} src={src} srcSet={srcSet} />
  </Media>
);

export default Image;
export { ImageElement };
