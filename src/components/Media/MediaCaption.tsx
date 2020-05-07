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

  return caption || credit ? (
    <figcaption className={classNames}>
      {caption && <span className="cc-media__caption-detail">{caption}</span>}
      {caption && credit && <span className="u-visually-hidden"> - </span>}
      {credit && <span className="cc-media__credit">Credit: {credit}</span>}
    </figcaption>
  ) : null;
};

export default MediaCaption;
