import React, { MouseEvent as ReactMouseEvent, MouseEventHandler } from 'react';
import cx from 'classnames';

import Icon from 'Icon/Icon';

type ButtonProps = {
  buttonType?: 'primary' | 'secondary' | 'ghost' | 'link';
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  href?: string | null;
  icon?: string;
  iconPlacementSwitch?: boolean;
  onClick?: MouseEventHandler;
  tabIndex?: number;
  type?: string;
};

export const Button = ({
  buttonType = 'primary',
  children,
  className,
  disabled,
  href,
  icon,
  iconPlacementSwitch,
  onClick,
  tabIndex,
  type = 'button'
}: ButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Element: any = href ? 'a' : 'button';
  const classNames = cx(`btn`, `btn--${buttonType}`, {
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
