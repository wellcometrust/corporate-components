import React, { useEffect, useState, MouseEventHandler } from 'react';
import cx from 'classnames';

import Icon from 'Icon/Icon';

type ResultListProps = {
  className?: string;
  meta?: string;
  title: string;
  href: string;
  text?: string;
};

export const ResultList = ({
  className,
  meta,
  title,
  href,
  text
}: ResultListProps) => (
  <div className="listings__result">
    <div className="listings__result__meta">
      <span className="listings__result__meta__type">{meta}</span>
    </div>
    <h4 className="listings__result-title">
      <a href={href}>{title}</a>
    </h4>
    <p className="listings__result__text">{text}</p>
  </div>
);

export default ResultList;
