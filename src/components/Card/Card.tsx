import React from 'react';
import cx from 'classnames';

type CardProps = {
  className?: string;
  id?: string;
  title: string;
};

export const Card = ({ className, id, title }: CardProps) => {
  const classNames = cx('cc-card', {
    [`${className}`]: className
  });

  return (
    <div>
      <h2 className={classNames}>{title}</h2>
    </div>
  );
};

export default Card;
