import React from 'react';
import cx from 'classnames';

type LabelProps = {
  className?: string;
  htmlFor: string;
  text: string;
};

export const FormLabel = ({ className, htmlFor, text }: LabelProps) => {
  const classNames = cx('cc-label', {
    [className]: className
  });

  return (
    <label className={classNames} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default FormLabel;
