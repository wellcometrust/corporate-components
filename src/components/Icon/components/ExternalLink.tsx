import React from 'react';

import { IconSVGType } from '../Icon';

const SvgExternalLink = (props: IconSVGType) => (
  <svg viewBox="0 0 18 18" {...props}>
    <g fill="currentColor" fillRule="evenodd">
      <path d="M13.5 16.25h-12v-12h7v-1.5H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-7.5h-1.5v7z" />
      <path d="M9.577 1.5h5.613l-9.035 9.034 1.061 1.061 9.034-9.034v5.612h1.5V0H9.577z" />
    </g>
  </svg>
);

export default SvgExternalLink;
