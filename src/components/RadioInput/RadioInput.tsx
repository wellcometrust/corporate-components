import React, { forwardRef } from 'react';
import cx from 'classnames';

import Label from 'Label';

type RadioInputProps = {
  className?: string;
  describedBy?: string;
  id: string;
  isDisabled?: boolean;
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
      isDisabled,
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
        <input
          aria-describedby={describedBy}
          className="cc-radio-input__input-element"
          disabled={isDisabled}
          id={id}
          name={name}
          ref={ref}
          required={isRequired}
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
        required={isRequired}
        type="radio"
        value={value}
      />
    );
  }
);

export default RadioInput;
