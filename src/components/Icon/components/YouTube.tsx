import React from 'react';

import { IconSVGProps } from '../Icon';

const SvgYouTube = (props: IconSVGProps) => (
  <svg viewBox="0 0 28 28" {...props}>
    <g fill="none" fillRule="evenodd" stroke="none" strokeWidth={1}>
      <path
        d="M14 .5C6.556.5.5 6.557.5 14c0 7.444 6.056 13.5 13.5 13.5 7.443 0 13.5-6.056 13.5-13.5S21.444.5 14 .5z"
        stroke="currentColor"
      />
      <path
        d="M20.707 10.562C21 11.676 21 14 21 14s0 2.324-.293 3.438a1.772 1.772 0 01-1.237 1.264C18.378 19 14 19 14 19s-4.378 0-5.47-.298a1.772 1.772 0 01-1.238-1.264C7 16.324 7 14 7 14s0-2.324.292-3.438A1.772 1.772 0 018.53 9.299C9.622 9 14 9 14 9s4.378 0 5.47.299a1.772 1.772 0 011.237 1.263zM13 16l3-2-3-2v4z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgYouTube;
