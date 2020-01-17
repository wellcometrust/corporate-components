import React from 'react';
import cx from 'classnames';

type SearchFormLabelProps = {
  children: React.ReactNode;
  className: string;
  hideText: boolean;
  htmlFor: string;
  textClassName: string;
};

export const SearchFormLabel = ({
  children,
  className,
  hideText,
  htmlFor,
  textClassName
}: SearchFormLabelProps) => {
  const classNames = {
    label: cx({
      'search-form__label': !className,
      [`${className}`]: className
    }),
    text: cx({
      'u-visually-hidden': hideText,
      'search-form__label-text': !textClassName,
      [`${textClassName}`]: textClassName
    })
  };

  return (
    <label className={classNames.label} htmlFor={htmlFor}>
      <span className={classNames.text}>Search</span>
      {children}
    </label>
  );
};

export default SearchFormLabel;
