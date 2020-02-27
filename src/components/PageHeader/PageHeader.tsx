import React from 'react';
import cx from 'classnames';

import Grid, { GridCell } from 'Grid';

type PageHeaderProps = {
  background?: 'blue' | 'transparent';
  title: string;
  className?: string;
  standfirst?: string;
  meta?: string;
};

export const PageHeader = ({
  background = 'transparent',
  className,
  meta,
  standfirst,
  title
}: PageHeaderProps) => {
  const classNames = cx('page-header', {
    [`page-header--${background}`]: background,
    [`${className}`]: className
  });

  return (
    <div className={classNames}>
      <div className="page-header__container">
        <Grid>
          <GridCell column={1} columnCount={1}>
            {meta}
            <h1 className="page-header__title">{title}</h1>
          </GridCell>
        </Grid>
      </div>
      {standfirst && (
        <Grid>
          <GridCell column={1} columnCount={1}>
            <div className="page-header__standfirst">{standfirst}</div>
          </GridCell>
        </Grid>
      )}
    </div>
  );
};

export default PageHeader;
