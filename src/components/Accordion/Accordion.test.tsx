import React, { ComponentProps } from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Accordion, { AccordionItem } from './Accordion';

const setup = (
  accordionProps: Partial<ComponentProps<typeof Accordion>> = {},
  accordionItemProps: Partial<ComponentProps<typeof AccordionItem>> = {}
) => {
  const accordionItemDefaultProps: ComponentProps<typeof AccordionItem> = {
    title: 'Sample title',
    children: 'Sample content',
    ...accordionItemProps
  };

  const accordionDefaultProps: ComponentProps<typeof Accordion> = {
    children: <AccordionItem {...accordionItemDefaultProps} />,
    ...accordionProps
  };

  return render(<Accordion {...accordionDefaultProps} />);
};

describe('<Accordion />', () => {
  it('renders Accordion', () => {
    const { container } = setup({});
    expect(container).toMatchSnapshot();
  });
  it('allows to toggle an accordion item ', () => {
    const onClick = jest.fn();
    setup({}, { onClick });
    expect(screen.getByText('Sample title')).toBeInTheDocument();
    expect(screen.getByText('Sample content')).not.toBeVisible();

    user.click(screen.getByText('Sample title'));

    expect(screen.getByText('Sample content')).toBeVisible();

    user.click(screen.getByText('Sample title'));

    expect(screen.getByText('Sample content')).not.toBeVisible();
  });
});
