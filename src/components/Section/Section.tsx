import React, { forwardRef } from 'react';
import cx from 'classnames';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  hasAlternateStyle?: boolean;
  id?: string;
  type?: 'div' | 'section';
};

export const Section = forwardRef(
  (
    {
      children,
      className,
      hasAlternateStyle,
      id,
      type = 'section',
      ...otherProps
    }: SectionProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const Element = type;
    const classNames = cx('section', {
      [`section--alternate`]: hasAlternateStyle,
      [`${className}`]: className
    });

    return (
      <Element className={classNames} id={id} ref={ref} {...otherProps}>
        {children}
      </Element>
    );
  }
);

export default Section;
