import React from 'react';
import cx from 'classnames';

import Grid, { GridCell } from 'Grid';

type PageHeaderProps = {
  title: string;
  className?: string;
  standfirst?: string;
  meta?: string;
};

export const PageHeader = ({
  title,
  className,
  standfirst,
  meta
}: PageHeaderProps) => {
  const classNames = cx('title-banner', {
    [`${className}`]: className
  });

  return (
    <div className={classNames}>
      <div className="title-banner__container">
        <Grid>
          <GridCell column={1} columnCount={1}>
            {meta}
            <h1 className="title-banner__title">{title}</h1>
          </GridCell>
        </Grid>
      </div>
      <Grid>
        <GridCell column={1} columnCount={1}>
          <div className="title-banner__standfirst">{standfirst}</div>
        </GridCell>
      </Grid>
    </div>
  );
};

export default PageHeader;
