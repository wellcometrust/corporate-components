import React from 'react';
import cx from 'classnames';

import Button from 'Button';
import Accordion, { AccordionItem } from 'Accordion/Accordion';
import Checkbox from 'Checkbox';

type SidebarFilterProps = {
  activeTags: {
    label: string;
    value: string;
  }[];
  allowForceReset?: boolean;
  children?: JSX.Element;
  className?: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onTagRemove: (value: string) => void;
  tags: {
    name: string;
    items: {
      isActive: boolean;
      isDisabled: boolean;
      label: string;
      value: string;
    }[];
  }[];
};

export const SidebarFilter = ({
  activeTags = [],
  allowForceReset,
  children,
  className,
  onChange,
  onClear,
  onTagRemove,
  tags
}: SidebarFilterProps) => {
  const classNames = cx('cc-sidebar-filter', {
    [className]: className
  });

  return (
    <div className={classNames}>
      <header className="cc-sidebar-filter__header">
        <h2 className="cc-sidebar-filter__header-title">Refine results</h2>
        <span className="cc-sidebar-filter__header-meta">
          {activeTags.length || allowForceReset ? (
            <Button
              className="cc-sidebar-filter__btn-clear"
              onClick={onClear}
              type="button"
              variant="link"
            >
              Clear all
            </Button>
          ) : (
            `Showing all`
          )}
        </span>
      </header>
      {!!activeTags.length && (
        <div className="cc-sidebar-filter__tags-list">
          {activeTags.map(({ label, value }) => (
            <Button
              className="cc-sidebar-filter__tags-list-item"
              icon="closeBold"
              iconPlacementSwitch
              key={value}
              onClick={() => onTagRemove(value)}
              type="button"
            >
              {label}
            </Button>
          ))}
        </div>
      )}
      {children}
      <div className="cc-sidebar-filter__body">
        {tags.map(({ name, items }) => (
          <Accordion key={name} hasBorders variant="filter">
            <AccordionItem title={name}>
              <ul className="cc-sidebar-filter__list">
                {items.map(item => (
                  <li className="cc-sidebar-filter__list-item" key={item.value}>
                    <Checkbox
                      checked={item.isActive}
                      className="cc-sidebar-filter__checkbox"
                      id={item.label}
                      isDisabled={item.isDisabled}
                      label={item.label}
                      onChange={() => onChange(item.value)}
                    />
                  </li>
                ))}
              </ul>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default SidebarFilter;
