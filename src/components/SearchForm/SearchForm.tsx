import React from 'react';
import cx from 'classnames';

import SearchFormLabel from './SearchFormLabel';
import SearchFormInput from './SearchFormInput';
import SearchFormSubmitButton from './SearchFormSubmitButton';

type SearchFormProps = {
  action?: string;
  children?: React.ReactNode;
  className?: string;
  hasSubmitButton: boolean;
  hideLabelText?: boolean;
  handleChange?: () => void;
  handleSubmit: () => void;
  inputClassName?: string;
  labelClassName?: string;
  labelTextClassName?: string;
  method?: 'GET' | 'POST';
  searchQuery?: string;
  submitButtonClassName?: string;
};

export const SearchForm = ({
  action = '/search',
  children,
  className,
  hasSubmitButton = true,
  handleSubmit,
  handleChange,
  hideLabelText = true,
  inputClassName,
  labelClassName,
  labelTextClassName,
  method = 'GET',
  searchQuery,
  submitButtonClassName
}: SearchFormProps) => {
  const classNames = cx({
    'search-form': !className,
    [`${className}`]: className
  });

  // Gather props for Label component
  const labelProps = {
    hideText: hideLabelText,
    className: labelClassName,
    textClassName: labelTextClassName
  };

  // Gather props for Input component
  const inputProps = {
    handleChange,
    className: inputClassName,
    searchQuery
  };

  // Gather props for SubmitButton component
  const submitButtonProps = {
    className: submitButtonClassName
  };

  return (
    <form
      className={classNames}
      role="search"
      action={action}
      method={method}
      onSubmit={handleSubmit}
    >
      <SearchFormLabel {...labelProps}>
        <SearchFormInput {...inputProps} />
      </SearchFormLabel>
      {children}
      {hasSubmitButton && <SearchFormSubmitButton {...submitButtonProps} />}
    </form>
  );
};

export default SearchForm;
