import React from 'react';
import cx from 'classnames';

type SearchFormLabelProps = {
  className: string;
  hideText: boolean;
  htmlFor: string;
  textClassName: string;
};

export const SearchFormLabel = ({
  className,
  hideText,
  htmlFor,
  textClassName
}: SearchFormLabelProps) => {
  const classNames = cx({
    'search-form__label': !className,
    'u-visually-hidden': hideText,
    [`${className}`]: className
  });

  return (
    <label className={classNames} htmlFor={htmlFor}>
      Search
    </label>
  );
};

export default SearchFormLabel;
