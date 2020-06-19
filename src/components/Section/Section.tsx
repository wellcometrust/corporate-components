import React from 'react';
import cx from 'classnames';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  dataType?: string;
  hasAlternateStyle?: boolean;
  id?: string;
  type?: 'div' | 'section';
};

export const Section = ({
  children,
  className,
  dataType,
  hasAlternateStyle,
  id,
  type = 'section'
}: SectionProps) => {
  const Element = type;
  const classNames = cx('section', {
    [`section--alternate`]: hasAlternateStyle,
    [`${className}`]: className
  });

  return (
    <Element className={classNames} id={id} data-type={dataType}>
      {children}
    </Element>
  );
};

export default Section;
