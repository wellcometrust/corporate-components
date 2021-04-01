import React, { ComponentProps } from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import TextInput from './TextInput';

const setup = (props: Partial<ComponentProps<typeof TextInput>> = {}) => {
  const defaultProps: ComponentProps<typeof TextInput> = {
    id: 'test',
    name: 'test',
    type: 'text',
    ...props
  };

  return render(<TextInput {...defaultProps} />);
};

describe('<TextInput />', () => {
  it('renders TextInput', () => {
    const { container } = setup({});
    expect(container).toMatchSnapshot();
  });
  it('allows to type ', () => {
    setup({});
    const textbox = screen.getByRole('textbox');
    user.type(textbox, 'abc');
    expect(textbox).toHaveValue('abc');
  });
});
