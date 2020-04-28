import React, { useState } from 'react';

import Media from 'Media';

type ImageProps = {
  alt: string;
  caption?: string;
  credit?: string;
  className?: string;
  // TODO #6478: establish method for setting lazy loading based on latest spec
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
  sizes = imageSizesDefault,
  src,
  srcSet
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (e: any) => {
    console.error('Image error', e);
  };

  return (
    <Media caption={caption} className={className} credit={credit} type="image">
      <img
        alt={alt}
        onError={onError}
        onLoad={onLoad}
        sizes={sizes}
        src={src}
        srcSet={srcSet}
      />
    </Media>
  );
};

export default Image;
