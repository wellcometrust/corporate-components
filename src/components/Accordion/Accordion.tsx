import React, { Children, cloneElement, useState } from 'react';
import shortid from 'shortid';

import AccordionItem, { AccordionItemProps } from './AccordionItem';

type AccordionProps = {
  children?: JSX.Element | JSX.Element[];
};

export const Accordion = ({ children }: AccordionProps) => {
  const [active, setActive] = useState(-1);

  // Selects the given item and deselects if it has been clicked again by setting `active` to -1
  // Assumes only one item will be active
  // TODO: add prop to dictate if items can open individually
  const selectItem = (itemNum: number) => {
    const current = active === itemNum ? -1 : itemNum;
    setActive(current);
  };

  const childrenWithProps = Children.map(children, (child, index) =>
    cloneElement(child, {
      // sets the active item in the accordion
      active: index === active,
      index,

      // passes an onClick handler to the child to allow it to set the itself as the active item
      onClick: () => selectItem(index)
    })
  );

  return <div className="accordion">{childrenWithProps}</div>;
};

export default Accordion;
export { AccordionItem };
