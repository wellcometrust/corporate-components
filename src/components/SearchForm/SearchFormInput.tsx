import React from 'react';
import cx from 'classnames';

type SearchFormInputProps = {
  className?: string;
  handleChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  id: string;
  value?: string;
};

export const SearchFormInput = ({
  className,
  handleChange,
  id,
  value
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
      placeholder="Search wellcome.org"
      onChange={handleChange}
      value={value}
      id={id}
    />
  );
};

export default SearchFormInput;
