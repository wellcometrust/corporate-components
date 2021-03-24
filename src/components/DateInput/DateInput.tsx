import React, { forwardRef } from 'react';
import cx from 'classnames';

type DateInputProps = {
  className?: string;
  describedBy?: string;
  id: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  name: string;
};

export const DateInput = forwardRef(
  (
    {
      className,
      describedBy,
      id,
      isDisabled,
      isInvalid,
      isRequired,
      name
    }: DateInputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const classNames = cx('cc-date-input', {
      'cc-date-input--is-invalid': isInvalid,
      [className]: className
    });

    return (
      <input
        aria-describedby={describedBy}
        className={classNames}
        disabled={isDisabled}
        id={id}
        name={name}
        ref={ref}
        required={isRequired}
        type="date"
      />
    );
  }
);

export default DateInput;
