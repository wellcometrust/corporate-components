import React from 'react';
import cx from 'classnames';

type SectionProps = {
  children: React.ReactNode;
  hasAlternateStyle?: boolean;
  id?: string;
  type?: 'div' | 'section';
};

export const Section = ({
  children,
  hasAlternateStyle,
  id,
  type = 'section'
}: SectionProps) => {
  const Element = type;
  const classNames = cx('section', {
    [`section--alternate`]: hasAlternateStyle
  });

  return (
    <Element className={classNames} id={id}>
      {children}
    </Element>
  );
};

export default Section;
