import React, { forwardRef } from 'react';
import cx from 'classnames';

type TextInputProps = {
  className?: string;
  name: string;
  id: string;
  required: boolean;
};

export const TextInput = forwardRef(
  (
    { className, id, name, required }: TextInputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const classNames = cx('cc-text-input', {
      [className]: className
    });

    return (
      <input
        className={classNames}
        id={id}
        name={name}
        ref={ref}
        required={required}
        type="text"
      />
    );
  }
);

export default TextInput;
