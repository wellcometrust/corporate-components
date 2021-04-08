import React, { forwardRef, Ref } from 'react';
import cx from 'classnames';

import Icon from 'Icon/Icon';

type FileInputProps = {
  accept?: string[];
  className?: string;
  children: React.ReactNode;
  describedBy?: string;
  icon?: string;
  iconClassName?: string;
  iconPlacementSwitch?: boolean;
  id: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  multiple?: boolean;
  name: string;
  tabIndex?: number;
  textClassName?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'unstyled';
};

export const FileInput = forwardRef(
  (
    {
      accept,
      children,
      className,
      describedBy,
      icon,
      iconClassName,
      iconPlacementSwitch,
      id,
      isDisabled,
      isRequired,
      multiple,
      name,
      tabIndex,
      textClassName,
      variant = 'secondary'
    }: FileInputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const isUnstyled = variant === 'unstyled';
    const classNames = cx({
      btn: !isUnstyled,
      [`btn--${variant}`]: !isUnstyled,
      'btn--file-input': !isUnstyled,
      'cc-label': isUnstyled,
      [`${className}`]: className
    });
    const inputClassNames = cx({
      'cc-file-input': !isUnstyled
    });
    const iconClassNames = cx('btn__icon', {
      'btn__icon--left': !iconPlacementSwitch,
      'btn__icon--right': iconPlacementSwitch,
      [iconClassName]: iconClassName
    });
    const textClassNames = cx('btn__text', {
      [textClassName]: textClassName
    });

    const acceptTypes = accept ? accept.join(', ') : '';

    return (
      <>
        {isUnstyled ? (
          <label className={classNames} htmlFor={name} tabIndex={tabIndex}>
            <span className={textClassNames}>{children}</span>
          </label>
        ) : (
          <label className={classNames} htmlFor={name} tabIndex={tabIndex}>
            {icon && !iconPlacementSwitch && (
              <Icon name={icon} className={iconClassNames} />
            )}
            <span className={textClassNames}>{children}</span>
            {icon && iconPlacementSwitch && (
              <Icon name={icon} className={iconClassNames} />
            )}
          </label>
        )}
        <input
          accept={acceptTypes}
          aria-describedby={describedBy}
          className={inputClassNames}
          disabled={isDisabled}
          id={id}
          multiple={multiple}
          name={name}
          ref={ref}
          required={isRequired}
          type="file"
        />
      </>
    );
  }
);

export default FileInput;
