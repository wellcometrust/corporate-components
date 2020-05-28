import React from 'react';
import cx from 'classnames';
import ReactHtmlParser from 'react-html-parser';

type TextProps = {
  children: string;
  className?: string;
};

export const Text = ({ children, className }: TextProps) => {
  const classNames = cx('cc-text grid', {
    [`${className}`]: className
  });

  return (
    <div className={classNames}>
      <div className="cc-text__content">{ReactHtmlParser(children)}</div>
    </div>
  );
};

export default Text;
