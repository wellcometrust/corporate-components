import React, { useState } from 'react';
import cx from 'classnames';

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
  const classNames = cx('cc-media grid', {
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
    <>
      <figure className={classNames}>
        <img
          alt={alt}
          className="cc-media__image"
          onError={onError}
          onLoad={onLoad}
          sizes={sizes}
          src={src}
          srcSet={srcSet}
        />
        <figcaption className="cc-media__caption">
          <span className="cc-media__caption-detail">{caption}</span>
          <span className="u-visually-hidden"> - </span>
          <span className="cc-media__credit">{credit}</span>
        </figcaption>
      </figure>
    </>
  );
};

export default Image;
