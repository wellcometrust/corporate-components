import React from 'react';
import cx from 'classnames';

type FormFieldHintProps = {
  children: JSX.Element[] | JSX.Element;
  className?: string;
  id: string;
};

export const FormFieldHint = ({
  children,
  className,
  id
}: FormFieldHintProps) => {
  const classNames = cx('cc-form-field-hint', {
    [className]: className
  });

  return (
    <div className={classNames} id={id}>
      {children}
    </div>
  );
};

export default FormFieldHint;
