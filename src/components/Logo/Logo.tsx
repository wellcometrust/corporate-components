import React from 'react';
import cx from 'classnames';

type LogoProps = {
  className?: string;
  data: {
    viewBox?: string;
    // TODO: update fillRule type def to replace 'any'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fillRule?: any;
    path?: string;
  };
  fill?: string;
  title?: string;
};

export const Logo = ({
  className,
  data: { viewBox, fillRule, path },
  fill,
  title,
  ...otherProps
}: LogoProps) => {
  const classNames = cx('logo', { [`${className}`]: className });

  return (
    <svg
      viewBox={viewBox}
      className={classNames}
      role="img"
      aria-labelledby="logo-title"
      preserveAspectRatio="xMinYMid"
      {...otherProps}
    >
      {title && <title id="logo-title">{title}</title>}
      <path d={path} fill={fill} fillRule={fillRule} />
    </svg>
  );
};

export default Logo;
