import React from 'react';

import { IconSVGProps } from '../Icon';

const Arrow = (props: IconSVGProps) => (
  <svg viewBox="0 0 17 8" {...props}>
    <path
      d="M16.354 3.646a.502.502 0 010 .708l-3.182 3.182a.502.502 0 01-.708-.708L15.293 4l-2.829-2.828a.502.502 0 01.708-.708l3.182 3.182zM0 3.5h16v1H0v-1z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

export default Arrow;
