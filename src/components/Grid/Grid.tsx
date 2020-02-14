import React from 'react';
import cx from 'classnames';

import GridCell from './GridCell';

type GridProps = {
  children: React.ReactNode;
  nested?: boolean;
};

export const Grid = ({ children, nested }: GridProps) => {
  const classNames = cx('grid', {
    'grid--nested': nested
  });

  return <div className={classNames}>{children}</div>;
};

export default Grid;
export { GridCell };
