import React from 'react';
import cx from 'classnames';

import SearchFormLabel from './SearchFormLabel';
import SearchFormInput from './SearchFormInput';
import SearchFormSubmitButton from './SearchFormSubmitButton';

type SearchFormProps = {
  action?: string;
  children?: React.ReactNode;
  className?: string;
  handleChange?: () => void;
  handleSubmit?: () => void;
  hideLabelText?: boolean;
  inputClassName?: string;
  labelClassName?: string;
  labelTextClassName?: string;
  method?: 'GET' | 'POST';
  searchQuery?: string;
  submitButtonClassName?: string;
  submitButtonHasStyle?: boolean;
};

export const SearchForm = ({
  action = '/search',
  children,
  className,
  handleChange,
  handleSubmit,
  hideLabelText = true,
  inputClassName,
  labelClassName,
  labelTextClassName,
  method = 'GET',
  searchQuery,
  submitButtonClassName,
  submitButtonHasStyle = false
}: SearchFormProps) => {
  const classNames = cx({
    'search-form': !className,
    [`${className}`]: className
  });

  // Gather props for Label component
  const labelProps = {
    className: labelClassName,
    hideText: hideLabelText,
    textClassName: labelTextClassName
  };

  // Gather props for Input component
  const inputProps = {
    className: inputClassName,
    handleChange,
    searchQuery
  };

  // Gather props for SubmitButton component
  const submitButtonProps = {
    className: submitButtonClassName,
    styled: submitButtonHasStyle
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
      <SearchFormSubmitButton {...submitButtonProps} />
    </form>
  );
};

export default SearchForm;
