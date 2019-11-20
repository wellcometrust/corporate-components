import React from 'react';

import Icon from '../Icon/Icon';

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  href?: string | null;
  icon?: string;
  iconPlacement?: '' | 'left' | 'right';
  tabIndex?: string;
  type?: string;
};

export const Button = ({
  children,
  className,
  disabled,
  href,
  icon,
  iconPlacement,
  tabIndex,
  type
}: ButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Element: any = href ? 'a' : 'button';

  return (
    <Element
      className={className}
      disabled={disabled}
      href={href}
      tabIndex={tabIndex}
      type={!href ? type : null}
    >
      {icon && (iconPlacement === 'left' || iconPlacement === '') && (
        <Icon name={icon} className="btn__icon btn__icon--left" />
      )}
      <span className="btn__text">{children}</span>
      {icon && iconPlacement === 'right' && (
        <Icon name={icon} className="btn__icon btn__icon--right" />
      )}
    </Element>
  );
};

export default Button;
