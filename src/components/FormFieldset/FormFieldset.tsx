import React from 'react';
import cx from 'classnames';

type FormFieldProps = {
  children: JSX.Element[] | JSX.Element;
  className?: string;
  isDisabled?: boolean;
  legend: string;
  legendClassName?: string;
};

export const FormFieldset = ({
  children,
  className,
  isDisabled,
  legend,
  legendClassName
}: FormFieldProps) => {
  const classNames = {
    fieldset: cx('cc-form-fieldset', {
      [className]: className
    }),
    legend: cx('cc-form-legend', {
      'is-disabled': isDisabled,
      [legendClassName]: legendClassName
    })
  };

  return (
    <fieldset className={classNames.fieldset}>
      <legend className={classNames.legend}>{legend}</legend>
      {children}
    </fieldset>
  );
};

export default FormFieldset;
