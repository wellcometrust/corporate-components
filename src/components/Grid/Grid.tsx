import React from 'react';
import cx from 'classnames';

import GridCell from './GridCell';

type GridProps = {
  children: React.ReactNode;
  className?: string;
  nested?: boolean;
};

export const Grid = ({ children, className, nested }: GridProps) => {
  const classNames = cx('grid', {
    [`${className}`]: className,
    'grid--nested': nested
  });

  return <div className={classNames}>{children}</div>;
};

export default Grid;
export { GridCell };
