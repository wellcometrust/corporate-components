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

      <div className="icon-menu">
        <span className="icon-menu__detail" />
      </div>
    </button>
  );
};

export default Hamburger;
