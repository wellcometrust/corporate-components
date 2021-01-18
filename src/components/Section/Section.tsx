import React, { forwardRef } from 'react';
import cx from 'classnames';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  dataType?: string;
  hasAlternateStyle?: boolean;
  id?: string;
  type?: 'div' | 'section';
};

export const Section = forwardRef(
  (
    {
      children,
      className,
      dataType,
      hasAlternateStyle,
      id,
      type = 'section'
    }: SectionProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const Element = type;
    const classNames = cx('section', {
      [`section--alternate`]: hasAlternateStyle,
      [`${className}`]: className
    });

    return (
      <Element className={classNames} id={id} data-type={dataType} ref={ref}>
        {children}
      </Element>
    );
  }
);

export default Section;
