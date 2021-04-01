import React, { ComponentProps } from 'react';
import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import Button from './Button';

const setup = (props: Partial<ComponentProps<typeof Button>> = {}) => {
  const defaultProps: ComponentProps<typeof Button> = {
    children: 'Some button',
    ...props
  };

  return render(<Button {...defaultProps} />);
};

describe('<Button />', () => {
  it('renders button', () => {
    const { container } = setup({});
    expect(container).toMatchSnapshot();
  });
  it('allow onClick handler', () => {
    const onClick = jest.fn();
    setup({ onClick });

    const btn = screen.getByRole('button', { name: /Some button/ });

    expect(onClick).not.toHaveBeenCalled();
    user.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('can specify href and therefore change base component from button to link', () => {
    setup({ href: 'http://google.com' });

    const btn = screen.getByRole('link', { name: /Some button/ });
    expect(btn).toHaveAttribute('href', 'http://google.com');
  });
});
