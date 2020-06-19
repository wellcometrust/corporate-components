import React from 'react';

import { IconSVGProps } from '../Icon';

const ChevronThin = (props: IconSVGProps) => (
  <svg viewBox="0 0 18 11" {...props}>
    <g fill="currentColor" fillRule="evenodd">
      <path d="M.515 1.95L1.929.536l8.485 8.485L9 10.435z" />
      <path d="M16.071.536l1.414 1.414L9 10.435 7.586 9.021z" />
    </g>
  </svg>
);

export default ChevronThin;
