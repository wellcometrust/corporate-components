import React, { forwardRef } from 'react';
import cx from 'classnames';

type TextInputProps = {
  className?: string;
  describedBy?: string;
  id: string;
  isInvalid?: boolean;
  name: string;
  required?: boolean;
  type: 'text' | 'email' | 'tel';
};

export const TextInput = forwardRef(
  (
    {
      className,
      describedBy,
      id,
      isInvalid,
      name,
      required,
      type = 'text'
    }: TextInputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const classNames = cx('cc-text-input', {
      'cc-text-input--is-invalid': isInvalid,
      [`cc-text-input--${type}`]: type,
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
        type={type}
      />
    );
  }
);

export default TextInput;
