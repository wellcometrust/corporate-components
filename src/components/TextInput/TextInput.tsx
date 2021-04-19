import React, { forwardRef } from 'react';
import cx from 'classnames';

/**
 * The spellcheck attribute is an enumerated one and not a Boolean.
 * This means that the explicit usage of one of the values true or false is mandatory.
 * When the spellcheck attribute is not included, the default value depends on the element and browser.
 *
 * We are following the gov.uk pattern to add spellcheck="false" on name and email fields.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck
 * @see https://design-system.service.gov.uk/patterns/names/
 */

type TextInputProps = {
  autoComplete?: string;
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
