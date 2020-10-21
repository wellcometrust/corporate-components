import React from 'react';

type PageTitleProps = {
  meta?: string;
  metaLabel?: string;
  title: string;
};

export const PageTitle = ({ meta, metaLabel, title }: PageTitleProps) => (
  <>
    {metaLabel && (
      <span className="cc-page-title__meta">
        <strong className="cc-page-title__meta-label">{metaLabel}</strong>
        {metaLabel && meta && ' | '}
        {meta}
      </span>
    )}
    <h1 className="cc-page-title">{title}</h1>
  </>
);

export default PageTitle;
