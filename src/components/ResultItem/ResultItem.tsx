import React from 'react';

type meta = {
  type?: string;
  date?: string;
  lastUpdated?: string;
};

export type ResultItemProps = {
  className?: string;
  href: string;
  meta?: meta;
  text?: string;
  title: string;
};

export const ResultItem = ({
  meta: { type, date, lastUpdated },
  title,
  href,
  text
}: ResultItemProps) => (
  <div className="result-item">
    <div className="result-item__meta">
      <span className="result-item__meta-type">{type}</span>
      <span className="result-item__meta-date">{date}</span>
      <span className="result-item__meta-lastupdated">
        Updated {lastUpdated}
      </span>
    </div>
    <h3 className="result-item__title">
      <a href={href} className="result-item__link">
        {title}
      </a>
    </h3>
    <p className="result-item__text">{text}</p>
  </div>
);

export default ResultItem;
