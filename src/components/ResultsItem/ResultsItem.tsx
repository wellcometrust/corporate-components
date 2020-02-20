import React from 'react';

import FormattedDate from 'FormattedDate/FormattedDate';

type ResultItemMetaProps = {
  date?: string;
  lastUpdated?: string;
  type?: string | null;
};

type ResultItemFileMetaProps = {
  type: string;
  size: string;
};

export type ResultItemProps = {
  fileMeta?: ResultItemFileMetaProps;
  href: string;
  meta?: ResultItemMetaProps;
  text?: string;
  title: string;
  nodeType?: string;
  type?: 'content' | 'file' | 'taxonomy_term';
};

export const ResultsItem = ({
  fileMeta,
  href,
  meta,
  text,
  title,
  nodeType,
  type
}: ResultItemProps) => (
  <article className="result-item">
    {meta && (meta.type || meta.date) && (
      <div className="result-item__meta">
        <span className="result-item__meta-type">
          {meta.type}
          &nbsp;
        </span>
        {meta.date && (nodeType === 'article' || nodeType === 'press_release') && (
          <span className="result-item__meta-date">
            <FormattedDate dateString={meta.date} />
            &nbsp;
          </span>
        )}
        {meta.lastUpdated &&
          (nodeType === 'article' || nodeType === 'press_release') && (
            <span className="result-item__meta-last-updated">
              Updated <FormattedDate dateString={meta.lastUpdated} />
            </span>
          )}
      </div>
    )}
    <h3 className="result-item__title">
      {type === 'file' ? (
        `${title}`
      ) : (
        <a href={href} className="result-item__link">
          {title}
        </a>
      )}
    </h3>
    {type === 'file' && (
      <div className="result-item__file-meta">
        <a href={href} className="result-item__file-meta-download">
          Download
        </a>
        <span className="result-item__file-meta-size">
          &nbsp;
          {fileMeta.type}
          &nbsp;
          {fileMeta.size}
        </span>
      </div>
    )}
    <p className="result-item__text">{text}</p>
  </article>
);

export default ResultsItem;
