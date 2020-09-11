import React from 'react';
import cx from 'classnames';

import RichText from 'RichText';

type QuoteProps = {
  className?: string;
  cite?: string;
  text: string;
};

export const Quote = ({ className, cite, text }: QuoteProps) => {
  const classNames = cx('cc-quote', {
    [`${className}`]: className
  });

  return (
    <blockquote className={classNames}>
      <div className="cc-quote__body">
        <RichText>{text}</RichText>
      </div>
      {cite && <cite className="cc-quote__cite">{cite}</cite>}
    </blockquote>
  );
};

export default Quote;
