import React from 'react';
import cx from 'classnames';

type LogoProps = {
  title?: string;
  fill?: string;
  className?: string;
  data?: {
    viewBox?: string;
    fillRule?: 'nonzero' | 'evenodd' | 'inherit';
    path?: string;
  };
};

export const Logo = ({
  title,
  fill,
  className,
  data: { viewBox, fillRule, path },
  ...otherProps
}: LogoProps) => {
  const classNames = cx('btn', { [`${className}`]: className });

  return (
    <svg
      viewBox={viewBox}
      className={classNames}
      role="img"
      aria-labelledby="logo-title"
      preserveAspectRatio="xMinYMid"
      {...otherProps}
    >
      {title ? <title id="logo-title">{title}</title> : ''}
      <path d={path} fill={fill} fillRule={fillRule} />
    </svg>
  );
};

export default Logo;
