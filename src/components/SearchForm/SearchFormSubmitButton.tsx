import React from 'react';
import cx from 'classnames';

import Button from 'Button/Button';

type SearchFormSubmitButtonProps = {
  className?: string;
};

export const SearchFormSubmitButton = ({
  className
}: SearchFormSubmitButtonProps) => {
  const classNames = cx({
    'search-form__btn-submit': !className,
    [`${className}`]: className
  });

  return (
    <Button styled={false} className={classNames} icon="search">
      <span className="u-visually-hidden">Submit</span>
    </Button>
  );
};

export default SearchFormSubmitButton;
