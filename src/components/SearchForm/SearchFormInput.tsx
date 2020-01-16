import React from 'react';
import cx from 'classnames';

type SearchFormInputProps = {
  className?: string;
  handleChange?: () => void;
  searchQuery?: string;
};

export const SearchFormInput = ({
  className,
  handleChange,
  searchQuery
}: SearchFormInputProps) => {
  const classNames = cx({
    'search-form__input': !className,
    [`${className}`]: className
  });

  return (
    <input
      className={classNames}
      name="search"
      type="search"
      placeholder="Search wellcome.ac.uk"
      onChange={handleChange}
      value={searchQuery}
    />
  );
};

export default SearchFormInput;
