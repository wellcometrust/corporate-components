import React from 'react';

export const BComp = ({ children }) => (
  <div className="c-bcomp">
    <h2 className="c-bcomp__title">Test Component</h2>
    <div className="c-bcomp__content">{children}</div>
  </div>
);

export default BComp;
