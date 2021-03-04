import React from 'react';
import cx from 'classnames';

type InfoBoxProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
};

export const InfoBox = ({
  children,
  className,
  variant = 'secondary'
}: InfoBoxProps) => {
  const classNames = cx('cc-info-box', {
    'cc-info-box--primary': variant === 'primary',
    [className]: className
  });

  return <div className={classNames}>{children}</div>;
};

export default InfoBox;
