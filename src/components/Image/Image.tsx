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

export const Image = ({
  alt = '',
  caption,
  credit,
  className,
  sizes,
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
    <Media caption={caption} className={className} credit={credit}>
      <img
        alt={alt}
        className="cc-media__image"
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
