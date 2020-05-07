import React from 'react';
import cx from 'classnames';

type MediaCaptionProps = {
  caption?: string;
  className?: string;
  credit?: string;
};

const MediaCaption = ({ caption, className, credit }: MediaCaptionProps) => {
  const classNames = cx('cc-media__caption', {
    [`${className}`]: className
  });

  return (
    <figcaption className={classNames}>
      <span className="cc-media__caption-detail">{caption}</span>
      <span className="u-visually-hidden"> - </span>
      <span className="cc-media__credit">Credit: {credit}</span>
    </figcaption>
  );
};

export default MediaCaption;
