import React, { forwardRef } from 'react';
import cx from 'classnames';

type TextAreaProps = {
  className?: string;
  describedBy?: string;
  id: string;
  isInvalid?: boolean;
  isRequired?: boolean;
  name: string;
};

export const TextArea = forwardRef(
  (
    { className, describedBy, id, isInvalid, isRequired, name }: TextAreaProps,
    ref: React.Ref<HTMLTextAreaElement>
  ) => {
    const classNames = cx('cc-textarea', {
      'cc-textarea--is-invalid': isInvalid,
      [className]: className
    });

    return (
      <textarea
        aria-describedby={describedBy}
        aria-invalid={isInvalid}
        className={classNames}
        id={id}
        name={name}
        ref={ref}
        required={isRequired}
      />
    );
  }
);

export default TextArea;
