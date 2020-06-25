import React from 'react';
import cx from 'classnames';
import ReactHtmlParser from 'react-html-parser';

type TextSnippetProps = {
  children: string;
  className?: string;
  title?: string;
};

export const TextSnippet = ({
  children,
  className,
  title
}: TextSnippetProps) => {
  const classNames = cx('cc-text-snippet', {
    [`${className}`]: className
  });

  return (
    <div className={classNames}>
      {title && <h3 className="cc-text-snippet__title">{title}</h3>}
      {ReactHtmlParser(children)}
    </div>
  );
};

export default TextSnippet;
