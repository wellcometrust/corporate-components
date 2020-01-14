import React from 'react';
import cx from 'classnames';

type GridCellProps = {
  children: React.ReactNode;
  className?: string;
  column: 1 | '1' | 2 | '2' | 3 | '3' | 'left' | 'content';
  ofColumns?: 1 | '1' | 2 | '2' | 3 | '3';
  row?: 'top' | 'bottom';
};

export const GridCell = ({
  children,
  className,
  column,
  ofColumns,
  row
}: GridCellProps) => {
  /**
   * There are two ways the grid is used:
   *
   * The first is a simple X (columns) of X (columns), which declares that
   * it should span X columns in an X-columned grid layout:
   *
   * <div class="grid__cell--1-of-3"></div>
   *
   * The second involves grid-rows:
   *
   * - This uses the first two columns of a 3-columned
   *   grid.
   * - The 'left-col' is situated in the first column, and 'content-top'
   *   and 'content-bottom' in the second.
   * - The 'left-col' is aligned with the top of 'content-top'.
   *
   * <div class="grid__cell--left-col"></div> [sits in first-column]
   * <div class="grid__cell--content-top"></div> [sits in second-column]
   * <div class="grid__cell--content-bottom"></div> [sits in second-column,
   * beneath 'content-top']
   *
   *   ----------------------------------
   *  |          |             |         |
   *  | left-col | content-top |         |
   *  |          |/////////////|         |
   *  |          |   content-  |         |
   *  |          |   bottom    |         |
   *  |          |             |         |
   *  |          |             |         |
   *  |          |             |         |
   *  |          |             |         |
   *   ----------------------------------
   *
   * The classNames are then applied based on the GridCell's props, which
   * reflect the above.
   */
  const classNames = cx('grid__cell', {
    [`grid__cell--${column}-of-${ofColumns}`]: column && ofColumns && !row,
    [`grid__cell--${column}-col`]: column && !ofColumns && !row,
    [`grid__cell--content-${row}`]: row && column && !ofColumns,
    [`${className}`]: className
  });

  return <div className={classNames}>{children}</div>;
};

export default GridCell;
