import React, { forwardRef } from 'react';
import cx from 'classnames';

type SelectProps = {
  className?: string;
  defaultText?: string;
  id: string;
  isRequired?: boolean;
  name: string;
  options: string[];
};

export const Select = forwardRef(
  (
    {
      className,
      defaultText = 'Please select',
      id,
      isRequired,
      name,
      options
    }: SelectProps,
    ref: React.Ref<HTMLSelectElement>
  ) => {
    const classNames = cx('cc-select', {
      [className]: className
    });

    return (
      <select
        className={classNames}
        id={id}
        name={name}
        ref={ref}
        required={isRequired}
      >
        <option disabled value="">
          {defaultText}
        </option>
        {options.map(option => (
          <option key={`option-${option}`}>{option}</option>
        ))}
      </select>
    );
  }
);

export default Select;
