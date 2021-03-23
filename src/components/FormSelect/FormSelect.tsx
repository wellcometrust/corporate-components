import React, { forwardRef } from 'react';
import cx from 'classnames';

type FormSelectProps = {
  className?: string;
  defaultText?: string;
  id: string;
  name: string;
  options: string[];
  required?: boolean;
};

export const FormSelect = forwardRef(
  (
    {
      className,
      defaultText = 'Please select',
      id,
      name,
      options,
      required
    }: FormSelectProps,
    ref: React.Ref<HTMLSelectElement>
  ) => {
    const classNames = cx('cc-select', {
      [className]: className
    });

    return (
      <select
        className={classNames}
        defaultValue=""
        id={id}
        name={name}
        ref={ref}
        required={required}
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

export default FormSelect;
