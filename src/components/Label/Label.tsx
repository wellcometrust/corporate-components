import React from 'react';
import cx from 'classnames';

type LabelProps = {
  className?: string;
  htmlFor: string;
  isDisabled?: boolean;
  text: string;
};

export const FormLabel = ({
  className,
  htmlFor,
  isDisabled,
  text
}: LabelProps) => {
  const classNames = cx('cc-label', {
    'is-disabled': isDisabled,
    [className]: className
  });

  return (
    <label className={classNames} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default FormLabel;
