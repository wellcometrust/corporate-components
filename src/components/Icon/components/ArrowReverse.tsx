import React from 'react';

import { IconSVGProps } from '../Icon';

const ArrowReverse = (props: IconSVGProps) => (
  <svg viewBox="0 0 12 12" {...props}>
    <path
      d="M12 6.8H3.4l3.1 3.9-.8.8L0 6 5.7.5l.8.8-3.1 3.9H12v1.6z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowReverse;
