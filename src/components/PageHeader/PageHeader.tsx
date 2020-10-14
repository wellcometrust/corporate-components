import React from 'react';
import cx from 'classnames';

import FormattedDate from 'FormattedDate';
import Grid, { GridCell } from 'Grid';
import RichText from 'RichText';

type PageHeaderProps = {
  background?: 'blue' | 'transparent';
  imageElement?: React.ReactElement;
  imageLocation?: 'top' | 'bottom';
  children?: React.ReactNode;
  className?: string;
  datePublished?: string;
  dateUpdated?: string;
  meta?: string;
  metaLabel?: string;
  share?: React.ReactNode;
  standfirst?: string;
  title: string;
};

export const PageHeader = ({
  background = 'transparent',
  imageElement,
  imageLocation = 'top',
  children,
  className,
  datePublished,
  dateUpdated,
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
      {imageLocation === 'top' && imageElement}
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
            {(datePublished || dateUpdated) && (
              <dl className="cc-page-header__dates">
                {datePublished && (
                  <>
                    <dt className="cc-page-header__date-label">Published</dt>
                    <dd className="cc-page-header__date">
                      <time>
                        <FormattedDate dateString={datePublished} />
                      </time>
                    </dd>
                  </>
                )}
                {dateUpdated && (
                  <>
                    <dt className="cc-page-header__date-label">Last updated</dt>
                    <dd className="cc-page-header__date">
                      <time>
                        <FormattedDate dateString={dateUpdated} />
                      </time>
                    </dd>
                  </>
                )}
              </dl>
            )}
            <div className="cc-page-header__share">{share}</div>
          </div>
        </Grid>
      </div>
      {imageLocation === 'bottom' && imageElement}
      <Grid>
        {standfirst && (
          <div className="cc-page-header__standfirst">
            <RichText>{standfirst}</RichText>
          </div>
        )}
        {children && <div className="cc-page-header__misc">{children}</div>}
      </Grid>
    </div>
  );
};

export default PageHeader;
