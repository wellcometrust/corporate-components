import React from 'react';

import FormattedDate from 'FormattedDate/FormattedDate';

type ResultItemMetaProps = {
  date?: string;
  lastUpdated?: string;
  type?: string | null;
};

export type FileMetaProps = {
  type: string;
  size: string;
};

export type ResultItemProps = {
  fileMeta?: FileMetaProps;
  href: string;
  meta?: ResultItemMetaProps;
  text?: string;
  title: string;
  itemType?: string;
  type?: 'content' | 'file' | 'taxonomy_term';
};
export const ResultsItem = ({
  fileMeta,
  href,
  meta,
  text,
  title,
  itemType,
  type
}: ResultItemProps) => (
  <article className="result-item">
    {meta && (meta.type || meta.date) && (
      <div className="result-item__meta">
        {/* remove this for now as types are not correctly displayed in search result
        need to look back at some point later. 
        https://github.com/wellcometrust/corporate/issues/6730 */}
        {/* {meta.type && !['taxonomy_term'].includes(itemType) && (
          <span className="result-item__meta-type">
            {meta.type}
            &nbsp;
          </span>
        )} */}
        {meta.date &&
          ['article', 'press_release', 'report'].includes(itemType) && (
            <span className="result-item__meta-date">
              <FormattedDate dateString={meta.date} />
              &nbsp;
            </span>
          )}
        {meta.lastUpdated &&
          ['article', 'press_release', 'report'].includes(itemType) && (
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
          Download<span className="u-visually-hidden">&nbsp;{title}</span>
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
