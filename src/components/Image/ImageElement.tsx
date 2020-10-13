import React, { useState } from 'react';

type ImageElementProps = {
  alt?: string;
  className?: string;
  itemProp?: string;
  role?: string;
  // TODO #6478: establish method for setting lazy loading based on latest spec
  sizes?: string;
  src: string;
  srcSet?: string;
};

export const ImageElement = ({
  alt = '',
  className,
  itemProp,
  role,
  sizes,
  src,
  srcSet
}: ImageElementProps) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (e: any) => {
    // eslint-disable-next-line no-console
    console.error('Image error', e);
  };

  return (
    <img
      alt={alt}
      className={className}
      itemProp={itemProp}
      onError={onError}
      onLoad={onLoad}
      sizes={sizes}
      src={src}
      srcSet={srcSet}
    />
  );
};

export default ImageElement;
