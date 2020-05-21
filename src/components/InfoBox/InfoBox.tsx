import React from 'react';
import cx from 'classnames';

type InfoBoxProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
};

export const InfoBox = ({ children, className, title }: InfoBoxProps) => {
  const classNames = cx('cc-info-box', {
    [`${className}`]: className
  });

  return (
    <div className={classNames}>
      {title && <div className="cc-info-box__title">{title}</div>}
      {children}
    </div>
  );
};

export default InfoBox;
