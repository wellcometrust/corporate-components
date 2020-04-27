import React, { useState } from 'react';
import cx from 'classnames';

type ImageProps = {
  alt: string;
  className?: string;
  // TODO: establish method for setting lazy loading based on latest spec
  sizes?: string;
  src: string;
  srcSet?: string;
};

export const Image = ({
  alt = '',
  className,
  sizes,
  src,
  srcSet
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const classNames = cx('cc-image', {
    [`${className}`]: className
  });

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
      className={classNames}
      onError={onError}
      onLoad={onLoad}
      sizes={sizes}
      src={src}
      srcSet={srcSet}
    />
  );
};

export default Image;
