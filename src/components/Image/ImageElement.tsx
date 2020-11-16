import React, { useState } from 'react';

type ImageElementProps = {
  alt?: string;
  height?: string;
  itemProp?: string;
  role?: string;
  // TODO #6478: establish method for setting lazy loading based on latest spec
  sizes?: string;
  src: string;
  srcSet?: string;
  width?: string;
};

export const ImageElement = ({
  alt = '',
  height,
  itemProp,
  role,
  sizes,
  src,
  srcSet,
  width
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
      height={height}
      itemProp={itemProp}
      onError={onError}
      onLoad={onLoad}
      role={role}
      sizes={sizes}
      src={src}
      srcSet={srcSet}
      width={width}
    />
  );
};

export default ImageElement;
