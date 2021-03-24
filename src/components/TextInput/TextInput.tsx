import React, { forwardRef } from 'react';
import cx from 'classnames';

type TextInputProps = {
  className?: string;
  describedBy?: string;
  id: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  name: string;
  type: 'text' | 'email' | 'tel';
};

export const TextInput = forwardRef(
  (
    {
      className,
      describedBy,
      id,
      isDisabled,
      isInvalid,
      isRequired,
      name,
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
        disabled={isDisabled}
        id={id}
        name={name}
        ref={ref}
        required={isRequired}
        type={type}
      />
    );
  }
);

export default TextInput;
