import React from 'react';
import cx from 'classnames';
import ReactHtmlParser from 'react-html-parser';

import TextSnippet from './TextSnippet';

type TextProps = {
  children: string;
  className?: string;
};

export const Text = ({ children, className }: TextProps) => {
  const classNames = cx('cc-text', {
    [`${className}`]: className
  });

  return <div className={classNames}>{ReactHtmlParser(children)}</div>;
};

export default Text;
export { TextSnippet };
