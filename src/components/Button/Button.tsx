import React, { MouseEvent as ReactMouseEvent, MouseEventHandler } from 'react';
import cx from 'classnames';

import Icon from 'Icon/Icon';
import Link from 'Link';

type ButtonProps = {
  autoFocus?: boolean;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  href?: string | null;
  icon?: string;
  iconPlacementSwitch?: boolean;
  id?: string;
  onClick?: MouseEventHandler;
  role?: string;
  tabIndex?: number;
  type?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'unstyled';
};

export const Button = ({
  autoFocus = false,
  children,
  className,
  disabled,
  href,
  icon,
  iconPlacementSwitch,
  id,
  onClick,
  role,
  tabIndex,
  type = 'button',
  variant = 'primary'
}: ButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Element: any = href ? Link : 'button';
  const isUnstyled = variant !== 'unstyled';
  const classNames = cx({
    btn: isUnstyled,
    [`btn--${variant}`]: isUnstyled,
    [`${className}`]: className
  });

  return (
    <Element
      autoFocus={autoFocus}
      className={classNames}
      disabled={disabled}
      to={href}
      id={id}
      onClick={(e: ReactMouseEvent) => {
        if (onClick && !disabled) {
          onClick(e);
        }
      }}
      role={role}
      tabIndex={tabIndex}
      type={!href ? type : null}
    >
      {icon && !iconPlacementSwitch && (
        <Icon name={icon} className="btn__icon btn__icon--left" />
      )}
      <span className="btn__text">{children}</span>
      {icon && iconPlacementSwitch && (
        <Icon name={icon} className="btn__icon btn__icon--right" />
      )}
    </Element>
  );
};

export default Button;
