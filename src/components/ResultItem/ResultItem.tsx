import React from 'react';

type meta = {
  type?: string;
  date?: Date;
  lastUpdated?: Date;
};

type ResultItemProps = {
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
      <span className="result-item__meta-type--date">
        {new Intl.DateTimeFormat('en-GB', {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        }).format(date)}
      </span>
      <span className="result-item__meta-type--last-updated">
        Update
        {new Intl.DateTimeFormat('en-GB', {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        }).format(lastUpdated)}
      </span>
    </div>
    <h4 className="result-item__title">
      <a href={href} className="result-item__link">
        {title}
      </a>
    </h4>
    <p className="result-item__text">{text}</p>
  </div>
);

export default ResultItem;
