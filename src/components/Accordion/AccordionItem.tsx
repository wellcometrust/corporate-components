import React, { MouseEventHandler, useRef } from 'react';
import cx from 'classnames';

import Button from 'Button';

export type AccordionItemProps = {
  active?: boolean;
  children?: React.ReactNode;
  index?: number;
  onClick?: MouseEventHandler;
  title: string;
  titleActive?: string;
  titleAs?: string;
};

export const AccordionItem = ({
  active = false,
  children,
  index,
  onClick,
  title,
  titleActive,
  titleAs
}: AccordionItemProps) => {
  const content = useRef(null);
  const classNames = cx('cc-accordion-item', {
    'cc-accordion-item--active': active
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TitleElement: any = titleAs || 'h3';

  return (
    <div className={classNames}>
      <TitleElement className="cc-accordion-item__title">
        <Button
          aria-expanded={active}
          className="cc-accordion__button"
          icon="chevronRight"
          iconPlacementSwitch
          id={`accordion-button-${index}`}
          onClick={onClick}
          variant="unstyled"
        >
          {active && titleActive ? titleActive : title}
        </Button>
      </TitleElement>

      <div
        aria-labelledby={`accordion-button-${index}`}
        className="cc-accordion__content"
        hidden={!active}
        ref={content}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
