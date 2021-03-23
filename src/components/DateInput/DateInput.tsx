import React, { forwardRef } from 'react';
import cx from 'classnames';

type DateInputProps = {
  className?: string;
  describedBy?: string;
  id: string;
  isInvalid?: boolean;
  name: string;
  required?: boolean;
};

export const DateInput = forwardRef(
  (
    { className, describedBy, id, isInvalid, name, required }: DateInputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const classNames = cx('cc-date-input', {
      'cc-date-input--is-invalid': isInvalid,
      [className]: className
    });

    return (
      <input
        aria-describedby={describedBy}
        aria-invalid={isInvalid}
        className={classNames}
        id={id}
        name={name}
        ref={ref}
        required={required}
        type="date"
      />
    );
  }
);

export default DateInput;
