import React from 'react';
import cx from 'classnames';

import FileDownload from 'FileDownload';
import FormattedDate from 'FormattedDate';

import { parseHtml } from 'utils/parse-html';
import RichText from 'RichText';

type TextCardProps = {
  children?: React.ReactNode;
  className?: string;
  date?: string;
  dateUpdated?: string;
  description?: string;
  documentSubType?: string;
  documentType?: string;
  fileSize?: string;
  fileType?: string;
  hasMetaLabel?: boolean;
  href: string;
  id?: string;
  metaLabel?: string;
  title: string;
  titleAs?: 'h2' | 'h3';
  type?: 'content' | 'file' | 'taxonomy_term';
};

export const TextCard = ({
  children,
  className,
  date,
  dateUpdated,
  description,
  documentSubType,
  documentType,
  fileSize,
  fileType,
  hasMetaLabel,
  href,
  id,
  metaLabel,
  title,
  titleAs = 'h3',
  type
}: TextCardProps) => {
  const TitleElement = titleAs;
  const classNames = cx('cc-text-card', {
    [`${className}`]: className
  });

  return (
    <article className={classNames} id={id}>
      {(metaLabel || date) && (
        <div className="cc-text-card__meta">
          {/* `metaLabel` temporarily removed as types for search results are not correctly displayed
          Type label and date logic for cards has been moved to the app side
          therefore `itemType` prop has been permanently removed
          TODO: To be revisited for both search results AND text listings
          https://github.com/wellcometrust/corporate/issues/6730 */}
          {/* {metaLabel && !['taxonomy_term'].includes(itemType) && (
            <span className="cc-text-card__meta-label">
              {metaLabel}
              &nbsp;
            </span>
          )} */}
          {/* hasMetaLabel is a flag to decide if we want to show a type */}
          {hasMetaLabel && (
            <span className="cc-text-card__meta-label">
              {metaLabel}
              &nbsp;
            </span>
          )}
          {date && (
            <span className="cc-text-card__date">
              <FormattedDate dateString={date} />
              &nbsp;
            </span>
          )}
          {dateUpdated && (
            <span className="cc-text-card__date-updated">
              Updated <FormattedDate dateString={dateUpdated} />
            </span>
          )}
        </div>
      )}
      <TitleElement className="cc-text-card__title">
        {type === 'file' ? (
          parseHtml(title)
        ) : (
          <a href={href} className="cc-text-card__link">
            {parseHtml(title)}
          </a>
        )}
      </TitleElement>
      {type === 'file' && (
        <FileDownload
          className="cc-text-card__file-meta"
          documentSubType={documentSubType}
          documentType={documentType}
          href={href}
          name={title}
          size={fileSize}
          type={fileType}
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
