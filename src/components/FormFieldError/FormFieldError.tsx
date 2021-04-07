import React from 'react';
import cx from 'classnames';

import Icon from 'Icon';
import VisuallyHidden from 'VisuallyHidden';

type FormFieldErrorProps = {
  className?: string;
  errors: string | {};
  id: string;
};

/**
 * Renders a list or paragraph of error messages
 *
 * @param {string} className
 * @param {string|object} errors
 * @param {string} id
 */
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
      {typeof errors === 'string' && (
        <p className="cc-form-field-error__text">
          <VisuallyHidden text="Error:" />
          {errors}
        </p>
      )}
      {typeof errors === 'object' && Object.entries(errors).length === 1 && (
        <p className="cc-form-field-error__text">
          <VisuallyHidden text="Error:" />
          {Object.values(errors)[0]}
        </p>
      )}
      {typeof errors === 'object' && Object.entries(errors).length > 1 && (
        <ul className="cc-form-field-error__list">
          {Object.entries(errors).map(([type, message]) => (
            <li
              key={`${id}-error-text-${type}`}
              className="cc-form-field-error__list-item"
            >
              <VisuallyHidden text="Error:" />
              {message}
            </li>
          ))}
        </ul>
      )}
    </span>
  );
};

export default FormFieldError;
