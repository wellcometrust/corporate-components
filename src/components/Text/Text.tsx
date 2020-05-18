import React, { Children, cloneElement } from 'react';
import cx from 'classnames';

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export const Text = ({ children, className }: TextProps) => {
  const classNames = cx('cc-text grid', {
    [`${className}`]: className
  });

  return (
    <div className={classNames}>
      <div className="cc-text__content">{children}</div>
    </div>
  );
};

export default Text;
