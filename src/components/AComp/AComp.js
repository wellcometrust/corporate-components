import React from 'react';

import './acomp.scss';

export const AComp = ({ children }) => (
  <div className="acomp">
    <h2 className="acomp__title">Test Component</h2>
    <div className="acomp__content">{children}</div>
  </div>
);

export default AComp;
