import React from 'react';
import cx from 'classnames';

type FormFieldErrorProps = {
  errors: string | string[];
  className?: string;
};

export const FormFieldError = ({ className, errors }: FormFieldErrorProps) => {
  const classNames = cx('cc-form-field-error', {
    [className]: className
  });

  return (
    <span className={classNames}>
      {typeof errors === 'string' || errors.length === 1 ? (
        <p className="cc-form-field-error__text">{errors.toString()}</p>
      ) : (
        <ul className="cc-form-field-error__list">
          {errors.map((errorText: string) => (
            <li className="cc-form-field-error__list-item">{errorText}</li>
          ))}
        </ul>
      )}
    </span>
  );
};

export default FormFieldError;
