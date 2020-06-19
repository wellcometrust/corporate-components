import React from 'react';

import { IconSVGProps } from '../Icon';

const Arrow = (props: IconSVGProps) => (
  <svg viewBox="0 0 11 12" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M0 5.2h8.628L5.5 1.299 6.311.5 12 6l-5.69 5.5-.81-.8 3.128-3.927L0 6.79z"
    />
  </svg>
);

export default Arrow;
