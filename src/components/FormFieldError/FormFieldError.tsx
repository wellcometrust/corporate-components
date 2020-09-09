import React from 'react';
import cx from 'classnames';

import Icon from 'Icon';

type FormFieldErrorProps = {
  className?: string;
  errors: string | string[];
  id: string;
};

export const FormFieldError = ({
  className,
  errors,
  id
}: FormFieldErrorProps) => {
  const classNames = cx('cc-form-field-error', {
    [className]: className
  });

  return (
    <span className={classNames} id={id}>
      <Icon className="cc-form-field-error__icon" name="exclamationMark" />
      {typeof errors === 'string' || errors.length === 1 ? (
        <p className="cc-form-field-error__text">{errors.toString()}</p>
      ) : (
        <ul className="cc-form-field-error__list">
          {errors.map((errorText: string, index: number) => (
            <li
              key={`${id}-error-text-${index + 1}`}
              className="cc-form-field-error__list-item"
            >
              {errorText}
            </li>
          ))}
        </ul>
      )}
    </span>
  );
};

export default FormFieldError;
