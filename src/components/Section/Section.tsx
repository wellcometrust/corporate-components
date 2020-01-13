import React from 'react';
import cx from 'classnames';

type SectionProps = {
  children: React.ReactNode;
  bgColor?: boolean;
  className?: string;
  type?: 'div' | 'section';
};

export const Section = ({
  bgColor,
  children,
  className,
  type = 'section'
}: SectionProps) => {
  const Element = type;
  const classNames = cx('section', {
    [`${className}`]: className,
    [`section--has-bg-color`]: bgColor
  });

  return <Element className={classNames}>{children}</Element>;
};

export default Section;
