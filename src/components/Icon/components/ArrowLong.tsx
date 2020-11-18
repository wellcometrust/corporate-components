import React from 'react';

import { IconSVGProps } from '../Icon';

const Arrow = (props: IconSVGProps) => (
  <svg viewBox="0 0 32 9" {...props}>
    <path
      d="M30.382 4.146a.5.5 0 010 .708L27.2 8.036a.5.5 0 01-.708-.708L29.321 4.5l-2.829-2.828A.5.5 0 1127.2.964l3.182 3.182zM.028 4h30v1h-30V4z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default Arrow;
