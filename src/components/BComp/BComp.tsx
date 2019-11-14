import React from 'react';

type BCompProps = {
  children?: any
}

export const BComp = ({ children }: BCompProps) => (
  <div className="bcomp">
    <h2 className="bcomp__title">Test Component</h2>
    <div className="bcomp__content">{children}</div>
  </div>
);

export default BComp;
