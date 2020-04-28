import React from 'react';
import cx from 'classnames';

type MediaProps = {
  children: React.ReactNode;
  caption?: string;
  className?: string;
  credit?: string;
};

const Media = ({ children, caption, className, credit }: MediaProps) => {
  const classNames = cx('cc-media grid', {
    [`${className}`]: className
  });

  return (
    <figure className={classNames}>
      {children}
      <figcaption className="cc-media__caption">
        <span className="cc-media__caption-detail">{caption}</span>
        <span className="u-visually-hidden"> - </span>
        <span className="cc-media__credit">{credit}</span>
      </figcaption>
    </figure>
  );
};

export default Media;
