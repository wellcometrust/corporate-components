import React from 'react';
import cx from 'classnames';

type FormFieldProps = {
  children: JSX.Element[] | JSX.Element;
  className?: string;
};

export const FormField = ({ children, className }: FormFieldProps) => {
  const classNames = cx('cc-form-field', {
    [className]: className
  });

  return <div className={classNames}>{children}</div>;
};

export default FormField;
