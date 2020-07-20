import React, { Children, cloneElement } from 'react';
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
  const parentClassNames = cx('cc-media grid', {
    [`${className}`]: className
  });
  const child = Children.only(children);
  const childClassNames = cx(`cc-media__${type}`, child.props.className);

  return (
    <figure className={parentClassNames}>
      {cloneElement(child, { className: childClassNames })}
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
