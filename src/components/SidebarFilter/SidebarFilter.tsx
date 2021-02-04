import React from 'react';
import cx from 'classnames';

import Button from 'Button';
import Accordion, { AccordionItem } from 'Accordion/Accordion';
import Icon from 'Icon';

type SidebarFilterProps = {
  activeTags: {
    label: string;
    value: string;
  }[];
  allowForceReset?: boolean;
  children?: JSX.Element | JSX.Element[];
  className?: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onTagRemove: (value: string) => void;
  searchComponent?: React.ReactNode;
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
  className,
  onChange,
  onClear,
  onTagRemove,
  searchComponent,
  tags,
  children
}: SidebarFilterProps) => {
  const classNames = cx('cc-sidebar-filter', {
    [className]: className
  });

  return (
    <div className={classNames}>
      <header className="cc-sidebar-filter__header">
        <h2 className="cc-sidebar-filter__header-title">Filter results:</h2>
        <span className="cc-sidebar-filter__header-meta">
          {activeTags.length || allowForceReset ? (
            <Button type="button" onClick={onClear} variant="link">
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
              icon="close"
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
      {/* {searchComponent} */}
      {children}
      <div>ewelina</div>
      {/* <div className="cc-sidebar-filter__body"> */}
      {/*  {tags.map(({ name, items }) => ( */}
      {/*    <Accordion key={name} hasBorders> */}
      {/*      <AccordionItem title={name}> */}
      {/*        <ul className="cc-sidebar-filter__list"> */}
      {/*          {items.map(item => ( */}
      {/*            <li className="cc-sidebar-filter__list-item" key={item.value}> */}
      {/*              /!* #7382 todo: add Checkbox component *!/ */}
      {/*              <span className="cc-sidebar-filter__checkbox"> */}
      {/*                <input */}
      {/*                  checked={item.isActive} */}
      {/*                  className="cc-sidebar-filter__checkbox-input" */}
      {/*                  disabled={item.isDisabled} */}
      {/*                  id={item.label} */}
      {/*                  type="checkbox" */}
      {/*                  onChange={() => onChange(item.value)} */}
      {/*                /> */}
      {/*                <label */}
      {/*                  className="cc-sidebar-filter__checkbox-label" */}
      {/*                  htmlFor={item.label} */}
      {/*                > */}
      {/*                  {item.label} */}
      {/*                </label> */}
      {/*                <Icon */}
      {/*                  className="cc-sidebar-filter__checkbox-icon" */}
      {/*                  name="checkmark" */}
      {/*                /> */}
      {/*              </span> */}
      {/*            </li> */}
      {/*          ))} */}
      {/*        </ul> */}
      {/*      </AccordionItem> */}
      {/*    </Accordion> */}
      {/*  ))} */}
      {/* </div> */}
    </div>
  );
};

export default SidebarFilter;
