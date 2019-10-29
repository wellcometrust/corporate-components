import React from 'react';

import {
  DComp_S,
  DCompTitle_S,
  DCompContent_S
} from './DCompStyles';

export const DComp = ({ children }) => (
  <DComp_S>
    <DCompTitle_S>Test Component</DCompTitle_S>
    <DCompContent_S>{children}</DCompContent_S>
  </DComp_S>
);

export default DComp;
