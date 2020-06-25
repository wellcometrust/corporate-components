import React from 'react';
import cx from 'classnames';

type InfoBoxProps = {
  children: React.ReactNode;
  className?: string;
};

export const InfoBox = ({ children, className }: InfoBoxProps) => {
  const classNames = cx('cc-info-box', {
    [`${className}`]: className
  });

  return <div className={classNames}>{children}</div>;
};

export default InfoBox;
