import React from 'react';

import './bcomp.scss';

export const BComp = ({ children }) => (
  <div className="bcomp">
    <h2 className="bcomp__title">Test Component</h2>
    <div className="bcomp__content">{children}</div>
  </div>
);

export default BComp;
