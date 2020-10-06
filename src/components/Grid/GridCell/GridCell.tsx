import React from 'react';
import cx from 'classnames';

type GridCellProps = {
  children: React.ReactNode;
  className?: string;
  column: 1 | 2 | 3;
  columnCount: 1 | 2 | 3;
};

export const GridCell = ({
  children,
  className,
  column,
  columnCount = 3
}: GridCellProps) => {
  const classNames = cx('grid__cell', {
    [`grid__cell--${column}-of-${columnCount}`]: column && columnCount,
    [`${className}`]: className
  });

  return <div className={classNames}>{children}</div>;
};

export default GridCell;
