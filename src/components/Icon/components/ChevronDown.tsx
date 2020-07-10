import React from 'react';

import { IconSVGProps } from '../Icon';

// TODO: SVG not displaying correctly - design to re-export
const ChevronDown = (props: IconSVGProps) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      id="a"
      d="M15.063 10l.937.938-4 4-4-4L8.938 10 12 13.063z"
    />
  </svg>
);

export default ChevronDown;
