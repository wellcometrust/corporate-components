import React, { Children, cloneElement } from 'react';
import cx from 'classnames';

type MediaProps = {
  caption?: string;
  children: React.ReactElement;
  className?: string;
  credit?: string;
  type: 'image' | 'video';
};

const Media = ({ caption, children, className, credit, type }: MediaProps) => {
  const parentClassNames = cx('cc-media grid', {
    [`${className}`]: className
  });
  const child = Children.only(children);
  const childClassNames = cx(`cc-media__${type}`, child.props.className);

  return (
    <figure className={parentClassNames}>
      {cloneElement(child, { className: childClassNames })}
      <figcaption className="cc-media__caption">
        <span className="cc-media__caption-detail">{caption}</span>
        <span className="u-visually-hidden"> - </span>
        <span className="cc-media__credit">{credit}</span>
      </figcaption>
    </figure>
  );
};

export default Media;
