import React from 'react';

import { IconSVGProps } from '../Icon';

const Chevron = (props: IconSVGProps) => (
  <svg viewBox="0 0 10 16" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M0 2.75L5.25 8 0 13.25 1.75 15l7-7-7-7z"
    />
  </svg>
);

export default Chevron;
