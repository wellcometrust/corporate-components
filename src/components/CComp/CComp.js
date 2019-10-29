import React from 'react';

import {
  CComp_S,
  CCompTitle_S,
  CCompContent_S
} from './CCompStyles';

export const CComp = ({ children }) => (
  <CComp_S>
    <CCompTitle_S>Test Component</CCompTitle_S>
    <CCompContent_S>{children}</CCompContent_S>
  </CComp_S>
);

export default CComp;
