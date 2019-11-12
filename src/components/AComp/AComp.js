import React from 'react';

export const AComp = ({ children }) => (
  <div className="c-acomp">
    <h2 className="c-acomp__title">Test Component</h2>
    <div className="c-acomp__content">{children}</div>
  </div>
);

export default AComp;
