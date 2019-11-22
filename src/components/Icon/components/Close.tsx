import React from 'react';

import { IconSVGProps } from '../Icon';

const SvgCross = (props: IconSVGProps) => (
  <svg viewBox="0 0 19 18" {...props}>
    <g fill="currentColor" fillRule="evenodd">
      <path d="M17.632.161l.707.707-16.97 16.97-.708-.706z" />
      <path d="M1.368.161L.661.868l16.97 16.97.708-.706z" />
    </g>
  </svg>
);

export default SvgCross;
