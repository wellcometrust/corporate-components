import React, { forwardRef } from 'react';
import cx from 'classnames';

type FileInputProps = {
  accept?: string[];
  className?: string;
  describedBy?: string;
  id: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  name: string;
  pattern?: string;
};

export const FileInput = forwardRef(
  (
    {
      accept,
      className,
      describedBy,
      id,
      isDisabled,
      isInvalid,
      isRequired,
      name,
      pattern
    }: FileInputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const classNames = cx('cc-file-input', {
      'cc-file-input--is-invalid': isInvalid,
      [className]: className
    });

    const acceptTypes = accept.join(', ');

    return (
      <input
        accept={acceptTypes}
        aria-describedby={describedBy}
        aria-invalid={isInvalid}
        className={classNames}
        disabled={isDisabled}
        id={id}
        name={name}
        pattern={pattern}
        ref={ref}
        required={isRequired}
        type="file"
      />
    );
  }
);

export default FileInput;
