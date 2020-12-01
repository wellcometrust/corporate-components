import React from 'react';
import cx from 'classnames';

import FileDownload from 'FileDownload';
import FormattedDate from 'FormattedDate';

import { parseHtml } from 'utils/parse-html';
import RichText from 'RichText';

type TextCardProps = {
  children?: React.ReactNode;
  className?: string;
  description?: string;
  href: string;
  id?: string;
  meta?: {
    date?: string;
    lastUpdated?: string;
    hasType?: boolean;
    type?: string | null;
  };
  title: string;
  fileMeta?: {
    type: string;
    size: string;
  };
  type?: 'content' | 'file' | 'taxonomy_term';
};

export const TextCard = ({
  children,
  className,
  description,
  fileMeta,
  href,
  id,
  meta,
  title,
  type
}: TextCardProps) => {
  const classNames = cx('cc-text-card', {
    [`${className}`]: className
  });

  return (
    <article className={classNames} id={id}>
      {meta && (meta.type || meta.date) && (
        <div className="cc-text-card__meta">
          {/* `meta.type` temporarily removed as types for search results are not correctly displayed
          Type label and date logic for cards has been moved to the app side
          therefore `itemType` prop has been permanently removed
          TODO: To be revisited for both search results AND text listings
          https://github.com/wellcometrust/corporate/issues/6730 */}
          {/* {meta.type && !['taxonomy_term'].includes(itemType) && (
            <span className="result-item__meta-type">
              {meta.type}
              &nbsp;
            </span>
          )} */}
          {/* hasType is a flag to decide if we want to show a type */}
          {meta.hasType && (
            <span className="cc-text-card__meta-type">
              {meta.type}
              &nbsp;
            </span>
          )}
          {meta.date && (
            <span className="cc-text-card__meta-date">
              <FormattedDate dateString={meta.date} />
              &nbsp;
            </span>
          )}
          {meta.lastUpdated && (
            <span className="cc-text-card__meta-last-updated">
              Updated <FormattedDate dateString={meta.lastUpdated} />
            </span>
          )}
        </div>
      )}
      <h3 className="cc-text-card__title">
        {type === 'file' ? (
          parseHtml(title)
        ) : (
          <a href={href} className="cc-text-card__link">
            {parseHtml(title)}
          </a>
        )}
      </h3>
      {type === 'file' && (
        <FileDownload
          className="cc-text-card__file-meta"
          href={href}
          name={title}
          size={fileMeta.size}
          type={fileMeta.type}
        />
      )}
      {description && (
        <RichText className="cc-text-card__description">{description}</RichText>
      )}
      {children && <div className="cc-text-card__description">{children}</div>}
    </article>
  );
};

export default TextCard;
