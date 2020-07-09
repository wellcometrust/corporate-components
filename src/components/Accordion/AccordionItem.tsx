import React, { MouseEventHandler, useRef } from 'react';

export type AccordionItemProps = {
  active?: boolean;
  children?: React.ReactNode;
  description?: string;
  index?: number;
  onClick?: MouseEventHandler;
  title: string;
};

export const AccordionItem = ({
  active = false,
  children,
  description,
  index,
  onClick,
  title
}: AccordionItemProps) => {
  const content = useRef(null);

  return (
    <div className="cc-accordion-item">
      <h3 className="cc-accordion-item__title">
        <button
          aria-expanded={active}
          className="cc-accordion__button"
          id={`accordion-button-${index}`}
          onClick={onClick}
          type="button"
        >
          <span className="cc-accordion__button-content">
            <span>{title}</span>
          </span>
        </button>
      </h3>

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
