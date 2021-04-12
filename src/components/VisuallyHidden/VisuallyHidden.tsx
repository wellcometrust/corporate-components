import React, { HTMLAttributes } from 'react';

type VisuallyHiddenProps = (
  | HTMLAttributes<HTMLDivElement>
  | HTMLAttributes<HTMLSpanElement>
) & {
  children: JSX.Element | JSX.Element[] | HTMLElement | string;
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
