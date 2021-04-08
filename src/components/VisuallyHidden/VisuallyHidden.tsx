import React from 'react';

type VisuallyHiddenProps = {
  children: JSX.Element | JSX.Element[];
  wrapperAs?: 'span' | 'div';
};

export const VisuallyHidden = ({
  children,
  wrapperAs = 'span',
  ...props
}: VisuallyHiddenProps) => {
  const WrapperElement = wrapperAs;

  return (
    <WrapperElement className="u-visually-hidden" {...props}>
      {children}
    </WrapperElement>
  );
};

export default VisuallyHidden;
