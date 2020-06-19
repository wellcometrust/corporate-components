import React, { useState } from 'react';

type ImageElementProps = {
  alt?: string;
  className?: string;
  role?: string;
  // TODO #6478: establish method for setting lazy loading based on latest spec
  sizes?: string;
  src: string;
  srcSet?: string;
};

export const ImageElement = ({
  alt = '',
  className,
  role,
  sizes,
  src,
  srcSet,
  ...props
}: ImageElementProps) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (e: any) => {
    console.error('Image error', e);
  };

  return (
    <img
      alt={alt}
      className={className}
      onError={onError}
      onLoad={onLoad}
      sizes={sizes}
      src={src}
      srcSet={srcSet}
    />
  );
};

export default ImageElement;
