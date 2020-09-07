import React, { forwardRef } from 'react';
import cx from 'classnames';

type RadioInputProps = {
  className?: string;
  id: string;
  isInvalid?: boolean;
  isRequired?: boolean;
  name: string;
  value: string;
};

export const RadioInput = forwardRef(
  (
    { className, id, isInvalid, isRequired, name, value }: RadioInputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const classNames = cx('cc-radio-input', {
      'cc-radio-input--is-invalid': isInvalid,
      [className]: className
    });

    return (
      <input
        className={classNames}
        id={id}
        name={name}
        ref={ref}
        required={isRequired}
        type="radio"
        value={value}
      />
    );
  }
);

export default RadioInput;
