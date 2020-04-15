import React, { MouseEvent as ReactMouseEvent, MouseEventHandler } from 'react';
import cx from 'classnames';

import Icon from 'Icon/Icon';

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  href?: string | null;
  icon?: string;
  iconPlacementSwitch?: boolean;
  onClick?: MouseEventHandler;
  role?: string;
  tabIndex?: number;
  type?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'unstyled';
};

export const Button = ({
  children,
  className,
  disabled,
  href,
  icon,
  iconPlacementSwitch,
  onClick,
  role,
  tabIndex,
  type = 'button',
  variant = 'primary'
}: ButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Element: any = href ? 'a' : 'button';
  const isUnstyled = variant !== 'unstyled';
  const classNames = cx({
    btn: isUnstyled,
    [`btn--${variant}`]: isUnstyled,
    [`${className}`]: className
  });

  return (
    <Element
      className={classNames}
      disabled={disabled}
      href={href}
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
