import React from 'react';
import cx from 'classnames';

import MediaCaption from './MediaCaption';

type MediaProps = {
  caption?: string;
  children: React.ReactElement;
  className?: string;
  credit?: string;
  licence?: string;
  type: 'image' | 'video';
};

const Media = ({
  caption,
  children,
  className,
  credit,
  licence,
  type
}: MediaProps) => {
  const classNames = cx('cc-media', {
    [className]: className
  });

  return (
    <figure className={classNames}>
      <div className={`cc-media__element cc-media__element--${type}`}>
        {children}
      </div>
      <MediaCaption
        caption={caption}
        className="cc-media--wide__caption"
        credit={credit}
        licence={licence}
      />
    </figure>
  );
};

export default Media;
export { MediaCaption };
