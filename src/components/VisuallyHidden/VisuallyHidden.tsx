import React from 'react';

type VisuallyHiddenProps = {
  text: string;
};

export const VisuallyHidden = ({ text }: VisuallyHiddenProps) => {
  return <span className="u-visually-hidden">{text}&nbsp;</span>;
};

export default VisuallyHidden;
