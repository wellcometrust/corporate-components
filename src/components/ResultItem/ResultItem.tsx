import React from 'react';

type ResultItemProps = {
  className?: string;
  meta?: string;
  title: string;
  href: string;
  text?: string;
};

export const ResultItem = ({ meta, title, href, text }: ResultItemProps) => (
  <div className="listings__result">
    <div className="listings__result-meta">
      <span className="listings__result__meta__type">{meta}</span>
    </div>
    <h4 className="listings__result-title">
      <a href={href}>{title}</a>
    </h4>
    <p className="listings__resulttext">{text}</p>
  </div>
);

export default ResultItem;
