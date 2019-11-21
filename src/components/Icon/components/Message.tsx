import React from 'react';

import { IconSVGType } from '../Icon';

const SvgMessage = (props: IconSVGType) => (
  <svg viewBox="0 0 20 14" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.5 12.53h-17V1.921l5.672 5.672A3.988 3.988 0 0 0 10 8.765a3.988 3.988 0 0 0 2.828-1.172L18.5 1.921v10.61zM17.366 1.5L12.05 6.816a2.884 2.884 0 0 1-2.05.85 2.884 2.884 0 0 1-2.05-.85L2.634 1.5h14.732zm2.511-.955A.991.991 0 0 0 19 0H1a.991.991 0 0 0-.877.545A.975.975 0 0 0 0 1v13h20V1a.975.975 0 0 0-.123-.455z"
    />
  </svg>
);

export default SvgMessage;
