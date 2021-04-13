import React, { forwardRef } from 'react';
import cx from 'classnames';

type TextInputProps = {
  autoComplete?: 'name' | 'tel' | 'email';
  className?: string;
  describedBy?: string;
  id: string;
  inputMode?: 'numeric';
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  name: string;
  pattern?: string;
  spellCheck?: 'true' | 'false';
  type: 'text' | 'email' | 'tel';
};

export const TextInput = forwardRef(
  (
    {
      autoComplete,
      className,
      describedBy,
      id,
      inputMode,
      isDisabled,
      isInvalid,
      isRequired,
      name,
      pattern,
      spellCheck,
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
        autoComplete={autoComplete}
        className={classNames}
        disabled={isDisabled}
        id={id}
        inputMode={inputMode}
        name={name}
        pattern={pattern}
        ref={ref}
        required={isRequired}
        spellCheck={spellCheck}
        type={type}
      />
    );
  }
);

export default TextInput;
