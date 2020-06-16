import React from 'react';

import { IconSVGProps } from '../Icon';

const SvgInfo = (props: IconSVGProps) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10C2 6.478 6.478 2 12 2zm1.429 8.571H9.143V12h1.428v4.286H9.143v1.428h5.714v-1.428H13.43V10.57zM12 6.286a1.429 1.429 0 100 2.857 1.429 1.429 0 000-2.857z"
    />
  </svg>
);

export default SvgInfo;
