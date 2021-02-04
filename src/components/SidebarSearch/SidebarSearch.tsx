import React from 'react';
import cx from 'classnames';

import Button from 'Button';

type SidebarSearchProps = {
  className?: string;
  id: string;
  label?: string;
  onChange: () => void;
  onClick: () => void;
  onKeyDown: () => void;
  onKeyUp: () => void;
  value: string;
};

export const SidebarSearch = ({
  className,
  id,
  label,
  onChange,
  onClick,
  onKeyDown,
  onKeyUp,
  value
}: SidebarSearchProps) => {
  const classNames = cx('cc-sidebar-search', {
    [className]: className
  });

  return (
    <div className={classNames}>
      <label htmlFor={`search-${id}`} className="cc-sidebar-search__label">
        {label || 'Search by keyword'}
      </label>
      <input
        className="cc-sidebar-search__input"
        name={`search-${id}`}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        placeholder="e.g. fellowship"
        value={value}
        id={`search-${id}`}
      />
      <Button
        className="cc-sidebar-search__btn"
        icon="search"
        iconClassName="u-mr-0 u-ml-0"
        iconPlacementSwitch
        onClick={onClick}
        textClassName="u-visually-hidden"
        variant="unstyled"
      >
        Search
      </Button>
    </div>
  );
};

export default SidebarSearch;
