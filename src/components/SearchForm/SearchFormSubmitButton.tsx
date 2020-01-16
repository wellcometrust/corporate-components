import React from 'react';
import cx from 'classnames';

import Button from 'Button/Button';

type SearchFormSubmitButtonProps = {
  className?: string;
  styled?: boolean;
};

export const SearchFormSubmitButton = ({
  className,
  styled
}: SearchFormSubmitButtonProps) => {
  const classNames = cx({
    'search-form__btn-submit': !className,
    [`${className}`]: className
  });

  return (
    <Button className={classNames} icon="search" styled={styled}>
      <span className="u-visually-hidden">Submit</span>
    </Button>
  );
};

export default SearchFormSubmitButton;
