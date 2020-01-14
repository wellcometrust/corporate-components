import React from 'react';
import cx from 'classnames';

type GridCellProps = {
  children: React.ReactNode;
  columnIndex: 1 | 2 | 3;
  columnCount: 1 | 2 | 3;
};

export const GridCell = ({
  children,
  columnIndex,
  columnCount = 3
}: GridCellProps) => {
  // Set classnames based on column
  const classNames = cx('grid__cell', {
    [`grid__cell--${columnIndex}-of-${columnCount}`]: columnIndex && columnCount
  });

  return <div className={classNames}>{children}</div>;
};

export default GridCell;
