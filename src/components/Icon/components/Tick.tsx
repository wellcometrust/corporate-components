import React from 'react';

import { IconSVGProps } from '../Icon';

const SvgTick = (props: IconSVGProps) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      d="M12,0c6.627,0 12,5.373 12,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12Zm0,2c-5.523,0 -10,4.477 -10,10c0,5.523 4.477,10 10,10c5.523,0 10,-4.477 10,-10c0,-5.523 -4.477,-10 -10,-10Zm4.579,6.277c0.502,0.417 0.563,1.154 0.138,1.645l-4.915,5.68l-0.035,0.034c-0.24,0.234 -0.558,0.364 -0.898,0.364c-0.339,0 -0.658,-0.13 -0.898,-0.364l-2.623,-2.571c-0.464,-0.456 -0.464,-1.195 -0,-1.65c0.465,-0.457 1.22,-0.457 1.685,0l1.769,1.733l4.098,-4.736c0.426,-0.491 1.178,-0.552 1.679,-0.135Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTick;
