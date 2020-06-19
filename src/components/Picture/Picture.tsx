import React, { useState } from 'react';
import cx from 'classnames';

type PictureProps = {
  alt?: string;
  className?: string;
  fallbackSrc?: string;
  // TODO: establish method for setting lazy loading based on latest spec
  isLazy?: boolean;
  sources: {
    sourceMedia?: string;
    sourcePreload: string;
    sourceFull: string;
    sourceType: string;
  }[];
  src?: string;
  srcSet?: string;
};

const Picture = ({
  alt = '',
  className,
  fallbackSrc,
  isLazy,
  src,
  srcSet,
  sources
}: PictureProps) => {
  const [loaded, setLoaded] = useState(false);
  const classNames = cx('slideshow__image', {
    'u-loading-lazy': isLazy && !loaded,
    'u-loading-preload': !isLazy && !loaded,
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
      {sources?.map((s, index) => (
        <source
          key={`${index}-${s.sourcePreload}`}
          type={s.sourceType}
          media={s.sourceMedia}
          srcSet={s.sourcePreload}
          data-srcset={s.sourceFull}
        />
      ))}
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