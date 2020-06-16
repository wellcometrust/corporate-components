import React from 'react';

import { IconSVGProps } from '../Icon';

const SvgEmail = (props: IconSVGProps) => (
  <svg viewBox="0 0 24 24" {...props}>
    <g fill="currentColor" fillRule="evenodd">
      <path
        d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0z
      m0 1C5.934 1 1 5.935 1 12s4.934 11 11 11 11-4.935 11-11S18.066 1 12 1z
      m6 6v9H6V7h12z
      m-1 1H7v5.792l3.268-3.267.707.707L7.206 15h9.587l-3.768-3.768.707-.707L17 13.793V8z"
      />
      <path d="M16.838 7l.707.707-5.515 5.516-.008-.008-.007.008L6.5 7.707 7.207 7l4.815 4.815L16.838 7z" />
    </g>
  </svg>
);

export default SvgEmail;
