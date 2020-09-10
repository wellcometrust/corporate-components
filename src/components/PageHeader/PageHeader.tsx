import React from 'react';
import cx from 'classnames';

import Grid from 'Grid';

type PageHeaderProps = {
  background?: 'blue' | 'transparent';
  banner?: React.ReactElement;
  bannerLocation?: 'top' | 'bottom';
  children?: React.ReactNode;
  className?: string;
  meta?: string;
  metaLabel?: string;
  share?: React.ReactNode;
  standfirst?: string;
  title: string;
};

export const PageHeader = ({
  background = 'transparent',
  banner,
  bannerLocation = 'top',
  children,
  className,
  meta,
  metaLabel,
  share,
  standfirst,
  title
}: PageHeaderProps) => {
  const classNames = cx('cc-page-header', {
    [`cc-page-header--${background}`]: background,
    [`${className}`]: className
  });

  return (
    <div className={classNames}>
      {bannerLocation === 'top' && banner}
      <div className="cc-page-header__container">
        <Grid>
          <div className="cc-page-header__main">
            <span className="cc-page-header__meta">
              <strong className="cc-page-header__meta-label">
                {metaLabel}
              </strong>
              {metaLabel && meta && ' | '}
              {meta}
            </span>
            <h1 className="cc-page-header__title">{title}</h1>
          </div>
          <div className="cc-page-header__tools">
            {/* TODO: Add breadcrumb here
            <div className="cc-page-header__breadcrumb">Breadcrumb</div> */}
            <div className="cc-page-header__share">{share}</div>
          </div>
        </Grid>
      </div>
      {bannerLocation === 'bottom' && banner}
      <Grid>
        {standfirst && (
          <div
            className="cc-page-header__standfirst"
            // TODO #7256 - new window markers
            dangerouslySetInnerHTML={{ __html: standfirst }}
          />
        )}
        {children && <div className="cc-page-header__misc">{children}</div>}
      </Grid>
    </div>
  );
};

export default PageHeader;
