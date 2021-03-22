import React from 'react';
import cx from 'classnames';

type FormFieldProps = {
  children: JSX.Element[] | JSX.Element;
  className?: string;
  legend: string;
};

export const FormFieldset = ({
  children,
  className,
  legend
}: FormFieldProps) => {
  const classNames = cx('cc-form-fieldset', {
    [className]: className
  });

  return (
    <fieldset className={classNames}>
      <legend className="cc-form-legend">{legend}</legend>
      {children}
    </fieldset>
  );
};

export default FormFieldset;
