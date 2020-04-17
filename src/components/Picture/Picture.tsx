import React, { useState } from 'react';
import cx from 'classnames';

type PictureProps = {
  alt?: string;
  className?: string;
  fallbackSrc?: string;
  isLazy: boolean;
  src: string;
  srcSet?: string;
  srcSetPreload?: string;
  srca?: string;
  srcap?: string;
  srcb?: string;
  srcbp?: string;
};

const Picture = ({
  alt = '',
  className,
  fallbackSrc,
  isLazy,
  src,
  srcSet,
  srcSetPreload,
  srca,
  srcap,
  srcb,
  srcbp
}: PictureProps) => {
  const [loaded, setLoaded] = useState(false);
  const classNames = cx('slideshow__image', {
    lazy: isLazy && !loaded,
    [`${className}`]: className
  });

  const onLoad = () => {
    setLoaded(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (e: any) => {
    console.error('error', e);
  };

  return (
    <picture>
      <source
        type="image/jpeg"
        media="(min-aspect-ratio: 16/9)"
        srcSet={srcbp}
        data-srcset={srcb}
      />
      <source
        type="image/jpeg"
        media="(min-width: 768px)"
        srcSet={srcap}
        data-srcset={srca}
      />
      <source type="image/jpeg" srcSet={srcSetPreload} data-srcset={srcSet} />
      <img
        onError={onError}
        onLoad={onLoad}
        src={isLazy ? fallbackSrc : src}
        alt={alt}
        className={classNames}
        srcSet={isLazy ? '' : srcSet}
      />
    </picture>
  );
};

export default Picture;
