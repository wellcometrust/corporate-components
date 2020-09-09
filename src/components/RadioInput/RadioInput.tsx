import React, { forwardRef } from 'react';
import cx from 'classnames';

import Label from 'Label';

type RadioInputProps = {
  className?: string;
  describedBy?: string;
  id: string;
  isInvalid?: boolean;
  isRequired?: boolean;
  label?: string;
  name: string;
  value: string;
};

export const RadioInput = forwardRef(
  (
    {
      className,
      describedBy,
      id,
      isInvalid,
      isRequired,
      label,
      name,
      value
    }: RadioInputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const classNames = cx('cc-radio-input', {
      'cc-radio-input--is-invalid': isInvalid,
      [className]: className
    });

    return label ? (
      <div className={classNames}>
        <Label text={label} htmlFor={id} className="cc-radio-input__label" />
        <input
          className="cc-radio-input__toggle"
          id={id}
          name={name}
          ref={ref}
          required={isRequired}
          type="radio"
          value={value}
        />
      </div>
    ) : (
      <input
        aria-describedby={describedBy}
        className={className ? cx({ [className]: className }) : null}
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
