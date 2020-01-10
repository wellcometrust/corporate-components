import React from 'react';

type ResultItemProps = {
  className?: string;
  href: string;
  meta?: string;
  text?: string;
  title: string;
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
