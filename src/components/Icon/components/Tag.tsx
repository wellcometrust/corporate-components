import React from 'react';

import { IconSVGProps } from '../Icon';

const SvgTag = (props: IconSVGProps) => (
  <svg viewBox="0 0 14 14" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.863.137A.438.438 0 0 0 13.544 0L7.92.137c-.487.03-.928.212-1.308.561L.67 6.651A2.3 2.3 0 0 0 0 8.26c0 .546.213 1.078.608 1.503l3.633 3.629c.41.41.958.607 1.505.607a2.41 2.41 0 0 0 1.627-.653L13.3 7.395a1.83 1.83 0 0 0 .562-1.306L14 .44a.404.404 0 0 0-.137-.303m-1.539 4c-.318.339-.785.53-1.251.53-.446 0-.891-.191-1.23-.53-.319-.298-.51-.764-.51-1.231 0-.445.191-.912.51-1.23.7-.679 1.824-.679 2.481 0 .318.297.51.763.51 1.23 0 .446-.192.912-.51 1.23"
    />
  </svg>
);

export default SvgTag;