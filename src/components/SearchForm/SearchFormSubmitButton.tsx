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
    <Button
      className={classNames}
      icon="search"
      iconPlacementSwitch
      type="submit"
    >
      Search
    </Button>
  );
};

export default SearchFormSubmitButton;
