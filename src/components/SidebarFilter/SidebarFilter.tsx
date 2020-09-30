import React from 'react';

import Button from 'Button';
import Accordion, { AccordionItem } from 'Accordion/Accordion';

type SidebarFilterProps = {
  onChange: (value: string) => void;
  onClear: () => void;
  onTagRemove: (value: string) => void;
  activeTags: {
    label: string;
    value: string;
  }[];
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
  onChange,
  onClear,
  onTagRemove,
  activeTags = [],
  tags
}: SidebarFilterProps) => {
  return (
    <div className="cc-sidebar-filter">
      <header className="cc-sidebar-filter__header">
        <h2 className="cc-sidebar-filter__header-title">Filter results:</h2>
        <span className="cc-sidebar-filter__header-meta">
          {activeTags.length ? (
            <Button type="button" onClick={onClear} variant="link">
              Clear all
            </Button>
          ) : (
            `Showing all`
          )}
        </span>
      </header>
      {activeTags.map(({ label, value }) => (
        <Button
          className="cc-sidebar-filter__tag"
          icon="close"
          iconPlacementSwitch
          onClick={() => onTagRemove(value)}
          type="button"
        >
          {label}
        </Button>
      ))}
      <div className="cc-sidebar-filter__body">
        {tags.map(({ name, items }) => (
          <Accordion key={name}>
            <AccordionItem title={name}>
              <ul className="cc-sidebar-filter__list">
                {items.map(item => (
                  <li className="cc-sidebar-filter__list-item" key={item.value}>
                    {/* #7382 todo: add Checkbox component */}
                    <input
                      checked={item.isActive}
                      className="cc-checkbox-input__input-element"
                      disabled={item.isDisabled}
                      id={item.label}
                      type="checkbox"
                      onChange={() => onChange(item.value)}
                    />
                    <label
                      className="cc-checkbox-input__label"
                      htmlFor={item.label}
                    >
                      {item.label}
                    </label>
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
