import React from 'react';

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
  return (
    <div className="title-banner" {...className}>
      <div className="title-banner__container">
        <div className="grid">
          <div className="grid__cell grid__cell--1-of-1">
            {meta}
            <h1 className="title-banner__title">{title}</h1>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="grid__cell grid__cell--1-of-1 title-banner__standfirst">
          {standfirst}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
