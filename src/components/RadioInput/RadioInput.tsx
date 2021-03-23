import React, { forwardRef } from 'react';
import cx from 'classnames';

import Label from 'Label';

type RadioInputProps = {
  className?: string;
  describedBy?: string;
  id: string;
  isInvalid?: boolean;
  label?: string;
  name: string;
  required?: boolean;
  value: string;
};

export const RadioInput = forwardRef(
  (
    {
      className,
      describedBy,
      id,
      isInvalid,
      label,
      name,
      required,
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
        <input
          aria-describedby={describedBy}
          className="cc-radio-input__input-element"
          id={id}
          name={name}
          ref={ref}
          required={required}
          type="radio"
          value={value}
        />
        <Label text={label} htmlFor={id} className="cc-radio-input__label" />
      </div>
    ) : (
      <input
        aria-describedby={describedBy}
        className={className ? cx({ [className]: className }) : null}
        id={id}
        name={name}
        ref={ref}
        required={required}
        type="radio"
        value={value}
      />
    );
  }
);

export default RadioInput;
