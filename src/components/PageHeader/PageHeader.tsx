import React from 'react';
import cx from 'classnames';

import Grid, { GridCell } from 'Grid';
import Section from 'Section/Section';

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
  const classNames = cx('title-banner', {
    [`title-banner--${background}`]: background,
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
      {standfirst && (
        <Grid>
          <GridCell column={1} columnCount={1}>
            <div className="title-banner__standfirst">{standfirst}</div>
          </GridCell>
        </Grid>
      )}
    </div>
  );
};

export default PageHeader;
