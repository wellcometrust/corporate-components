import React from 'react';

type ResultItemProps = {
  className?: string;
  href: string;
  meta?: string;
  text?: string;
  title: string;
};

export const ResultItem = ({ meta, title, href, text }: ResultItemProps) => (
  <div className="result-item">
    <div className="result-item__meta">
      <span className="result-item__meta-type">{meta}</span>
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
