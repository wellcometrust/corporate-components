import React from 'react';
import cx from 'classnames';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  hasAlternateStyle?: boolean;
  type?: 'div' | 'section';
};

export const Section = ({
  children,
  className,
  hasAlternateStyle,
  type = 'section'
}: SectionProps) => {
  const Element = type;
  const classNames = cx('section', {
    [`section--alternate`]: hasAlternateStyle
  });

  return <Element className={classNames}>{children}</Element>;
};

export default Section;
