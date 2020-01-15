import React, { MouseEventHandler } from 'react';
import classnames from 'classnames';

type HamburgerProps = {
  ariaControls?: string;
  ariaExpanded?: boolean;
  as?: string;
  className?: string;
  href?: string;
  label?: string;
  onClick: MouseEventHandler;
  role?: string;
  tabIndex?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any;
};

export const Hamburger = ({
  ariaControls,
  ariaExpanded,
  className,
  label = 'Menu',
  ...props
}: HamburgerProps) => {
  const cssClasses = classnames('btn--nav-toggle', {
    [`${className}`]: className
  });

  return (
    <button
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-label={label}
      className={cssClasses}
      type="button"
      {...props}
    >
      <span>{label}</span>

      <span className="icon-menu" aria-hidden="true">
        <span className="icon-menu__detail">
          <span className="u-visually-hidden">Menu icon</span>
        </span>
      </span>
    </button>
  );
};

export default Hamburger;
