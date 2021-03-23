import React, { forwardRef } from 'react';
import cx from 'classnames';

import Icon from 'Icon';
import Label from 'Label';

type CheckboxProps = {
  checked?: boolean;
  className?: string;
  describedBy?: string;
  disabled?: boolean;
  id: string;
  isInvalid?: boolean;
  label: string;
  name?: string;
  onChange?: () => void;
  required?: boolean;
  value?: string;
};

export const Checkbox = forwardRef(
  (
    {
      checked,
      className,
      describedBy,
      disabled,
      id,
      isInvalid,
      label,
      name,
      onChange,
      required,
      value
    }: CheckboxProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const classNames = cx('cc-checkbox', {
      'cc-checkbox--is-invalid': isInvalid,
      [className]: className
    });

    return (
      <div className={classNames}>
        <input
          aria-describedby={describedBy}
          checked={checked}
          className="cc-checkbox__input"
          disabled={disabled}
          id={id}
          onChange={onChange}
          name={name}
          ref={ref}
          required={required}
          type="checkbox"
          value={value}
        />
        <Label text={label} htmlFor={id} className="cc-checkbox__label" />
        <Icon className="cc-checkbox__icon" name="checkmark" />
      </div>
    );
  }
);

export default Checkbox;
