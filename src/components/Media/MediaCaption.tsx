import React from 'react';
import cx from 'classnames';

type MediaCaptionProps = {
  caption?: string;
  className?: string;
  credit?: string;
  licence?: string;
};

const MediaCaption = ({
  caption,
  className,
  credit,
  licence
}: MediaCaptionProps) => {
  const classNames = cx('cc-media__caption', {
    [`${className}`]: className
  });

  return caption || credit ? (
    <figcaption className={classNames}>
      {caption && (
        <div
          className="cc-media__caption-detail"
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      )}
      {credit && (
        <div
          className="cc-media__credit"
          dangerouslySetInnerHTML={{ __html: `Credit: ${credit}` }}
        />
      )}
      {licence && (
        <div
          className="cc-media__licence"
          dangerouslySetInnerHTML={{ __html: `Licence: ${licence}` }}
        />
      )}
    </figcaption>
  ) : null;
};

export default MediaCaption;
