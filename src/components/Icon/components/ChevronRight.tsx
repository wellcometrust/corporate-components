import React from 'react';

import { IconSVGProps } from '../Icon';

// TODO: SVG not displaying correctly - design to re-export
const ChevronRight = (props: IconSVGProps) => (
  <svg viewBox="0 0 24 24" {...props}>
    <polygon
      fill="currentColor"
      fillRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
      points="15.0625 10 16 10.9375 12 14.9375 8 10.9375 8.9375 10 12 13.0625"
    />
  </svg>
);

export default ChevronRight;
