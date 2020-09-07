import React, { forwardRef } from 'react';
import cx from 'classnames';

type DateInputProps = {
  className?: string;
  name: string;
  id: string;
  isInvalid?: boolean;
  isRequired?: boolean;
};

export const DateInput = forwardRef(
  (
    { className, id, isInvalid, isRequired, name }: DateInputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const classNames = cx('cc-date-input', {
      'cc-date-input--is-invalid': isInvalid,
      [className]: className
    });

    return (
      <input
        className={classNames}
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
